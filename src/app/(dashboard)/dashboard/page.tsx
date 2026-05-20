import { Container } from "@/components/layout/container";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";

import { DashboardStats } from "@/components/dashboard/dashboard-stats";

import { DashboardPropertiesPreview } from "@/components/dashboard/dashboard-properties-preview";

export default function DashboardPage() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="space-y-10">
          
          <DashboardHeader />

          <DashboardStats />

          <DashboardPropertiesPreview />
        </div>
      </Container>
    </section>
  );
}