"use client";

import Image from "next/image";
import { Property } from "@/types/property.types";
import { Container } from "@/components/layout/container";
import { PropertyFeatures } from "@/components/property/property-features";
import { PropertySidebar } from "@/components/property/property-sidebar";
import { MapPin } from "lucide-react";
import { useEffect } from "react";
import { usePropertyRecentlyViewedStore } from "@/store/property-recently-viewed.store";
import { RecommendedPropertiesSection } from "@/components/sections/recommended-properties-section";
import { PropertyAnalyticsCard } from "@/components/dashboard/property-analytics-card";

interface PropertyDetailsSectionProps {
  property: Property;
}

export function PropertyDetailsSection({
  property,
  
}: PropertyDetailsSectionProps) {

  const { addRecentlyViewed } =
      usePropertyRecentlyViewedStore();
  
    useEffect(() => {
      addRecentlyViewed(
        property.id
      );
    }, [
      property.id,
      addRecentlyViewed,
    ]);

  const analytics = {
    propertyId: property.id,
  
    views: 248,
  
    favorites: 32,
  
    contacts: 12,
  
    conversionRate: 8.3,
  };

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="space-y-12">

          {/* Header */}
          <div className="space-y-8">

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">

              <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Propiedad verificada
              </div>

              {property.isFeatured && (
                <div className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                  Destacada
                </div>
              )}
            </div>
            
            {/* Main Content */}
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
            
              {/* Price Card */}
              <div className="rounded-[2rem] border border-border bg-card p-6">
                <p className="text-sm text-muted-foreground">
                  Precio mensual
                </p>
            
                <p className="mt-2 text-5xl font-bold tracking-tight">
                  $
                  {property.monthlyPrice.toLocaleString(
                    "es-CO"
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
                          
            {/* Main Image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-border bg-muted">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                priority
                className="object-cover"
              />
          
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
                          
            {/* Secondary Images */}
            <div className="grid gap-4">
              {property.images
                .slice(1, 3)
                .map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-border bg-muted"
                  >
                    <Image
                      src={image}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
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
            <div className="space-y-8">
                          
              <PropertySidebar
                property={property}
              />
            
              <PropertyAnalyticsCard
                analytics={analytics}
              />
            
            </div>
          </div>
        </div>
      </Container>
      <RecommendedPropertiesSection
        property={property}
      />
    </section>

  );
}