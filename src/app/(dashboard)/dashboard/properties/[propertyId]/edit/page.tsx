import { notFound } from "next/navigation";

import properties from "@/data/properties.json";

import { Container } from "@/components/layout/container";

import { PropertyFormProvider } from "@/components/providers/property-form-provider";

import { PropertyForm } from "@/components/property/forms/property-form";

interface EditPropertyPageProps {
  params: Promise<{
    propertyId: string;
  }>;
}

export default async function EditPropertyPage({
  params,
}: EditPropertyPageProps) {
  const { propertyId } =
    await params;

  const property =
    properties.find(
      (item) =>
        item.id === propertyId
    );

  if (!property) {
    notFound();
  }

  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-5xl space-y-8">

          {/* Header */}
          <div>
            <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Editar propiedad
            </div>

            <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight">
              Actualizar publicación
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Modifica información, imágenes y detalles de tu propiedad.
            </p>
          </div>

          {/* Form */}
          <PropertyFormProvider
            initialValues={property}
              mode="edit"
          >
            <PropertyForm mode="edit" />
          </PropertyFormProvider>
        </div>
      </Container>
    </section>
  );
}