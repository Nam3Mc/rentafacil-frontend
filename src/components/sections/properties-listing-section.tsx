"use client";

import { useMemo } from "react";

import { useProperties } from "@/hooks/use-properties";

import { usePropertyFilterStore } from "@/store/property-filter.store";

import { Container } from "@/components/layout/container";

import { PropertyFilters } from "@/components/property/property-filters";
import { PropertyGrid } from "@/components/property/property-grid";

export function PropertiesListingSection() {
  const { properties } = useProperties();

  const {
    search,
    selectedType,
  } = usePropertyFilterStore();

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        property.city
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesType =
        selectedType === "all"
          ? true
          : property.type === selectedType;

      return (
        matchesSearch &&
        matchesType
      );
    });
  }, [
    properties,
    search,
    selectedType,
  ]);

  return (
    <section className="py-20">
      <Container>
        <PropertyFilters />

        <div className="mb-8 flex items-center justify-between">
          <p className="text-muted-foreground">
            {filteredProperties.length} propiedades encontradas
          </p>
        </div>

        <PropertyGrid
          properties={filteredProperties}
        />
      </Container>
    </section>
  );
}