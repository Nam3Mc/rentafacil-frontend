export interface ConversationMessage {
  id: string;

  sender: "owner" | "renter";

  message: string;

  createdAt: string;
}

export interface Conversation {
  id: string;

  propertyId: string;

  participantName: string;

  messages: ConversationMessage[];
}