import { Button, Card } from "@/components/ui";
import { Navbar } from "@/components/layout";
import { Leaf, Cloud, Leaf as DiseaseIcon, Receipt, Bell, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section className="relative px-4 lg:px-8 py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">AI-Powered Farming</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Smart Farming with <span className="text-accent">KrishiMitra AI</span>
            </h1>

            <p className="text-lg lg:text-xl text-foreground-muted max-w-2xl mx-auto mb-8">
              Your intelligent farming companion for disease detection, weather forecasts,
              expense tracking, and agricultural insights.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/login">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg">
                  Explore Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12">
              Powerful Features
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card hoverable className="group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <DiseaseIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Disease Detection</h3>
                <p className="text-foreground-muted text-sm">
                  Identify crop diseases instantly using AI-powered image recognition.
                </p>
              </Card>

              <Card hoverable className="group">
                <div className="w-12 h-12 rounded-lg bg-info/10 flex items-center justify-center mb-4 group-hover:bg-info/20 transition-colors">
                  <Cloud className="w-6 h-6 text-info" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Weather Forecasts</h3>
                <p className="text-foreground-muted text-sm">
                  Get accurate weather updates tailored for farming activities.
                </p>
              </Card>

              <Card hoverable className="group">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4 group-hover:bg-success/20 transition-colors">
                  <Receipt className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Expense Tracking</h3>
                <p className="text-foreground-muted text-sm">
                  Manage farming expenses and track your agricultural investments.
                </p>
              </Card>

              <Card hoverable className="group">
                <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center mb-4 group-hover:bg-warning/20 transition-colors">
                  <Bell className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Smart Alerts</h3>
                <p className="text-foreground-muted text-sm">
                  Receive timely notifications for weather changes and crop health.
                </p>
              </Card>

              <Card hoverable className="group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Ask AI</h3>
                <p className="text-foreground-muted text-sm">
                  Get instant answers to your farming questions from our AI assistant.
                </p>
              </Card>

              <Card hoverable className="group">
                <div className="w-12 h-12 rounded-lg bg-error/10 flex items-center justify-center mb-4 group-hover:bg-error/20 transition-colors">
                  <Leaf className="w-6 h-6 text-error" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Crop Management</h3>
                <p className="text-foreground-muted text-sm">
                  Plan and manage your crops with intelligent recommendations.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-4 lg:px-8 py-16 bg-background-card/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-foreground-muted mb-8">
              Join thousands of farmers using KrishiMitra AI to improve their agricultural practices.
            </p>
            <Link href="/onboarding">
              <Button size="lg">Start Free Trial</Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="px-4 lg:px-8 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Leaf className="w-5 h-5 text-background" />
            </div>
            <span className="text-lg font-bold text-foreground">KrishiMitra AI</span>
          </div>
          <p className="text-sm text-foreground-subtle">
            © 2024 KrishiMitra AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
