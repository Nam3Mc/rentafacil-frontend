export function PropertyPublicationTips() {
  return (
    <div className="rounded-3xl border border-border bg-card p-6">
      <h3 className="font-heading text-xl font-bold">
        Recomendaciones
      </h3>

      <div className="mt-6 space-y-4">
        
        <div className="rounded-2xl bg-muted p-4">
          <p className="font-medium">
            Agrega imágenes de calidad
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Las propiedades con múltiples fotografías reciben más solicitudes.
          </p>
        </div>

        <div className="rounded-2xl bg-muted p-4">
          <p className="font-medium">
            Completa la descripción
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Explica beneficios, ubicación y características destacadas.
          </p>
        </div>

        <div className="rounded-2xl bg-muted p-4">
          <p className="font-medium">
            Verifica tu propiedad
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Las propiedades verificadas generan más confianza.
          </p>
        </div>
      </div>
    </div>
  );
}