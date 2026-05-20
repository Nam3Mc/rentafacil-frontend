import { AuthLayout } from "@/components/auth/auth-layout";

import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Crear cuenta"
      description="Publica propiedades, conecta con arrendatarios y administra tu cuenta."
    >
      <RegisterForm />
    </AuthLayout>
  );
}