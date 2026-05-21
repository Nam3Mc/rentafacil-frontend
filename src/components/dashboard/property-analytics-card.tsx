import {
  Eye,
  Heart,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

import { PropertyAnalytics } from "@/types/property-analytics.types";

interface PropertyAnalyticsCardProps {
  analytics: PropertyAnalytics;
}

export function PropertyAnalyticsCard({
  analytics,
}: PropertyAnalyticsCardProps) {
  return (
    <div className="rounded-[2rem] border border-border bg-card p-6">

      <div className="mb-8">

        <h3 className="font-heading text-2xl font-bold tracking-tight">
          Rendimiento
        </h3>

        <p className="mt-2 text-muted-foreground">
          Métricas generales de la publicación.
        </p>

      </div>

      <div className="grid gap-4 sm:grid-cols-2">

        <div className="rounded-2xl bg-muted p-5">

          <div className="flex items-center gap-3">
            <Eye className="size-5 text-primary" />

            <span className="text-sm text-muted-foreground">
              Visualizaciones
            </span>
          </div>

          <p className="mt-4 text-3xl font-bold">
            {analytics.views}
          </p>

        </div>

        <div className="rounded-2xl bg-muted p-5">

          <div className="flex items-center gap-3">
            <Heart className="size-5 text-red-500" />

            <span className="text-sm text-muted-foreground">
              Favoritos
            </span>
          </div>

          <p className="mt-4 text-3xl font-bold">
            {analytics.favorites}
          </p>

        </div>

        <div className="rounded-2xl bg-muted p-5">

          <div className="flex items-center gap-3">
            <MessageSquare className="size-5 text-primary" />

            <span className="text-sm text-muted-foreground">
              Contactos
            </span>
          </div>

          <p className="mt-4 text-3xl font-bold">
            {analytics.contacts}
          </p>

        </div>

        <div className="rounded-2xl bg-muted p-5">

          <div className="flex items-center gap-3">
            <TrendingUp className="size-5 text-green-500" />

            <span className="text-sm text-muted-foreground">
              Conversión
            </span>
          </div>

          <p className="mt-4 text-3xl font-bold">
            {analytics.conversionRate}%
          </p>

        </div>

      </div>

    </div>
  );
}