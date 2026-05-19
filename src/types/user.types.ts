export type UserRole =
  | "guest"
  | "owner"
  | "admin"
  | "super_admin";

export interface User {
  id: string;

  firstName: string;

  lastName: string;

  email: string;

  avatarUrl?: string;

  role: UserRole;

  isVerified: boolean;

  createdAt: string;

  updatedAt: string;
}