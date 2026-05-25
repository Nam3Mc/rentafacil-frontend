import { Container } from "@/components/layout/container";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";

import { DashboardPropertiesTable } from "@/components/dashboard/dashboard-properties-table";

export default function DashboardPropertiesPage() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="space-y-10">
          
          <DashboardHeader />

          <DashboardPropertiesTable />
        </div>
      </Container>
    </section>
  );
}