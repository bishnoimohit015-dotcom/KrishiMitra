"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

export async function deleteFarm(id: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase
    .from("farms")
    .delete()
    .eq("id", id)
    .eq("farmer_id", user.id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dashboard/farms");
}