"use client";

import { useConversationStore } from "@/store/conversation.store";

export function useConversations() {
  const { conversations } =
    useConversationStore();

  return {
    conversations,
    loading: false,
    error: null,
  };
}