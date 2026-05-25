"use client";

import { Sparkles } from "lucide-react";

import { Property } from "@/types/property.types";
import { PropertyCard } from "@/components/property/property-card";
import { useRecommendedProperties } from "@/hooks/use-recommended-properties";
import { Container } from "@/components/layout/container";

interface RecommendedPropertiesSectionProps {
  property: Property;
}

export function RecommendedPropertiesSection({
  property,
}: RecommendedPropertiesSectionProps) {
  const recommendations =
    useRecommendedProperties(property) as Property[];

  if (!recommendations.length) {
    return null;
  }

  return (
    <section className="py-20">
      <Container>
        <div className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="size-4" />
                Recomendaciones inteligentes
              </div>

              <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                Propiedades similares
              </h2>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                Explora propiedades relacionadas según ubicación, características
                y preferencias similares.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card px-5 py-3">
              <p className="text-sm text-muted-foreground">
                Recomendaciones encontradas
              </p>

              <p className="mt-1 text-2xl font-bold tracking-tight">
                {recommendations.length}
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {recommendations.map((recommendedProperty) => (
              <div key={recommendedProperty.id} className="space-y-4">
                <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                  Recomendado para ti
                </div>

                <PropertyCard property={recommendedProperty} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}