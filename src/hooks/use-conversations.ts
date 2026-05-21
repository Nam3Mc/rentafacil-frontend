"use client";

import {
  useEffect,
  useState,
} from "react";

import { Conversation } from "@/types/message.types";

import { conversationService } from "@/services/conversation.service";

export function useConversations() {

  const [
    conversations,
    setConversations,
  ] = useState<
    Conversation[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function load() {

      const data =
        await conversationService.getConversations();

      setConversations(data);

      setLoading(false);
    }

    load();

  }, []);

  return {
    conversations,
    loading,
  };
}