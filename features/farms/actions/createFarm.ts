"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

import { farmSchema } from "../validation";

export async function createFarm(formData: FormData) {
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

  const { error } = await supabase.from("farms").insert({
    farmer_id: user.id,
    ...data,
  });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dashboard/farms");
}