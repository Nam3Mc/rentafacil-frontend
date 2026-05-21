import Link from "next/link";

import {
  ArrowRight,
  Building2,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function WelcomePage() {

  return (
    <section className="py-16">

      <div className="mx-auto max-w-5xl">

        <div className="overflow-hidden rounded-[3rem] border border-border bg-gradient-to-br from-primary/10 via-background to-background p-10 lg:p-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-medium text-primary">

            <Sparkles className="size-4" />

            Bienvenido a Renta Fácil

          </div>

          {/* Content */}
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px]">

            <div>

              <h1 className="max-w-3xl font-heading text-5xl font-bold tracking-tight">

                Tu cuenta ya está lista para comenzar

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">

                Publica propiedades, administra leads y conecta con arrendatarios dentro de una experiencia moderna y profesional.

              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">

                <Link href="/dashboard/new-property">

                  <Button
                    size="lg"
                    className="h-14 rounded-2xl px-8 text-base"
                  >

                    Publicar primera propiedad

                    <ArrowRight className="ml-2 size-5" />

                  </Button>

                </Link>

                <Link href="/dashboard">

                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 rounded-2xl px-8 text-base"
                  >

                    Ir al dashboard

                  </Button>

                </Link>

              </div>

            </div>

            {/* Side Card */}
            <div className="rounded-[2rem] border border-border bg-card p-8">

              <div className="inline-flex rounded-2xl bg-primary/10 p-4 text-primary">

                <Building2 className="size-7" />

              </div>

              <h2 className="mt-6 font-heading text-2xl font-bold tracking-tight">

                Comienza publicando

              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">

                Las propiedades con fotografías y documentación verificada generan más confianza y leads.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}