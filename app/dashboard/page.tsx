import {
  Bot,
  CloudSun,
  Sprout,
  Tractor,
  Wallet,
} from "lucide-react";

import DashboardCard from "@/components/dashboard/DashboardCard";
import HeroBanner from "@/components/dashboard/HeroBanner";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Statistics */}
      <section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <DashboardCard
            title="Total Farms"
            value="0"
            description="Registered farms"
            icon={<Tractor className="h-6 w-6" />}
          />

          <DashboardCard
            title="Active Crops"
            value="0"
            description="Currently growing"
            icon={<Sprout className="h-6 w-6" />}
          />

          <DashboardCard
            title="Monthly Expenses"
            value="₹0"
            description="Current month"
            icon={<Wallet className="h-6 w-6" />}
          />

          <DashboardCard
            title="Weather"
            value="--°"
            description="No forecast available"
            icon={<CloudSun className="h-6 w-6" />}
          />
        </div>
      </section>

      {/* Bottom Section */}
      <section className="grid gap-6 lg:grid-cols-2">
        {/* Quick Actions */}
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Quick Actions
          </h2>

          <div className="mt-6 grid gap-3">
            <button className="rounded-xl border p-4 text-left transition hover:bg-accent">
              🚜 Add Farm
            </button>

            <button className="rounded-xl border p-4 text-left transition hover:bg-accent">
              🌱 Add Crop
            </button>

            <button className="rounded-xl border p-4 text-left transition hover:bg-accent">
              💰 Add Expense
            </button>

            <button className="flex items-center gap-2 rounded-xl border p-4 transition hover:bg-accent">
              <Bot className="h-5 w-5" />
              Ask AI Assistant
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Recent Activity
          </h2>

          <div className="mt-6 flex h-64 items-center justify-center rounded-xl border border-dashed">
            <p className="text-muted-foreground">
              Your recent farming activities will appear here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}