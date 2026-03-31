import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://hlzvqixhizdmwfrfunfc.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsenZxaXhoaXpkbXdmcmZ1bmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2NTExODUsImV4cCI6MjA4OTIyNzE4NX0.d53QQaGKdA6ZjpzjG0Ix1gYzgSirRhB-vIWuS0RxBQ8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
