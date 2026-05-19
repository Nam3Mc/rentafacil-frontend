"use client";

import Link from "next/link";

import { GoogleAuthButton } from "@/components/auth/google-auth-button";

import { Button } from "@/components/ui/button";

export function RegisterForm() {
  return (
    <div className="space-y-6">
      <GoogleAuthButton />

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-3 text-muted-foreground">
            O registrarse con email
          </span>
        </div>
      </div>

      <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Nombre
            </label>

            <input
              type="text"
              placeholder="Carlos"
              className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Apellido
            </label>

            <input
              type="text"
              placeholder="Ramírez"
              className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Correo electrónico
          </label>

          <input
            type="email"
            placeholder="correo@ejemplo.com"
            className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Contraseña
          </label>

          <input
            type="password"
            placeholder="********"
            className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
          />
        </div>

        <Button
          size="lg"
          className="w-full rounded-2xl"
        >
          Crear cuenta
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        ¿Ya tienes cuenta?{" "}
        <Link
          href="/login"
          className="font-medium text-primary"
        >
          Iniciar sesión
        </Link>
      </p>
    </div>
  );
}