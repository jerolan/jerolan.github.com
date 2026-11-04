import { useCallback, useEffect, useState } from "react";
import { THEME_STORAGE_KEY } from "../lib/theme";

function readPreference() {
  try {
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    return saved === "true" ? "dark" : saved === "false" ? "light" : "system";
  } catch {
    return document.documentElement.dataset.themePreference || "system";
  }
}

function applyPreference(preference, prefersDark) {
  const enabled =
    preference === "dark" || (preference === "system" && prefersDark);
  const root = document.documentElement;
  root.classList.toggle("dark", enabled);
  root.dataset.themePreference = preference;
  return enabled;
}

export default function useDarkMode() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () =>
      setEnabled(applyPreference(readPreference(), media.matches));
    const onSystemChange = () => {
      if (document.documentElement.dataset.themePreference === "system") sync();
    };
    const onStorageChange = (event) => {
      if (event.key === THEME_STORAGE_KEY || event.key === null) sync();
    };

    sync();
    media.addEventListener("change", onSystemChange);
    window.addEventListener("storage", onStorageChange);
    return () => {
      media.removeEventListener("change", onSystemChange);
      window.removeEventListener("storage", onStorageChange);
    };
  }, []);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    const preference = next ? "dark" : "light";
    setEnabled(applyPreference(preference, next));
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, String(next));
    } catch {
      // Keep the selection for this visit when browser storage is unavailable.
    }
  }, []);

  return [enabled, toggle];
}
