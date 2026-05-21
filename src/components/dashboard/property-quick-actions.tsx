import { Button } from "@/components/ui/button";

export function PropertyQuickActions() {
  return (
    <div className="rounded-[2rem] border border-border bg-card p-6">

      <div className="mb-6">

        <h3 className="font-heading text-xl font-bold tracking-tight">
          Acciones rápidas
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Administra rápidamente esta propiedad.
        </p>

      </div>

      <div className="flex flex-col gap-3">

        <Button
          variant="outline"
          className="rounded-2xl"
        >
          Pausar publicación
        </Button>

        <Button
          variant="outline"
          className="rounded-2xl"
        >
          Duplicar propiedad
        </Button>

        <Button
          variant="destructive"
          className="rounded-2xl"
        >
          Archivar propiedad
        </Button>

      </div>

    </div>
  );
}