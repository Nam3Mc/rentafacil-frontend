import { Check } from "lucide-react";

import { SubscriptionPlan } from "@/types/subscription.types";

import { Button } from "@/components/ui/button";

interface PricingCardProps {
  plan: SubscriptionPlan;
}

export function PricingCard({
  plan,
}: PricingCardProps) {
  return (
    <article
      className={`rounded-[2rem] border p-8 transition-all ${
        plan.featuredListings
          ? "border-primary bg-primary/5 shadow-lg"
          : "border-border bg-card"
      }`}
    >
      <div className="space-y-4">
        <div>
          <h3 className="font-heading text-2xl font-bold">
            {plan.name}
          </h3>

          <p className="mt-2 text-muted-foreground">
            {plan.description}
          </p>
        </div>

        <div>
          <p className="text-5xl font-bold tracking-tight">
            ${plan.price}
          </p>

          <p className="mt-1 text-muted-foreground">
            USD
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3">
          <Check className="size-5 text-primary" />

          <span>
            Duración: {plan.durationInDays} días
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Check className="size-5 text-primary" />

          <span>
            {plan.allowsRelisting
              ? "Reactivación automática"
              : "Publicación única"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Check className="size-5 text-primary" />

          <span>
            {plan.featuredListings
              ? "Propiedades destacadas"
              : "Publicación estándar"}
          </span>
        </div>
      </div>

      <Button
        size="lg"
        className="mt-10 w-full rounded-2xl"
      >
        Seleccionar plan
      </Button>
    </article>
  );
}