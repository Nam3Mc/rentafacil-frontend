import Link from "next/link";

import {
  ArrowRight,
  Building2,
} from "lucide-react";

import { Container } from "@/components/layout/container";

import { Button } from "@/components/ui/button";

export function OwnerCtaSection() {

  return (
    <section className="py-24">

      <Container>

        <div className="overflow-hidden rounded-[3rem] border border-border bg-gradient-to-br from-primary/10 via-background to-background">

          <div className="grid gap-12 p-10 lg:grid-cols-[1fr_320px] lg:p-16">

            {/* Content */}
            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary">

                <Building2 className="size-4" />

                Plataforma para propietarios

              </div>

              <h2 className="mt-8 max-w-3xl font-heading text-4xl font-bold tracking-tight md:text-5xl">

                Publica tu propiedad y comienza a recibir interesados hoy mismo

              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">

                Gestiona publicaciones, mensajes, leads y rendimiento desde un dashboard moderno y optimizado.

              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link href="/register">

                  <Button
                    size="lg"
                    className="h-14 rounded-2xl px-8 text-base"
                  >

                    Comenzar ahora

                    <ArrowRight className="ml-2 size-5" />

                  </Button>

                </Link>

                <Link href="/properties">

                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 rounded-2xl px-8 text-base"
                  >

                    Explorar propiedades

                  </Button>

                </Link>

              </div>

            </div>

            {/* Stats */}
            <div className="grid gap-4">

              <div className="rounded-[2rem] border border-border bg-card p-6">

                <p className="text-sm text-muted-foreground">
                  Propiedades activas
                </p>

                <p className="mt-3 text-4xl font-bold tracking-tight">
                  +1.2K
                </p>

              </div>

              <div className="rounded-[2rem] border border-border bg-card p-6">

                <p className="text-sm text-muted-foreground">
                  Leads generados
                </p>

                <p className="mt-3 text-4xl font-bold tracking-tight">
                  +8.5K
                </p>

              </div>

              <div className="rounded-[2rem] border border-border bg-card p-6">

                <p className="text-sm text-muted-foreground">
                  Conversión promedio
                </p>

                <p className="mt-3 text-4xl font-bold tracking-tight">
                  18%
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}