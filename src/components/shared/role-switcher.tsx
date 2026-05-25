"use client";

import { useAuthStore } from "@/store/auth.store";
import { UserRole } from "@/types/user.types";

const roles: UserRole[] = [
  "guest",
  "owner",
  "admin",
  "super_admin",
];

export function RoleSwitcher() {
  const { user, setUser } = useAuthStore();

  const currentRole = user?.role || "guest";

  return (
    <div className="flex flex-wrap gap-2">
      {roles.map((role) => {
        const isActive = currentRole === role;

        return (
          <button
            key={role}
            type="button"
            disabled={!user}
            onClick={() =>
              setUser({
                ...user!,
                role,
              })
            }
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "border border-border hover:bg-accent"
            }`}
          >
            {role}
          </button>
        );
      })}
    </div>
  );
}