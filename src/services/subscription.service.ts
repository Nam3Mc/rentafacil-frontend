import { subscriptionMock } from "@/services/mocks/subscription.mock";

export const subscriptionService = {
  async getAll() {
    return subscriptionMock.getAll();
  },
};