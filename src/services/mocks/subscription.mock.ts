import subscriptions from "@/data/subscriptions.json";

import { SubscriptionPlan } from "@/types/subscription.types";

export const subscriptionMock = {
  async getAll(): Promise<
    SubscriptionPlan[]
  > {
    return subscriptions;
  },
};