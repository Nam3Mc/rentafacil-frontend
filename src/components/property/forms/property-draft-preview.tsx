"use client";

import { usePropertyPublicationStore } from "@/store/property-publication.store";

export function PropertyDraftPreview() {
  const { draft } =
    usePropertyPublicationStore();

  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <h3 className="font-heading text-xl font-bold">
        Vista previa del draft
      </h3>

      <div className="mt-6 space-y-3 text-sm">
        <p>
          <span className="font-medium">
            Título:
          </span>{" "}
          {draft.title || "—"}
        </p>

        <p>
          <span className="font-medium">
            Ciudad:
          </span>{" "}
          {draft.city || "—"}
        </p>

        <p>
          <span className="font-medium">
            Dirección:
          </span>{" "}
          {draft.address || "—"}
        </p>
      </div>
    </div>
  );
}