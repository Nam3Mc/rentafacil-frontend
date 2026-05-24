"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Building2,
  Heart,
  LayoutDashboard,
  MessageCircle,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import { useAuthStore } from "@/store/auth.store";
import { Logo } from "../shared/logo";

const guestLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Favoritos",
    href: "/dashboard/favorites",
    icon: Heart,
  },
  {
    label: "Mensajes",
    href: "/dashboard/messages",
    icon: MessageCircle,
  },
];

const ownerLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Mis propiedades",
    href: "/dashboard/properties",
    icon: Building2,
  },
  {
    label: "Leads",
    href: "/dashboard/leads",
    icon: Users,
  },
  {
    label: "Mensajes",
    href: "/dashboard/messages",
    icon: MessageCircle,
  },
  {
    label: "Nueva propiedad",
    href: "/dashboard/new-property",
    icon: Building2,
  },
  {
    label: "Configuración",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

const adminLinks = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Usuarios",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    label: "Propiedades",
    href: "/dashboard/properties",
    icon: Building2,
  },
  {
    label: "Moderación",
    href: "/dashboard/moderation",
    icon: Shield,
  },
];

export function DashboardSidebar() {

  const pathname =
    usePathname();

  const { user } =
    useAuthStore();

  const role =
    user?.role || "guest";
    
  const links =
    role === "guest"
      ? guestLinks
      : role === "owner"
      ? ownerLinks
      : adminLinks;

  return (
    <aside className="hidden w-72 border-r border-border bg-card lg:flex lg:flex-col">
      
      {/* Logo */}
      <div className="border-b border-border px-6 py-6">
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-tight"
        >
          <Logo compact/>
        </Link>
      </div>

      {/* Role Badge */}
      <div className="px-4 pt-4">
        <div className="rounded-2xl bg-primary/10 px-4 py-3">
          <p className="text-sm text-muted-foreground">
            Rol actual
          </p>

          <p className="mt-1 font-semibold capitalize text-primary">
            {role.replace("_", " ")}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {links.map((link) => {

          const isActive =
            pathname === link.href;
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <Icon className="size-5" />

              <span className="font-medium">
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <div className="rounded-2xl bg-muted p-4">
          <p className="text-sm font-medium">
            Plataforma segura
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Contratos digitales y validación segura.
          </p>
        </div>
      </div>
    </aside>
  );
}