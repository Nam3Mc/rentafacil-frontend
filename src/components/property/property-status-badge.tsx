import { PropertyStatus } from "@/types/property.types";

interface PropertyStatusBadgeProps {
  status: PropertyStatus;
}

const statusConfig = {

  pending_verification: {
    label: "Pendiente",

    className:
      "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  },

  approved: {
    label: "Aprobada",

    className:
      "bg-green-500/10 text-green-600 dark:text-green-400",
  },

  active: {
    label: "Activa",

    className:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },

  paused: {
    label: "Pausada",

    className:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },

  rented: {
    label: "Rentada",

    className:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },

  expired: {
    label: "Expirada",

    className:
      "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400",
  },

  rejected: {
    label: "Rechazada",

    className:
      "bg-red-500/10 text-red-600 dark:text-red-400",
  },

  draft: {
    label: "Borrador",

    className:
      "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  },

  published: {
    label: "Publicada",

    className:
      "bg-green-500/10 text-green-600 dark:text-green-400",
  },

  archived: {
    label: "Archivada",

    className:
      "bg-muted text-muted-foreground",
  },

} satisfies Record<
  PropertyStatus,
  {
    label: string;

    className: string;
  }
>;

export function PropertyStatusBadge({
  status,
}: PropertyStatusBadgeProps) {

  const config =
    statusConfig[status];

  return (
    <div
      className={`inline-flex rounded-full px-4 py-2 text-sm font-medium ${config.className}`}
    >
      {config.label}
    </div>
  );
}