import Link from "next/link";

import {
  Globe,
  Mail,
  Phone,
} from "lucide-react";

import { Container } from "@/components/layout/container";

const links = [
  {
    label: "Marketplace",
    href: "/properties",
  },

  {
    label: "Publicar propiedad",
    href: "/register",
  },

  {
    label: "Iniciar sesión",
    href: "/login",
  },
];

export function Footer() {

  return (
    <footer className="border-t border-border bg-muted/30">

      <Container>

        <div className="grid gap-12 py-16 lg:grid-cols-[1fr_220px_220px]">

          {/* Brand */}
          <div>

            <h3 className="font-heading text-3xl font-bold tracking-tight">
              Renta Fácil
            </h3>

            <p className="mt-5 max-w-md leading-8 text-muted-foreground">
              Plataforma moderna para publicar, administrar y rentar propiedades dentro de una experiencia premium.
            </p>

            <div className="mt-8 flex items-center gap-4">

              <button className="rounded-2xl border border-border p-3 transition-all hover:border-primary/20 hover:bg-card">
                <Globe  className="size-5" />
              </button>

              <button className="rounded-2xl border border-border p-3 transition-all hover:border-primary/20 hover:bg-card">
                <Mail className="size-5" />
              </button>

              <button className="rounded-2xl border border-border p-3 transition-all hover:border-primary/20 hover:bg-card">
                <Phone className="size-5" />
              </button>

            </div>

          </div>

          {/* Links */}
          <div>

            <h4 className="font-semibold">
              Navegación
            </h4>

            <div className="mt-6 flex flex-col gap-4">

              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}

            </div>

          </div>

          {/* Bottom */}
          <div>

            <h4 className="font-semibold">
              Plataforma
            </h4>

            <div className="mt-6 space-y-4 text-muted-foreground">

              <p>
                Marketplace inmobiliario moderno.
              </p>

              <p>
                Dashboard inteligente para propietarios.
              </p>

              <p>
                Experiencia optimizada para arrendamientos.
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-border py-6 text-sm text-muted-foreground">

          © 2026 Renta Fácil. Todos los derechos reservados.

        </div>

      </Container>

    </footer>
  );
}