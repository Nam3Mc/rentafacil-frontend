import {
  BadgeCheck,
  Clock3,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import { VerificationStatus } from "@/types/verification.types";

interface PropertyVerificationCardProps {
  title: string;
  description: string;
  status: VerificationStatus;
}

const statusConfig = {
  unverified: {
    icon: ShieldAlert,
    label: "No verificado",
    className:
      "bg-muted text-muted-foreground",
  },

  pending: {
    icon: Clock3,
    label: "En revisión",
    className:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },

  verified: {
    icon: BadgeCheck,
    label: "Verificado",
    className:
      "bg-green-500/10 text-green-600 dark:text-green-400",
  },

  rejected: {
    icon: ShieldCheck,
    label: "Rechazado",
    className:
      "bg-red-500/10 text-red-600 dark:text-red-400",
  },
};

export function PropertyVerificationCard({
  title,
  description,
  status,
}: PropertyVerificationCardProps) {
  const config =
    statusConfig[status];

  const Icon =
    config.icon;

  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>

        <div
          className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${config.className}`}
        >
          <Icon className="size-3.5" />

          {config.label}
        </div>
      </div>
    </div>
  );
}