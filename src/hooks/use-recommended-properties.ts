"use client";

import properties from "@/data/properties.json";

import { Property } from "@/types/property.types";

export function useRecommendedProperties(
  currentProperty: Property
) {

  const recommendations =
    properties
      .filter(
        (property) =>
          property.id !==
            currentProperty.id &&
          property.city ===
            currentProperty.city
      )
      .slice(0, 3);

  return recommendations;
}