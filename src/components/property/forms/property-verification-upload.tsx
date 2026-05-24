"use client";

import {
  FileCheck2,
  UploadCloud,
} from "lucide-react";

import { usePropertyPublicationStore } from "@/store/property-publication.store";

import { PropertyVerificationDocument } from "@/types/property.types";

interface PropertyVerificationUploadProps {
  title: string;

  documentType:
    | "identity_document"
    | "property_title"
    | "power_of_attorney";
}

export function PropertyVerificationUpload({
  title,
  documentType,
}: PropertyVerificationUploadProps) {

  const {
    draft,
    updateDraft,
  } =
    usePropertyPublicationStore();

  const isUploaded =
    draft.verificationDocuments?.some(
      (document) =>
        document.type ===
        documentType
    );

  function handleUpload() {

    if (isUploaded) {
      return;
    }

    const newDocument:
      PropertyVerificationDocument = {

      id:
        crypto.randomUUID(),

      type:
        documentType,

      fileName:
        `${documentType}.pdf`,

      fileUrl:
        "/documents/mock.pdf",

      uploadedAt:
        new Date().toISOString(),
    };

    updateDraft({

      verificationDocuments: [

        ...(draft.verificationDocuments || []),

        newDocument,
      ],
    });
  }

  return (
    <div className="rounded-3xl border-2 border-dashed border-border bg-card p-8 transition-all hover:border-primary/40">

      <div className="flex flex-col items-center text-center">

        <div
          className={`flex size-16 items-center justify-center rounded-full ${
            isUploaded
              ? "bg-green-500/10 text-green-500"
              : "bg-primary/10 text-primary"
          }`}
        >

          {isUploaded ? (

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
          onClick={handleUpload}
          disabled={isUploaded}
          className={`mt-8 inline-flex h-12 items-center justify-center rounded-2xl px-6 text-sm font-medium transition-all ${
            isUploaded
              ? "bg-green-500/10 text-green-600 dark:text-green-400"
              : "bg-primary text-primary-foreground hover:opacity-90"
          }`}
        >

          {isUploaded
            ? "Documento cargado"
            : "Seleccionar archivo"}

        </button>

      </div>

    </div>
  );
}