"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Bot, Headset, ArrowLeft, ShieldCheck } from "lucide-react";

type Mode = "ai" | "human-form" | "human-chat";

type Msg = { id: string; role: "user" | "assistant"; content: string };
type GuestMsg = { id: string; body: string; is_staff_reply: boolean; created_at: string };

const STORAGE_KEY = "gio4x_support_conversation";
const POLL_MS = 4000;

const GREETING =
  "Hi, I'm Gio 👋 — your GIO4X assistant. Ask me about accounts, spreads, funding, the Raptor platform, or anything else. I can also connect you to a human agent.";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("ai");

  // --- AI mode ---
  const [aiMessages, setAiMessages] = useState<Msg[]>([
    { id: "greet", role: "assistant", content: GREETING },
  ]);
  const [aiThinking, setAiThinking] = useState(false);

  // --- Human mode ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [guestMsgs, setGuestMsgs] = useState<GuestMsg[]>([]);
  const [convStatus, setConvStatus] = useState<string>("open");
  const [starting, setStarting] = useState(false);

  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastTsRef = useRef<string | null>(null);

  // Resume an existing guest thread on load.
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (saved) {
      setConversationId(saved);
      setMode("human-chat");
    }
  }, []);

  // Poll for staff replies while in a live human chat.
  const poll = useCallback(async (id: string) => {
    const after = lastTsRef.current ? `&after=${encodeURIComponent(lastTsRef.current)}` : "";
    try {
      const res = await fetch(`/api/support/poll?conversationId=${id}${after}`);
      if (!res.ok) return;
      const data = (await res.json()) as { status?: string; messages?: GuestMsg[] };
      if (data.status) setConvStatus(data.status);
      if (data.messages && data.messages.length > 0) {
        setGuestMsgs((prev) => {
          const seen = new Set(prev.map((m) => m.id));
          const next = [...prev];
          for (const m of data.messages!) if (!seen.has(m.id)) next.push(m);
          return next;
        });
        lastTsRef.current = data.messages[data.messages.length - 1].created_at;
      }
    } catch {
      /* transient network error — next tick retries */
    }
  }, []);

  useEffect(() => {
    if (mode !== "human-chat" || !conversationId) return;
    void poll(conversationId);
    const t = setInterval(() => void poll(conversationId), POLL_MS);
    return () => clearInterval(t);
  }, [mode, conversationId, poll]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [aiMessages, guestMsgs, aiThinking, open, mode]);

  async function sendToAi() {
    const text = draft.trim();
    if (!text || aiThinking) return;
    setError(null);
    const userMsg: Msg = { id: `u-${Date.now()}`, role: "user", content: text };
    const history = [...aiMessages, userMsg];
    setAiMessages(history);
    setDraft("");
    setAiThinking(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: history
            .filter((m) => m.id !== "greet")
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = (await res.json()) as { reply?: string; error?: string };
      if (res.ok && data.reply) {
        setAiMessages((prev) => [...prev, { id: `a-${Date.now()}`, role: "assistant", content: data.reply! }]);
      } else {
        setAiMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            role: "assistant",
            content: data.error ?? "Sorry, something went wrong. Tap “Talk to a human”.",
          },
        ]);
      }
    } catch {
      setAiMessages((prev) => [
        ...prev,
        { id: `a-${Date.now()}`, role: "assistant", content: "Network hiccup — please try again." },
      ]);
    } finally {
      setAiThinking(false);
    }
  }

  async function startHumanChat(e: React.FormEvent) {
    e.preventDefault();
    if (starting) return;
    setError(null);
    if (!name.trim()) return setError("Please enter your name.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) return setError("Please enter a valid email.");
    setStarting(true);
    try {
      const res = await fetch("/api/support/start", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = (await res.json()) as { conversationId?: string; error?: string };
      if (res.ok && data.conversationId) {
        localStorage.setItem(STORAGE_KEY, data.conversationId);
        setConversationId(data.conversationId);
        setGuestMsgs([]);
        lastTsRef.current = null;
        setMode("human-chat");
      } else {
        setError(data.error ?? "Could not start the chat.");
      }
    } catch {
      setError("Could not start the chat. Please try again.");
    } finally {
      setStarting(false);
    }
  }

  async function sendToHuman() {
    const text = draft.trim();
    if (!text || !conversationId || sending) return;
    setSending(true);
    setError(null);
    const optimistic: GuestMsg = {
      id: `tmp-${Date.now()}`,
      body: text,
      is_staff_reply: false,
      created_at: new Date().toISOString(),
    };
    setGuestMsgs((prev) => [...prev, optimistic]);
    setDraft("");
    try {
      const res = await fetch("/api/support/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ conversationId, body: text }),
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        setError(data.error ?? "Could not send.");
        setGuestMsgs((prev) => prev.filter((m) => m.id !== optimistic.id));
      } else {
        void poll(conversationId);
      }
    } catch {
      setError("Could not send your message.");
      setGuestMsgs((prev) => prev.filter((m) => m.id !== optimistic.id));
    } finally {
      setSending(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (mode === "ai") void sendToAi();
    else if (mode === "human-chat") void sendToHuman();
  }

  function endChat() {
    localStorage.removeItem(STORAGE_KEY);
    setConversationId(null);
    setGuestMsgs([]);
    lastTsRef.current = null;
    setConvStatus("open");
    setMode("ai");
  }

  const headerTitle = mode === "ai" ? "GIO4X Assistant" : "GIO4X Live Support";
  const headerSub =
    mode === "ai"
      ? "AI-powered · instant answers"
      : mode === "human-chat"
      ? convStatus === "closed"
        ? "This chat was closed"
        : "Connected — an agent will reply here"
      : "Talk to a human agent";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close support chat" : "Open support chat"}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky to-navy text-white shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky/50"
      >
        {open ? <X size={22} /> : <MessageCircle size={24} />}
      </button>

      {open ? (
        <div className="fixed bottom-24 right-5 z-[60] flex h-[30rem] w-[23rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-navy px-4 py-3 text-white">
            {mode === "human-form" ? (
              <button
                type="button"
                onClick={() => setMode("ai")}
                aria-label="Back"
                className="text-white/80 hover:text-white"
              >
                <ArrowLeft size={18} />
              </button>
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                {mode === "ai" ? <Bot size={18} /> : <Headset size={18} />}
              </div>
            )}
            <div className="min-w-0 leading-tight">
              <div className="text-sm font-semibold">{headerTitle}</div>
              <div className="truncate text-[11px] text-white/70">{headerSub}</div>
            </div>
          </div>

          {/* Body */}
          {mode === "human-form" ? (
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <p className="text-sm text-steel">
                Leave your details and we&apos;ll connect you to a GIO4X agent right here.
              </p>
              <form onSubmit={startHumanChat} className="mt-3 space-y-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-navy focus:border-sky focus:outline-none"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-navy focus:border-sky focus:outline-none"
                />
                {error ? <div className="text-xs text-rose-600">{error}</div> : null}
                <button
                  type="submit"
                  disabled={starting}
                  className="w-full rounded-lg bg-sky px-3 py-2 text-sm font-semibold text-white transition hover:bg-sky-light disabled:opacity-50"
                >
                  {starting ? "Connecting…" : "Start live chat"}
                </button>
              </form>
            </div>
          ) : (
            <div ref={scrollRef} className="flex-1 space-y-2 overflow-y-auto bg-slate-50 px-3 py-3">
              {mode === "ai"
                ? aiMessages.map((m) => <Bubble key={m.id} mine={m.role === "user"} text={m.content} />)
                : guestMsgs.length === 0
                ? <div className="px-2 py-6 text-center text-xs text-steel">You&apos;re connected. Send a message and an agent will reply here.</div>
                : guestMsgs.map((m) => (
                    <Bubble key={m.id} mine={!m.is_staff_reply} text={m.body} staff={m.is_staff_reply} />
                  ))}
              {aiThinking ? (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm text-steel shadow-sm ring-1 ring-slate-200">
                    Gio is typing…
                  </div>
                </div>
              ) : null}
            </div>
          )}

          {/* Footer / input */}
          {mode !== "human-form" ? (
            <>
              {error && mode === "human-chat" ? (
                <div className="bg-rose-50 px-3 py-1.5 text-[11px] text-rose-700">{error}</div>
              ) : null}

              {mode === "ai" ? (
                <button
                  type="button"
                  onClick={() => setMode("human-form")}
                  className="flex items-center justify-center gap-1.5 border-t border-slate-100 bg-white py-1.5 text-[12px] font-medium text-navy transition hover:bg-slate-50"
                >
                  <Headset size={13} /> Talk to a human
                </button>
              ) : (
                <button
                  type="button"
                  onClick={endChat}
                  className="border-t border-slate-100 bg-white py-1.5 text-[12px] font-medium text-steel transition hover:bg-slate-50"
                >
                  End chat &amp; back to assistant
                </button>
              )}

              <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-slate-200 p-2.5">
                <input
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder={
                    mode === "human-chat" && convStatus === "closed"
                      ? "This chat is closed"
                      : "Type a message…"
                  }
                  disabled={mode === "human-chat" && convStatus === "closed"}
                  className="min-w-0 flex-1 rounded-full border border-slate-200 px-3 py-2 text-sm text-navy focus:border-sky focus:outline-none disabled:bg-slate-50"
                />
                <button
                  type="submit"
                  disabled={
                    !draft.trim() ||
                    aiThinking ||
                    sending ||
                    (mode === "human-chat" && convStatus === "closed")
                  }
                  aria-label="Send"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky text-white transition hover:bg-sky-light disabled:opacity-40"
                >
                  <Send size={16} />
                </button>
              </form>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

function Bubble({ mine, text, staff }: { mine: boolean; text: string; staff?: boolean }) {
  return (
    <div className={mine ? "flex justify-end" : "flex justify-start"}>
      <div
        className={
          mine
            ? "max-w-[82%] rounded-2xl rounded-br-sm bg-sky px-3 py-2 text-sm text-white"
            : "max-w-[82%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm text-navy shadow-sm ring-1 ring-slate-200"
        }
      >
        {staff ? (
          <div className="mb-0.5 flex items-center gap-1 text-[10px] font-medium text-sky">
            <ShieldCheck size={11} /> GIO4X Agent
          </div>
        ) : null}
        <div className="whitespace-pre-wrap break-words">{text}</div>
      </div>
    </div>
  );
}
