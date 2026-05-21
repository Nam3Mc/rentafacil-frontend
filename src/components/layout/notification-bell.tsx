"use client";

import { Bell } from "lucide-react";

import { useNotifications } from "@/hooks/use-notifications";

export function NotificationBell() {

  const { unreadCount } =
    useNotifications();

  return (
    <button className="relative flex size-11 items-center justify-center rounded-2xl border border-border bg-card transition-all hover:bg-muted">

      <Bell className="size-5" />

      {unreadCount > 0 && (
        <div className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">

          {unreadCount}

        </div>
      )}

    </button>
  );
}