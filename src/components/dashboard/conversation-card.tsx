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

  return (
    <div className="rounded-[2rem] border border-border bg-card p-6 transition-all hover:border-primary/40">

      <div className="flex items-start justify-between gap-4">

        <div>

          <div className="flex items-center gap-2">

            <User className="size-4 text-primary" />

            <h3 className="font-semibold">
              {
                conversation.participantName
              }
            </h3>

          </div>

          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {lastMessage.message}
          </p>

        </div>

        <div className="rounded-full bg-primary/10 p-3 text-primary">
          <MessageCircle className="size-5" />
        </div>

      </div>

      <div className="mt-6 flex items-center justify-between">

        <p className="text-sm text-muted-foreground">
          {lastMessage.createdAt}
        </p>

        <button className="rounded-xl border border-border px-4 py-2 text-sm font-medium transition-all hover:bg-muted">
          Abrir chat
        </button>

      </div>

    </div>
  );
}