"use client";

import {
  FileText,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { usePropertyPublicationStore } from "@/store/property-publication.store";

export function PropertyDraftPreview() {
  const {
    draft,
    resetDraft,
  } =
    usePropertyPublicationStore();

  if (
    !draft.title ||
    draft.status !== "draft"
  ) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
          <FileText className="size-5" />
        </div>

        <div className="min-w-0">
          <h2 className="font-heading text-lg font-bold tracking-tight">
            Borrador guardado
          </h2>

          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {draft.title}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            {draft.city || "Ubicación pendiente"}
          </p>
        </div>
      </div>

      <Button
        variant="outline"
        onClick={() => {
          const confirmed =
            window.confirm(
              "¿Eliminar borrador?"
            );

          if (!confirmed) {
            return;
          }

          resetDraft();
        }}
        className="mt-5 h-10 w-full rounded-xl text-sm"
      >
        <Trash2 className="mr-2 size-4" />
        Descartar borrador
      </Button>
    </div>
  );
}