import { Property } from "@/types/property.types";

import { PropertyCard } from "@/components/property/property-card";

interface PropertyGridProps {
  properties: Property[];
}

export function PropertyGrid({
  properties,
}: PropertyGridProps) {
  return (
    <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  );
}