import { create } from "zustand";

import { UserRole } from "@/types/user.types";

interface AuthState {
  isAuthenticated: boolean;

  role: UserRole;

  setRole: (
    role: UserRole
  ) => void;

  login: () => void;

  logout: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({
    isAuthenticated: true,

    role: "owner",

    setRole: (role) =>
      set({
        role,
      }),

    login: () =>
      set({
        isAuthenticated: true,
      }),

    logout: () =>
      set({
        isAuthenticated: false,
      }),
  }));