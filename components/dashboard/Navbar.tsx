"use client";

import type { Dispatch, SetStateAction } from "react";
import { Bell, Menu } from "lucide-react";
import UserMenu from "./UserMenu";

type NavbarProps = {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Navbar({ setSidebarOpen }: NavbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-md p-2 transition hover:bg-accent lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <h2 className="text-xl font-bold sm:text-2xl">
            Good Evening 👋
          </h2>

          <p className="hidden text-sm text-muted-foreground sm:block">
            Welcome back to KrishiMitra AI
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-full border p-2 transition hover:bg-accent">
          <Bell className="h-5 w-5" />
        </button>

        <UserMenu />
      </div>
    </header>
  );
}