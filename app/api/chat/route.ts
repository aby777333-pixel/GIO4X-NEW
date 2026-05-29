import { NextResponse } from "next/server";
import { GIO4X_SYSTEM_PROMPT } from "@/lib/ai-knowledge";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Turn = { role: "user" | "assistant"; content: string };

const MODEL = "claude-haiku-4-5";
const MAX_TURNS = 12;
const MAX_CHARS = 2000;

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "The assistant is not configured yet. Please use 'Talk to a human'." },
      { status: 503 },
    );
  }

  let body: { messages?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const raw = Array.isArray(body.messages) ? body.messages : [];
  const messages: Turn[] = raw
    .filter(
      (m): m is Turn =>
        !!m &&
        typeof (m as Turn).content === "string" &&
        ((m as Turn).role === "user" || (m as Turn).role === "assistant"),
    )
    .slice(-MAX_TURNS)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));

  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return NextResponse.json({ error: "No question provided." }, { status: 400 });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 500,
        system: GIO4X_SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "The assistant is busy right now. Try again or tap 'Talk to a human'." },
        { status: 502 },
      );
    }

    const data = (await res.json()) as { content?: { type: string; text?: string }[] };
    const reply =
      data.content
        ?.filter((b) => b.type === "text")
        .map((b) => b.text ?? "")
        .join("")
        .trim() || "Sorry, I didn't catch that. Could you rephrase?";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Could not reach the assistant. Tap 'Talk to a human' and we'll help." },
      { status: 502 },
    );
  }
}
