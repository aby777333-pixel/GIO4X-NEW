import { NextResponse } from "next/server";
import { getPortalAdmin } from "@/lib/portal-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  let body: { name?: unknown; email?: unknown; message?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 120) : "";
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 200) : "";
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 2000) : "";

  if (!name) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  let admin;
  try {
    admin = getPortalAdmin();
  } catch {
    return NextResponse.json(
      { error: "Live support is not available right now. Please email support@gio4x.com." },
      { status: 503 },
    );
  }

  const { data: conv, error } = await admin
    .from("chat_conversations")
    .insert({
      guest_name: name,
      guest_email: email,
      source: "web",
      subject: "Website live chat",
      status: "open",
    })
    .select("id")
    .single();

  if (error || !conv) {
    return NextResponse.json({ error: "Could not start the chat. Please try again." }, { status: 500 });
  }

  if (message) {
    await admin.from("chat_messages").insert({
      conversation_id: conv.id,
      author_id: null,
      is_staff_reply: false,
      body: message,
    });
  }

  return NextResponse.json({ conversationId: conv.id as string });
}
