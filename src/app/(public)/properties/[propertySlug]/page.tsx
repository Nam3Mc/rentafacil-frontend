import { notFound } from "next/navigation";

import { propertyService } from "@/services/property.service";

import { PropertyDetailsSection } from "@/components/sections/property-details-section";

interface PropertyPageProps {
  params: Promise<{
    propertySlug: string;
  }>;
}

export default async function PropertyPage({
  params,
}: PropertyPageProps) {
  const { propertySlug } = await params;

  const property =
    await propertyService.getBySlug(propertySlug);

  if (!property) {
    notFound();
  }

  return (
    <PropertyDetailsSection property={property} />
  );
}