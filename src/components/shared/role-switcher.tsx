"use client";

import { useAuthStore } from "@/store/auth.store";

export function RoleSwitcher() {
  const {
    role,
    setRole,
  } = useAuthStore();

  return (
    <div className="flex flex-wrap gap-2">
      {[
        "guest",
        "owner",
        "admin",
        "super_admin",
      ].map((currentRole) => {
        const isActive =
          role === currentRole;

        return (
          <button
            key={currentRole}
            onClick={() =>
              setRole(currentRole as never)
            }
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "border border-border hover:bg-accent"
            }`}
          >
            {currentRole}
          </button>
        );
      })}
    </div>
  );
}