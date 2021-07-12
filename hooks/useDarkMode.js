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

  function initialThemeMode() {
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return false;
  }

  return [isDarkMode, toggleDarkMode];
}
