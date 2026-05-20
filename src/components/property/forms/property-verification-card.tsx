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

  const Icon = config.icon;

  return (
    <div className="rounded-3xl border border-border bg-card p-6">

      <div className="flex items-start justify-between gap-4">

        <div>

          <h3 className="font-semibold">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            {description}
          </p>

        </div>

        <div
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${config.className}`}
        >
          <Icon className="size-4" />

          {config.label}
        </div>

      </div>

    </div>
  );
}