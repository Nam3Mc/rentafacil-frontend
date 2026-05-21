import Image from "next/image";
import Link from "next/link";
import { PropertyFavoriteButton } from "@/components/property/property-favorite-button";
import { Bath, BedDouble, MapPin, Maximize, } from "lucide-react";
import { Property } from "@/types/property.types";
import { PropertyStatusBadge } from "@/components/property/property-status-badge";
import { PropertyVerificationBadge } from "@/components/property/property-verification-badge";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5">
        
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={
              property.images?.[0] ||
              "/images/property-placeholder.jpg"
            }
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Featured Badge */}
          {property.isFeatured && (
            <div className="absolute left-4 top-4 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-lg">
              Destacada
            </div>
          )}

          <div className="absolute right-4 top-4 z-20">
            <PropertyFavoriteButton
              propertyId={property.id}
            />
          </div>

          <div className="absolute bottom-4 right-4 z-10 flex flex-col items-end gap-2">
            <PropertyStatusBadge
              status={property.status}
            />
            <PropertyVerificationBadge
              status={
                property.verificationStatus
              }
            />
          </div>

          {/* Price */}
          <div className="absolute bottom-4 left-4">
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              $
              {property.monthlyPrice.toLocaleString(
                "es-CO"
              )}
            </p>

            <p className="text-sm text-white/80">
              mensual
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 p-5 sm:p-6">
          
          {/* Header */}
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
              {property.title}
            </h3>

            <div className="mt-3 flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" />

              <p className="text-sm">
                {property.city},{" "}
                {property.state}
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4">
            
            <div className="rounded-2xl bg-muted p-3 text-center">
              <BedDouble className="mx-auto size-5 text-primary" />

              <p className="mt-2 text-sm font-medium">
                {property.bedrooms}
              </p>

              <p className="text-xs text-muted-foreground">
                Hab.
              </p>
            </div>

            <div className="rounded-2xl bg-muted p-3 text-center">
              <Bath className="mx-auto size-5 text-primary" />

              <p className="mt-2 text-sm font-medium">
                {property.bathrooms}
              </p>

              <p className="text-xs text-muted-foreground">
                Baños
              </p>
            </div>

            <div className="rounded-2xl bg-muted p-3 text-center">
              <Maximize className="mx-auto size-5 text-primary" />

              <p className="mt-2 text-sm font-medium">
                {property.area}
              </p>

              <p className="text-xs text-muted-foreground">
                m²
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-border pt-4">
            
            <div>
              <p className="text-sm text-muted-foreground">
                Tipo
              </p>

              <p className="font-medium capitalize">
                {property.type}
              </p>
            </div>

            <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Ver detalles
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}