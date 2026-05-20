import { Button } from "@/components/ui/button";

import { Property } from "@/types/property.types";

interface PropertySidebarProps {
  property: Property;
}

export function PropertySidebar({
  property,
}: PropertySidebarProps) {
  return (
    <aside className="sticky top-24 h-fit overflow-hidden rounded-[2rem] border border-border bg-card">
    
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
      <div className="space-y-6 p-8">
        
        <button className="w-full rounded-2xl bg-primary px-6 py-4 font-medium text-primary-foreground transition-all duration-300 hover:opacity-90">
          Solicitar arriendo
        </button>
        
        <button className="w-full rounded-2xl border border-border px-6 py-4 font-medium transition-all hover:bg-muted">
          Contactar propietario
        </button>
        
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
    </aside>
  );
}