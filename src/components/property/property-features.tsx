import {
  Bath,
  BedDouble,
  Building2,
  MapPin,
  Ruler,
} from "lucide-react";

import { Property } from "@/types/property.types";

interface PropertyFeaturesProps {
  property: Property;
}

export function PropertyFeatures({
  property,
}: PropertyFeaturesProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="rounded-2xl border border-border bg-card p-5">
        <BedDouble className="mb-3 size-5 text-primary" />

        <p className="text-sm text-muted-foreground">
          Habitaciones
        </p>

        <p className="mt-1 text-lg font-semibold">
          {property.bedrooms}
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <Bath className="mb-3 size-5 text-primary" />

        <p className="text-sm text-muted-foreground">
          Baños
        </p>

        <p className="mt-1 text-lg font-semibold">
          {property.bathrooms}
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <Ruler className="mb-3 size-5 text-primary" />

        <p className="text-sm text-muted-foreground">
          Área
        </p>

        <p className="mt-1 text-lg font-semibold">
          {property.area} m²
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <Building2 className="mb-3 size-5 text-primary" />

        <p className="text-sm text-muted-foreground">
          Tipo
        </p>

        <p className="mt-1 text-lg font-semibold capitalize">
          {property.type}
        </p>
      </div>
    </div>
  );
}