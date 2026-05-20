import plans from "@/data/subscriptions.json";

import { Container } from "@/components/layout/container";

import { PricingCard } from "@/components/subscription/pricing-card";

export function PricingSection() {
  return (
    <section className="py-24">
      <Container>

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Planes y suscripciones
          </div>

          <h2 className="mt-6 font-heading text-5xl font-bold tracking-tight">
            Publica propiedades con el plan ideal
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Escala desde una propiedad hasta múltiples publicaciones verificadas.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-16 grid gap-8 lg:grid-cols-4">
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