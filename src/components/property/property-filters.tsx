"use client";

import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

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
    <div className="mb-14 overflow-hidden rounded-[2rem] border border-border bg-card/80 p-6 shadow-sm backdrop-blur-xl">
      
      <div className="flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <SlidersHorizontal className="size-4" />

              Búsqueda inteligente
            </div>

            <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight">
              Explorar propiedades
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Encuentra propiedades verificadas adaptadas a tu estilo de vida.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

          <input
            type="text"
            placeholder="Buscar por ciudad, zona o propiedad..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            className="h-14 w-full rounded-2xl border border-border bg-background pl-14 pr-5 text-sm outline-none transition-all focus:border-primary"
          />
        </div>

        {/* Filters */}
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
                className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "border border-border bg-background hover:border-primary/30 hover:bg-primary/5"
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