"use client";

import { MessageCircle } from "lucide-react";

import { useConversations } from "@/hooks/use-conversations";

import { ConversationCard } from "@/components/dashboard/conversation-card";

interface DashboardConversationsSectionProps {
  limit?: number;
}

export function DashboardConversationsSection({
    limit,
  }: DashboardConversationsSectionProps) {  const {
    conversations,
    loading,
  } =
    useConversations();

  const visibleConversations =
    limit
      ? conversations.slice(0, limit)
      : conversations;

  if (loading) {
    return (
      <div className="rounded-[2rem] border border-border bg-card p-8 text-muted-foreground">
        Cargando conversaciones...
      </div>
    );
  }

  return (
    <section className="space-y-8">
      <div>
        <h2 className="font-heading text-3xl font-bold tracking-tight">
          Conversaciones recientes
        </h2>

        <p className="mt-2 text-muted-foreground">
          {limit && (
            <div className="mt-4">
              <a
                href="/dashboard/messages"
                className="text-sm font-medium text-primary transition-all hover:opacity-80"
              >
                Ver todos →
              </a>
            </div>
          )}
          Mantén comunicación con posibles arrendatarios.
        </p>
      </div>

      {conversations.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-border bg-card p-10 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <MessageCircle className="size-6" />
          </div>

          <h3 className="mt-6 font-heading text-2xl font-bold">
            Aún no tienes conversaciones
          </h3>

          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Cuando respondas leads o recibas mensajes, las conversaciones aparecerán aquí.
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {visibleConversations.map((conversation) => (
            <ConversationCard
              key={conversation.id}
              conversation={conversation}
            />
          ))}
        </div>
      )}
    </section>
  );
}