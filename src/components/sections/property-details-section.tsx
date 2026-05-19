import Image from "next/image";

import { Property } from "@/types/property.types";

import { Container } from "@/components/layout/container";

import { PropertyFeatures } from "@/components/property/property-features";
import { PropertySidebar } from "@/components/property/property-sidebar";

interface PropertyDetailsSectionProps {
  property: Property;
}

export function PropertyDetailsSection({
  property,
}: PropertyDetailsSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="space-y-12">
          
          {/* Header */}
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-medium capitalize text-primary">
                {property.type}
              </span>

              {property.isFeatured && (
                <span className="inline-flex rounded-full border border-border bg-card px-4 py-1 text-sm font-medium">
                  Propiedad destacada
                </span>
              )}
            </div>

            <div className="space-y-3">
              <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {property.title}
              </h1>

              <div className="flex items-center gap-2 text-muted-foreground">
                <span>
                  {property.city}, {property.state}
                </span>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-border bg-muted">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            
            {/* Left Content */}
            <div className="space-y-10">

              {/* Features */}
              <PropertyFeatures property={property} />

              {/* Description */}
              <div className="rounded-3xl border border-border bg-card p-8">
                <div className="space-y-5">
                  <div>
                    <h2 className="font-heading text-2xl font-bold tracking-tight">
                      Descripción
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Información general de la propiedad
                    </p>
                  </div>

                  <p className="leading-8 text-muted-foreground">
                    {property.description}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="rounded-3xl border border-border bg-card p-8">
                <div className="space-y-5">
                  <div>
                    <h2 className="font-heading text-2xl font-bold tracking-tight">
                      Ubicación
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Dirección aproximada de la propiedad
                    </p>
                  </div>

                  <div className="rounded-2xl bg-muted p-6">
                    <p className="font-medium">
                      {property.address}
                    </p>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {property.city}, {property.state},{" "}
                      {property.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <PropertySidebar property={property} />
          </div>
        </div>
      </Container>
    </section>
  );
}