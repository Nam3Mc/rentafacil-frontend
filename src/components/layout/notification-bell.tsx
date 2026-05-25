"use client";

import { useState } from "react";

import {
  Bell,
  CheckCheck,
} from "lucide-react";

import { useNotificationStore } from "@/store/notification.store";
import { NotificationPanel } from "@/components/layout/notification-panel";

export function NotificationBell() {
  const [isOpen, setIsOpen] =
    useState(false);

  const { notifications } =
    useNotificationStore();

  const unreadCount =
    notifications.filter(
      (notification) =>
        !notification.isRead
    ).length;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() =>
          setIsOpen((prev) => !prev)
        }
        className="relative flex size-10 items-center justify-center rounded-full border border-border bg-card transition-all hover:bg-muted"
      >
        {unreadCount > 0 ? (
          <Bell className="size-5 text-primary" />
        ) : (
          <CheckCheck className="size-5 text-muted-foreground" />
        )}

        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-50 w-[360px] max-w-[calc(100vw-2rem)]">
          <NotificationPanel />
        </div>
      )}
    </div>
  );
}