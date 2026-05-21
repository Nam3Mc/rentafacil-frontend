"use client";

import { Property } from "@/types/property.types";

import { PropertyCard } from "@/components/property/property-card";

import { useRecommendedProperties } from "@/hooks/use-recommended-properties";

interface RecommendedPropertiesSectionProps {
  property: Property;
}

export function RecommendedPropertiesSection({
  property,
}: RecommendedPropertiesSectionProps) {

  const recommendations =
    useRecommendedProperties(
      property
    );

  if (
    !recommendations.length
  ) {
    return null;
  }

  return (
    <section className="py-16">

      <div className="mb-10">

        <h2 className="font-heading text-3xl font-bold tracking-tight">
          Propiedades similares
        </h2>

        <p className="mt-3 text-muted-foreground">
          Explora propiedades relacionadas que podrían interesarte.
        </p>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

        {recommendations.map(
          (property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          )
        )}

      </div>

    </section>
  );
}