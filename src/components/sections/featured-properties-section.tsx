"use client";

import { Sparkles } from "lucide-react";
import { useProperties } from "@/hooks/use-properties";
import { PropertyCard } from "@/components/property/property-card";
import { Container } from "@/components/layout/container";

export function FeaturedPropertiesSection() {

  const { properties } =
    useProperties();

  const featuredProperties =
    properties.filter(
      (property) =>
        property.isFeatured
    );

  if (
    !featuredProperties.length
  ) {
    return null;
  }

  return (
<section className="py-20">

    <Container>

        <div className="space-y-10">
          {/* Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">

                <Sparkles className="size-4" />

                Marketplace destacado

              </div>

              <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight">
                Propiedades destacadas
              </h2>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                Descubre propiedades premium seleccionadas por popularidad, rendimiento y calidad.
              </p>

            </div>

            <div className="rounded-2xl border border-border bg-card px-5 py-3">

              <p className="text-sm text-muted-foreground">
                Disponibles
              </p>

              <p className="mt-1 text-2xl font-bold tracking-tight">
                {featuredProperties.length}
              </p>

            </div>

          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

            {featuredProperties.map(
              (property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              )
            )}

          </div>
        </div>

      </Container>
    </section>
  );
}