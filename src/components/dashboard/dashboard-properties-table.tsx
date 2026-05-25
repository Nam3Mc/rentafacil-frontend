"use client";

import Link from "next/link";

import {
  Archive,
  CheckCircle2,
  Eye,
  MoreHorizontal,
  PauseCircle,
  Pencil,
  PlayCircle,
  Trash2,
} from "lucide-react";

import { PropertyStatusBadge } from "@/components/property/property-status-badge";

import { useOwnerProperties } from "@/hooks/use-owner-properties";

import { usePropertyStore } from "@/store/property.store";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DashboardPropertiesTable() {

  const {
    properties,
    isLoading,
  } =
    useOwnerProperties();

  const {
    deleteProperty,
    updateProperty,
  } =
    usePropertyStore();

  function handleDelete(
    propertyId: string
  ) {

    const confirmed =
      window.confirm(
        "¿Eliminar esta propiedad?"
      );

    if (!confirmed) {
      return;
    }

    deleteProperty(propertyId);
  }

  if (isLoading) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8">
        <div className="space-y-4">
          <div className="h-6 w-48 animate-pulse rounded-full bg-muted" />
          <div className="h-4 w-72 animate-pulse rounded-full bg-muted" />
    
          <div className="mt-8 space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-16 animate-pulse rounded-2xl bg-muted"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (
    properties.length === 0
  ) {
  
    return (
    
      <div className="rounded-2xl border border-dashed border-border bg-card p-14 text-center">
      
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
    
          <Archive className="size-7" />
    
        </div>
    
        <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight">
    
          No tienes propiedades
    
        </h2>
    
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
    
          Publica tu primera propiedad para comenzar a recibir solicitudes y administrar arrendamientos.
    
        </p>
    
        <Link
          href="/dashboard/new-property"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 font-medium text-primary-foreground transition-all hover:opacity-90"
        >
        
          Publicar propiedad
    
        </Link>
    
      </div>
  
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">

      {/* Header */}
      <div className="border-b border-border p-6">

        <h2 className="font-heading text-2xl font-bold tracking-tight">
          Gestión de propiedades
        </h2>

        <p className="mt-2 text-muted-foreground">
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

              <th className="px-8 py-5 text-right text-sm font-medium text-muted-foreground">
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

                  {/* Property */}
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

                  {/* Status */}
                  <td className="px-8 py-6">

                    <PropertyStatusBadge
                      status={property.status}
                    />

                  </td>

                  {/* Price */}
                  <td className="px-8 py-6 font-medium">

                    $
                    {property.monthlyPrice.toLocaleString(
                      "es-CO"
                    )}

                  </td>

                  {/* Views */}
                  <td className="px-8 py-6">
                    324
                  </td>

                  {/* Actions */}
                  <td className="px-8 py-6">

                    <div className="flex items-center justify-end">

                      <DropdownMenu>

                        <DropdownMenuTrigger asChild>

                          <button className="rounded-xl border border-border p-2 transition-all hover:bg-muted">

                            <MoreHorizontal className="size-4" />

                          </button>

                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                          align="end"
                          className="w-52"
                        >

                          {/* View */}
                          <DropdownMenuItem asChild>

                            <Link
                              href={`/properties/${property.slug}`}
                            >

                              <Eye className="size-4" />

                              Ver propiedad

                            </Link>

                          </DropdownMenuItem>

                          {/* Edit */}
                          <DropdownMenuItem asChild>

                            <Link
                              href={`/dashboard/properties/${property.id}/edit`}
                            >

                              <Pencil className="size-4" />

                              Editar

                            </Link>

                          </DropdownMenuItem>

                          <DropdownMenuSeparator />

                          {/* Pause / Activate */}
                          <DropdownMenuItem
                            onClick={() =>
                              updateProperty({
                                ...property,

                                status:
                                  property.status ===
                                  "active"
                                    ? "paused"
                                    : "active",
                              })
                            }
                          >

                            {property.status ===
                            "active" ? (
                              <>
                                <PauseCircle className="size-4" />

                                Pausar
                              </>
                            ) : (
                              <>
                                <PlayCircle className="size-4" />

                                Activar
                              </>
                            )}

                          </DropdownMenuItem>

                          {/* Mark rented */}
                          <DropdownMenuItem
                            onClick={() =>
                              updateProperty({
                                ...property,

                                status: "rented",
                              })
                            }
                          >

                            <CheckCircle2 className="size-4" />

                            Marcar rentada

                          </DropdownMenuItem>

                          {/* Archive */}
                          <DropdownMenuItem
                            onClick={() =>
                              updateProperty({
                                ...property,

                                status: "archived",
                              })
                            }
                          >

                            <Archive className="size-4" />

                            Archivar

                          </DropdownMenuItem>

                          <DropdownMenuSeparator />

                          {/* Delete */}
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() =>
                              handleDelete(
                                property.id
                              )
                            }
                          >

                            <Trash2 className="size-4" />

                            Eliminar

                          </DropdownMenuItem>

                        </DropdownMenuContent>

                      </DropdownMenu>

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