import { Container } from "@/components/layout/container";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { DashboardLeadsSection } from "@/components/dashboard/dashboard-leads-section";
import { DashboardConversationsSection } from "@/components/dashboard/dashboard-conversations-section";
import { DashboardProfileCard } from "@/components/dashboard/dashboard-profile-card";
import { DashboardActivitySection } from "@/components/dashboard/dashboard-activity-section";
import { PropertyDraftPreview } from "@/components/property/forms/property-draft-preview";

export default function DashboardPage() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="space-y-10">
          <DashboardHeader />
          <PropertyDraftPreview />

          <div className="grid gap-8 xl:grid-cols-[280px_1fr]">
            <DashboardProfileCard />

            <div className="space-y-8">
              <DashboardStats />

              <div className="grid gap-8 xl:grid-cols-2">
                <DashboardLeadsSection limit={2} />
                <DashboardConversationsSection limit={2} />
              </div>
            </div>
          </div>

          <DashboardActivitySection limit={3} />
        </div>
      </Container>
    </section>
  );
}