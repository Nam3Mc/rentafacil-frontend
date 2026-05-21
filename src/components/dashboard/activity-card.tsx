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
    <div className="flex items-start gap-4 rounded-[2rem] border border-border bg-card p-5 transition-all hover:border-primary/20">

      <div className="rounded-2xl bg-primary/10 p-3 text-primary">

        <Icon className="size-5" />

      </div>

      <div className="flex-1">

        <h3 className="font-semibold">
          {activity.title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-muted-foreground">
          {activity.description}
        </p>

        <p className="mt-3 text-xs text-muted-foreground">
          {activity.createdAt}
        </p>

      </div>

    </div>
  );
}