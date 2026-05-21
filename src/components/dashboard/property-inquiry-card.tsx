import {
  Mail,
  MessageSquare,
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
    <div className="rounded-[2rem] border border-border bg-card p-6">

      <div className="flex items-start justify-between gap-4">

        <div>

          <div className="flex items-center gap-2">

            <User className="size-4 text-primary" />

            <h3 className="font-semibold">
              {inquiry.name}
            </h3>

          </div>

          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">

            <Mail className="size-4" />

            <p>
              {inquiry.email}
            </p>

          </div>

        </div>

        <div className="rounded-full bg-primary/10 px-4 py-2 text-xs font-medium text-primary">

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

      <div className="mt-6 flex items-center justify-between">

        <p className="text-sm text-muted-foreground">
          {inquiry.createdAt}
        </p>

        <button
          className="rounded-xl border border-border px-4 py-2 text-sm font-medium transition-all hover:bg-muted"
        >
          Responder
        </button>

      </div>

    </div>
  );
}