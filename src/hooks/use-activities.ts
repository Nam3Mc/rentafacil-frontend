"use client";

import { useActivityStore } from "@/store/activity.store";

export function useActivities() {
  const { activities } =
    useActivityStore();

  return {
    activities,
    isLoading: false,
    error: null,
  };
}