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

export const dashboardNavigation = [
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