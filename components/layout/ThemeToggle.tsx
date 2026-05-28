// Dark mode was retired. The toggle is now a no-op render so existing
// <ThemeToggle /> imports in Navbar continue to compile without
// shipping a visible control.
export function ThemeToggle() {
  return null;
}
