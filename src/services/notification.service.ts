import notifications from "@/data/notifications.json";

import { Notification } from "@/types/notification.types";

export const notificationService = {

  async getNotifications():
    Promise<Notification[]> {

    await new Promise(
      (resolve) =>
        setTimeout(resolve, 500)
    );

    return notifications;
  },

};