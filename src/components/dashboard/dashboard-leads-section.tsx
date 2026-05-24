"use client";

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

  const visibleInquiries =
    limit
      ? inquiries.slice(0, limit)
      : inquiries;

  return (
    <section className="space-y-8">
      <div>
        <h2 className="font-heading text-3xl font-bold tracking-tight">
          Leads recientes
        </h2>

        <p className="mt-2 text-muted-foreground">
          {limit && (
            <div className="mt-4">
              <a
                href="/dashboard/leads"
                className="text-sm font-medium text-primary transition-all hover:opacity-80"
                >
                Ver todos →
              </a>
            </div>
          )}
        Personas interesadas en tus propiedades.
        </p>
      </div>

      {inquiries.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-border bg-card p-10 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <MessageCircle className="size-6" />
          </div>

          <h3 className="mt-6 font-heading text-2xl font-bold">
            Aún no tienes leads
          </h3>

          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Cuando una persona envíe una solicitud desde una de tus propiedades, aparecerá aquí.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
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