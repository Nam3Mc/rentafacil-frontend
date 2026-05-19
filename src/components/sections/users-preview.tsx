"use client";

import { useUsers } from "@/hooks/use-users";

export function UsersPreview() {
  const { users } = useUsers();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 font-heading text-3xl font-bold">
          Usuarios mock
        </h2>

        <div className="grid gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="font-semibold">
                {user.firstName} {user.lastName}
              </p>

              <p className="text-muted-foreground">
                {user.email}
              </p>

              <span className="mt-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                {user.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}