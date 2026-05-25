import Image from "next/image";

import { Star } from "lucide-react";

import { Container } from "@/components/layout/container";

const testimonials = [
  {
    name: "Carlos Ramírez",

    role: "Propietario",

    image:
      "https://i.pravatar.cc/300?img=11",

    content:
      "La experiencia de publicación fue increíblemente rápida y profesional. En pocos días recibí múltiples interesados.",
  },

  {
    name: "María Gómez",

    role: "Arrendadora",

    image:
      "https://i.pravatar.cc/300?img=32",

    content:
      "El dashboard y las métricas hacen que administrar propiedades sea muchísimo más fácil.",
  },

  {
    name: "Andrés Torres",

    role: "Inversionista",

    image:
      "https://i.pravatar.cc/300?img=15",

    content:
      "Finalmente una plataforma inmobiliaria moderna y visualmente profesional.",
  },
];

export function SocialProofSection() {

  return (
    <section className="border-t border-border py-24">

      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
            Confianza y experiencia
          </div>

          <h2 className="mt-6 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            Propietarios ya están creciendo con Renta Fácil
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Descubre cómo propietarios e inversionistas administran sus propiedades dentro de una experiencia moderna.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map(
            (testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-[2rem] border border-border bg-card p-8"
              >

                {/* Stars */}
                <div className="flex gap-1 text-primary">

                  {Array.from({
                    length: 5,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      className="size-5 fill-current"
                    />
                  ))}

                </div>

                {/* Content */}
                <p className="mt-6 leading-8 text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* User */}
                <div className="mt-8 flex items-center gap-4">

                  <div className="relative size-14 overflow-hidden rounded-full">

                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />

                  </div>

                  <div>

                    <p className="font-semibold">
                      {testimonial.name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </Container>

    </section>
  );
}