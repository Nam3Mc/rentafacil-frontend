export type ActivityType =
  | "lead"
  | "favorite"
  | "message"
  | "verification";

export interface Activity {
  id: string;

  type: ActivityType;

  title: string;

  description: string;

  createdAt: string;
}