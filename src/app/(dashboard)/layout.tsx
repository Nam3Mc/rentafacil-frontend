"use client";

import { useAuthGuard } from "@/hooks/use-auth-guard";
import { DashboardHeader } from "@/components/layout/dashboard-header";

import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const { user } =
    useAuthGuard();
  
  if (!user) {
    return null;
  }
  return (
    <div className="flex min-h-screen bg-muted/30">
      
      <DashboardSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        
        <DashboardHeader />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}