"use client";

// DeviceFrame — premium browser + phone frames for the ecosystem showcase.
// Purely presentational chrome; the child is the (representative) product UI.

export function BrowserFrame({
  url = "raptor.gio4x.com/terminal",
  children,
  className = "",
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`device-browser ${className}`}>
      <div className="device-browser__bar">
        <span className="device-browser__dot" style={{ background: "#FF5F57" }} />
        <span className="device-browser__dot" style={{ background: "#FEBC2E" }} />
        <span className="device-browser__dot" style={{ background: "#28C840" }} />
        <div className="ml-3 flex-1">
          <div className="mx-auto flex h-6 max-w-[280px] items-center gap-2 rounded-md bg-white/5 px-3">
            <span className="h-2.5 w-2.5 rounded-full border border-[#29ABE2]/50" />
            <span className="truncate font-mono text-[10px] tracking-wide text-white/50">{url}</span>
          </div>
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`device-phone ${className}`}>
      {/* Notch */}
      <div className="relative">
        <span className="absolute left-1/2 top-0 z-10 h-4 w-24 -translate-x-1/2 rounded-b-2xl bg-[#0B1B34]" />
        <div className="device-phone__screen aspect-[9/19]">{children}</div>
      </div>
    </div>
  );
}
