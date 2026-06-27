export type Theme = "dark";

export const THEME_STORAGE_KEY = "coastalcode-theme";

export function applyTheme() {
  if (typeof document !== "undefined") {
    document.documentElement.dataset.theme = "dark";
  }
}

/** Always forces dark mode — light theme is disabled. */
export const themeInitScript = `(function(){try{document.documentElement.dataset.theme='dark';localStorage.setItem('${THEME_STORAGE_KEY}','dark');}catch(e){document.documentElement.dataset.theme='dark';}})();`;
