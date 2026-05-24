import { DashboardConversationsSection } from "@/components/dashboard/dashboard-conversations-section";

export default function DashboardMessagesPage() {
  return (
    <section className="space-y-10">
      <div>
        <h1 className="font-heading text-4xl font-bold tracking-tight">
          Mensajes
        </h1>

        <p className="mt-3 text-muted-foreground">
          Gestiona conversaciones con personas interesadas en tus propiedades.
        </p>
      </div>

      <DashboardConversationsSection />
    </section>
  );
}