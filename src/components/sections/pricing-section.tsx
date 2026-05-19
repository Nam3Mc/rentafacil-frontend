"use client";

import { useSubscriptions } from "@/hooks/use-subscriptions";

import { Container } from "@/components/layout/container";

import { PricingCard } from "@/components/subscription/pricing-card";

export function PricingSection() {
  const { plans } = useSubscriptions();

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-5xl font-bold tracking-tight">
            Planes para propietarios
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a tus necesidades y administra tus propiedades fácilmente.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}