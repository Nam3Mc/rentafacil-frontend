"use client";

import { useProperties } from "@/hooks/use-properties";

import { Container } from "@/components/layout/container";

import { PropertyCard } from "@/components/property/property-card";

export function FeaturedProperties() {
  const { properties } = useProperties();

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Propiedades verificadas
          </div>

          <h2 className="mt-6 font-heading text-5xl font-bold tracking-tight">
            Encuentra tu próximo hogar
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explora propiedades verificadas y conecta directamente con propietarios de manera segura y transparente.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
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