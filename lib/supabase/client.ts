import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://opjswqdffbpmljqmaoox.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wanN3cWRmZmJwbWxqcW1hb294Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxOTc2MDMsImV4cCI6MjA2ODc3MzYwM30.sjiTTj0IEUJjHKWGQOdmTwhV2rUkMnvrkA2oxrZzGlk";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("❌ Missing Supabase credentials in environment variables");
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null; 
