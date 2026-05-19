"use client";

import { PropertyImageUpload } from "@/components/property/forms/property-image-upload";
import { Button } from "@/components/ui/button";

export function PropertyForm() {
  return (
    <form className="space-y-10">
      
      {/* General Information */}
      <section className="rounded-3xl border border-border bg-card p-8">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold">
            Información general
          </h2>

          <p className="mt-2 text-muted-foreground">
            Describe las características principales de la propiedad.
          </p>
        </div>

        <div className="grid gap-6">
          
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Título
            </label>

            <input
              type="text"
              placeholder="Apartamento moderno en Bogotá"
              className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Descripción
            </label>

            <textarea
              placeholder="Describe la propiedad..."
              rows={6}
              className="w-full rounded-2xl border border-border bg-background px-4 py-4 outline-none transition-all focus:border-primary"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Tipo de propiedad
              </label>

              <select className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary">
                <option>
                  Apartamento
                </option>

                <option>
                  Casa
                </option>

                <option>
                  Estudio
                </option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Precio mensual
              </label>

              <input
                type="number"
                placeholder="3200000"
                className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="rounded-3xl border border-border bg-card p-8">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold">
            Características
          </h2>

          <p className="mt-2 text-muted-foreground">
            Agrega información específica de la propiedad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Habitaciones
            </label>

            <input
              type="number"
              className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Baños
            </label>

            <input
              type="number"
              className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Área (m²)
            </label>

            <input
              type="number"
              className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="rounded-3xl border border-border bg-card p-8">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold">
            Ubicación
          </h2>

          <p className="mt-2 text-muted-foreground">
            Dirección general de la propiedad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Ciudad
            </label>

            <input
              type="text"
              placeholder="Bogotá"
              className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Dirección
            </label>

            <input
              type="text"
              placeholder="Chapinero Alto"
              className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
            />
          </div>
        </div>
      </section>

      {/* Image Upload */}
      <section className="rounded-3xl border border-border bg-card p-8">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold">
            Fotografías
          </h2>

          <p className="mt-2 text-muted-foreground">
            Agrega imágenes atractivas de la propiedad.
          </p>
        </div>

        <PropertyImageUpload />

      </section>
      {/* Verification Documents */}
      <section className="rounded-3xl border border-border bg-card p-8">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold">
            Verificación de propiedad
          </h2>
        
          <p className="mt-2 text-muted-foreground">
            Para proteger a propietarios e inquilinos contra fraudes,
            requerimos validar la propiedad antes de publicarla.
          </p>
        </div>
        
        <div className="space-y-8">
          
          {/* Identity Document */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">
                Documento de identidad
              </h3>
        
              <p className="mt-1 text-sm text-muted-foreground">
                Cédula, pasaporte o identificación legal del propietario.
              </p>
            </div>
        
            <div className="flex min-h-[140px] items-center justify-center rounded-3xl border-2 border-dashed border-border bg-muted">
              <div className="text-center">
                <p className="font-medium">
                  Subir documento de identidad
                </p>
        
                <p className="mt-2 text-sm text-muted-foreground">
                  PDF, PNG o JPG
                </p>
              </div>
            </div>
          </div>
        
          {/* Ownership Document */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">
                Documento de pertenencia
              </h3>
        
              <p className="mt-1 text-sm text-muted-foreground">
                Recibo público, escritura, certificado o poder legal que valide la relación con la propiedad.
              </p>
            </div>
        
            <div className="flex min-h-[140px] items-center justify-center rounded-3xl border-2 border-dashed border-border bg-muted">
              <div className="text-center">
                <p className="font-medium">
                  Subir documento de validación
                </p>
        
                <p className="mt-2 text-sm text-muted-foreground">
                  PDF, PNG o JPG
                </p>
              </div>
            </div>
          </div>
        
          {/* Verification Notice */}
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="font-semibold text-primary">
              Validación de seguridad
            </h3>
        
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Nuestro equipo verificará los documentos antes de aprobar la publicación.
              Esta validación ayuda a prevenir fraudes y aumenta la seguridad dentro de la plataforma.
            </p>
          </div>
        </div>
      </section>
      {/* Submit */}
      <div className="flex justify-end">
        <Button
          size="lg"
          className="rounded-2xl px-8"
        >
          Publicar propiedad
        </Button>
      </div>
    </form>
  );
}