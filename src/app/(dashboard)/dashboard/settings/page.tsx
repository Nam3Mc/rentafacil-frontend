import {
  Bell,
  ShieldCheck,
  User,
} from "lucide-react";

const settings = [
  {
    title: "Perfil",
    description:
      "Actualiza tu información personal y datos de contacto.",
    icon: User,
  },
  {
    title: "Notificaciones",
    description:
      "Configura alertas sobre leads, mensajes y propiedades.",
    icon: Bell,
  },
  {
    title: "Seguridad",
    description:
      "Gestiona protección de cuenta y validaciones de acceso.",
    icon: ShieldCheck,
  },
];

export default function DashboardSettingsPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="font-heading text-4xl font-bold tracking-tight">
          Configuración
        </h1>

        <p className="mt-3 text-muted-foreground">
          Administra tu cuenta, notificaciones y preferencias de seguridad.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {settings.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-sm"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>

              <h2 className="mt-5 font-heading text-lg font-bold">
                {item.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}