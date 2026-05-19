"use client";

import { propertyDraftSchema } from "@/validations/property.validation";

import { usePropertyPublicationStore } from "@/store/property-publication.store";

export function PropertyValidationPreview() {
  const { draft } =
    usePropertyPublicationStore();

  const validation =
    propertyDraftSchema.safeParse(
      draft
    );

  const errors = validation.success
    ? []
    : validation.error.issues;

  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <h3 className="font-heading text-xl font-bold">
        Estado de validación
      </h3>

      {errors.length === 0 ? (
        <div className="mt-6 rounded-2xl bg-green-500/10 p-4 text-sm text-green-600 dark:text-green-400">
          El formulario cumple las validaciones básicas.
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {errors.map((error) => (
            <div
              key={error.path.join(".")}
              className="rounded-2xl bg-destructive/10 p-4 text-sm text-destructive"
            >
              {error.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}