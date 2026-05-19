import { AuthCard } from "@/components/auth/auth-card";

import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <AuthCard
      title="Bienvenido de nuevo"
      description="Inicia sesión para administrar tus propiedades y solicitudes."
    >
      <LoginForm />
    </AuthCard>
  );
}