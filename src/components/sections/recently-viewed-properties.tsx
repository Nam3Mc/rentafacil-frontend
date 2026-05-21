"use client";

import properties from "@/data/properties.json";

import { PropertyCard } from "@/components/property/property-card";

import { usePropertyRecentlyViewedStore } from "@/store/property-recently-viewed.store";

export function RecentlyViewedProperties() {

  const {
    recentlyViewed,
  } =
    usePropertyRecentlyViewedStore();

  const recentProperties =
    properties.filter(
      (property) =>
        recentlyViewed.includes(
          property.id
        )
    );

  if (
    !recentProperties.length
  ) {
    return null;
  }

  return (
    <section className="py-16">

      <div className="mb-10">

        <h2 className="font-heading text-3xl font-bold tracking-tight">
          Visto recientemente
        </h2>

        <p className="mt-3 text-muted-foreground">
          Continúa explorando propiedades que visitaste anteriormente.
        </p>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

        {recentProperties.map(
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