"use client";

import { Bookmark } from "lucide-react";

import { usePropertyFilterStore } from "@/store/property-filter.store";

import { useSavedSearchStore } from "@/store/saved-search.store";

export function SaveSearchButton() {

  const {
    search,
    selectedType,
  } =
    usePropertyFilterStore();

  const { addSearch } =
    useSavedSearchStore();

  const onSave = () => {

    addSearch({
      id: crypto.randomUUID(),

      search,

      propertyType:
        selectedType,

      createdAt:
        new Date().toISOString(),
    });
  };

  return (
    <button
      onClick={onSave}
      className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-medium transition-all hover:bg-muted"
    >

      <Bookmark className="size-4" />

      Guardar búsqueda

    </button>
  );
}