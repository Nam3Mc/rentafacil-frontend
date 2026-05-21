import {
  Building2,
  MessagesSquare,
  UserPlus,
} from "lucide-react";

import { Container } from "@/components/layout/container";

const steps = [
  {
    title:
      "Crea tu cuenta",

    description:
      "Regístrate y configura tu perfil de propietario en pocos minutos.",

    icon: UserPlus,
  },

  {
    title:
      "Publica tu propiedad",

    description:
      "Agrega fotografías, detalles y documentación desde un panel intuitivo.",

    icon: Building2,
  },

  {
    title:
      "Recibe interesados",

    description:
      "Conecta con posibles arrendatarios mediante mensajes y leads inteligentes.",

    icon: MessagesSquare,
  },
];

export function HowItWorksSection() {

  return (
    <section className="border-y border-border bg-muted/30 py-24">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
            Flujo simplificado
          </div>

          <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Publicar una propiedad nunca fue tan fácil
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Diseñamos un proceso moderno para que propietarios publiquen y administren propiedades sin fricción.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {steps.map(
            (step, index) => {

              const Icon =
                step.icon;

              return (
                <div
                  key={step.title}
                  className="relative rounded-[2rem] border border-border bg-card p-8"
                >

                  <div className="absolute right-6 top-6 text-5xl font-bold tracking-tight text-primary/10">

                    0{index + 1}

                  </div>

                  <div className="inline-flex rounded-2xl bg-primary/10 p-4 text-primary">

                    <Icon className="size-6" />

                  </div>

                  <h3 className="mt-8 font-heading text-2xl font-bold tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-muted-foreground">
                    {step.description}
                  </p>

                </div>
              );
            }
          )}

        </div>

      </Container>

    </section>
  );
}