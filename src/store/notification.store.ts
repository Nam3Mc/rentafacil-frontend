import { create } from "zustand";

import { persist } from "zustand/middleware";

import { Notification } from "@/types/notification.types";

interface NotificationStore {
  notifications: Notification[];

  addNotification: (
    notification: Notification
  ) => void;

  markAsRead: (
    notificationId: string
  ) => void;

  markAllAsRead: () => void;

  deleteNotification: (
    notificationId: string
  ) => void;
}

export const useNotificationStore =
  create<NotificationStore>()(
    persist(
      (set) => ({
        notifications: [],

        addNotification: (
          notification
        ) =>
          set((state) => ({
            notifications: [
              notification,
              ...state.notifications,
            ],
          })),

        markAsRead: (
          notificationId
        ) =>
          set((state) => ({
            notifications:
              state.notifications.map(
                (notification) =>
                  notification.id ===
                  notificationId
                    ? {
                        ...notification,
                        isRead: true,
                      }
                    : notification
              ),
          })),

        markAllAsRead: () =>
          set((state) => ({
            notifications:
              state.notifications.map(
                (notification) => ({
                  ...notification,
                  isRead: true,
                })
              ),
          })),

        deleteNotification: (
          notificationId
        ) =>
          set((state) => ({
            notifications:
              state.notifications.filter(
                (notification) =>
                  notification.id !==
                  notificationId
              ),
          })),
      }),
      {
        name: "rentafacil-notifications",
      }
    )
  );