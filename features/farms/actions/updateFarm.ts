"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

import { farmSchema } from "../validation";

export async function updateFarm(
  id: string,
  formData: FormData
) {
  const supabase = await createClient();

  const data = farmSchema.parse({
    farm_name: formData.get("farm_name"),
    location: formData.get("location"),
    area: Number(formData.get("area")),
    area_unit: formData.get("area_unit"),
    soil_type: formData.get("soil_type"),
    irrigation_type: formData.get("irrigation_type"),
    notes: formData.get("notes"),
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { data: updatedFarm, error } = await supabase
    .from("farms")
    .update({
      ...data,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .eq("farmer_id", user.id)
    .select()
    .single();

  if (error || !updatedFarm) {
    throw new Error("Farm not found.");
  }

  revalidatePath("/dashboard/farms");
  revalidatePath(`/dashboard/farms/${id}`);
  revalidatePath(`/dashboard/farms/${id}/edit`);

  return {
    success: true,
  };
}