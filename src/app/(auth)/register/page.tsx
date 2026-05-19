import { AuthCard } from "@/components/auth/auth-card";

import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <AuthCard
      title="Crear cuenta"
      description="Regístrate para comenzar a explorar o publicar propiedades."
    >
      <RegisterForm />
    </AuthCard>
  );
}