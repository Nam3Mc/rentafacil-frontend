export type NotificationType =
  | "lead"
  | "message"
  | "property"
  | "verification";

export interface Notification {
  id: string;

  type: NotificationType;

  title: string;

  description: string;

  href?: string;

  isRead: boolean;

  createdAt: string;
}