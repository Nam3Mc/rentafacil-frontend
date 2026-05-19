import Image from "next/image";
import Link from "next/link";

import { Property } from "@/types/property.types";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.slug}`}
    >
      <article className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {property.isFeatured && (
            <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              Destacada
            </span>
          )}
        </div>

        <div className="space-y-4 p-6">
          <div>
            <h3 className="font-heading text-xl font-semibold">
              {property.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {property.city}, {property.state}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>
              {property.bedrooms} hab.
            </span>

            <span>
              {property.bathrooms} baños
            </span>

            <span>
              {property.area} m²
            </span>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold tracking-tight">
              ${property.monthlyPrice.toLocaleString("es-CO")}
            </p>

            <span className="text-sm text-muted-foreground">
              / mes
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}