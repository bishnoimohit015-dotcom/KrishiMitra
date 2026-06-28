"use server";

import { createClient } from "@/lib/supabase/server";

export async function getFarm(id: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { data, error } = await supabase
    .from("farms")
    .select("*")
    .eq("id", id)
    .eq("farmer_id", user.id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}