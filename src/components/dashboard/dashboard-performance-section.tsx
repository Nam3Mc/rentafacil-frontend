"use client";

import { usePropertyPerformances } from "@/hooks/use-property-performances";

import { PropertyPerformanceCard } from "@/components/dashboard/property-performance-card";

export function DashboardPerformanceSection() {

  const {
    performances,
  } =
    usePropertyPerformances();

  return (
    <section className="space-y-8">

      <div>

        <h2 className="font-heading text-3xl font-bold tracking-tight">
          Rendimiento de propiedades
        </h2>

        <p className="mt-2 text-muted-foreground">
          Analiza el desempeño de tus publicaciones.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {performances.map(
          (performance) => (
            <PropertyPerformanceCard
              key={
                performance.propertyId
              }
              performance={
                performance
              }
            />
          )
        )}

      </div>

    </section>
  );
}