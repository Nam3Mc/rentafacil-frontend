import Link from "next/link";

import {
  MessageCircle,
  User,
} from "lucide-react";

import { Conversation } from "@/types/message.types";

interface ConversationCardProps {
  conversation: Conversation;
}

export function ConversationCard({
  conversation,
}: ConversationCardProps) {
  const lastMessage =
    conversation.messages[
      conversation.messages.length - 1
    ];

  const unreadCount =
    conversation.unreadCount || 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/30">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <User className="size-4" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <h3 className="truncate font-medium">
                  {
                    conversation.participantName
                  }
                </h3>

                {unreadCount > 0 && (
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {unreadCount}
                  </span>
                )}
              </div>

              <p className="mt-1 line-clamp-2 text-sm leading-6 text-muted-foreground">
                {lastMessage?.message ||
                  "Sin mensajes todavía"}
              </p>
            </div>
          </div>
        </div>

        <div className="shrink-0 rounded-xl bg-primary/10 p-2 text-primary">
          <MessageCircle className="size-4" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          {lastMessage?.createdAt ||
            "Nuevo"}
        </p>

        <Link
          href={`/dashboard/messages?conversation=${conversation.id}`}
          className="rounded-xl border border-border px-3 py-1.5 text-xs font-medium transition-all hover:bg-muted"
        >
          Abrir
        </Link>
      </div>
    </div>
  );
}