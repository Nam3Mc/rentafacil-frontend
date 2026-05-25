import {
  Heart,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Activity } from "@/types/activity.types";

interface ActivityCardProps {
  activity: Activity;
}

const icons = {
  lead: Users,
  favorite: Heart,
  message: MessageCircle,
  verification: ShieldCheck,
};

export function ActivityCard({
  activity,
}: ActivityCardProps) {
  const Icon =
    icons[activity.type];

  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-sm">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="size-4" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="font-semibold leading-6">
            {activity.title}
          </h3>

          <span className="text-xs text-muted-foreground">
            {activity.createdAt}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {activity.description}
        </p>
      </div>
    </div>
  );
}