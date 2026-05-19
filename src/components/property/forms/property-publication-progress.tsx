"use client";

import { analyzePropertyDraft } from "@/lib/property-draft-analyzer";

import { usePropertyPublicationStore } from "@/store/property-publication.store";

export function PropertyPublicationProgress() {
  const draft =
    usePropertyPublicationStore(
      (state) => state.draft
    );

  const analysis =
    analyzePropertyDraft(draft);

  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-heading text-xl font-bold">
            Progreso
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Completa la publicación para aumentar la visibilidad.
          </p>
        </div>

        <div className="text-right">
          <p className="text-3xl font-bold">
            {
              analysis.completionPercentage
            }
            %
          </p>

          <p className="text-sm text-muted-foreground">
            Completado
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 h-3 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{
            width: `${analysis.completionPercentage}%`,
          }}
        />
      </div>

      {/* Status */}
      <div className="mt-6 rounded-2xl bg-muted p-4">
        {analysis.isReadyForPublication ? (
          <p className="text-sm font-medium text-green-600 dark:text-green-400">
            La propiedad está lista para publicación.
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            Completa más información para publicar la propiedad.
          </p>
        )}
      </div>
    </div>
  );
}