import {
  BadgeCheck,
  Clock3,
  FileSearch,
  Shield,
} from "lucide-react";

const steps = [
  {
    title:
      "Carga de documentos",

    description:
      "El propietario sube documentos oficiales.",

    icon: Shield,

    completed: true,
  },

  {
    title:
      "Revisión automática",

    description:
      "Validación inicial del sistema.",

    icon: FileSearch,

    completed: true,
  },

  {
    title:
      "Moderación manual",

    description:
      "Nuestro equipo verifica autenticidad.",

    icon: Clock3,

    completed: false,
  },

  {
    title:
      "Propiedad verificada",

    description:
      "La propiedad obtiene prioridad y confianza.",

    icon: BadgeCheck,

    completed: false,
  },
];

export function PropertyVerificationTimeline() {
  return (
    <div className="rounded-[2rem] border border-border bg-card p-8">

      <div>

        <h3 className="font-heading text-2xl font-bold tracking-tight">
          Proceso de verificación
        </h3>

        <p className="mt-2 text-muted-foreground">
          Todas las propiedades pasan por un proceso de validación antes de publicarse.
        </p>

      </div>

      <div className="mt-10 space-y-8">

        {steps.map(
          (step, index) => {
            const Icon =
              step.icon;

            return (
              <div
                key={step.title}
                className="flex gap-5"
              >

                {/* Timeline */}
                <div className="flex flex-col items-center">

                  <div
                    className={`flex size-12 items-center justify-center rounded-full ${
                      step.completed
                        ? "bg-green-500/10 text-green-500"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="size-5" />
                  </div>

                  {index <
                    steps.length -
                      1 && (
                    <div className="mt-3 h-full w-px bg-border" />
                  )}

                </div>

                {/* Content */}
                <div className="pb-8">

                  <h4 className="font-semibold">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {step.description}
                  </p>

                </div>

              </div>
            );
          }
        )}

      </div>

    </div>
  );
}