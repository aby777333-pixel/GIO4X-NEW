export type Theme = "dark" | "light";

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return (localStorage.getItem("gio4x-theme") as Theme) || "dark";
}

export function setStoredTheme(theme: Theme): void {
  localStorage.setItem("gio4x-theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
}

// Inline script to prevent flash — inject into <head>
export const themeScript = `
  (function() {
    var theme = localStorage.getItem('gio4x-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  })();
`;
