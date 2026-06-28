import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FarmForm from "@/features/farms/components/FarmForm";

export default function NewFarmPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/farms"
          className="rounded-lg border p-2 hover:bg-accent transition"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div>
          <h1 className="text-3xl font-bold">
            Add New Farm
          </h1>

          <p className="text-muted-foreground">
            Create a new farm for tracking crops, expenses, weather,
            and AI recommendations.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <FarmForm />
      </div>
    </div>
  );
}