"use client";

import {
  useEffect,
  useState,
} from "react";

import { PropertyInquiry } from "@/types/property-inquiry.types";
import { propertyInquiryService } from "@/services/property-inquiry.service";
import { useOwnerProperties } from "@/hooks/use-owner-properties";

export function usePropertyInquiries() {
  const { properties } =
    useOwnerProperties();

  const [
    inquiries,
    setInquiries,
  ] =
    useState<PropertyInquiry[]>([]);

  useEffect(() => {
    async function load() {
      const data =
        await propertyInquiryService.getAll();

      const ownerPropertyIds =
        properties.map(
          (property) => property.id
        );

      const filtered =
        data.filter((inquiry) =>
          ownerPropertyIds.includes(
            inquiry.propertyId
          )
        );

      setInquiries(filtered);
    }

    load();
  }, [properties]);

  return {
    inquiries,
  };
}