import { Container } from "@/components/layout/container";
import { CTAButton } from "@/components/shared/cta-button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-flex rounded-full border border-border bg-muted px-4 py-1 text-sm text-muted-foreground">
            Plataforma moderna para renta de propiedades
          </span>

          <h1 className="font-heading text-5xl font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl">
            Encuentra tu próximo hogar de forma simple y segura
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Renta Fácil conecta propietarios e inquilinos mediante una experiencia moderna,
            contratos digitales y tecnología segura.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
           <CTAButton>
             Explorar propiedades
           </CTAButton>

            <button className="rounded-xl border border-border bg-background px-6 py-3 font-medium transition-all duration-300 hover:bg-accent">
              Publicar propiedad
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}