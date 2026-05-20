import { create } from "zustand";

import { PropertySearchFilters } from "@/types/search.types";

interface PropertySearchState {
  filters: PropertySearchFilters;

  updateFilters: (
    values: Partial<PropertySearchFilters>
  ) => void;

  resetFilters: () => void;
}

const initialFilters: PropertySearchFilters =
  {
    city: "",

    minPrice: 0,

    maxPrice: 0,

    bedrooms: 0,

    bathrooms: 0,

    propertyType: "",
  };

export const usePropertySearchStore =
  create<PropertySearchState>(
    (set) => ({
      filters: initialFilters,

      updateFilters: (
        values
      ) =>
        set((state) => ({
          filters: {
            ...state.filters,

            ...values,
          },
        })),

      resetFilters: () =>
        set({
          filters:
            initialFilters,
        }),
    })
  );