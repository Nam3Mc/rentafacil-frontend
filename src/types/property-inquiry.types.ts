export type PropertyInquiryStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "closed"
  | "archived";

export interface PropertyInquiry {
  id: string;
  propertyId: string;
  conversationId?: string;

  name: string;
  email: string;
  phone?: string;

  message: string;

  status: PropertyInquiryStatus;

  createdAt: string;
}