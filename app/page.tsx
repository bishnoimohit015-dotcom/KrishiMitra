import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-5xl font-bold text-primary">
        KrishiMitra AI
      </h1>

      <div className="flex flex-wrap gap-4">
        <Button>Primary</Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="outline">
          Outline
        </Button>

        <Button variant="ghost">
          Ghost
        </Button>

        <Button variant="destructive">
          Delete
        </Button>
      </div>
    </main>
  );
}