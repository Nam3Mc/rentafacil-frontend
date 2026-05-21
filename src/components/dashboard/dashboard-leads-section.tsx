import { propertyInquiries } from "@/data/property-inquiries";

import { PropertyInquiryCard } from "@/components/dashboard/property-inquiry-card";

export function DashboardLeadsSection() {
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

      <div className="grid gap-6">

        {propertyInquiries.map(
          (inquiry) => (
            <PropertyInquiryCard
              key={inquiry.id}
              inquiry={inquiry}
            />
          )
        )}

      </div>

    </section>
  );
}