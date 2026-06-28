"use client";

import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b bg-background px-8 py-4">
      <div>
        <h2 className="text-2xl font-bold">
          Good Evening 👋
        </h2>

        <p className="text-muted-foreground">
          Welcome back to KrishiMitra AI
        </p>
      </div>

      <button className="rounded-full border p-2 hover:bg-accent transition">
        <Bell className="h-5 w-5" />
      </button>
    </header>
  );
}