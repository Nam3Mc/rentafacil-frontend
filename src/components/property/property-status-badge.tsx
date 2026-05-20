interface PropertyStatusBadgeProps {
  status:
    | "active"
    | "paused"
    | "pending"
    | "rejected";
}

const statusConfig = {
  active: {
    label: "Activa",

    className:
      "bg-green-500/10 text-green-600 dark:text-green-400",
  },

  paused: {
    label: "Pausada",

    className:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },

  pending: {
    label: "Pendiente",

    className:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },

  rejected: {
    label: "Rechazada",

    className:
      "bg-red-500/10 text-red-600 dark:text-red-400",
  },
};

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