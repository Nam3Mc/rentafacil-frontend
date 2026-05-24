import {
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

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
      <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-primary/5">
        <div className="border-b border-border p-8">
          <p className="text-sm text-muted-foreground">
            Precio mensual
          </p>

          <p className="mt-3 text-5xl font-bold tracking-tight">
            ${property.monthlyPrice.toLocaleString("es-CO")}
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Arriendo mensual estimado
          </p>
        </div>

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
            <CalendarDays className="mr-2 size-5" />
            Agendar visita
          </Button>

          <div className="grid gap-3 pt-2">
            <div className="flex items-start gap-3 rounded-2xl bg-muted p-4">
              <ShieldCheck className="mt-0.5 size-5 text-primary" />

              <div>
                <p className="font-medium">
                  Propiedad validada
                </p>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Documentación revisada por el equipo de Renta Fácil.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-muted p-4">
              <CheckCircle2 className="mt-0.5 size-5 text-primary" />

              <div>
                <p className="font-medium">
                  Contacto seguro
                </p>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Puedes enviar una solicitud antes de compartir información sensible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PropertyInquiryForm propertyId={property.id} />
    </aside>
  );
}