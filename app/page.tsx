import { createClient } from "@/lib/supabase/server";

export default async function TestPage() {
  const supabase = await createClient();

const { data, error } = await supabase
  .from("farmer_profiles")
  .select("*")
  .limit(1);
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg border p-6 max-w-2xl">
        <h1 className="mb-4 text-2xl font-bold">
          Supabase Database Test
        </h1>

        <pre className="text-sm">
          {JSON.stringify(
            {
              success: !error,
              data,
              error: error?.message,
            },
            null,
            2
          )}
        </pre>
      </div>
    </main>
  );
}