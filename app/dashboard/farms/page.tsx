import Link from "next/link";
import { Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { getFarms } from "@/features/farms/actions/getFarms";
import { deleteFarm } from "@/features/farms/actions/deleteFarm";

export default async function FarmsPage() {
  const farms = await getFarms();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Farms</h1>
          <p className="text-muted-foreground">
            Manage all your farms.
          </p>
        </div>

        <Link href="/dashboard/farms/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Farm
          </Button>
        </Link>
      </div>

      {farms.length === 0 ? (
        <Card>
          <CardContent className="flex h-60 items-center justify-center">
            <p className="text-muted-foreground">
              No farms found. Create your first farm.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {farms.map((farm) => (
            <Card key={farm.id}>
              <CardContent className="space-y-4 p-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    {farm.farm_name}
                  </h2>

                  <p className="text-muted-foreground">
                    📍 {farm.location}
                  </p>
                </div>

                <div className="space-y-1 text-sm">
                  <p>
                    🌾 {farm.area} {farm.area_unit}
                  </p>

                  <p>
                    🌱 {farm.soil_type}
                  </p>

                  <p>
                    💧 {farm.irrigation_type}
                  </p>
                </div>

                <form
                  action={async () => {
                    "use server";
                    await deleteFarm(farm.id);
                  }}
                >
                  <Button
                    type="submit"
                    variant="destructive"
                    className="w-full"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Farm
                  </Button>
                </form>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}