export type SubscriptionPlanType =
  | "single_publication"
  | "quarterly_pro"
  | "annual_pro"
  | "enterprise";

export interface SubscriptionPlan {
  id: string;

  name: string;

  type: SubscriptionPlanType;

  description: string;

  price: number;

  durationInDays: number;

  allowsRelisting: boolean;

  maxProperties: number | null;

  featuredListings: boolean;

  prioritySupport: boolean;
}