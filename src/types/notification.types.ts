export type NotificationType =
  | "lead"
  | "message"
  | "favorite"
  | "system";

export interface Notification {
  id: string;

  title: string;

  description: string;

  type: NotificationType;

  read: boolean;

  createdAt: string;
}