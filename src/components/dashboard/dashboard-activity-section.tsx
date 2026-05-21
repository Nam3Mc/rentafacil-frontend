"use client";

import { useActivities } from "@/hooks/use-activities";

import { ActivityCard } from "@/components/dashboard/activity-card";

export function DashboardActivitySection() {

  const {
    activities,
  } =
    useActivities();

  return (
    <section className="space-y-8">

      <div>

        <h2 className="font-heading text-3xl font-bold tracking-tight">
          Actividad reciente
        </h2>

        <p className="mt-2 text-muted-foreground">
          Últimos movimientos dentro de la plataforma.
        </p>

      </div>

      <div className="space-y-4">

        {activities.map(
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