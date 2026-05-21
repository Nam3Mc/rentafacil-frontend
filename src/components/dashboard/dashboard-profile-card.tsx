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
      <div className="flex items-center gap-3 rounded-[2rem] border border-border bg-card p-8">

        <Loader2 className="size-5 animate-spin text-primary" />

        <p className="text-muted-foreground">
          Cargando perfil...
        </p>

      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-border bg-card p-8">

      <div className="flex flex-col items-center text-center">

        <div className="relative size-24 overflow-hidden rounded-full border border-border">

          <Image
            src={
              user.avatarUrl ||
              "https://i.pravatar.cc/300"
            }
            alt={`${user.firstName} ${user.lastName}`}
            fill
            className="object-cover"
          />

        </div>

        <div className="mt-6 flex items-center gap-2">

          <h2 className="font-heading text-2xl font-bold tracking-tight">

            {user.firstName}{" "}
            {user.lastName}

          </h2>

          {user.isVerified && (
            <BadgeCheck className="size-5 text-primary" />
          )}

        </div>

        <p className="mt-2 text-muted-foreground">
          {user.email}
        </p>

        <div className="mt-5 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium capitalize text-primary">

          {user.role.replace(
            "_",
            " "
          )}

        </div>

      </div>

    </div>
  );
}