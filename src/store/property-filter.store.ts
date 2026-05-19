import { create } from "zustand";

interface PropertyFilterState {
  search: string;

  selectedType: string;

  setSearch: (
    search: string
  ) => void;

  setSelectedType: (
    type: string
  ) => void;
}

export const usePropertyFilterStore =
  create<PropertyFilterState>((set) => ({
    search: "",

    selectedType: "all",

    setSearch: (search) =>
      set({ search }),

    setSelectedType: (
      selectedType
    ) =>
      set({
        selectedType,
      }),
  }));