"use client";

import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "@/components/ui";
import { MainLayout } from "@/components/layout";
import { User, Bell, Shield, Globe, LogOut } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: true,
    weather: true,
    disease: true,
    expense: false,
  });

  return (
    <MainLayout title="Settings" showSearch={false}>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Settings</h2>
          <p className="text-foreground-muted mt-1">
            Manage your account and preferences
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-accent" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                <User className="w-10 h-10 text-accent" />
              </div>
              <Button variant="outline" size="sm">
                Change Photo
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Full Name" placeholder="Enter your name" />
              <Input label="Email" type="email" placeholder="farmer@example.com" />
              <Input label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" />
              <Input label="Location" placeholder="Village, District, State" />
            </div>
            <div className="flex justify-end">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-accent" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-background-elevated">
                <div>
                  <p className="font-medium text-foreground">Email Notifications</p>
                  <p className="text-sm text-foreground-muted">
                    Receive updates via email
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotifications({ ...notifications, email: !notifications.email })
                  }
                  className={`w-12 h-6 rounded-full transition-colors ${
                    notifications.email ? "bg-accent" : "bg-background"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      notifications.email ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-background-elevated">
                <div>
                  <p className="font-medium text-foreground">Push Notifications</p>
                  <p className="text-sm text-foreground-muted">
                    Get real-time alerts on your device
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotifications({ ...notifications, push: !notifications.push })
                  }
                  className={`w-12 h-6 rounded-full transition-colors ${
                    notifications.push ? "bg-accent" : "bg-background"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      notifications.push ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-background-elevated">
                <div>
                  <p className="font-medium text-foreground">Weather Alerts</p>
                  <p className="text-sm text-foreground-muted">
                    Severe weather warnings
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotifications({
                      ...notifications,
                      weather: !notifications.weather,
                    })
                  }
                  className={`w-12 h-6 rounded-full transition-colors ${
                    notifications.weather ? "bg-accent" : "bg-background"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      notifications.weather ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-background-elevated">
                <div>
                  <p className="font-medium text-foreground">Disease Alerts</p>
                  <p className="text-sm text-foreground-muted">
                    Crop disease notifications
                  </p>
                </div>
                <button
                  onClick={() =>
                    setNotifications({
                      ...notifications,
                      disease: !notifications.disease,
                    })
                  }
                  className={`w-12 h-6 rounded-full transition-colors ${
                    notifications.disease ? "bg-accent" : "bg-background"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      notifications.disease ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              Language & Region
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Language
                </label>
                <select className="w-full px-4 py-2.5 rounded-md border border-border bg-background-elevated text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="mr">Marathi</option>
                  <option value="ta">Tamil</option>
                  <option value="te">Telugu</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Region
                </label>
                <select className="w-full px-4 py-2.5 rounded-md border border-border bg-background-elevated text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="north">North India</option>
                  <option value="south">South India</option>
                  <option value="east">East India</option>
                  <option value="west">West India</option>
                  <option value="central">Central India</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full sm:w-auto">
              Change Password
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Two-Factor Authentication
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-error">
              <LogOut className="w-5 h-5" />
              Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="danger">Logout</Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
