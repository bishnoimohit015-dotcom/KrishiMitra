import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { MainLayout } from "@/components/layout";
import { TrendingUp, TrendingDown, Cloud, Leaf, Bell, Receipt } from "lucide-react";

const quickStats = [
  {
    title: "Total Expenses",
    value: "₹45,230",
    change: "+12%",
    trend: "up",
    icon: Receipt,
    color: "text-success",
  },
  {
    title: "Active Alerts",
    value: "3",
    change: "-2",
    trend: "down",
    icon: Bell,
    color: "text-warning",
  },
  {
    title: "Crops Monitored",
    value: "6",
    change: "+1",
    trend: "up",
    icon: Leaf,
    color: "text-accent",
  },
  {
    title: "Weather Score",
    value: "Good",
    change: "Stable",
    trend: "stable",
    icon: Cloud,
    color: "text-info",
  },
];

export default function DashboardPage() {
  return (
    <MainLayout title="Dashboard">
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-background-elevated flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className="flex items-center gap-1">
                      {stat.trend === "up" && <TrendingUp className="w-4 h-4 text-success" />}
                      {stat.trend === "down" && <TrendingDown className="w-4 h-4 text-error" />}
                      <span
                        className={`text-sm ${
                          stat.trend === "up"
                            ? "text-success"
                            : stat.trend === "down"
                            ? "text-error"
                            : "text-foreground-muted"
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-foreground-muted">{stat.title}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 rounded-lg bg-background-elevated"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">
                        Sample Activity {i}
                      </p>
                      <p className="text-xs text-foreground-muted">Description here</p>
                    </div>
                    <span className="text-xs text-foreground-subtle">2h ago</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weather Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Cloud className="w-16 h-16 text-info mx-auto mb-4" />
                <p className="text-4xl font-bold text-foreground">28°C</p>
                <p className="text-foreground-muted mt-2">Partly Cloudy</p>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div>
                    <p className="text-lg font-semibold text-foreground">65%</p>
                    <p className="text-xs text-foreground-muted">Humidity</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground">12 km/h</p>
                    <p className="text-xs text-foreground-muted">Wind Speed</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground">0%</p>
                    <p className="text-xs text-foreground-muted">Rain</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Crop Health Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Rice", "Wheat", "Cotton"].map((crop) => (
                <div
                  key={crop}
                  className="p-4 rounded-lg border border-border bg-background-elevated"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{crop}</span>
                    <span className="text-sm text-success">Healthy</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-background">
                    <div className="w-4/5 h-full rounded-full bg-success" />
                  </div>
                  <p className="text-xs text-foreground-muted mt-2">80% health score</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
