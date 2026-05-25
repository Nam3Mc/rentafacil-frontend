"use client";

import { useMemo } from "react";

import { useOwnerProperties } from "@/hooks/use-owner-properties";
import { usePropertyInquiries } from "@/hooks/use-property-inquiries";

export function usePropertyPerformances() {
  const { properties } =
    useOwnerProperties();

  const { inquiries } =
    usePropertyInquiries();

  const performances =
    useMemo(
      () =>
        properties.map((property) => {
          const propertyLeads =
            inquiries.filter(
              (inquiry) =>
                inquiry.propertyId === property.id
            ).length;

          const views =
            Math.max(
              120,
              propertyLeads * 87 +
                property.title.length * 6
            );

          const favorites =
            Math.max(
              0,
              Math.round(views * 0.08)
            );

          const conversionRate =
            views > 0
              ? Number(
                  (
                    (propertyLeads / views) *
                    100
                  ).toFixed(1)
                )
              : 0;

          return {
            propertyId: property.id,
            propertyTitle: property.title,
            views,
            leads: propertyLeads,
            favorites,
            conversionRate,
          };
        }),
      [properties, inquiries]
    );

  return {
    performances,
  };
}