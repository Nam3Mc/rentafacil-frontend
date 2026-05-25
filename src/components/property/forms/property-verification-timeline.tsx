"use client";

import {
  BadgeCheck,
  Clock3,
  FileSearch,
  Shield,
} from "lucide-react";

import { usePropertyPublicationStore } from "@/store/property-publication.store";

export function PropertyVerificationTimeline() {
  const { draft } =
    usePropertyPublicationStore();

  const documents =
    draft.verificationDocuments || [];

  const hasIdentity =
    documents.some(
      (document) =>
        document.type === "identity_document"
    );

  const hasPropertyDocument =
    documents.some(
      (document) =>
        document.type === "property_title"
    );

  const requiredDocumentsCompleted =
    hasIdentity && hasPropertyDocument;

  const steps = [
    {
      title: "Carga de documentos",
      description:
        "Sube documento de identidad y soporte de propiedad.",
      icon: Shield,
      completed:
        requiredDocumentsCompleted,
    },
    {
      title: "Revisión automática",
      description:
        "Validación inicial del sistema.",
      icon: FileSearch,
      completed:
        requiredDocumentsCompleted,
    },
    {
      title: "Moderación manual",
      description:
        "Nuestro equipo verifica autenticidad.",
      icon: Clock3,
      completed: false,
    },
    {
      title: "Propiedad verificada",
      description:
        "La propiedad obtiene prioridad y confianza.",
      icon: BadgeCheck,
      completed: false,
    },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div>
        <h3 className="font-heading text-xl font-bold tracking-tight">
          Proceso de verificación
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Los documentos requeridos activan la revisión de la propiedad.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`flex size-10 items-center justify-center rounded-full ${
                    step.completed
                      ? "bg-green-500/10 text-green-500"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="size-4" />
                </div>

                {index < steps.length - 1 && (
                  <div className="mt-3 h-full w-px bg-border" />
                )}
              </div>

              <div className="pb-6">
                <h4 className="text-sm font-semibold">
                  {step.title}
                </h4>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}