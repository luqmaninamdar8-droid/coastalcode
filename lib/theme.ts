export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "coastalcode-theme";

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

export function resolveTheme(stored: Theme | null): Theme {
  return stored ?? getSystemTheme();
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export const themeInitScript = `(function(){try{var k='${THEME_STORAGE_KEY}';var s=localStorage.getItem(k);var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light';}catch(e){}})();`;
