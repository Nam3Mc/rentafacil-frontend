"use client";

import {
  useEffect,
  useState,
} from "react";

import { Notification } from "@/types/notification.types";

import { notificationService } from "@/services/notification.service";

export function useNotifications() {

  const [
    notifications,
    setNotifications,
  ] = useState<
    Notification[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function load() {

      const data =
        await notificationService.getNotifications();

      setNotifications(data);

      setLoading(false);
    }

    load();

  }, []);

  const unreadCount =
    notifications.filter(
      (notification) =>
        !notification.read
    ).length;

  return {
    notifications,
    unreadCount,
    loading,
  };
}