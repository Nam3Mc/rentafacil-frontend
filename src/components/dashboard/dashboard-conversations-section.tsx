"use client";

import { Loader2 } from "lucide-react";

import { useConversations } from "@/hooks/use-conversations";

import { ConversationCard } from "@/components/dashboard/conversation-card";

export function DashboardConversationsSection() {

  const {
    conversations,
    loading,
  } =
    useConversations();

  return (
    <section className="space-y-8">

      <div>

        <h2 className="font-heading text-3xl font-bold tracking-tight">
          Conversaciones recientes
        </h2>

        <p className="mt-2 text-muted-foreground">
          Mantén comunicación con posibles arrendatarios.
        </p>

      </div>

      {loading ? (
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6">

          <Loader2 className="size-5 animate-spin text-primary" />

          <p className="text-muted-foreground">
            Cargando conversaciones...
          </p>

        </div>
      ) : (
        <div className="grid gap-6">

          {conversations.map(
            (conversation) => (
              <ConversationCard
                key={conversation.id}
                conversation={
                  conversation
                }
              />
            )
          )}

        </div>
      )}

    </section>
  );
}