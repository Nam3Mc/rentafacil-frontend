"use client";

import { useActivities } from "@/hooks/use-activities";

import { ActivityCard } from "@/components/dashboard/activity-card";


interface DashboardActivitySectionProps {
  limit?: number;
}

export function DashboardActivitySection({
    limit,
  }: DashboardActivitySectionProps) {
  const {
    activities,
  } =
    useActivities();

  const visibleActivities =
    limit
      ? activities.slice(0, limit)
      : activities;

  return (
    <section className="space-y-8">

      <div>

        <h2 className="font-heading text-3xl font-bold tracking-tight">
          Actividad reciente
        </h2>

        <p className="mt-2 text-muted-foreground">
          {limit && (
            <div className="mt-4">
              <a
                href="/dashboard/activity"
                className="text-sm font-medium text-primary transition-all hover:opacity-80"
              >
                Ver toda la actividad →
              </a>
            </div>
          )}
          Últimos movimientos dentro de la plataforma.
        </p>

      </div>

      <div className="space-y-4">

        {visibleActivities.map(
          (activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
            />
          )
        )}

      </div>

    </section>
  );
}