"use server";

import { createClient } from "@/lib/supabase/server";
import { signUpSchema } from "./schema";

type SignUpInput = {
  fullName: string;
  email: string;
  password: string;
};

export async function signUp(input: SignUpInput) {
  const validated = signUpSchema.safeParse(input);

  if (!validated.success) {
    return {
      success: false,
      error: validated.error.issues[0].message,
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: validated.data.email,
    password: validated.data.password,
    options: {
      data: {
        full_name: validated.data.fullName,
      },
    },
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