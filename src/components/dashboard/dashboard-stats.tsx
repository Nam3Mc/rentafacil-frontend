"use client";

import { usePropertyInquiries } from "@/hooks/use-property-inquiries";

import {
  Building2,
  Eye,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

import {
  useOwnerProperties,
} from "@/hooks/use-owner-properties";

export function DashboardStats() {

  const { inquiries } =
    usePropertyInquiries();

  const {
    properties,
  } =
    useOwnerProperties();

  const activeProperties =
    properties.filter(
      (property) =>
        property.status ===
        "active"
    ).length;

  const pendingProperties =
    properties.filter(
      (property) =>
        property.status ===
        "pending_verification"
    ).length;

  /*
    Fake analytics
  */

  const totalViews =
    properties.length * 203;

  const totalLeads =
    inquiries.length;

  const conversionRate =
    properties.length
      ? `${Math.min(
          properties.length * 3,
          32
        )}%`
      : "0%";

  const stats = [
    {
      label:
        "Propiedades activas",

      value:
        activeProperties,

      icon:
        Building2,
    },

    {
      label:
        "Visualizaciones",

      value:
        totalViews.toLocaleString(
          "es-CO"
        ),

      icon:
        Eye,
    },

    {
      label:
        "Solicitudes",

      value:
        totalLeads,

      icon:
        MessageCircle,
    },

    {
      label:
        "Conversión",

      value:
        conversionRate,

      icon:
        TrendingUp,
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {

        const Icon =
          stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-[2rem] border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
          >

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm text-muted-foreground">

                  {stat.label}

                </p>

                <p className="mt-4 text-4xl font-bold tracking-tight">

                  {stat.value}

                </p>

              </div>

              <div className="rounded-2xl bg-primary/10 p-3 text-primary">

                <Icon className="size-5" />

              </div>

            </div>

            {/* Optional secondary info */}
            {stat.label ===
              "Propiedades activas" &&
              pendingProperties > 0 && (

              <p className="mt-4 text-sm text-muted-foreground">

                {pendingProperties} pendientes de validación

              </p>

            )}

          </div>
        );
      })}

    </div>
  );
}