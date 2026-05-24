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

  if (draft.title?.length > 15) score += 20;

  if (draft.description?.length > 80) score += 25;

  if (draft.images?.length >= 3) score += 25;

  if (draft.city) score += 10;

  if (draft.address) score += 10;

  if (draft.monthlyPrice > 0) score += 10;

  const isExcellent =
    score >= 80;

  const recommendations: string[] = [];

  if (!draft.images?.length) {
    recommendations.push(
      "Agrega imágenes para aumentar confianza."
    );
  }

  if (
    !draft.description ||
    draft.description.length < 80
  ) {
    recommendations.push(
      "Escribe una descripción más detallada."
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-start gap-4">
        <div
          className={`rounded-xl p-3 ${
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
          <h3 className="font-heading text-lg font-bold">
            Calidad
          </h3>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Mejora tu anuncio para aumentar visibilidad.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Puntaje
          </span>

          <span className="font-semibold">
            {score}/100
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
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

      {recommendations.length > 0 && (
        <div className="mt-6 space-y-3">
          {recommendations
            .slice(0, 2)
            .map((recommendation) => (
              <div
                key={recommendation}
                className="flex items-start gap-3 rounded-xl bg-muted/60 p-3"
              >
                <Sparkles className="mt-0.5 size-4 text-primary" />

                <p className="text-sm text-muted-foreground">
                  {recommendation}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}