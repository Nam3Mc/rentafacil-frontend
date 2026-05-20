"use client";

import {
  AlertTriangle,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

import { usePropertyPublicationStore } from "@/store/property-publication.store";

export function PropertyQualityScore() {

  const { draft } =
    usePropertyPublicationStore();

  let score = 0;

  if (draft.title?.length > 15)
    score += 20;

  if (
    draft.description?.length > 80
  )
    score += 25;

  if (draft.images?.length >= 3)
    score += 25;

  if (draft.city)
    score += 10;

  if (draft.address)
    score += 10;

  if (
    draft.monthlyPrice > 0
  )
    score += 10;

  const isExcellent =
    score >= 80;

  return (
    <div className="rounded-[2rem] border border-border bg-card p-6">

      <div className="flex items-start gap-4">

        <div
          className={`rounded-2xl p-3 ${
            isExcellent
              ? "bg-green-500/10 text-green-500"
              : "bg-amber-500/10 text-amber-500"
          }`}
        >
          {isExcellent ? (
            <BadgeCheck className="size-5" />
          ) : (
            <AlertTriangle className="size-5" />
          )}
        </div>

        <div>

          <h3 className="font-heading text-xl font-bold">
            Calidad de publicación
          </h3>

          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Mejora la calidad de tu publicación para obtener mayor visibilidad.
          </p>

        </div>

      </div>

      {/* Score */}
      <div className="mt-8">

        <div className="flex items-center justify-between">

          <span className="text-sm text-muted-foreground">
            Calidad general
          </span>

          <span className="font-semibold">
            {score}/100
          </span>

        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">

          <div
            className={`h-full rounded-full transition-all ${
              isExcellent
                ? "bg-green-500"
                : "bg-amber-500"
            }`}
            style={{
              width: `${score}%`,
            }}
          />

        </div>

      </div>

      {/* Recommendations */}
      <div className="mt-8 space-y-4">

        {!draft.images?.length && (
          <div className="flex items-start gap-3 rounded-2xl bg-muted p-4">

            <Sparkles className="mt-1 size-4 text-primary" />

            <p className="text-sm leading-7 text-muted-foreground">
              Agrega imágenes para aumentar confianza y visibilidad.
            </p>

          </div>
        )}

        {!draft.description ||
        draft.description.length < 80 ? (
          <div className="flex items-start gap-3 rounded-2xl bg-muted p-4">

            <Sparkles className="mt-1 size-4 text-primary" />

            <p className="text-sm leading-7 text-muted-foreground">
              Una descripción más detallada mejora el rendimiento de la publicación.
            </p>

          </div>
        ) : null}

        {isExcellent && (
          <div className="rounded-2xl bg-green-500/10 p-4 text-sm font-medium text-green-600 dark:text-green-400">
            Excelente calidad de publicación.
          </div>
        )}

      </div>

    </div>
  );
}