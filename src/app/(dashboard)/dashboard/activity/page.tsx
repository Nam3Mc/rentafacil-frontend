import { DashboardActivitySection } from "@/components/dashboard/dashboard-activity-section";

export default function DashboardActivityPage() {
  return (
    <section className="space-y-10">
      <div>
        <h1 className="font-heading text-4xl font-bold tracking-tight">
          Actividad
        </h1>

        <p className="mt-3 text-muted-foreground">
          Revisa los movimientos recientes dentro de tu cuenta y propiedades.
        </p>
      </div>

      <DashboardActivitySection />
    </section>
  );
}