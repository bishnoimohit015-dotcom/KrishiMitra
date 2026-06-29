"use client";

import { ReactNode, useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type DashboardLayoutClientProps = {
  children: ReactNode;
};

export default function DashboardLayoutClient({
  children,
}: DashboardLayoutClientProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
  sidebarOpen={isSidebarOpen}
  setSidebarOpen={setIsSidebarOpen}
/>

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar
  setSidebarOpen={setIsSidebarOpen}
/>

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}