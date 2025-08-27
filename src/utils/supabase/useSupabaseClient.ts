import { useAuth } from "@clerk/nextjs";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useMemo } from "react";
import type { Database } from "../../../database.types";

export default function useSupabaseClient(): SupabaseClient<Database> {
  const { getToken } = useAuth();

  const supabase = useMemo(() => {
    return createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        global: {
          fetch: async (url, options = {}) => {
            const clerkToken = await getToken({
              template: "supabase",
            });

            const headers = new Headers(options?.headers);
            if (clerkToken) {
              headers.set("Authorization", `Bearer ${clerkToken}`);
            }

            return fetch(url, {
              ...options,
              headers,
            });
          },
        },
      }
    );
  }, [getToken]);

  return supabase;
}
