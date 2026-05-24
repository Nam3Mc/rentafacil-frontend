"use client";

import Image from "next/image";

import {
  BadgeCheck,
  Loader2,
} from "lucide-react";

import { useUsers } from "@/hooks/use-users";

export function DashboardProfileCard() {

  const { users } =
    useUsers();

  const user = users[0];

  if (!user) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-6">

        <Loader2 className="size-5 animate-spin text-primary" />

        <p className="text-sm text-muted-foreground">
          Cargando perfil...
        </p>

      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6">

      <div className="flex items-center gap-4">

        {/* Avatar */}
        <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border border-border">

          <Image
            src={
              user.avatarUrl ||
              "https://i.pravatar.cc/300"
            }
            alt={`${user.firstName} ${user.lastName}`}
            fill
            sizes="64px"
            className="object-cover"
          />

        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">

          <div className="flex items-center gap-2">

            <h2 className="truncate font-heading text-lg font-bold tracking-tight">

              {user.firstName}{" "}
              {user.lastName}

            </h2>

            {user.isVerified && (
              <BadgeCheck className="size-4 shrink-0 text-primary" />
            )}

          </div>

          <p className="mt-1 truncate text-sm text-muted-foreground">
            {user.email}
          </p>

          <div className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium capitalize text-primary">

            {user.role.replace(
              "_",
              " "
            )}

          </div>

        </div>

      </div>

    </div>
  );
}