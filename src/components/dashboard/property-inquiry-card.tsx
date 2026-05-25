"use client";

import Link from "next/link";

import {
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

import { PropertyInquiry } from "@/types/property-inquiry.types";
import { usePropertyInquiryStore } from "@/store/property-inquiry.store";

interface PropertyInquiryCardProps {
  inquiry: PropertyInquiry;
  variant?: "compact" | "full";
}

export function PropertyInquiryCard({
  inquiry,
  variant = "compact",
}: PropertyInquiryCardProps) {
  const { updateInquiryStatus } =
    usePropertyInquiryStore();

  const isFull =
    variant === "full";

  const createdAt =
    new Date(
      inquiry.createdAt
    ).toLocaleDateString("es-CO", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <User className="size-4 shrink-0 text-primary" />

            <h3 className="truncate font-semibold">
              {inquiry.name}
            </h3>
          </div>

          <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <div className="flex min-w-0 items-center gap-2">
              <Mail className="size-4 shrink-0" />

              <p className="truncate">
                {inquiry.email}
              </p>
            </div>

            {(isFull || inquiry.phone) &&
              inquiry.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0" />

                  <p>{inquiry.phone}</p>
                </div>
              )}
          </div>
        </div>

        <div
          className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium ${
            inquiry.status === "new"
              ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
              : inquiry.status === "contacted"
              ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
              : inquiry.status === "qualified"
              ? "bg-green-500/10 text-green-600 dark:text-green-400"
              : inquiry.status === "closed"
              ? "bg-primary/10 text-primary"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {inquiry.status === "new"
            ? "Nuevo"
            : inquiry.status === "contacted"
            ? "Contactado"
            : inquiry.status === "qualified"
            ? "Calificado"
            : inquiry.status === "closed"
            ? "Cerrado"
            : "Archivado"}
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-muted/60 p-4">
        <div className="mb-2 flex items-center gap-2">
          <MessageSquare className="size-4 text-primary" />

          <p className="text-sm font-medium">
            Mensaje
          </p>
        </div>

        <p
          className={`text-sm leading-6 text-muted-foreground ${
            isFull ? "" : "line-clamp-2"
          }`}
        >
          {inquiry.message}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          {createdAt}
        </p>

        <div className="flex flex-wrap gap-2">
          <a
            href={`mailto:${inquiry.email}`}
            className="inline-flex h-9 items-center justify-center rounded-xl border border-border px-3 text-xs font-medium transition-all hover:bg-muted"
          >
            Email
          </a>
                
          <Link
            href={
              inquiry.conversationId
                ? `/dashboard/messages?conversation=${inquiry.conversationId}`
                : "/dashboard/messages"
            }
            className="inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-primary px-3 text-xs font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            <MessageCircle className="size-3.5" />
            Mensajes
          </Link>
          
          <button
            type="button"
            onClick={() =>
              updateInquiryStatus(
                inquiry.id,
                "contacted"
              )
            }
            className="inline-flex h-9 items-center justify-center rounded-xl border border-border px-3 text-xs font-medium transition-all hover:bg-muted"
          >
            Contactado
          </button>
          
          <button
            type="button"
            onClick={() =>
              updateInquiryStatus(
                inquiry.id,
                "qualified"
              )
            }
            className="inline-flex h-9 items-center justify-center rounded-xl border border-border px-3 text-xs font-medium transition-all hover:bg-muted"
          >
            Calificar
          </button>
          
          <button
            type="button"
            onClick={() =>
              updateInquiryStatus(
                inquiry.id,
                "closed"
              )
            }
            className="inline-flex h-9 items-center justify-center rounded-xl border border-border px-3 text-xs font-medium transition-all hover:bg-muted"
          >
            Cerrar
          </button>
          
          <button
            type="button"
            onClick={() =>
              updateInquiryStatus(
                inquiry.id,
                "archived"
              )
            }
            className="inline-flex h-9 items-center justify-center rounded-xl border border-border px-3 text-xs font-medium text-muted-foreground transition-all hover:bg-muted"
          >
            Archivar
          </button>
        </div>

      </div>
    </div>
  );
}