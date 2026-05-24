"use client";

import { MessageCircle } from "lucide-react";

import { usePropertyInquiries } from "@/hooks/use-property-inquiries";

import { PropertyInquiryCard } from "@/components/dashboard/property-inquiry-card";

export function DashboardLeadsSection() {
  const { inquiries } =
    usePropertyInquiries();

  return (
    <section className="space-y-8">
      <div>
        <h2 className="font-heading text-3xl font-bold tracking-tight">
          Leads recientes
        </h2>

        <p className="mt-2 text-muted-foreground">
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
          {inquiries.map((inquiry) => (
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