import { Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { MainLayout } from "@/components/layout";
import { Bell, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Info, Settings, X } from "lucide-react";

const alertTypes = [
  { type: "weather", label: "Weather", color: "text-info", bgColor: "bg-info/10" },
  { type: "disease", label: "Disease", color: "text-error", bgColor: "bg-error/10" },
  { type: "expense", label: "Expense", color: "text-success", bgColor: "bg-success/10" },
  { type: "info", label: "Info", color: "text-accent", bgColor: "bg-accent/10" },
];

const alerts = [
  {
    id: 1,
    type: "weather",
    title: "Heavy Rain Alert",
    message: "Heavy rainfall expected in your area on Thursday. Take necessary precautions.",
    time: "2 hours ago",
    read: false,
    priority: "high",
  },
  {
    id: 2,
    type: "disease",
    title: "Possible Disease Detected",
    message: "AI analysis suggests possible fungal infection in wheat crops. Check recommended treatments.",
    time: "5 hours ago",
    read: false,
    priority: "medium",
  },
  {
    id: 3,
    type: "expense",
    title: "Budget Alert",
    message: "You have exceeded your monthly labor expense budget by 15%.",
    time: "1 day ago",
    read: true,
    priority: "low",
  },
  {
    id: 4,
    type: "info",
    title: "New Feature Available",
    message: "Voice recording is now available in Ask AI. Try it out!",
    time: "2 days ago",
    read: true,
    priority: "low",
  },
];

export default function AlertsPage() {
  return (
    <MainLayout title="Alerts" showSearch={false}>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Alerts & Notifications</h2>
            <p className="text-foreground-muted mt-1">
              Stay updated with weather, crops, and important alerts
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" leftIcon={<Settings className="w-4 h-4" />}>
              Settings
            </Button>
            <Button variant="ghost">Mark All Read</Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-4 gap-4">
          {alertTypes.map((alert) => (
            <Card key={alert.type} hoverable>
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 rounded-lg ${alert.bgColor} flex items-center justify-center mx-auto mb-3`}>
                  <Bell className={`w-6 h-6 ${alert.color}`} />
                </div>
                <p className="text-2xl font-bold text-foreground">
                  {alerts.filter((a) => a.type === alert.type).length}
                </p>
                <p className="text-sm text-foreground-muted">{alert.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Alerts</CardTitle>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm rounded-md bg-accent text-background">
                  All
                </button>
                <button className="px-3 py-1 text-sm rounded-md text-foreground-muted hover:bg-background-elevated">
                  Unread
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => {
                const alertType = alertTypes.find((t) => t.type === alert.type);
                return (
                  <div
                    key={alert.id}
                    className={`flex items-start gap-4 p-4 rounded-lg border ${
                      alert.read
                        ? "bg-background-elevated border-border"
                        : "bg-background-card border-accent/30"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${alertType?.bgColor} flex items-center justify-center flex-shrink-0`}
                    >
                      {alert.type === "weather" && (
                        <Info className={`w-5 h-5 ${alertType?.color}`} />
                      )}
                      {alert.type === "disease" && (
                        <AlertTriangle className={`w-5 h-5 ${alertType?.color}`} />
                      )}
                      {alert.type === "expense" && (
                        <CheckCircle className={`w-5 h-5 ${alertType?.color}`} />
                      )}
                      {alert.type === "info" && (
                        <Bell className={`w-5 h-5 ${alertType?.color}`} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-foreground">{alert.title}</p>
                        {!alert.read && (
                          <span className="w-2 h-2 rounded-full bg-accent" />
                        )}
                      </div>
                      <p className="text-sm text-foreground-muted mt-1">
                        {alert.message}
                      </p>
                      <p className="text-xs text-foreground-subtle mt-2">
                        {alert.time}
                      </p>
                    </div>
                    <button className="p-2 rounded-md hover:bg-background-elevated text-foreground-muted">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
