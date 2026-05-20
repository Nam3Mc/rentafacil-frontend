import {
  Building2,
  Eye,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    label: "Propiedades activas",
    value: "12",
    icon: Building2,
  },
  {
    label: "Visualizaciones",
    value: "2,430",
    icon: Eye,
  },
  {
    label: "Solicitudes",
    value: "48",
    icon: MessageCircle,
  },
  {
    label: "Conversión",
    value: "18%",
    icon: TrendingUp,
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-[2rem] border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-start justify-between">
              
              <div>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>

                <p className="mt-4 text-4xl font-bold tracking-tight">
                  {stat.value}
                </p>
              </div>

              <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                <Icon className="size-5" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}