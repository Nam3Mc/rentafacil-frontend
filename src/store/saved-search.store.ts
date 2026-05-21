import { create } from "zustand";

import { persist } from "zustand/middleware";

import { SavedSearch } from "@/types/saved-search.types";

interface SavedSearchState {
  savedSearches: SavedSearch[];

  addSearch: (
    search: SavedSearch
  ) => void;
}

export const useSavedSearchStore =
  create<SavedSearchState>()(
    persist(
      (set, get) => ({
        savedSearches: [],

        addSearch: (
          search
        ) => {

          const exists =
            get().savedSearches.some(
              (item) =>
                item.search ===
                  search.search &&
                item.propertyType ===
                  search.propertyType
            );

          if (exists) {
            return;
          }

          set({
            savedSearches: [
              search,
              ...get()
                .savedSearches,
            ],
          });
        },
      }),
      {
        name:
          "saved-searches-storage",
      }
    )
  );