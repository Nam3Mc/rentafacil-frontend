import {
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

import { PropertyInquiry } from "@/types/property-inquiry.types";

interface PropertyInquiryCardProps {
  inquiry: PropertyInquiry;
  variant?: "compact" | "full";
}

export function PropertyInquiryCard({
  inquiry,
  variant = "compact",
}: PropertyInquiryCardProps) {
  const isFull = variant === "full";

  return (
    <div className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/20">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <User className="size-4 shrink-0 text-primary" />

            <h3 className="truncate font-semibold">
              {inquiry.name}
            </h3>
          </div>

          <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <div className="flex min-w-0 items-center gap-2">
              <Mail className="size-4 shrink-0" />

              <p className="truncate">
                {inquiry.email}
              </p>
            </div>

            {isFull && inquiry.phone && (
              <div className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />

                <p>{inquiry.phone}</p>
              </div>
            )}
          </div>
        </div>

        <div className="shrink-0 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
          Lead
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-muted p-4">
        <div className="mb-2 flex items-center gap-2">
          <MessageSquare className="size-4 text-primary" />

          <p className="text-sm font-medium">
            Mensaje
          </p>
        </div>

        <p
          className={`text-sm leading-6 text-muted-foreground ${
            isFull ? "" : "line-clamp-2"
          }`}
        >
          {inquiry.message}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          {new Date(inquiry.createdAt).toLocaleDateString("es-CO")}
        </p>

        <div className="flex flex-wrap gap-2">
          <a
            href={`mailto:${inquiry.email}`}
            className="inline-flex h-9 items-center justify-center rounded-xl border border-border px-3 text-xs font-medium transition-all hover:bg-muted"
          >
            Email
          </a>

          <a
            href="/dashboard/messages"
            className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-3 text-xs font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Mensajes
          </a>
        </div>
      </div>
    </div>
  );
}