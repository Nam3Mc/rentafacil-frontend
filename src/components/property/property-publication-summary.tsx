"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Circle,
} from "lucide-react";

import { usePropertyCompletion } from "@/hooks/use-property-completion";
import { usePropertyPublicationStore } from "@/store/property-publication.store";

const validations = [
  {
    key: "title",
    label: "Título",
  },
  {
    key: "description",
    label: "Descripción",
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
    label: "Precio",
  },
  {
    key: "images",
    label: "Imágenes",
  },
];

export function PropertyPublicationSummary() {
  const { draft } =
    usePropertyPublicationStore();

  const {
    completionPercentage,
    isReadyToPublish,
    completedFieldsCount,
    totalFields,
  } =
    usePropertyCompletion();

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div>
        <h3 className="font-heading text-lg font-bold tracking-tight">
          Estado de publicación
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          Requisitos principales del anuncio.
        </p>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Progreso
          </span>

          <span className="text-sm font-medium">
            {completionPercentage}%
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
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
          <div className="inline-flex rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-600 dark:text-green-400">
            Lista para publicar
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-600 dark:text-amber-400">
            <AlertTriangle className="size-3.5" />
            Campos pendientes
          </div>
        )}
      </div>

      <div className="mt-6 grid gap-3">
        {validations.map((item) => {
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
              className="flex items-center gap-3 text-sm"
            >
              {completed ? (
                <CheckCircle2 className="size-4 text-green-500" />
              ) : (
                <Circle className="size-4 text-muted-foreground" />
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
        })}
      </div>

      <div className="mt-6 rounded-xl border border-border bg-muted/50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Completados
          </span>

          <span className="font-semibold">
            {completedFieldsCount}/{totalFields}
          </span>
        </div>
      </div>
    </div>
  );
}