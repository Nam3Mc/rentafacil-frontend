import { RoleSwitcher } from "@/components/shared/role-switcher";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      
      <section className="grid gap-6 md:grid-cols-3">
        
        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Propiedades activas
          </p>

          <p className="mt-3 text-4xl font-bold">
            12
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Solicitudes
          </p>

          <p className="mt-3 text-4xl font-bold">
            28
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Mensajes
          </p>

          <p className="mt-3 text-4xl font-bold">
            7
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card p-6">
        <h2 className="font-heading text-2xl font-bold">
          Cambiar rol
        </h2>
        
        <p className="mt-2 text-muted-foreground">
          Herramienta temporal para probar permisos y navegación.
        </p>
        
        <div className="mt-6">
          <RoleSwitcher />
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card p-8">
        <h2 className="font-heading text-2xl font-bold">
          Bienvenido nuevamente
        </h2>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          Desde aquí podrás administrar tus propiedades,
          revisar solicitudes y comunicarte con posibles
          inquilinos.
        </p>
      </section>
    </div>
  );
}