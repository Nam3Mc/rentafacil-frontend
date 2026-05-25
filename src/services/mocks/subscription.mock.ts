import subscriptionsData from "@/data/subscriptions.json";

import { SubscriptionPlan } from "@/types/subscription.types";

const subscriptions =
  subscriptionsData as SubscriptionPlan[];

export const subscriptionMock = {
  async getAll(): Promise<SubscriptionPlan[]> {
    return subscriptions;
  },
};