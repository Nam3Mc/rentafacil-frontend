"use client";

import { useEffect, useState } from "react";

import { subscriptionService } from "@/services/subscription.service";

import { SubscriptionPlan } from "@/types/subscription.types";

export function useSubscriptions() {
  const [plans, setPlans] = useState<
    SubscriptionPlan[]
  >([]);

  useEffect(() => {
    async function loadPlans() {
      const data =
        await subscriptionService.getAll();

      setPlans(data);
    }

    loadPlans();
  }, []);

  return {
    plans,
  };
}