import { PropertyDraft } from "@/types/property-draft.types";

export function analyzePropertyDraft(
  draft: PropertyDraft
) {
  let completedFields = 0;

  const totalFields = 8;

  if (draft.title.trim()) {
    completedFields++;
  }

  if (
    draft.description.trim()
  ) {
    completedFields++;
  }

  if (draft.city.trim()) {
    completedFields++;
  }

  if (draft.address.trim()) {
    completedFields++;
  }

  if (draft.monthlyPrice > 0) {
    completedFields++;
  }

  if (draft.bedrooms > 0) {
    completedFields++;
  }

  if (draft.bathrooms > 0) {
    completedFields++;
  }

  if (draft.images.length > 0) {
    completedFields++;
  }

  const completionPercentage =
    Math.round(
      (completedFields /
        totalFields) *
        100
    );

  return {
    completedFields,

    totalFields,

    completionPercentage,

    isReadyForPublication:
      completionPercentage >= 80,
  };
}