"use client";

import { useState } from "react";
import { propertyInquiryService } from "@/services/property-inquiry.service";
import {
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface PropertyInquiryFormProps {
  propertyId: string;
}

export function PropertyInquiryForm({
  propertyId,
}: PropertyInquiryFormProps) {  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      message:
        "Hola, estoy interesado en esta propiedad. Me gustaría recibir más información.",
    });

  const onSubmit = async (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1200)
    );

    setLoading(false);
    await propertyInquiryService.create({
      id: `inquiry_${Date.now()}`,
      propertyId,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      createdAt: new Date().toISOString(),
    });
    setSuccess(true);
  };

  return (
    <div className="rounded-[2rem] border border-border bg-card p-8 shadow-xl shadow-primary/5">
      <div>
        <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          Lead directo
        </div>

        <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight">
          Contactar propietario
        </h3>

        <p className="mt-2 leading-7 text-muted-foreground">
          Envía una solicitud segura y recibe información adicional sobre esta propiedad.
        </p>
      </div>

      {success ? (
        <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-6 text-green-600 dark:text-green-400">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-5" />

            <div>
              <p className="font-semibold">
                Solicitud enviada correctamente
              </p>

              <p className="mt-2 text-sm leading-6">
                El propietario recibirá tu interés y podrá contactarte pronto.
              </p>
            </div>
          </div>
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
            value={formData.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                name: event.target.value,
              })
            }
            className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            required
            value={formData.email}
            onChange={(event) =>
              setFormData({
                ...formData,
                email: event.target.value,
              })
            }
            className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
          />

          <input
            type="tel"
            placeholder="Teléfono opcional"
            value={formData.phone}
            onChange={(event) =>
              setFormData({
                ...formData,
                phone: event.target.value,
              })
            }
            className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
          />

          <textarea
            rows={5}
            required
            value={formData.message}
            onChange={(event) =>
              setFormData({
                ...formData,
                message: event.target.value,
              })
            }
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

          <p className="text-center text-xs leading-6 text-muted-foreground">
            Tu información será usada únicamente para gestionar esta solicitud.
          </p>
        </form>
      )}
    </div>
  );
}