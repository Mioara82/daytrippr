// app/dashboard/layout.tsx
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex">
      {/* <Sidebar /> */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
