"use client";

import {
  FileCheck2,
  UploadCloud,
} from "lucide-react";

interface PropertyVerificationUploadProps {
  title: string;

  uploaded?: boolean;
}

export function PropertyVerificationUpload({
  title,
  uploaded = false,
}: PropertyVerificationUploadProps) {
  return (
    <div className="rounded-3xl border-2 border-dashed border-border bg-card p-8 transition-all hover:border-primary/40">

      <div className="flex flex-col items-center text-center">

        <div
          className={`flex size-16 items-center justify-center rounded-full ${
            uploaded
              ? "bg-green-500/10 text-green-500"
              : "bg-primary/10 text-primary"
          }`}
        >
          {uploaded ? (
            <FileCheck2 className="size-8" />
          ) : (
            <UploadCloud className="size-8" />
          )}
        </div>

        <div className="mt-6">

          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-2 max-w-md text-sm leading-7 text-muted-foreground">
            Arrastra archivos aquí o selecciona documentos desde tu dispositivo.
          </p>

        </div>

        <button
          type="button"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          {uploaded
            ? "Documento cargado"
            : "Seleccionar archivo"}
        </button>

      </div>

    </div>
  );
}