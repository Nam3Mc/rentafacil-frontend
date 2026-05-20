"use client";

import { AlertTriangle } from "lucide-react";
import { usePropertyCompletion } from "@/hooks/use-property-completion";
import { CheckCircle2, Circle,} from "lucide-react";
import { usePropertyPublicationStore } from "@/store/property-publication.store";

const validations = [
  {
    key: "title",
    label:
      "Título de propiedad",
  },
  {
    key: "description",
    label:
      "Descripción",
  },
  {
    key: "city",
    label: "Ciudad",
  },
  {
    key: "address",
    label: "Dirección",
  },
  {
    key: "monthlyPrice",
    label:
      "Precio mensual",
  },
  {
    key: "images",
    label: "Imágenes",
  },
];

export function PropertyPublicationSummary() {
  const { draft } =
    usePropertyPublicationStore();

  const completedFields =
    validations.filter(
      (item) => {
        const value =
          draft[
            item.key as keyof typeof draft
          ];

        if (
          Array.isArray(value)
        ) {
          return value.length > 0;
        }

        return Boolean(value);
      }
    );

  // const completion =
    // Math.round(
      // (completedFields.length /
        // validations.length) *
        // 100
    // );
    const {
      completionPercentage,
      isReadyToPublish,
      completedFieldsCount,
      totalFields,
    } =

  usePropertyCompletion();
  return (
    <div className="rounded-[2rem] border border-border bg-card p-8">
      
      {/* Header */}
      <div>
        <h3 className="font-heading text-2xl font-bold tracking-tight">
          Estado de publicación
        </h3>

        <p className="mt-2 text-muted-foreground">
          Completa todos los requisitos antes de publicar.
        </p>
      </div>

      {/* Progress */}
      <div className="mt-8">
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Progreso
          </span>

          <span className="text-sm font-medium">
            {completionPercentage}%
          </span>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{
              width: `${completionPercentage}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-4">

        {isReadyToPublish ? (
          <div className="inline-flex rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400">
            Propiedad lista para publicar
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400">
            <AlertTriangle className="size-4" />      

            Completa todos los campos requeridos
          </div>
        )}
      </div>

      {/* Checklist */}
      <div className="mt-10 space-y-4">
        {validations.map(
          (item) => {
            const value =
              draft[
                item.key as keyof typeof draft
              ];

            const completed =
              Array.isArray(value)
                ? value.length > 0
                : Boolean(value);

            return (
              <div
                key={item.key}
                className="flex items-center gap-3"
              >
                {completed ? (
                  <CheckCircle2 className="size-5 text-green-500" />
                ) : (
                  <Circle className="size-5 text-muted-foreground" />
                )}

                <span
                  className={
                    completed
                      ? "font-medium"
                      : "text-muted-foreground"
                  }
                >
                  {item.label}
                </span>
              </div>
            );
          }
        )}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-muted/50 p-5">
            
        <div className="flex items-center justify-between">
            
          <span className="text-sm text-muted-foreground">
            Campos completados
          </span>
            
          <span className="font-semibold">
            {completedFieldsCount}/{totalFields}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 rounded-2xl bg-muted p-5">
        <p className="text-sm leading-7 text-muted-foreground">
          Las propiedades verificadas tienen mayor visibilidad y confianza para los arrendatarios.
        </p>
      </div>
    </div>
  );
}