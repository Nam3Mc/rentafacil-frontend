"use client";

import { Search } from "lucide-react";

import { usePropertyFilterStore } from "@/store/property-filter.store";

const propertyTypes = [
  {
    label: "Todas",
    value: "all",
  },
  {
    label: "Apartamentos",
    value: "apartment",
  },
  {
    label: "Casas",
    value: "house",
  },
  {
    label: "Estudios",
    value: "studio",
  },
];

export function PropertyFilters() {
  const {
    search,
    selectedType,
    setSearch,
    setSelectedType,
  } = usePropertyFilterStore();

  return (
    <div className="mb-10 rounded-3xl border border-border bg-card p-6">
      <div className="flex flex-col gap-6">
        
        {/* Header */}
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            Explorar propiedades
          </h2>

          <p className="mt-2 text-muted-foreground">
            Encuentra propiedades modernas verificadas.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

          <input
            type="text"
            placeholder="Buscar por ciudad o propiedad..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            className="h-12 w-full rounded-2xl border border-border bg-background pl-12 pr-4 outline-none transition-all focus:border-primary"
          />
        </div>

        {/* Type Filters */}
        <div className="flex flex-wrap gap-3">
          {propertyTypes.map((type) => {
            const isActive =
              selectedType === type.value;

            return (
              <button
                key={type.value}
                onClick={() =>
                  setSelectedType(type.value)
                }
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:bg-accent"
                }`}
              >
                {type.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}