import activities from "@/data/activities.json";

import { Activity } from "@/types/activity.types";

export const activityMock = {

  async getAll():
    Promise<Activity[]> {

      return activities as Activity[];
    },

};