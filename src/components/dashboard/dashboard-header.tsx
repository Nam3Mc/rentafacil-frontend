import Link from "next/link";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      
      <div>
        <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          Panel de propietario
        </div>

        <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Administra propiedades, solicitudes y actividad de tu cuenta.
        </p>
      </div>

      <Link
        href="/dashboard/new-property"
        className="inline-flex h-14 items-center justify-center rounded-2xl bg-primary px-8 font-medium text-primary-foreground transition-all hover:opacity-90"
      >
        Publicar propiedad
      </Link>
    </div>
  );
}