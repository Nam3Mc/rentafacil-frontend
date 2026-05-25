"use client";

import Link from "next/link";

import {
  Bell,
  CheckCircle2,
  Trash2,
} from "lucide-react";

import { useNotificationStore } from "@/store/notification.store";

export function NotificationPanel() {
  const {
    notifications,
    markAsRead,
    deleteNotification,
  } =
    useNotificationStore();

  if (notifications.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
        <Bell className="mx-auto size-8 text-muted-foreground" />

        <p className="mt-4 font-medium">
          Sin notificaciones
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          Aquí aparecerán tus actualizaciones importantes.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-4">
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`rounded-xl border p-4 ${
              notification.isRead
                ? "border-border bg-background"
                : "border-primary/20 bg-primary/5"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">
                  {notification.title}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  {notification.description}
                </p>

                {notification.href && (
                  <Link
                    href={notification.href}
                    onClick={() =>
                      markAsRead(notification.id)
                    }
                    className="mt-3 inline-flex text-sm font-medium text-primary"
                  >
                    Ver detalle →
                  </Link>
                )}
              </div>

              <div className="flex gap-2">
                {!notification.isRead && (
                  <button
                    type="button"
                    onClick={() =>
                      markAsRead(notification.id)
                    }
                    className="rounded-lg border border-border p-2 hover:bg-muted"
                  >
                    <CheckCircle2 className="size-4" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() =>
                    deleteNotification(notification.id)
                  }
                  className="rounded-lg border border-border p-2 text-red-500 hover:bg-red-500/10"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}