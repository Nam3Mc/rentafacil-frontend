"use client";

import {
  Building2,
  Eye,
  MessageCircle,
  TrendingUp,
} from "lucide-react";

import { usePropertyInquiries } from "@/hooks/use-property-inquiries";
import { useOwnerProperties } from "@/hooks/use-owner-properties";

export function DashboardStats() {
  const { inquiries } =
    usePropertyInquiries();

  const { properties } =
    useOwnerProperties();

  const activeProperties =
    properties.filter(
      (property) =>
        property.status === "active"
    ).length;

  const pendingProperties =
    properties.filter(
      (property) =>
        property.status ===
        "pending_verification"
    ).length;

  const totalViews =
    properties.length * 203;

  const totalLeads =
    inquiries.length;

  const conversionRate =
    totalViews > 0
      ? `${Math.round(
          (totalLeads / totalViews) * 100
        )}%`
      : "0%";

  const stats = [
    {
      label: "Activas",
      value: activeProperties,
      icon: Building2,
      helper:
        pendingProperties > 0
          ? `${pendingProperties} pendientes`
          : "Publicaciones visibles",
    },
    {
      label: "Visualizaciones",
      value:
        totalViews.toLocaleString("es-CO"),
      icon: Eye,
      helper: "Estimadas este mes",
    },
    {
      label: "Solicitudes",
      value: totalLeads,
      icon: MessageCircle,
      helper: "Leads recibidos",
    },
    {
      label: "Conversión",
      value: conversionRate,
      icon: TrendingUp,
      helper: "Solicitudes / vistas",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon =
          stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>

                <p className="mt-3 text-3xl font-bold tracking-tight">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs text-muted-foreground">
                  {stat.helper}
                </p>
              </div>

              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Icon className="size-5" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}