import conversations from "@/data/conversations.json";

import { Conversation } from "@/types/message.types";

export const conversationService = {
  async getConversations():
    Promise<Conversation[]> {
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    return conversations as Conversation[];
  },
};