"use client";

import {
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function PropertyPublicationSuccess() {
  return (
    <div className="rounded-[2rem] border border-green-500/20 bg-green-500/5 p-10">
      
      <div className="flex flex-col items-center text-center">
        
        <div className="flex size-20 items-center justify-center rounded-full bg-green-500/10 text-green-500">
          <CheckCircle2 className="size-10" />
        </div>

        <div className="mt-8">
          
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="size-4" />

            Publicación completada
          </div>

          <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight">
            Tu propiedad fue enviada correctamente
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
            Nuestro equipo verificará la información y la propiedad estará disponible próximamente en la plataforma.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-muted px-6 py-4">
          <p className="text-sm text-muted-foreground">
            Redirigiendo al dashboard...
          </p>
        </div>
      </div>
    </div>
  );
}