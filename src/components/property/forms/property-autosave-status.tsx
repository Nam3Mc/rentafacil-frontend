"use client";

export function PropertyAutosaveStatus() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
      <div className="size-2 rounded-full bg-green-500" />

      Draft guardado automáticamente
    </div>
  );
}