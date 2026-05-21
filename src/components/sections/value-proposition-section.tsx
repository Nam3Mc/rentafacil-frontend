import {
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/container";

const features = [
  {
    title:
      "Publicación inteligente",

    description:
      "Publica propiedades en minutos con una experiencia moderna y optimizada.",

    icon: Sparkles,
  },

  {
    title:
      "Propiedades verificadas",

    description:
      "Generamos confianza mediante validación y verificación de publicaciones.",

    icon: ShieldCheck,
  },

  {
    title:
      "Marketplace premium",

    description:
      "Conecta propietarios e interesados dentro de una experiencia profesional.",

    icon: Building2,
  },
];

export function ValuePropositionSection() {

  return (
    <section className="py-24">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
            Plataforma moderna para renta inmobiliaria
          </div>

          <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Publica, administra y renta propiedades sin complicaciones
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Diseñamos una experiencia moderna para propietarios e interesados, combinando confianza, simplicidad y tecnología.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {features.map(
            (feature) => {

              const Icon =
                feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-[2rem] border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/20"
                >

                  <div className="inline-flex rounded-2xl bg-primary/10 p-4 text-primary">

                    <Icon className="size-6" />

                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-8 text-muted-foreground">
                    {feature.description}
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