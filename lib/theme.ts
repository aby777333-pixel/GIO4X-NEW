// Light mode only. The Theme type and helpers are kept so existing
// imports (ThemeProvider, ThemeToggle) still compile, but every code
// path now resolves to "light" regardless of localStorage.

export type Theme = "light";

export function getStoredTheme(): Theme {
  return "light";
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function setStoredTheme(_theme: Theme): void {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Inline script to prevent flash — pins data-theme to light at load.
export const themeScript = `
  (function() {
    document.documentElement.setAttribute('data-theme', 'light');
    try { localStorage.removeItem('gio4x-theme'); } catch (e) {}
  })();
`;
