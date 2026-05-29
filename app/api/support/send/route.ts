import { NextResponse } from "next/server";
import { getPortalAdmin } from "@/lib/portal-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function POST(req: Request) {
  let body: { conversationId?: unknown; body?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const conversationId = typeof body.conversationId === "string" ? body.conversationId : "";
  const text = typeof body.body === "string" ? body.body.trim().slice(0, 2000) : "";

  if (!UUID.test(conversationId)) {
    return NextResponse.json({ error: "Invalid conversation." }, { status: 400 });
  }
  if (!text) return NextResponse.json({ error: "Message cannot be empty." }, { status: 400 });

  let admin;
  try {
    admin = getPortalAdmin();
  } catch {
    return NextResponse.json({ error: "Live support is unavailable." }, { status: 503 });
  }

  // Only the public web-guest threads may be written through this bridge —
  // never authenticated customer conversations.
  const { data: conv } = await admin
    .from("chat_conversations")
    .select("id, source")
    .eq("id", conversationId)
    .maybeSingle();

  if (!conv || conv.source !== "web") {
    return NextResponse.json({ error: "Conversation not found." }, { status: 404 });
  }

  const { error } = await admin.from("chat_messages").insert({
    conversation_id: conversationId,
    author_id: null,
    is_staff_reply: false,
    body: text,
  });

  if (error) {
    return NextResponse.json({ error: "Could not send your message." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
