import { Button } from "@/components/ui/button";

import { PropertyInquiryForm } from "@/components/property/property-inquiry-form";

import { Property } from "@/types/property.types";

interface PropertySidebarProps {
  property: Property;
}

export function PropertySidebar({
  property,
}: PropertySidebarProps) {
  return (
    <aside className="space-y-6">

      {/* Pricing Card */}
      <div className="sticky top-24 overflow-hidden rounded-[2rem] border border-border bg-card">

        {/* Price */}
        <div className="border-b border-border p-8">

          <p className="text-sm text-muted-foreground">
            Precio mensual
          </p>

          <p className="mt-3 text-5xl font-bold tracking-tight">
            $
            {property.monthlyPrice.toLocaleString(
              "es-CO"
            )}
          </p>

          <p className="mt-2 text-muted-foreground">
            Mensuales
          </p>

        </div>

        {/* Actions */}
        <div className="space-y-5 p-8">

          <Button
            size="lg"
            className="h-14 w-full rounded-2xl"
          >
            Solicitar arriendo
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-14 w-full rounded-2xl"
          >
            Agendar visita
          </Button>

          {/* Trust */}
          <div className="rounded-2xl bg-muted p-5">

            <p className="font-medium">
              Propiedad validada
            </p>

            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Los documentos de esta propiedad fueron verificados por nuestro equipo.
            </p>

          </div>

        </div>

      </div>

      {/* Inquiry Form */}
      <PropertyInquiryForm />

    </aside>
  );
}