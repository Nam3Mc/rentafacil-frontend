import { Check } from "lucide-react";

import { SubscriptionPlan } from "@/types/subscription.types";

import { Button } from "@/components/ui/button";

interface PricingCardProps {
  plan: SubscriptionPlan;
}

export function PricingCard({
  plan,
}: PricingCardProps) {
  const isHighlighted =
    plan.type === "quarterly_pro";

  const billingLabel =
    plan.durationInDays === 30
      ? "mes"
      : plan.durationInDays === 90
        ? "3 meses"
        : "año";

  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border p-8 transition-all ${
        isHighlighted
          ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
          : "border-border bg-card"
      }`}
    >
      {/* Highlight Badge */}
      {isHighlighted && (
        <div className="absolute right-5 top-5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">
          Más popular
        </div>
      )}

      {/* Header */}
      <div className="space-y-4">
        <div>
          <h3 className="font-heading text-3xl font-bold tracking-tight">
            {plan.name}
          </h3>

          <p className="mt-3 leading-7 text-muted-foreground">
            {plan.description}
          </p>
        </div>

        {/* Price */}
        <div className="pt-2">
          <p className="text-6xl font-bold tracking-tight">
            ${plan.price}
          </p>

          <p className="mt-2 text-muted-foreground">
            / {billingLabel}
          </p>
        </div>
      </div>

      {/* Features */}
      <ul className="mt-10 space-y-5">
        
        <li className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-1 text-primary">
            <Check className="size-4" />
          </div>

          <span>
            {plan.maxProperties === null
              ? "Propiedades ilimitadas"
              : `${plan.maxProperties} propiedades activas`}
          </span>
        </li>

        <li className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-1 text-primary">
            <Check className="size-4" />
          </div>

          <span>
            {plan.allowsRelisting
              ? "Reactivación automática"
              : "Publicación única"}
          </span>
        </li>

        <li className="flex items-center gap-3">
          <div className="rounded-full bg-primary/10 p-1 text-primary">
            <Check className="size-4" />
          </div>

          <span>
            {plan.featuredListings
              ? "Publicaciones destacadas"
              : "Publicación estándar"}
          </span>
        </li>

        {plan.prioritySupport && (
          <li className="flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-1 text-primary">
              <Check className="size-4" />
            </div>

            <span>
              Soporte prioritario
            </span>
          </li>
        )}
      </ul>

      {/* CTA */}
      <Button
        size="lg"
        className={`mt-10 h-14 w-full rounded-2xl ${
          isHighlighted
            ? ""
            : "border border-border bg-background text-foreground hover:bg-muted"
        }`}
      >
        Seleccionar plan
      </Button>
    </article>
  );
}