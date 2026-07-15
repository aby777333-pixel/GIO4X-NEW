"use client";

// Generic TradingView embed-widget host (https://www.tradingview.com/widget/).
// Injects the official embed script with its JSON config. Each widget is an
// iframe served by TradingView with real market data — no API keys needed.

import { useEffect, useMemo, useRef } from "react";

export interface TVWidgetProps {
  /** embed script slug, e.g. "ticker-tape" → embed-widget-ticker-tape.js */
  widget: string;
  config: Record<string, unknown>;
  /** Fixed pixel height for widgets that don't autosize. */
  height?: number;
  className?: string;
}

export function TVWidget({ widget, config, height, className }: TVWidgetProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const configJson = useMemo(() => JSON.stringify(config), [config]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    host.innerHTML = "";

    const container = document.createElement("div");
    container.className = "tradingview-widget-container";
    container.style.height = "100%";
    container.style.width = "100%";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    widgetDiv.style.height = "100%";
    widgetDiv.style.width = "100%";
    container.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.src = `https://s3.tradingview.com/external-embedding/embed-widget-${widget}.js`;
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = configJson;
    container.appendChild(script);

    host.appendChild(container);
    return () => {
      host.innerHTML = "";
    };
  }, [widget, configJson]);

  return (
    <div
      ref={hostRef}
      className={className}
      style={height ? { height, width: "100%" } : { width: "100%" }}
    />
  );
}
