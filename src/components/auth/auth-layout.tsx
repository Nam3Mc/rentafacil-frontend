import Link from "next/link";

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
    <div className="grid min-h-screen lg:grid-cols-2">
      
      {/* Left Side */}
      <div className="hidden border-r border-border bg-muted/40 lg:flex lg:flex-col lg:justify-between lg:p-12">
        
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-3xl font-bold tracking-tight"
        >
          RentaFacil
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
      <div className="flex items-center justify-center p-6 md:p-12">
        
        <div className="w-full max-w-md">
          
          {/* Mobile Logo */}
          <Link
            href="/"
            className="mb-10 block font-heading text-3xl font-bold tracking-tight lg:hidden"
          >
            RentaFacil
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