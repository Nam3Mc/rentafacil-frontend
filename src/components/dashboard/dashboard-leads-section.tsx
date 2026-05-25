"use client";

import Link from "next/link";
import { useState } from "react";

import { MessageCircle } from "lucide-react";

import { usePropertyInquiries } from "@/hooks/use-property-inquiries";

import { PropertyInquiryCard } from "@/components/dashboard/property-inquiry-card";

interface DashboardLeadsSectionProps {
  limit?: number;
}

export function DashboardLeadsSection({
  limit,
}: DashboardLeadsSectionProps) {
  const { inquiries } =
    usePropertyInquiries();

  const [filter, setFilter] =
    useState<
      | "all"
      | "new"
      | "contacted"
      | "qualified"
      | "closed"
      | "archived"
    >("all");

  const filteredInquiries =
    filter === "all"
      ? inquiries
      : inquiries.filter(
          (inquiry) =>
            inquiry.status === filter
        );

  const visibleInquiries =
    limit
      ? filteredInquiries.slice(0, limit)
      : filteredInquiries;

  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            Leads recientes
          </h2>

          <p className="mt-2 text-muted-foreground">
            Personas interesadas en tus propiedades.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "all",
              "new",
              "contacted",
              "qualified",
              "closed",
              "archived",
            ].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() =>
                  setFilter(
                    status as typeof filter
                  )
                }
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                  filter === status
                    ? "bg-primary text-primary-foreground"
                    : "border border-border hover:bg-muted"
                }`}
              >
                {status === "all"
                  ? "Todos"
                  : status === "new"
                  ? "Nuevos"
                  : status === "contacted"
                  ? "Contactados"
                  : status === "qualified"
                  ? "Calificados"
                  : status === "closed"
                  ? "Cerrados"
                  : "Archivados"}
              </button>
            ))}
          </div>
        </div>

        {limit && (
          <Link
            href="/dashboard/leads"
            className="text-sm font-medium text-primary transition-all hover:opacity-80"
          >
            Ver todos →
          </Link>
        )}
      </div>

      {visibleInquiries.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <MessageCircle className="size-6" />
          </div>

          <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight">
            {inquiries.length === 0
              ? "Aún no tienes leads"
              : "No hay leads en este estado"}
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
            {inquiries.length === 0
              ? "Cuando una persona envíe una solicitud desde una de tus propiedades, aparecerá aquí."
              : "Cambia el filtro o actualiza el estado de tus leads para ver más resultados."}
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {visibleInquiries.map((inquiry) => (
            <PropertyInquiryCard
              key={inquiry.id}
              inquiry={inquiry}
            />
          ))}
        </div>
      )}
    </section>
  );
}