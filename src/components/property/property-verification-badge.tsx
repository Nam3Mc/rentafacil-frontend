import { ShieldCheck } from "lucide-react";

import { PropertyVerificationStatus } from "@/types/property.types";

interface PropertyVerificationBadgeProps {
  status: PropertyVerificationStatus;
}

const labels = {
  unverified:
    "No verificada",

  pending_review:
    "En revisión",

  approved:
    "Verificada",

  rejected:
    "Rechazada",
};

const styles = {
  unverified:
    "bg-muted text-muted-foreground",

  pending_review:
    "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",

  approved:
    "bg-green-500/10 text-green-600 dark:text-green-400",

  rejected:
    "bg-red-500/10 text-red-600 dark:text-red-400",
};

export function PropertyVerificationBadge({
  status,
}: PropertyVerificationBadgeProps) {

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
        styles[status]
      }`}
    >

      <ShieldCheck className="size-4" />

      {labels[status]}

    </div>
  );
}