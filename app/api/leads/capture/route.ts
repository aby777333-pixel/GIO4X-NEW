import { NextResponse } from "next/server";
import { getPortalAdmin } from "@/lib/portal-admin";

// Web-to-lead bridge: pushes a marketing-site prospect into the GIO4X *portal*
// CRM (crm_leads in the portal Supabase project) so sales/staff can work it in
// /staff/crm. Mirrors the support-bridge pattern — service-role only, never the
// browser. Best-effort by design: the caller should not block its own UX on it.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Utm = Record<string, string>;

function pickUtm(input: unknown): Utm {
  const out: Utm = {};
  if (input && typeof input === "object") {
    for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const v = (input as Record<string, unknown>)[k];
      if (typeof v === "string" && v.trim()) out[k] = v.trim().slice(0, 200);
    }
  }
  return out;
}

export async function POST(req: Request) {
  let body: {
    name?: unknown;
    email?: unknown;
    phone?: unknown;
    country?: unknown;
    subject?: unknown;
    message?: unknown;
    source?: unknown;
    campaign?: unknown;
    referral_code?: unknown;
    utm?: unknown;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const str = (v: unknown, max = 200) =>
    typeof v === "string" ? v.trim().slice(0, max) : "";

  const name = str(body.name, 120);
  const email = str(body.email);
  const phone = str(body.phone, 40);
  const country = str(body.country, 80);
  const subject = str(body.subject, 160);
  const message = str(body.message, 2000);
  const source = str(body.source, 60) || "web_form";
  const campaign = str(body.campaign, 120);
  const referralCode = str(body.referral_code, 120);
  const utm = pickUtm(body.utm);

  if (!name) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!email && !phone) {
    return NextResponse.json({ error: "Provide an email or phone." }, { status: 400 });
  }
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  let admin;
  try {
    admin = getPortalAdmin();
  } catch {
    // CRM bridge not configured — fail soft so the website form still succeeds.
    return NextResponse.json({ ok: false, bridged: false }, { status: 503 });
  }

  const notes = [subject ? `Subject: ${subject}` : "", message]
    .filter(Boolean)
    .join("\n\n")
    .slice(0, 4000);

  const { data, error } = await admin
    .from("crm_leads")
    .insert({
      full_name: name,
      email: email || null,
      phone: phone || null,
      country: country || null,
      source,
      campaign: campaign || null,
      referral_code: referralCode || null,
      utm,
      owner_notes: notes || null,
      metadata: { origin: "gio4x.com", subject: subject || null },
    })
    .select("id")
    .single();

  if (error || !data) {
    return NextResponse.json({ ok: false, bridged: false }, { status: 500 });
  }

  // Seed the timeline so staff see where it came from.
  await admin.from("crm_lead_activities").insert({
    lead_id: data.id,
    actor_id: null,
    kind: "system",
    body: `Captured from website (${source}).`,
  });

  return NextResponse.json({ ok: true, bridged: true, leadId: data.id as string });
}
