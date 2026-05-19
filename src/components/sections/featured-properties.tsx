"use client";

import { useProperties } from "@/hooks/use-properties";

import { Container } from "@/components/layout/container";

import { PropertyCard } from "@/components/property/property-card";

export function FeaturedProperties() {
  const { properties } = useProperties();

  return (
    <section className="py-24">
      <Container>
        <div className="mb-12">
          <h2 className="font-heading text-4xl font-bold tracking-tight">
            Propiedades destacadas
          </h2>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            Explora propiedades modernas verificadas por nuestra plataforma.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}