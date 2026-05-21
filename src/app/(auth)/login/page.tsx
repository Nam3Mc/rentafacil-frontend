import { AuthLayout } from "@/components/auth/auth-layout";

import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {

  return (
    <AuthLayout
      title="Iniciar sesión"
      description="Accede a tu cuenta y administra propiedades desde tu dashboard."
    >

      <LoginForm />

    </AuthLayout>
  );
}