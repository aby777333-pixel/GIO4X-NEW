"use client";

// Host for TradingView's web-component widgets
// (https://widgets.tradingview-widget.com/w/en/<tag>.js).
// Loads the module script once per tag and mounts the custom element.

import { useEffect, useMemo, useRef } from "react";

export interface TVElementProps {
  /** custom element tag, e.g. "tv-ticker-tape" */
  tag: string;
  attrs?: Record<string, string | boolean>;
  minHeight?: number;
  className?: string;
}

export function TVElement({ tag, attrs, minHeight, className }: TVElementProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const attrsJson = useMemo(() => JSON.stringify(attrs ?? {}), [attrs]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scriptId = `tv-wc-${tag}`;
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = `https://widgets.tradingview-widget.com/w/en/${tag}.js`;
      script.id = scriptId;
      document.head.appendChild(script);
    }

    const el = document.createElement(tag);
    const parsed = JSON.parse(attrsJson) as Record<string, string | boolean>;
    for (const [key, value] of Object.entries(parsed)) {
      if (value === true) el.setAttribute(key, "");
      else if (value !== false) el.setAttribute(key, String(value));
    }
    host.innerHTML = "";
    host.appendChild(el);
    return () => {
      host.innerHTML = "";
    };
  }, [tag, attrsJson]);

  return (
    <div
      ref={hostRef}
      className={className}
      style={{ width: "100%", ...(minHeight ? { minHeight } : {}) }}
    />
  );
}
