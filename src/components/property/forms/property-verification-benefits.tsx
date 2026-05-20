import {
  BadgeCheck,
  Eye,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    title:
      "Mayor visibilidad",

    description:
      "Las propiedades verificadas aparecen primero en resultados.",

    icon: TrendingUp,
  },

  {
    title:
      "Más confianza",

    description:
      "Los arrendatarios prefieren propiedades verificadas.",

    icon: ShieldCheck,
  },

  {
    title:
      "Insignia premium",

    description:
      "Tu publicación obtiene badge de propiedad validada.",

    icon: BadgeCheck,
  },

  {
    title:
      "Mayor conversión",

    description:
      "Las propiedades verificadas reciben más contactos.",

    icon: Eye,
  },
];

export function PropertyVerificationBenefits() {
  return (
    <div className="rounded-[2rem] border border-border bg-card p-8">

      <div>

        <h3 className="font-heading text-2xl font-bold tracking-tight">
          Beneficios de verificación
        </h3>

        <p className="mt-2 text-muted-foreground">
          Las propiedades verificadas generan mayor confianza y visibilidad.
        </p>

      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">

        {benefits.map(
          (benefit) => {
            const Icon =
              benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-border bg-muted/30 p-6"
              >

                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>

                <div className="mt-5">

                  <h4 className="font-semibold">
                    {benefit.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {benefit.description}
                  </p>

                </div>

              </div>
            );
          }
        )}

      </div>

    </div>
  );
}