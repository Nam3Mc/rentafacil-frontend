"use client";

import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function PropertyPublicationSuccess() {
  return (
    <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8">
      <div className="flex flex-col items-center text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
          <CheckCircle2 className="size-8" />
        </div>

        <div className="mt-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="size-4" />
            Publicación enviada
          </div>

          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight">
            Tu propiedad fue enviada correctamente
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            Revisaremos la información y la propiedad quedará disponible cuando complete el proceso de verificación.
          </p>
        </div>

        <div className="mt-8 rounded-xl bg-muted px-5 py-3">
          <p className="text-sm text-muted-foreground">
            Redirigiendo al dashboard...
          </p>
        </div>
      </div>
    </div>
  );
}