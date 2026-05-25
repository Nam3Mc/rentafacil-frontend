"use client";

import { useMemo } from "react";

import { useOwnerProperties } from "@/hooks/use-owner-properties";
import { usePropertyInquiryStore } from "@/store/property-inquiry.store";

export function usePropertyInquiries() {
  const { properties } =
    useOwnerProperties();

  const { inquiries } =
    usePropertyInquiryStore();

  const ownerPropertyIds =
    useMemo(
      () =>
        properties.map(
          (property) => property.id
        ),
      [properties]
    );

  const ownerInquiries =
    useMemo(
      () =>
        inquiries.filter((inquiry) =>
          ownerPropertyIds.includes(
            inquiry.propertyId
          )
        ),
      [
        inquiries,
        ownerPropertyIds,
      ]
    );

  return {
    inquiries: ownerInquiries,
  };
}