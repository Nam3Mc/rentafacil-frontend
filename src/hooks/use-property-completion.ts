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
] as const;

export function usePropertyCompletion() {
  const { draft } =
    usePropertyPublicationStore();

  const completedFields =
    useMemo(() => {
      return requiredFields.filter(
        (field) => {
          const value =
            draft[field];

          if (
            Array.isArray(value)
          ) {
            return value.length > 0;
          }

          if (
            typeof value === "string"
          ) {
            return (
              value.trim().length > 0
            );
          }

          if (
            typeof value === "number"
          ) {
            return value > 0;
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
    completedFields.length ===
    requiredFields.length;

  return {
    completionPercentage,

    isReadyToPublish,

    completedFieldsCount:
      completedFields.length,

    totalFields:
      requiredFields.length,
  };
}