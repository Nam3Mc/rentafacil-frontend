import { User, Bell, ShieldCheck } from "lucide-react";

export default function DashboardSettingsPage() {
  return (
    <section className="space-y-10">
      <div>
        <h1 className="font-heading text-4xl font-bold tracking-tight">
          Configuración
        </h1>

        <p className="mt-3 text-muted-foreground">
          Administra tu cuenta, notificaciones y preferencias de seguridad.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-border bg-card p-6">
          <User className="size-6 text-primary" />

          <h2 className="mt-5 font-heading text-xl font-bold">
            Perfil
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Actualiza tu información personal y datos de contacto.
          </p>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-6">
          <Bell className="size-6 text-primary" />

          <h2 className="mt-5 font-heading text-xl font-bold">
            Notificaciones
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Configura alertas sobre leads, mensajes y propiedades.
          </p>
        </div>

        <div className="rounded-[2rem] border border-border bg-card p-6">
          <ShieldCheck className="size-6 text-primary" />

          <h2 className="mt-5 font-heading text-xl font-bold">
            Seguridad
          </h2>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Gestiona protección de cuenta y validaciones de acceso.
          </p>
        </div>
      </div>
    </section>
  );
}