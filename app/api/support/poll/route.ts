import { NextResponse } from "next/server";
import { getPortalAdmin } from "@/lib/portal-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const conversationId = url.searchParams.get("conversationId") ?? "";
  const after = url.searchParams.get("after");

  if (!UUID.test(conversationId)) {
    return NextResponse.json({ error: "Invalid conversation." }, { status: 400 });
  }

  let admin;
  try {
    admin = getPortalAdmin();
  } catch {
    return NextResponse.json({ error: "Live support is unavailable." }, { status: 503 });
  }

  const { data: conv } = await admin
    .from("chat_conversations")
    .select("id, source, status")
    .eq("id", conversationId)
    .maybeSingle();

  if (!conv || conv.source !== "web") {
    return NextResponse.json({ error: "Conversation not found." }, { status: 404 });
  }

  let query = admin
    .from("chat_messages")
    .select("id, body, is_staff_reply, created_at")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true })
    .limit(200);

  if (after) query = query.gt("created_at", after);

  const { data: messages } = await query;

  // Never let a CDN/browser cache a poll response — staff replies must always
  // reach the guest on the very next tick, regardless of conversation status.
  return NextResponse.json(
    {
      status: conv.status as string,
      messages: messages ?? [],
    },
    { headers: { "cache-control": "no-store, max-age=0" } },
  );
}
