import {
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

import { PropertyInquiry } from "@/types/property-inquiry.types";

interface PropertyInquiryCardProps {
  inquiry: PropertyInquiry;
}

export function PropertyInquiryCard({
  inquiry,
}: PropertyInquiryCardProps) {
  return (
    <div className="rounded-[2rem] border border-border bg-card p-6 transition-all hover:border-primary/20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <User className="size-4 text-primary" />

            <h3 className="font-semibold">
              {inquiry.name}
            </h3>
          </div>

          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <p>{inquiry.email}</p>
            </div>

            {inquiry.phone && (
              <div className="flex items-center gap-2">
                <Phone className="size-4" />
                <p>{inquiry.phone}</p>
              </div>
            )}
          </div>
        </div>

        <div className="w-fit rounded-full bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
          Nuevo lead
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-muted p-5">
        <div className="mb-3 flex items-center gap-2">
          <MessageSquare className="size-4 text-primary" />

          <p className="text-sm font-medium">
            Mensaje
          </p>
        </div>

        <p className="text-sm leading-7 text-muted-foreground">
          {inquiry.message}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {new Date(inquiry.createdAt).toLocaleDateString("es-CO")}
        </p>

        <a
          href={`mailto:${inquiry.email}`}
          className="inline-flex h-10 items-center justify-center rounded-xl border border-border px-4 text-sm font-medium transition-all hover:bg-muted"
        >
          Responder por email
        </a>
        <a
          href="/dashboard/messages"
          className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          Abrir mensajes
        </a>
      </div>
    </div>
  );
}