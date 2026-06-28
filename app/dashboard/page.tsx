export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">
          🌾 KrishiMitra AI Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Welcome to your farming assistant.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold">🚜 Farms</h2>
            <p className="mt-2 text-muted-foreground">
              Manage all your farms.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold">🌱 Crops</h2>
            <p className="mt-2 text-muted-foreground">
              Track active crops.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold">💰 Expenses</h2>
            <p className="mt-2 text-muted-foreground">
              Monitor farming expenses.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold">☀️ Weather</h2>
            <p className="mt-2 text-muted-foreground">
              View weather forecasts.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold">🤖 AI Assistant</h2>
            <p className="mt-2 text-muted-foreground">
              Ask farming questions.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold">📷 Disease Detection</h2>
            <p className="mt-2 text-muted-foreground">
              Upload crop images for analysis.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}