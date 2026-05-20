"use client";

import { useMemo } from "react";

import { usePropertyPublicationStore } from "@/store/property-publication.store";

const requiredFields = [
  "title",
  "description",
  "city",
  "address",
  "monthlyPrice",
  "bedrooms",
  "bathrooms",
  "area",
  "images",
];

export function usePropertyCompletion() {
  const { draft } =
    usePropertyPublicationStore();

  const completedFields =
    useMemo(() => {
      return requiredFields.filter(
        (field) => {
          const value =
            draft[
              field as keyof typeof draft
            ];

          if (
            Array.isArray(value)
          ) {
            return value.length > 0;
          }

          return Boolean(value);
        }
      );
    }, [draft]);

  const completionPercentage =
    Math.round(
      (completedFields.length /
        requiredFields.length) *
        100
    );

  const isReadyToPublish =
    completionPercentage === 100;

  return {
    completionPercentage,

    isReadyToPublish,

    completedFieldsCount:
      completedFields.length,

    totalFields:
      requiredFields.length,
  };
}