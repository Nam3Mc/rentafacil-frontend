"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Send, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useConversations } from "@/hooks/use-conversations";
import { useActivityStore } from "@/store/activity.store";
import { useConversationStore } from "@/store/conversation.store";
import { useNotificationStore } from "@/store/notification.store";

import {
  Conversation,
  ConversationMessage,
} from "@/types/message.types";

export function DashboardMessagesPanel() {
  const { addActivity } = useActivityStore();

  const searchParams = useSearchParams();

  const conversationParam = searchParams.get("conversation");

  const { addMessage, markAsRead } = useConversationStore();

  const { addNotification } = useNotificationStore();

  const { conversations, loading } = useConversations();

  const [selectedId, setSelectedId] = useState<string | null>(
    conversationParam
  );

  const [message, setMessage] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const selectedConversation = useMemo<Conversation | undefined>(() => {
    if (selectedId) {
      return conversations.find(
        (conversation) => conversation.id === selectedId
      );
    }

    return conversations[0];
  }, [conversations, selectedId]);

  const sortedConversations = useMemo(() => {
    return [...conversations].sort((a, b) => {
      const lastA = a.messages[a.messages.length - 1];
      const lastB = b.messages[b.messages.length - 1];

      return (
        new Date(lastB?.createdAt || 0).getTime() -
        new Date(lastA?.createdAt || 0).getTime()
      );
    });
  }, [conversations]);

  useEffect(() => {
    if (!selectedConversation) {
      return;
    }

    markAsRead(selectedConversation.id);
  }, [selectedConversation, markAsRead]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [selectedConversation?.id, selectedConversation?.messages.length]);

  function handleSelectConversation(conversationId: string) {
    setSelectedId(conversationId);
  }

  function handleSend(event: React.FormEvent) {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || !selectedConversation) {
      return;
    }

    const timestamp = new Date().toLocaleString("es-CO");

    const newMessage: ConversationMessage = {
      id: `message_${Date.now()}`,
      sender: "owner",
      message: trimmedMessage,
      createdAt: timestamp,
    };

    addMessage(selectedConversation.id, newMessage);

    addNotification({
      id: `notification_${Date.now()}`,
      type: "message",
      title: "Mensaje enviado",
      description: `Respondiste a ${selectedConversation.participantName}.`,
      href: `/dashboard/messages?conversation=${selectedConversation.id}`,
      isRead: false,
      createdAt: new Date().toISOString(),
    });

    addActivity({
      id: `activity_${Date.now()}`,
      type: "message",
      title: "Mensaje enviado",
      description: `Respondiste a ${selectedConversation.participantName}.`,
      createdAt: new Date().toISOString(),
    });

    setMessage("");
  }

  if (loading) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-muted-foreground">
        Cargando mensajes...
      </div>
    );
  }

  return (
    <div className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[320px_1fr]">
      <aside className="border-b border-border lg:border-b-0 lg:border-r">
        <div className="border-b border-border p-5">
          <h2 className="font-heading text-xl font-bold">Conversaciones</h2>
        </div>

        <div className="max-h-[640px] overflow-y-auto p-3">
          {sortedConversations.map((conversation) => {
            const lastMessage = conversation.messages[conversation.messages.length - 1];

            const isActive = selectedConversation?.id === conversation.id;

            const unreadCount = conversation.unreadCount || 0;

            return (
              <button
                key={conversation.id}
                type="button"
                onClick={() => handleSelectConversation(conversation.id)}
                className={`w-full rounded-xl p-4 text-left transition-all ${
                  isActive ? "bg-primary/10" : "hover:bg-muted"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate font-medium">
                    {conversation.participantName}
                  </p>

                  {unreadCount > 0 && (
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {unreadCount}
                    </span>
                  )}
                </div>

                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {lastMessage?.message || "Sin mensajes"}
                </p>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="flex min-h-[640px] flex-col">
        {selectedConversation ? (
          <>
            <div className="flex items-center gap-3 border-b border-border p-5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <User className="size-5" />
              </div>

              <div>
                <h3 className="font-semibold">
                  {selectedConversation.participantName}
                </h3>

                <p className="text-sm text-muted-foreground">
                  Conversación activa
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-muted/30 p-5">
              {selectedConversation.messages.map((chatMessage) => {
                const isOwner = chatMessage.sender === "owner";

                return (
                  <div
                    key={chatMessage.id}
                    className={`flex ${
                      isOwner ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                        isOwner
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-card"
                      }`}
                    >
                      <p>{chatMessage.message}</p>

                      <p
                        className={`mt-2 text-xs ${
                          isOwner
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {chatMessage.createdAt}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSend}
              className="flex gap-3 border-t border-border p-4"
            >
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Escribe una respuesta..."
                className="h-12 flex-1 rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
              />

              <Button
                type="submit"
                disabled={!message.trim()}
                className="h-12 rounded-2xl px-5"
              >
                <Send className="size-4" />
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center p-8 text-muted-foreground">
            No hay conversaciones todavía.
          </div>
        )}
      </section>
    </div>
  );
}