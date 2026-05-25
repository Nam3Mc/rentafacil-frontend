import notificationsData from "@/data/notifications.json";

import {
  Notification,
  NotificationType,
} from "@/types/notification.types";

const notificationTypes: NotificationType[] = [
  "lead",
  "message",
  "property",
  "verification",
];

function getNotificationType(
  type: string
): NotificationType {
  if (
    notificationTypes.includes(
      type as NotificationType
    )
  ) {
    return type as NotificationType;
  }

  return "property";
}

const notifications: Notification[] =
  notificationsData.map((notification) => ({
    id: notification.id,
    title: notification.title,
    description: notification.description,
    type: getNotificationType(notification.type),
    isRead: notification.read,
    createdAt: notification.createdAt,
  }));

export const notificationService = {
  async getNotifications(): Promise<Notification[]> {
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    return notifications;
  },
};