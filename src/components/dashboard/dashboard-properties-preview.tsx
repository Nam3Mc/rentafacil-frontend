"use client";

import Link from "next/link";
import { useProperties } from "@/hooks/use-properties";

export function DashboardPropertiesPreview() {
  const { properties } =
    useProperties();

  return (
    <div className="rounded-[2rem] border border-border bg-card p-8">
      
      <div className="flex items-center justify-between">
        
        <div>
          <h2 className="font-heading text-3xl font-bold tracking-tight">
            Tus propiedades
          </h2>

          <p className="mt-2 text-muted-foreground">
            Gestiona las propiedades activas publicadas.
          </p>
        </div>

        <Link
          href="/dashboard/properties"
          className="rounded-2xl border border-border px-5 py-3 text-sm font-medium transition-all hover:bg-muted"
        >
          Ver todas
        </Link>
      </div>

      <div className="mt-8 space-y-4">
        {properties
          .slice(0, 3)
          .map((property) => (
            <div
              key={property.id}
              className="flex items-center justify-between rounded-2xl border border-border p-5"
            >
              <div>
                <p className="font-medium">
                  {property.title}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {property.city},{" "}
                  {property.state}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  $
                  {property.monthlyPrice.toLocaleString(
                    "es-CO"
                  )}
                </p>

                <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                  Activa
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}