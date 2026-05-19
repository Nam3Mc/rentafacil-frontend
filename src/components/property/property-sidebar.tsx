import { Button } from "@/components/ui/button";

import { Property } from "@/types/property.types";

interface PropertySidebarProps {
  property: Property;
}

export function PropertySidebar({
  property,
}: PropertySidebarProps) {
  return (
    <aside className="sticky top-24 h-fit rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="space-y-2">
        <p className="text-4xl font-bold tracking-tight">
          ${property.monthlyPrice.toLocaleString("es-CO")}
        </p>

        <p className="text-muted-foreground">
          Mensuales
        </p>
      </div>
      
      <div className="mt-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        Propiedad verificada
      </div>

      <div className="mt-8 space-y-3">
        <Button
          size="lg"
          className="w-full rounded-2xl"
        >
          Solicitar arriendo
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="w-full rounded-2xl"
        >
          Guardar propiedad
        </Button>
      </div>

      <div className="mt-8 rounded-2xl bg-muted p-4">
        <p className="text-sm text-muted-foreground">
          Esta propiedad fue verificada por
          Renta Fácil para brindar mayor
          seguridad y confianza.
        </p>
      </div>
    </aside>
  );
}