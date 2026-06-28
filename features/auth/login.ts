"use server";

import { createClient } from "@/lib/supabase/server";

type LoginInput = {
  email: string;
  password: string;
};

export async function login(input: LoginInput) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: input.email,
    password: input.password,
  });

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
  };
}