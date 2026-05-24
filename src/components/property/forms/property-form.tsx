"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { usePropertyDraftPersistence } from "@/hooks/use-property-draft-persistence";
import { PropertyFormStepper } from "@/components/property/forms/property-form-stepper";
import { PropertyImageUpload } from "@/components/property/forms/property-image-upload";
import { PropertyPublicationSuccess } from "@/components/property/forms/property-publication-success";
import { TextField } from "@/components/forms/text-field";
import { Button } from "@/components/ui/button";
import { usePropertyPublicationStore } from "@/store/property-publication.store";
import { usePropertySubmissionStore } from "@/store/property-submission.store";
import { usePropertyForm } from "@/components/providers/property-form-provider";
import { FormStep } from "@/types/form.types";
import { PropertyVerificationCard } from "@/components/property/forms/property-verification-card";
import { PropertyVerificationUpload } from "@/components/property/forms/property-verification-upload";
import { PropertyVerificationTimeline } from "@/components/property/forms/property-verification-timeline";
import { PropertyVerificationBenefits } from "@/components/property/forms/property-verification-benefits";
import { propertyService } from "@/services/property.service";
import { useAuthStore } from "@/store/auth.store";
import { Property } from "@/types/property.types";

const formSteps: FormStep[] = [
  {
    id: 1,
    title: "General",
    description: "Información básica",
  },
  {
    id: 2,
    title: "Detalles",
    description: "Características",
  },
  {
    id: 3,
    title: "Ubicación",
    description: "Dirección",
  },
  {
    id: 4,
    title: "Imágenes",
    description: "Galería",
  },
  {
    id: 5,
    title: "Verificación",
    description: "Documentos",
  },
];

interface PropertyFormProps {
  mode?: "create" | "edit";
}

export function PropertyForm({
  mode = "create",
}: PropertyFormProps) {

  const router = useRouter();

  const { user } =
    useAuthStore();

  const {
    isSubmitting,
    isSuccess,
    setSubmitting,
    setSuccess,
  } =
    usePropertySubmissionStore();

  const [currentStep, setCurrentStep] =
    useState(1);

  const {
    draft,
    updateDraft,
    resetDraft,
  } =
    usePropertyPublicationStore();

  const {
    formState: { errors },
  } = usePropertyForm();

  usePropertyDraftPersistence();


  const onSubmit = async (
    status:
      "draft" |
      "pending_verification"
  ) => {
  
    if (!user) {
      return;
    }
  
    try {
    
      setSubmitting(true);
    
      const newProperty: Property = {
      
        id:
          mode === "edit"
            ? draft.id || ""
            : `property_${Date.now()}`,
      
        slug:
          mode === "edit"
          ? draft.slug || ""
              : draft.title
                  .toLowerCase()
                  .replaceAll(" ", "-"),
      
        title:
          draft.title,
      
        description:
          draft.description,
      
        type:
          draft.type || "apartment",
      
        status,

        monthlyPrice:
          Number(
            draft.monthlyPrice
          ),
        
        bedrooms:
          Number(
            draft.bedrooms
          ),
        
        bathrooms:
          Number(
            draft.bathrooms
          ),
        
        area:
          Number(
            draft.area
          ),
        
        city:
          draft.city,
        
        state:
          "Cundinamarca",
        
        country:
          "Colombia",
        
        address:
          draft.address,
        
        latitude: 0,
        
        longitude: 0,
        
        images:
          draft.images || [],
        
        ownerId:
          user.id,
        
        verificationStatus:
          "pending_review",
        
        verificationDocuments:
          [],
        
        isFeatured:
          false,
        
        createdAt:
          new Date().toISOString(),
        
        updatedAt:
          new Date().toISOString(),
      };
    
      if (mode === "edit") {
      
        await propertyService.update(
          newProperty
        );
      
      } else {
      
        await propertyService.create(
          newProperty
        );
      
      }
    
      setSubmitting(false);
    
      setSuccess(true);
    
      resetDraft();
    
      setTimeout(() => {
      
        router.push(
          "/dashboard/properties"
        );
      
      }, 1500);
    
    } catch (error) {
    
      console.error(error);
    
      setSubmitting(false);
    
    }
  
  };

  if (isSuccess) {
    return (
      <PropertyPublicationSuccess />
    );
  }

  return (
    <div className="space-y-10">

      {/* Stepper */}
      <PropertyFormStepper
        steps={formSteps}
        currentStep={currentStep}
      />

      <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4">
        
        <div>
          <p className="text-sm text-muted-foreground">
            Paso actual
          </p>
        
          <p className="font-semibold">
            {currentStep} de {formSteps.length}
          </p>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-muted-foreground">
            Sección
          </p>
        
          <p className="font-semibold">
            {formSteps[currentStep - 1]?.title}
          </p>
        </div>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          onSubmit(
            "pending_verification"
          );
        }}
        className="space-y-10"
      >

        {/* Step 1 */}
        {currentStep === 1 && (
          <section className="rounded-3xl border border-border bg-card p-8">

            <div className="mb-8">

              <h2 className="font-heading text-2xl font-bold">
                Información general
              </h2>

              <p className="mt-2 text-muted-foreground">
                Describe las características principales de la propiedad.
              </p>

              {mode === "edit" && (
                <div className="mt-4 inline-flex rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400">
                  Modo edición
                </div>
              )}

            </div>

            <div className="grid gap-6">

              <TextField
                label="Título"
                placeholder="Apartamento moderno en Bogotá"
                value={draft.title}
                onChange={(event) =>
                  updateDraft({
                    title: event.target.value,
                  })
                }
                error={errors.title}
              />

              <div className="space-y-2">

                <label className="text-sm font-medium">
                  Descripción
                </label>

                <textarea
                  placeholder="Describe la propiedad..."
                  rows={6}
                  value={draft.description}
                  onChange={(event) =>
                    updateDraft({
                      description:
                        event.target.value,
                    })
                  }
                  className={`w-full rounded-2xl border bg-background px-4 py-4 outline-none transition-all ${
                    errors.description
                      ? "border-destructive"
                      : "border-border focus:border-primary"
                  }`}
                />

                {errors.description && (
                  <p className="text-sm text-destructive">
                    {errors.description.message}
                  </p>
                )}

              </div>

            </div>

          </section>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <section className="rounded-3xl border border-border bg-card p-8">

            <div className="mb-8">

              <h2 className="font-heading text-2xl font-bold">
                Características
              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-3">

              <input
                type="number"
                placeholder="Habitaciones"
                className="h-12 rounded-2xl border border-border bg-background px-4"
              />

              <input
                type="number"
                placeholder="Baños"
                className="h-12 rounded-2xl border border-border bg-background px-4"
              />

              <input
                type="number"
                placeholder="Área"
                className="h-12 rounded-2xl border border-border bg-background px-4"
              />

            </div>

          </section>
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <section className="rounded-3xl border border-border bg-card p-8">

            <div className="mb-8">

              <h2 className="font-heading text-2xl font-bold">
                Ubicación
              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              <TextField
                label="Ciudad"
                placeholder="Bogotá"
                value={draft.city}
                onChange={(event) =>
                  updateDraft({
                    city: event.target.value,
                  })
                }
                error={errors.city}
              />

              <TextField
                label="Dirección"
                placeholder="Chapinero Alto"
                value={draft.address}
                onChange={(event) =>
                  updateDraft({
                    address:
                      event.target.value,
                  })
                }
                error={errors.address}
              />

            </div>

          </section>
        )}

        {/* Step 4 */}
        {currentStep === 4 && (
          <section className="rounded-3xl border border-border bg-card p-8">

            <div className="mb-8">

              <h2 className="font-heading text-2xl font-bold">
                Fotografías
              </h2>

            </div>

            <PropertyImageUpload />

          </section>
        )}

        {/* Step 5 */}
        {currentStep === 5 && (
          <section className="rounded-3xl border border-border bg-card p-8">

            <div className="mb-8">

              <h2 className="font-heading text-2xl font-bold">
                Verificación
              </h2>

              <p className="mt-2 text-muted-foreground">
                Validaremos la autenticidad de la propiedad antes de publicarla.
              </p>

            </div>

            <div className="space-y-6">
                    
              <PropertyVerificationCard
                title="Documento de identidad"
                description="Sube un documento oficial del propietario para validar identidad."
                status="pending"
              />
            
              <PropertyVerificationUpload
                title="Subir documento de identidad"
              />
            
              <PropertyVerificationCard
                title="Documento de pertenencia"
                description="Recibo público, escritura o documento legal que demuestre propiedad."
                status="unverified"
              />
            
              <PropertyVerificationUpload
                title="Subir documento de propiedad"
              />
            
              <PropertyVerificationCard
                title="Poder legal (opcional)"
                description="Requerido si la propiedad es administrada por un tercero."
                status="unverified"
              />
            
              <PropertyVerificationUpload
                title="Subir poder legal"
              />
            
            </div>

          </section>
        )}

        <div className="mt-10">
          <PropertyVerificationTimeline />
        </div>

        <div className="mt-10">
          <PropertyVerificationBenefits />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 pt-6">

          {/* Navigation */}
          <div className="flex items-center justify-between">

            <Button
              type="button"
              variant="outline"
              size="lg"
              disabled={currentStep === 1}
              onClick={() =>
                setCurrentStep(
                  (prev) => prev - 1
                )
              }
              className="h-14 rounded-2xl px-8"
            >
              Anterior
            </Button>
            
            {currentStep < formSteps.length ? (
              <Button
                type="button"
                size="lg"
                onClick={() =>
                  setCurrentStep(
                    (prev) => prev + 1
                  )
                }
                className="h-14 rounded-2xl px-8"
              >
                Continuar
              </Button>
            ) : (
              <div className="flex flex-col-reverse gap-4 sm:flex-row">
              
                {mode === "edit" && (
                  <Link
                    href="/dashboard/properties"
                    className="inline-flex h-14 items-center justify-center rounded-2xl border border-border px-6 font-medium transition-all hover:bg-muted"
                  >
                    Cancelar
                  </Link>
                )}

                {mode !== "edit" && (
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    disabled={isSubmitting}
                    onClick={() =>
                      onSubmit("draft")
                    }
                    className="h-14 rounded-2xl px-8"
                  >
                  
                    Guardar borrador
                  
                  </Button>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="h-14 rounded-2xl px-8"
                >
                
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="size-4 animate-spin" />
                  
                      Procesando...
                    </div>
                  ) : isSuccess ? (
                    "Publicación completada"
                  ) : mode === "edit" ? (
                    "Guardar cambios"
                  ) : (
                    "Publicar propiedad"
                  )}

                </Button>
                
              </div>
            )}

          </div>
          
        </div>

      </form>

    </div>
  );
}