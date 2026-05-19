export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
      <div>
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="text-sm text-muted-foreground">
          Administra tu actividad y propiedades.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="size-10 rounded-full bg-primary/10" />
      </div>
    </header>
  );
}