"use client";

import Link from "next/link";

import {
  Eye,
  Pencil,
  PauseCircle,
} from "lucide-react";

import { useProperties } from "@/hooks/use-properties";

import { PropertyStatusBadge } from "@/components/property/property-status-badge";

export function DashboardPropertiesTable() {
  const { properties } =
    useProperties();

  return (
    <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
      
      {/* Header */}
      <div className="border-b border-border p-8">
        <h2 className="font-heading text-3xl font-bold tracking-tight">
          Gestión de propiedades
        </h2>

        <p className="mt-3 text-muted-foreground">
          Administra publicaciones, estados y solicitudes.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        
        <table className="w-full min-w-[900px]">
          
          <thead className="border-b border-border bg-muted/40">
            <tr>
              
              <th className="px-8 py-5 text-left text-sm font-medium text-muted-foreground">
                Propiedad
              </th>

              <th className="px-8 py-5 text-left text-sm font-medium text-muted-foreground">
                Estado
              </th>

              <th className="px-8 py-5 text-left text-sm font-medium text-muted-foreground">
                Precio
              </th>

              <th className="px-8 py-5 text-left text-sm font-medium text-muted-foreground">
                Visualizaciones
              </th>

              <th className="px-8 py-5 text-left text-sm font-medium text-muted-foreground">
                Acciones
              </th>
            </tr>
          </thead>

          <tbody>
            {properties.map(
              (property) => (
                <tr
                  key={property.id}
                  className="border-b border-border transition-all hover:bg-muted/30"
                >
                  
                  <td className="px-8 py-6">
                    <div>
                      <p className="font-medium">
                        {property.title}
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {property.city},{" "}
                        {property.state}
                      </p>
                    </div>
                  </td>

                  <td className="px-8 py-6">
                    <PropertyStatusBadge status="active" />
                  </td>

                  <td className="px-8 py-6 font-medium">
                    $
                    {property.monthlyPrice.toLocaleString(
                      "es-CO"
                    )}
                  </td>

                  <td className="px-8 py-6">
                    324
                  </td>

                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      
                      <Link
                        href={`/properties/${property.slug}`}
                        className="rounded-2xl border border-border p-3 transition-all hover:bg-muted"
                      >
                        <Eye className="size-4" />
                      </Link>

                      <button className="rounded-2xl border border-border p-3 transition-all hover:bg-muted">
                        <Pencil className="size-4" />
                      </button>

                      <button className="rounded-2xl border border-border p-3 transition-all hover:bg-muted">
                        <PauseCircle className="size-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}