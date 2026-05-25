import { create } from "zustand";

import { persist } from "zustand/middleware";

import activitiesData from "@/data/activities.json";

import { Activity } from "@/types/activity.types";

interface ActivityStore {
  activities: Activity[];

  addActivity: (
    activity: Activity
  ) => void;
}

export const useActivityStore =
  create<ActivityStore>()(
    persist(
      (set) => ({
        activities:
          activitiesData as Activity[],

        addActivity: (activity) =>
          set((state) => ({
            activities: [
              activity,
              ...state.activities,
            ],
          })),
      }),
      {
        name: "rentafacil-activities",
      }
    )
  );