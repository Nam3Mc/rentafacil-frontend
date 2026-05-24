"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin } from "lucide-react";

import { Property } from "@/types/property.types";
import { Container } from "@/components/layout/container";
import { PropertyFeatures } from "@/components/property/property-features";
import { PropertySidebar } from "@/components/property/property-sidebar";
import { PropertyVerificationBadge } from "@/components/property/property-verification-badge";
import { PropertyStatusBadge } from "@/components/property/property-status-badge";

interface PropertyDetailsSectionProps {
  property: Property;
}

const fallbackImage = "images/property-placeholder.png";

export function PropertyDetailsSection({
  property,
}: PropertyDetailsSectionProps) {
  const images =
    property.images?.length > 0
      ? property.images
      : [fallbackImage];

  const [selectedImage, setSelectedImage] =
    useState(images[0]);

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3">
              <PropertyVerificationBadge
                status={property.verificationStatus}
              />

              <PropertyStatusBadge
                status={property.status}
              />

              {property.isFeatured && (
                <div className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                  Destacada
                </div>
              )}
            </div>

            <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <h1 className="max-w-4xl font-heading text-5xl font-bold tracking-tight md:text-6xl">
                  {property.title}
                </h1>

                <div className="mt-5 flex items-center gap-2 text-lg text-muted-foreground">
                  <MapPin className="size-5" />

                  <p>
                    {property.city}, {property.state}
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card p-6">
                <p className="text-sm text-muted-foreground">
                  Precio mensual
                </p>

                <p className="mt-2 text-5xl font-bold tracking-tight">
                  ${property.monthlyPrice.toLocaleString("es-CO")}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-12 xl:grid-cols-[1fr_380px]">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-border bg-muted">
                  <Image
                    src={selectedImage}
                    alt={property.title}
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 66vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {images.length > 1 && (
                  <div className="grid gap-4 sm:grid-cols-3">
                    {images.slice(0, 3).map((image) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setSelectedImage(image)}
                        className={`relative aspect-[16/10] overflow-hidden rounded-2xl border transition-all ${
                          selectedImage === image
                            ? "border-primary"
                            : "border-border"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={property.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <PropertyFeatures property={property} />

              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight">
                  Descripción
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Información general de la propiedad
                </p>

                <p className="mt-5 leading-8 text-muted-foreground">
                  {property.description}
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-card p-8">
                <h2 className="font-heading text-2xl font-bold tracking-tight">
                  Ubicación
                </h2>

                <p className="mt-2 text-sm text-muted-foreground">
                  Dirección aproximada de la propiedad
                </p>

                <div className="mt-5 rounded-2xl bg-muted p-6">
                  <p className="font-medium">
                    {property.address}
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {property.city}, {property.state}, {property.country}
                  </p>
                </div>
              </div>
            </div>

            <div className="sticky top-24 h-fit">
              <PropertySidebar property={property} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}