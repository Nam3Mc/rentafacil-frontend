import Link from "next/link";

import { Logo } from "../shared/logo";

interface AuthLayoutProps {
  title: string;

  description: string;

  children: React.ReactNode;
}

export function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <div className="relative grid min-h-screen overflow-hidden lg:grid-cols-2">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,91,255,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(154,46,255,0.10),transparent_30%)]" />
      
      {/* Left Side */}
      <div className="relative hidden border-r border-border bg-background/70 backdrop-blur-xl lg:flex lg:flex-col lg:justify-between lg:p-12">
        
        {/* Logo */}
        <Link href="/" >
          <Logo compact />
        </Link>

        {/* Content */}
        <div className="max-w-xl">
          
          <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Plataforma segura
          </div>

          <h2 className="mt-8 font-heading text-6xl font-bold tracking-tight">
            Encuentra propiedades verificadas.
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            Conecta directamente con propietarios y gestiona contratos de arrendamiento de manera moderna y segura.
          </p>
        </div>

        {/* Footer */}
        <div className="text-sm text-muted-foreground">
          © 2026 RentaFacil. Todos los derechos reservados.
        </div>
      </div>

      {/* Right Side */}
      <div className="relative flex items-center justify-center p-6 md:p-12">
        
        <div className="w-full max-w-md rounded-[2rem] border border-border bg-card/80 p-8 shadow-2xl backdrop-blur-xl">
          
          {/* Mobile Logo */}
          <Link
            href="/"
            className="mb-10 block lg:hidden"
          >
            
            <Logo compact />
            
          </Link>

          {/* Header */}
          <div>
            <h1 className="font-heading text-4xl font-bold tracking-tight">
              {title}
            </h1>

            <p className="mt-4 text-muted-foreground">
              {description}
            </p>
          </div>

          {/* Form */}
          <div className="mt-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}