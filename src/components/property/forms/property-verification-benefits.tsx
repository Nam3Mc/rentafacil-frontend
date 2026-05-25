import {
  BadgeCheck,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    title: "Más visibilidad",
    icon: TrendingUp,
  },
  {
    title: "Mayor confianza",
    icon: ShieldCheck,
  },
  {
    title: "Badge verificado",
    icon: BadgeCheck,
  },
];

export function PropertyVerificationBenefits() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div>
        <h3 className="font-heading text-xl font-bold tracking-tight">
          Beneficios
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Las propiedades verificadas generan más confianza y visibilidad.
        </p>
      </div>

      <div className="mt-6 grid gap-3">
        {benefits.map((benefit) => {
          const Icon =
            benefit.icon;

          return (
            <div
              key={benefit.title}
              className="flex items-center gap-3 rounded-xl bg-muted/50 p-4"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-4" />
              </div>

              <p className="text-sm font-medium">
                {benefit.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}