import {
  Eye,
  Heart,
  TrendingUp,
  Users,
} from "lucide-react";

import { PropertyPerformance } from "@/types/property-performance.types";

interface PropertyPerformanceCardProps {
  performance: PropertyPerformance;
}

export function PropertyPerformanceCard({
  performance,
}: PropertyPerformanceCardProps) {

  return (
    <div className="rounded-[2rem] border border-border bg-card p-6 transition-all hover:border-primary/20">

      <div className="mb-6">

        <h3 className="font-heading text-xl font-bold tracking-tight">
          Rendimiento
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Métricas generales de esta propiedad.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-muted p-4">

          <Eye className="size-5 text-primary" />

          <p className="mt-3 text-2xl font-bold">
            {performance.views}
          </p>

          <p className="text-sm text-muted-foreground">
            Visualizaciones
          </p>

        </div>

        <div className="rounded-2xl bg-muted p-4">

          <Users className="size-5 text-primary" />

          <p className="mt-3 text-2xl font-bold">
            {performance.leads}
          </p>

          <p className="text-sm text-muted-foreground">
            Leads
          </p>

        </div>

        <div className="rounded-2xl bg-muted p-4">

          <Heart className="size-5 text-primary" />

          <p className="mt-3 text-2xl font-bold">
            {performance.favorites}
          </p>

          <p className="text-sm text-muted-foreground">
            Favoritos
          </p>

        </div>

        <div className="rounded-2xl bg-muted p-4">

          <TrendingUp className="size-5 text-primary" />

          <p className="mt-3 text-2xl font-bold">
            {performance.conversionRate}%
          </p>

          <p className="text-sm text-muted-foreground">
            Conversión
          </p>

        </div>

      </div>

    </div>
  );
}