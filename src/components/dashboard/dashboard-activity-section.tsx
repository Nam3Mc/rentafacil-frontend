"use client";

import Link from "next/link";

import { useActivities } from "@/hooks/use-activities";
import { ActivityCard } from "@/components/dashboard/activity-card";

interface DashboardActivitySectionProps {
  limit?: number;
}

export function DashboardActivitySection({
  limit,
}: DashboardActivitySectionProps) {
  const { activities } =
    useActivities();

  const visibleActivities =
    limit
      ? activities.slice(0, limit)
      : activities;

  return (
    <section className="space-y-6">
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight">
              Actividad reciente
            </h2>

            <p className="mt-2 text-muted-foreground">
              Últimos movimientos dentro de la plataforma.
            </p>
          </div>

          {limit && (
            <Link
              href="/dashboard/activity"
              className="text-sm font-medium text-primary transition-all hover:opacity-80"
            >
              Ver toda →
            </Link>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {visibleActivities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
          />
        ))}
      </div>
    </section>
  );
}