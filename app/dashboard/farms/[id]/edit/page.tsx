import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getFarm } from "@/features/farms/actions/getFarm";
import EditFarmForm from "@/features/farms/components/EditFarmForm";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditFarmPage({
  params,
}: PageProps) {
  const { id } = await params;

  const farm = await getFarm(id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard/farms"
          className="rounded-lg border p-2 hover:bg-accent"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <div>
          <h1 className="text-3xl font-bold">
            Edit Farm
          </h1>

          <p className="text-muted-foreground">
            {farm.farm_name}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border bg-card p-6">
        <EditFarmForm farm={farm} />
      </div>
    </div>
  );
}