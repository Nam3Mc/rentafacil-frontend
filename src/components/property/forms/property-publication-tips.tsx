import {
  Camera,
  FileCheck2,
  ListChecks,
} from "lucide-react";

const tips = [
  {
    title: "Buenas fotos",
    description:
      "Publicaciones con varias imágenes generan más confianza.",
    icon: Camera,
  },
  {
    title: "Descripción clara",
    description:
      "Incluye beneficios, ubicación y detalles importantes.",
    icon: ListChecks,
  },
  {
    title: "Verificación",
    description:
      "Validar documentos mejora la credibilidad del anuncio.",
    icon: FileCheck2,
  },
];

export function PropertyPublicationTips() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <h3 className="font-heading text-lg font-bold">
        Recomendaciones
      </h3>

      <div className="mt-5 space-y-3">
        {tips.map((tip) => {
          const Icon = tip.icon;

          return (
            <div
              key={tip.title}
              className="flex gap-3 rounded-xl bg-muted/60 p-3"
            >
              <Icon className="mt-0.5 size-4 shrink-0 text-primary" />

              <div>
                <p className="text-sm font-medium">
                  {tip.title}
                </p>

                <p className="mt-0.5 text-sm leading-6 text-muted-foreground">
                  {tip.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}