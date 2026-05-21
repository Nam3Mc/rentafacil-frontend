import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";

import { Button } from "@/components/ui/button";

import { Logo } from "@/components/shared/logo";

export function HeroSection() {

  return (
    <section className="relative overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">

        <Image
          src="/images/hero-background.png"
          alt="Modern apartments"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/40 to-background/80" />

      {/* Content */}
      <Container>

        <div className="relative flex min-h-[92vh] items-center py-20">

          <div className="max-w-4xl">

            {/* Logo */}
            <div className="mb-10">

              <Logo />

            </div>

            {/* Heading */}
            <h1 className="max-w-4xl font-heading text-5xl font-bold tracking-tight md:text-7xl">

              Administra propiedades

              <span className="bg-gradient-to-r from-[#0F5BFF] to-[#9A2EFF] bg-clip-text text-transparent">

                {" "}sin complicaciones

              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">

              Publica propiedades, recibe leads, administra mensajes y haz crecer tu negocio inmobiliario desde una experiencia moderna y profesional.

            </p>

            {/* Actions */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <Link href="/register">

                <Button
                  size="lg"
                  className="h-14 rounded-2xl px-8 text-base"
                >

                  Publicar propiedad

                  <ArrowRight className="ml-2 size-5" />

                </Button>

              </Link>

              <Link href="/properties">

                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-2xl border-border/60 bg-background/70 px-8 text-base backdrop-blur"
                >

                  Explorar marketplace

                </Button>

              </Link>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}