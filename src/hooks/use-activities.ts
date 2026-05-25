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

  const [
    isLoading,
    setIsLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState<string | null>(
    null
  );

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true);

        const data =
          await activityService.getAll();

        setActivities(data);
      } catch (error) {
        console.error(error);

        setError(
          "No se pudo cargar la actividad."
        );
      } finally {
        setIsLoading(false);
      }
    }

    load();
  }, []);

  return {
    activities,
    isLoading,
    error,
  };
}