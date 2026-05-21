import { create } from "zustand";

export type PropertySortOption =
  | "newest"
  | "price_asc"
  | "price_desc";

interface PropertyFilterState {
  search: string;

  selectedType: string;

  sortBy: PropertySortOption;

  setSearch: (
    value: string
  ) => void;

  setSelectedType: (
    value: string
  ) => void;

  setSortBy: (
    value: PropertySortOption
  ) => void;
}

export const usePropertyFilterStore =
  create<PropertyFilterState>(
    (set) => ({
      search: "",

      selectedType: "all",

      sortBy: "newest",

      setSearch: (
        value
      ) =>
        set({
          search: value,
        }),

      setSelectedType: (
        value
      ) =>
        set({
          selectedType:
            value,
        }),

      setSortBy: (
        value
      ) =>
        set({
          sortBy: value,
        }),
    })
  );