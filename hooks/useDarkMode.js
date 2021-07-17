import { useState, useCallback, useEffect } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => initialThemeMode());

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }, [setIsDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // store user preference
  useEffect(() => {
    if (isDarkMode) {
      window.localStorage.setItem("theme", "dark");
    } else {
      window.localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  function initialThemeMode() {
    if (typeof window !== "undefined") {
      const memory = localStorage.getItem("theme");
      if (memory != null) {
        return memory === "dark";
      }

      if (window.matchMedia != null) {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }
    }

    return false;
  }

  return [isDarkMode, toggleDarkMode];
}
