import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Server-only admin client to the GIO4X *portal* Supabase project (separate
// from the marketing site's own project). Used by the support-bridge API to
// open guest live-chat threads that land in the staff console at /staff/chats.
// The service-role key NEVER reaches the browser — these helpers are imported
// only from route handlers.

const PORTAL_URL = process.env.PORTAL_SUPABASE_URL;
const SERVICE_ROLE = process.env.PORTAL_SUPABASE_SERVICE_ROLE_KEY;

let cached: SupabaseClient | null = null;

export function getPortalAdmin(): SupabaseClient {
  if (!PORTAL_URL || !SERVICE_ROLE) {
    throw new Error(
      "Portal bridge not configured: set PORTAL_SUPABASE_URL and PORTAL_SUPABASE_SERVICE_ROLE_KEY.",
    );
  }
  if (!cached) {
    cached = createClient(PORTAL_URL, SERVICE_ROLE, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return cached;
}

export const portalBridgeConfigured = Boolean(PORTAL_URL && SERVICE_ROLE);
