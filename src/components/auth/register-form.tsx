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

export function RegisterForm() {

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
    formData,
    setFormData,
  ] =
    useState({
      firstName: "",

      lastName: "",

      email: "",

      password: "",
    });

  async function onSubmit(
    event:
      React.FormEvent
  ) {

    event.preventDefault();

    try {

      setIsLoading(true);

      const user =
        await authService.register(
          formData
        );

      setUser(user);

      router.push(
        "/welcome"
      );

    } catch (error) {

      console.error(error);

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

            O registrarse con email

          </span>

        </div>

      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="space-y-4"
      >

        {/* Names */}
        <div className="grid gap-4 sm:grid-cols-2">

          <div className="space-y-2">

            <label className="text-sm font-medium">
              Nombre
            </label>

            <input
              type="text"
              placeholder="Carlos"
              value={
                formData.firstName
              }
              onChange={(event) =>
                setFormData({
                  ...formData,

                  firstName:
                    event.target.value,
                })
              }
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
              value={
                formData.lastName
              }
              onChange={(event) =>
                setFormData({
                  ...formData,

                  lastName:
                    event.target.value,
                })
              }
              className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
            />

          </div>

        </div>

        {/* Email */}
        <div className="space-y-2">

          <label className="text-sm font-medium">
            Correo electrónico
          </label>

          <input
            type="email"
            placeholder="correo@ejemplo.com"
            value={
              formData.email
            }
            onChange={(event) =>
              setFormData({
                ...formData,

                email:
                  event.target.value,
              })
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
            value={
              formData.password
            }
            onChange={(event) =>
              setFormData({
                ...formData,

                password:
                  event.target.value,
              })
            }
            className="h-12 w-full rounded-2xl border border-border bg-background px-4 outline-none transition-all focus:border-primary"
          />

        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="w-full rounded-2xl"
        >

          {isLoading ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            "Crear cuenta"
          )}

        </Button>

      </form>

      {/* Footer */}
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