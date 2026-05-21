"use client";

import Link from "next/link";
import { Eye, Pencil, PauseCircle,} from "lucide-react";
import { PropertyStatusBadge } from "@/components/property/property-status-badge";
import { useOwnerProperties } from "@/hooks/use-owner-properties";
import { Trash2 } from "lucide-react";
import { propertyService } from "@/services/property.service";

export function DashboardPropertiesTable() {

  const { properties, isLoading, } = useOwnerProperties();

  async function handleDelete(
  propertyId: string
) {

  const confirmed =
    window.confirm(
      "¿Eliminar esta propiedad?"
    );

  if (!confirmed) {
    return;
  }

  try {

    await propertyService.delete(
      propertyId
    );

    window.location.reload();

  } catch (error) {

    console.error(error);

  }
}
  
  if (isLoading) {

    return (
      <div className="rounded-[2rem] border border-border bg-card p-10 text-center text-muted-foreground">

        Cargando propiedades...

      </div>
    );
  }
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

                      <button
                        onClick={() =>
                          handleDelete(
                            property.id
                          )
                        }
                        className="rounded-2xl border border-border p-3 text-red-500 transition-all hover:bg-red-500/10"
                      >
                      
                        <Trash2 className="size-4" />
                      
                      </button>
                      
                      <Link
                        href={`/properties/${property.slug}`}
                        className="rounded-2xl border border-border p-3 transition-all hover:bg-muted"
                      >
                        <Eye className="size-4" />
                      </Link>

                      <Link
                        href={`/dashboard/properties/${property.id}/edit`}
                        className="rounded-2xl border border-border p-3 transition-all hover:bg-muted"
                      >
                        <Pencil className="size-4" />
                      </Link>

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