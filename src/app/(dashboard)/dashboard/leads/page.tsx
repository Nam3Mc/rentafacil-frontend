import { DashboardLeadsSection } from "@/components/dashboard/dashboard-leads-section";

export default function DashboardLeadsPage() {
  return (
    <section className="space-y-10">
      <div>
        <h1 className="font-heading text-4xl font-bold tracking-tight">
          Leads
        </h1>

        <p className="mt-3 text-muted-foreground">
          Gestiona las solicitudes recibidas desde tus propiedades publicadas.
        </p>
      </div>

      <DashboardLeadsSection />
    </section>
  );
}