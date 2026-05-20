"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigationLinks } from "@/config/navigation";

import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/shared/theme-toggle";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-heading text-xl font-semibold tracking-tight"
          >
            Renta Fácil
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link href="/login">
            <Button
              className="hidden md:inline-flex"
              size="lg"
            >
              Iniciar sesión
            </Button>
            </Link>

            <Sheet>
              <SheetTrigger>
                <div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    >
                    <Menu className="size-5" />
                  </Button>
                </div>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="border-border bg-background"
              >
                <div className="mt-10 flex flex-col gap-6">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}

                  <Button
                    size="lg"
                    className="mt-4"
                  >
                    Iniciar sesión
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}