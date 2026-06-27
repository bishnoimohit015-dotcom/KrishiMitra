import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { MainLayout } from "@/components/layout";
import { Cloud, Droplets, Wind, Sun, Thermometer } from "lucide-react";

const forecastDays = [
  { day: "Today", temp: "28°C", icon: Sun, condition: "Sunny" },
  { day: "Tomorrow", temp: "30°C", icon: Cloud, condition: "Partly Cloudy" },
  { day: "Wed", temp: "27°C", icon: Cloud, condition: "Cloudy" },
  { day: "Thu", temp: "25°C", icon: Droplets, condition: "Rain" },
  { day: "Fri", temp: "26°C", icon: Cloud, condition: "Partly Cloudy" },
  { day: "Sat", temp: "29°C", icon: Sun, condition: "Sunny" },
  { day: "Sun", temp: "31°C", icon: Sun, condition: "Sunny" },
];

export default function WeatherPage() {
  return (
    <MainLayout title="Weather">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Weather Forecast</h2>
          <p className="text-foreground-muted mt-1">
            7-day weather forecast for your farm location
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="text-center lg:text-left">
                <p className="text-foreground-muted">Current Weather</p>
                <div className="flex items-center justify-center lg:justify-start gap-4 mt-2">
                  <Sun className="w-16 h-16 text-warning" />
                  <div>
                    <p className="text-5xl font-bold text-foreground">28°C</p>
                    <p className="text-foreground-muted mt-1">Sunny</p>
                  </div>
                </div>
                <p className="text-sm text-foreground-muted mt-4">
                  Feels like 30°C | UV Index: 6 (High)
                </p>
              </div>

              <div className="flex-1 w-full lg:w-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg bg-background-elevated text-center">
                    <Droplets className="w-6 h-6 text-info mx-auto mb-2" />
                    <p className="text-lg font-semibold text-foreground">65%</p>
                    <p className="text-xs text-foreground-muted">Humidity</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background-elevated text-center">
                    <Wind className="w-6 h-6 text-accent mx-auto mb-2" />
                    <p className="text-lg font-semibold text-foreground">12 km/h</p>
                    <p className="text-xs text-foreground-muted">Wind Speed</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background-elevated text-center">
                    <Thermometer className="w-6 h-6 text-error mx-auto mb-2" />
                    <p className="text-lg font-semibold text-foreground">32°C</p>
                    <p className="text-xs text-foreground-muted">Max Temp</p>
                  </div>
                  <div className="p-4 rounded-lg bg-background-elevated text-center">
                    <Thermometer className="w-6 h-6 text-info mx-auto mb-2" />
                    <p className="text-lg font-semibold text-foreground">24°C</p>
                    <p className="text-xs text-foreground-muted">Min Temp</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7-Day Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              {forecastDays.map((day) => {
                const Icon = day.icon;
                return (
                  <div
                    key={day.day}
                    className="p-4 rounded-lg bg-background-elevated text-center"
                  >
                    <p className="font-medium text-foreground">{day.day}</p>
                    <Icon className="w-8 h-8 text-accent mx-auto my-3" />
                    <p className="text-lg font-semibold text-foreground">{day.temp}</p>
                    <p className="text-xs text-foreground-muted mt-1">{day.condition}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Farming Advisory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                  <p className="font-medium text-success">Good Day for Harvesting</p>
                  <p className="text-sm text-foreground-muted mt-1">
                    Clear skies expected. Ideal conditions for harvesting crops.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                  <p className="font-medium text-warning">Irrigation Reminder</p>
                  <p className="text-sm text-foreground-muted mt-1">
                    Rain expected on Thursday. Adjust irrigation schedule accordingly.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-info/10 border border-info/20">
                  <p className="font-medium text-info">Fertilizer Application</p>
                  <p className="text-sm text-foreground-muted mt-1">
                    Apply fertilizers after the rain on Thursday for better absorption.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Soil Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground-muted">Soil Moisture</span>
                    <span className="text-foreground font-medium">68%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-background">
                    <div className="w-[68%] h-full rounded-full bg-success" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground-muted">Temperature (10cm)</span>
                    <span className="text-foreground font-medium">24°C</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-background">
                    <div className="w-[48%] h-full rounded-full bg-warning" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground-muted">pH Level</span>
                    <span className="text-foreground font-medium">6.8</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-background">
                    <div className="w-[85%] h-full rounded-full bg-info" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
