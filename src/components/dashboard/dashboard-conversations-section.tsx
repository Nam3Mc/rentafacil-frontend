"use client";

import Link from "next/link";

import { MessageCircle } from "lucide-react";

import { useConversations } from "@/hooks/use-conversations";

import { ConversationCard } from "@/components/dashboard/conversation-card";

interface DashboardConversationsSectionProps {
  limit?: number;
}

export function DashboardConversationsSection({
  limit,
}: DashboardConversationsSectionProps) {
  const {
    conversations,
    loading,
  } =
    useConversations();

  const sortedConversations =
    [...conversations].sort((a, b) => {
      const lastA =
        a.messages[a.messages.length - 1];

      const lastB =
        b.messages[b.messages.length - 1];

      return (
        new Date(lastB?.createdAt || 0).getTime() -
        new Date(lastA?.createdAt || 0).getTime()
      );
    });

  const visibleConversations =
    limit
      ? sortedConversations.slice(0, limit)
      : sortedConversations;

  if (loading) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="space-y-4">
          <div className="h-6 w-56 animate-pulse rounded-full bg-muted" />

          <div className="space-y-3">
            {Array.from({
              length: 3,
            }).map((_, index) => (
              <div
                key={index}
                className="h-24 animate-pulse rounded-2xl bg-muted"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            Conversaciones recientes
          </h2>

          <p className="mt-2 text-muted-foreground">
            Mantén comunicación con posibles arrendatarios.
          </p>
        </div>

        {limit && (
          <Link
            href="/dashboard/messages"
            className="text-sm font-medium text-primary transition-all hover:opacity-80"
          >
            Ver todos →
          </Link>
        )}
      </div>

      {conversations.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <MessageCircle className="size-6" />
          </div>

          <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight">
            Aún no tienes conversaciones
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted-foreground">
            Cuando recibas mensajes o solicitudes, aparecerán aquí.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {visibleConversations.map(
            (conversation) => (
              <ConversationCard
                key={conversation.id}
                conversation={conversation}
              />
            )
          )}
        </div>
      )}
    </section>
  );
}