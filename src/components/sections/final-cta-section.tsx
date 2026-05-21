import Link from "next/link";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/container";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {

  return (
    <section className="py-28">

      <Container>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-[3rem] border border-border bg-gradient-to-br from-primary/10 via-background to-background p-10 text-center lg:p-20">

          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary">

            <Sparkles className="size-4" />

            Renta Fácil Marketplace

          </div>

          <h2 className="mx-auto mt-8 max-w-4xl font-heading text-4xl font-bold tracking-tight md:text-6xl">

            Comienza hoy a administrar propiedades de manera moderna

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">

            Publica propiedades, recibe leads, administra mensajes y escala tu negocio inmobiliario desde una sola plataforma.

          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link href="/register">

              <Button
                size="lg"
                className="h-14 rounded-2xl px-8 text-base"
              >

                Crear cuenta

                <ArrowRight className="ml-2 size-5" />

              </Button>

            </Link>

            <Link href="/properties">

              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-2xl px-8 text-base"
              >

                Explorar marketplace

              </Button>

            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}