export const THEME_STORAGE_KEY = "dark-mode-enabled";

// Runs before the page is painted, including on a direct article-page visit.
export const themeInitializationScript = `
  (function () {
    var saved = null;
    try { saved = window.localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)}); } catch (_) {}
    var preference = saved === "true" ? "dark" : saved === "false" ? "light" : "system";
    var dark = preference === "dark" || (preference === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.dataset.themePreference = preference;
  })();
`;
