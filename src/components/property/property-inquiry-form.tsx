"use client";

import { useState } from "react";

import {
  Loader2,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function PropertyInquiryForm() {

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const onSubmit = async (
    event:
      React.FormEvent
  ) => {

    event.preventDefault();

    setLoading(true);

    await new Promise(
      (resolve) =>
        setTimeout(resolve, 1500)
    );

    setLoading(false);

    setSuccess(true);
  };

  return (
    <div className="rounded-[2rem] border border-border bg-card p-8">

      <div>

        <h3 className="font-heading text-2xl font-bold tracking-tight">
          Contactar propietario
        </h3>

        <p className="mt-2 text-muted-foreground">
          Envía una solicitud y recibe información adicional sobre la propiedad.
        </p>

      </div>

      {success ? (
        <div className="mt-8 rounded-2xl bg-green-500/10 p-6 text-green-600 dark:text-green-400">

          Solicitud enviada correctamente.

        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mt-8 space-y-5"
        >

          <input
            type="text"
            placeholder="Nombre completo"
            required
            className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            required
            className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
          />

          <textarea
            rows={5}
            placeholder="Hola, estoy interesado en esta propiedad..."
            required
            className="w-full rounded-2xl border border-border bg-background px-4 py-4 outline-none transition-all focus:border-primary"
          />

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="h-14 w-full rounded-2xl"
          >

            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="size-4 animate-spin" />

                Enviando...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="size-4" />

                Enviar solicitud
              </div>
            )}

          </Button>

        </form>
      )}

    </div>
  );
}