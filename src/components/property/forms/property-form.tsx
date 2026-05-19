"use client";

import { usePropertyDraftPersistence } from "@/hooks/use-property-draft-persistence";
import { useState } from "react";
import { PropertyFormStepper } from "@/components/property/forms/property-form-stepper";
import { FormStep } from "@/types/form.types";
import { PropertyImageUpload } from "@/components/property/forms/property-image-upload";
import { Button } from "@/components/ui/button";
import { usePropertyPublicationStore } from "@/store/property-publication.store";

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

export function PropertyForm() {

  const [currentStep, setCurrentStep] =
    useState(1); 

  const {
    draft,
    updateDraft,
  } =
    usePropertyPublicationStore();
  
  usePropertyDraftPersistence();

  return (
    <div className="space-y-10">
      
      {/* Stepper */}
      <PropertyFormStepper
        steps={formSteps}
        currentStep={currentStep}
      />
  
      <form className="space-y-10">
        
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
            </div>
        
            <div className="grid gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Título
                </label>

                <input
                  type="text"
                  placeholder="Apartamento moderno en Bogotá"
                  value={draft.title}
                  onChange={(event) =>
                    updateDraft({
                      title: event.target.value,
                    })
                  }
                  className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
                />

              </div>
        
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
                  className="w-full rounded-2xl border border-border bg-background px-4 py-4 outline-none transition-all focus:border-primary"
                />
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

              <input
                type="text"
                placeholder="Ciudad"
                value={draft.city}
                onChange={(event) =>
                  updateDraft({
                    city: event.target.value,
                  })
                }
                className="h-12 rounded-2xl border border-border bg-background px-4"
              />
  
              <input
                type="text"
                placeholder="Dirección"
                value={draft.address}
                onChange={(event) =>
                  updateDraft({
                    address:
                      event.target.value,
                  })
                }
                className="h-12 rounded-2xl border border-border bg-background px-4"
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
        
            <div className="space-y-8">
              <div className="rounded-3xl border-2 border-dashed border-border bg-muted p-10 text-center">
                Documento de identidad
              </div>
        
              <div className="rounded-3xl border-2 border-dashed border-border bg-muted p-10 text-center">
                Documento de pertenencia
              </div>
            </div>
          </section>
        )}
  
        {/* Actions */}
        <div className="flex items-center justify-between">
          <Button
            type="button"
            variant="outline"
            disabled={currentStep === 1}
            onClick={() =>
              setCurrentStep((prev) =>
                prev - 1
              )
            }
            className="rounded-2xl"
          >
            Anterior
          </Button>
          
          {currentStep < 5 ? (
            <Button
              type="button"
              onClick={() =>
                setCurrentStep((prev) =>
                  prev + 1
                )
              }
              className="rounded-2xl"
            >
              Continuar
            </Button>
          ) : (
            <Button
              type="submit"
              className="rounded-2xl"
            >
              Publicar propiedad
            </Button>
          )}
        </div>
      </form>
    </div>
  );
  
}