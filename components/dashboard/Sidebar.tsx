"use client";

import Link from "next/link";
import {
  Home,
  Tractor,
  Sprout,
  Wallet,
  CloudSun,
  Bot,
  Camera,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Farms",
    href: "/dashboard/farms",
    icon: Tractor,
  },
  {
    title: "Crops",
    href: "/dashboard/crops",
    icon: Sprout,
  },
  {
    title: "Expenses",
    href: "/dashboard/expenses",
    icon: Wallet,
  },
  {
    title: "Weather",
    href: "/dashboard/weather",
    icon: CloudSun,
  },
  {
    title: "AI Assistant",
    href: "/dashboard/ai",
    icon: Bot,
  },
  {
    title: "Disease Detection",
    href: "/dashboard/disease",
    icon: Camera,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-card min-h-screen p-6">
      <h1 className="mb-8 text-2xl font-bold">
        🌾 KrishiMitra AI
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-accent"
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}