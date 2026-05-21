import { Container } from "@/components/layout/container";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { DashboardLeadsSection } from "@/components/dashboard/dashboard-leads-section";
import { DashboardConversationsSection } from "@/components/dashboard/dashboard-conversations-section";
import { DashboardProfileCard } from "@/components/dashboard/dashboard-profile-card";
import { DashboardPerformanceSection } from "@/components/dashboard/dashboard-performance-section";
import { DashboardActivitySection } from "@/components/dashboard/dashboard-activity-section";

export default function DashboardPage() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="space-y-10">
          <DashboardHeader />
          <DashboardProfileCard />
          <DashboardStats />
          <DashboardLeadsSection />
          <DashboardConversationsSection />
          <DashboardPerformanceSection />
          <DashboardActivitySection />
        </div>
      </Container>
    </section>
  );
}