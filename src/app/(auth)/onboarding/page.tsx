"use client";

import { Button, Card, Input } from "@/components/ui";
import { Leaf, Cloud, Bell, Receipt } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Create Your Account",
    description: "Set up your KrishiMitra AI profile",
  },
  {
    id: 2,
    title: "Farm Details",
    description: "Tell us about your farm",
  },
  {
    id: 3,
    title: "Select Crops",
    description: "Choose the crops you grow",
  },
  {
    id: 4,
    title: "Complete Setup",
    description: "You&apos;re all set!",
  },
];

const cropOptions = [
  { id: "rice", label: "Rice", icon: "🌾" },
  { id: "wheat", label: "Wheat", icon: "🌾" },
  { id: "cotton", label: "Cotton", icon: "🌿" },
  { id: "sugarcane", label: "Sugarcane", icon: "🎋" },
  { id: "vegetables", label: "Vegetables", icon: "🥬" },
  { id: "fruits", label: "Fruits", icon: "🍎" },
  { id: "pulses", label: "Pulses", icon: "🫘" },
  { id: "spices", label: "Spices", icon: "🌶️" },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
            <Leaf className="w-6 h-6 text-background" />
          </div>
          <span className="text-xl font-bold text-foreground">KrishiMitra AI</span>
        </Link>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step.id
                    ? "bg-accent text-background"
                    : "bg-background-elevated text-foreground-subtle"
                }`}
              >
                {step.id}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-1 mx-2 rounded ${
                    currentStep > step.id ? "bg-accent" : "bg-background-elevated"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <Card>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-foreground">{steps[currentStep - 1].title}</h1>
            <p className="text-foreground-muted mt-2">{steps[currentStep - 1].description}</p>
          </div>

          {currentStep === 1 && (
            <form className="space-y-4">
              <Input label="Full Name" placeholder="Enter your name" />
              <Input label="Email" type="email" placeholder="farmer@example.com" />
              <Input label="Password" type="password" placeholder="Create a password" />
              <Input label="Phone Number" type="tel" placeholder="+91 XXXXX XXXXX" />
            </form>
          )}

          {currentStep === 2 && (
            <form className="space-y-4">
              <Input label="Farm Name" placeholder="Enter farm name" />
              <Input label="Location" placeholder="Village, District, State" />
              <Input label="Total Land Area" placeholder="Enter in acres" />
              <Input
                label="Soil Type"
                placeholder="e.g., Alluvial, Black, Red, Laterite"
              />
            </form>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <p className="text-sm text-foreground-muted mb-4">
                Select the crops you currently grow or plan to grow:
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {cropOptions.map((crop) => (
                  <button
                    key={crop.id}
                    className="p-4 rounded-lg border border-border bg-background-elevated hover:border-accent transition-colors text-center"
                  >
                    <span className="text-2xl mb-2 block">{crop.icon}</span>
                    <span className="text-sm text-foreground">{crop.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto">
                <Leaf className="w-10 h-10 text-success" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  Welcome to KrishiMitra AI!
                </h2>
                <p className="text-foreground-muted">
                  Your farm is now set up. Let&apos;s start managing your agricultural journey.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-background-elevated">
                  <Cloud className="w-6 h-6 text-info mx-auto mb-2" />
                  <p className="text-xs text-foreground-muted">Weather Updates</p>
                </div>
                <div className="p-4 rounded-lg bg-background-elevated">
                  <Bell className="w-6 h-6 text-warning mx-auto mb-2" />
                  <p className="text-xs text-foreground-muted">Smart Alerts</p>
                </div>
                <div className="p-4 rounded-lg bg-background-elevated">
                  <Receipt className="w-6 h-6 text-success mx-auto mb-2" />
                  <p className="text-xs text-foreground-muted">Expense Tracking</p>
                </div>
                <div className="p-4 rounded-lg bg-background-elevated">
                  <Leaf className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-xs text-foreground-muted">Disease Detection</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            {currentStep > 1 && (
              <Button variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            {currentStep < steps.length ? (
              <Button onClick={nextStep} className={currentStep === 1 ? "ml-auto" : ""}>
                Continue
              </Button>
            ) : (
              <Link href="/dashboard" className="ml-auto">
                <Button>Go to Dashboard</Button>
              </Link>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}
