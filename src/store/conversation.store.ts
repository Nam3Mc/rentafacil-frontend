import { create } from "zustand";

import { persist } from "zustand/middleware";

import conversationsData from "@/data/conversations.json";

import {
  Conversation,
  ConversationMessage,
} from "@/types/message.types";

interface ConversationStore {
  conversations: Conversation[];

  addMessage: (
    conversationId: string,
    message: ConversationMessage
  ) => void;

  createConversation: (
    conversation: Conversation
  ) => void;

  markAsRead: (
    conversationId: string
  ) => void;

  setConversations: (
    conversations: Conversation[]
  ) => void;
}

export const useConversationStore =
  create<ConversationStore>()(
    persist(
      (set) => ({
        conversations:
          conversationsData as Conversation[],

        setConversations: (
          conversations
        ) =>
          set({
            conversations,
          }),

        createConversation: (
          conversation
        ) =>
          set((state) => {
            const exists =
              state.conversations.some(
                (item) =>
                  item.id === conversation.id
              );

            if (exists) {
              return state;
            }

            return {
              conversations: [
                conversation,
                ...state.conversations,
              ],
            };
          }),

        addMessage: (
          conversationId,
          message
        ) =>
          set((state) => ({
            conversations:
              state.conversations.map(
                (conversation) =>
                  conversation.id ===
                  conversationId
                    ? {
                        ...conversation,

                        unreadCount:
                          message.sender ===
                          "renter"
                            ? (conversation.unreadCount ||
                                0) + 1
                            : conversation.unreadCount ||
                              0,

                        messages: [
                          ...conversation.messages,
                          message,
                        ],
                      }
                    : conversation
              ),
          })),

        markAsRead: (
          conversationId
        ) =>
          set((state) => ({
            conversations:
              state.conversations.map(
                (conversation) =>
                  conversation.id ===
                  conversationId
                    ? {
                        ...conversation,

                        unreadCount: 0,

                        messages:
                          conversation.messages.map(
                            (message) =>
                              message.sender ===
                                "renter" &&
                              !message.readAt
                                ? {
                                    ...message,

                                    readAt:
                                      new Date().toISOString(),
                                  }
                                : message
                          ),
                      }
                    : conversation
              ),
          })),
      }),
      {
        name: "rentafacil-conversations",
      }
    )
  );