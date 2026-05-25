import Link from "next/link";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          Panel de propietario
        </div>

        <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Administra propiedades, solicitudes y actividad de tu cuenta.
        </p>
      </div>

      <Link
        href="/dashboard/new-property"
        className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 font-medium text-primary-foreground transition-all hover:opacity-90 sm:h-14 sm:px-8"
      >
        Publicar propiedad
      </Link>
    </div>
  );
}