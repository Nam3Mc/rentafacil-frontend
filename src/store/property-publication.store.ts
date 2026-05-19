import { create } from "zustand";

import { PropertyDraft } from "@/types/property-draft.types";

interface PropertyPublicationState {
  draft: PropertyDraft;

  updateDraft: (
    values: Partial<PropertyDraft>
  ) => void;

  resetDraft: () => void;
}

const initialDraft: PropertyDraft = {
  title: "",

  description: "",

  type: "",

  monthlyPrice: 0,

  bedrooms: 0,

  bathrooms: 0,

  area: 0,

  city: "",

  address: "",

  images: [],
};

export const usePropertyPublicationStore =
  create<PropertyPublicationState>(
    (set) => ({
      draft: initialDraft,

      updateDraft: (values) =>
        set((state) => ({
          draft: {
            ...state.draft,

            ...values,
          },
        })),

      resetDraft: () =>
        set({
          draft: initialDraft,
        }),
    })
  );