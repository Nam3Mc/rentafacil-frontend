"use client";

import {
  useEffect,
  useState,
} from "react";

import { Activity } from "@/types/activity.types";

import { activityService } from "@/services/activity.service";

export function useActivities() {

  const [
    activities,
    setActivities,
  ] = useState<Activity[]>([]);

  useEffect(() => {

    async function load() {

      const data =
        await activityService.getAll();

      setActivities(data);
    }

    load();

  }, []);

  return {
    activities,
  };
}