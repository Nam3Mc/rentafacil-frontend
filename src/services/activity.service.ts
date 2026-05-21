import { activityMock } from "@/services/mocks/activity.mock";

export const activityService = {

  async getAll() {
    return activityMock.getAll();
  },

};