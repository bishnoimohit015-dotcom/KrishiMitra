import { ArrowRight, Sparkles, Tractor } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600 p-8 text-white">
      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            AI Powered Farming Assistant
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Welcome to KrishiMitra AI 🌾
          </h1>

          <p className="mt-4 text-lg text-green-50">
            Manage farms, monitor crops, track expenses, check weather,
            detect diseases and get AI-powered farming advice from one
            dashboard.
          </p>

          <button className="mt-8 flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-green-700 transition hover:scale-105">
            Add Your First Farm
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-green-100">Active Farms</p>
            <h2 className="mt-2 text-3xl font-bold">0</h2>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-green-100">Today's Weather</p>
            <h2 className="mt-2 text-3xl font-bold">--°</h2>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-green-100">AI Queries</p>
            <h2 className="mt-2 text-3xl font-bold">0</h2>
          </div>

          <div className="rounded-2xl bg-white/15 p-5 backdrop-blur">
            <p className="text-sm text-green-100">Equipment</p>
            <div className="mt-2">
              <Tractor className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 left-20 h-60 w-60 rounded-full bg-lime-300/20 blur-3xl" />
    </section>
  );
}