import { DashboardPerformanceSection } from "@/components/dashboard/dashboard-performance-section";

export default function DashboardAnalyticsPage() {
  return (
    <section className="space-y-10">
      <div>
        <h1 className="font-heading text-4xl font-bold tracking-tight">
          Analytics
        </h1>

        <p className="mt-3 text-muted-foreground">
          Analiza el rendimiento de tus propiedades, leads y conversiones.
        </p>
      </div>

      <DashboardPerformanceSection />
    </section>
  );
}