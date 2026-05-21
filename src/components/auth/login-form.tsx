"use client";

import Link from "next/link";

import {
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  Loader2,
} from "lucide-react";

import {
  GoogleAuthButton,
} from "@/components/auth/google-auth-button";

import {
  Button,
} from "@/components/ui/button";

import {
  authService,
} from "@/services/auth.service";

import {
  useAuthStore,
} from "@/store/auth.store";

export function LoginForm() {

  const router =
    useRouter();

  const {
    setUser,
  } =
    useAuthStore();

  const [
    isLoading,
    setIsLoading,
  ] =
    useState(false);

  const [
    email,
    setEmail,
  ] =
    useState("");

  const [
    password,
    setPassword,
  ] =
    useState("");

  const [
    error,
    setError,
  ] =
    useState("");

  async function onSubmit(
    event:
      React.FormEvent
  ) {

    event.preventDefault();

    try {

      setError("");

      setIsLoading(true);

      const user =
        await authService.login(
          email,
          password,
        );

      if (!user) {

        setError(
          "Correo o contraseña incorrectos"
        );

        return;
      }

      setUser(user);

      router.push(
        "/welcome"
      );

    } catch (error) {

      console.error(error);

      setError(
        "Ocurrió un error al iniciar sesión"
      );

    } finally {

      setIsLoading(false);

    }
  }

  return (
    <div className="space-y-6">

      <GoogleAuthButton />

      {/* Divider */}
      <div className="relative">

        <div className="absolute inset-0 flex items-center">

          <div className="w-full border-t border-border" />

        </div>

        <div className="relative flex justify-center text-xs uppercase">

          <span className="bg-card px-3 text-muted-foreground">

            O continuar con email

          </span>

        </div>

      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="space-y-4"
      >

        {/* Email */}
        <div className="space-y-2">

          <label className="text-sm font-medium">
            Correo electrónico
          </label>

          <input
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(event) =>
              setEmail(
                event.target.value
              )
            }
            className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
          />

        </div>

        {/* Password */}
        <div className="space-y-2">

          <label className="text-sm font-medium">
            Contraseña
          </label>

          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(event) =>
              setPassword(
                event.target.value
              )
            }
            className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
          />

        </div>

        {/* Error */}
        {error && (

          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-500">

            {error}

          </div>

        )}

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="h-12 w-full rounded-2xl"
        >

          {isLoading ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            "Iniciar sesión"
          )}

        </Button>

      </form>

      {/* Footer */}
      <p className="text-center text-sm text-muted-foreground">

        ¿No tienes cuenta?{" "}

        <Link
          href="/register"
          className="font-medium text-primary"
        >

          Crear cuenta

        </Link>

      </p>

    </div>
  );
}