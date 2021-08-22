import { useCallback, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useMedia from "./useMedia";
import useWindow from "./useWindow";

// https://usehooks.com/useDarkMode/
export default function useDarkMode() {
  const window = useWindow();
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled");
  // See if user has set a browser or OS preference for dark mode.
  // The usePrefersDarkMode hook composes a useMedia hook (see code below).
  const prefersDarkMode = usePrefersDarkMode();
  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled =
    typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;

  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      const className = "dark";
      if (enabled) {
        document.documentElement.classList.add(className);
      } else {
        document.documentElement.classList.remove(className);
      }
    },
    [enabled, window] // Only re-call effect when value changes
  );

  const toggle = useCallback(() => {
    setEnabledState((prevEnabled) => !prevEnabled);
  }, [setEnabledState]);

  // Return enabled state and setter
  return [enabled, toggle];
}

// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia
function usePrefersDarkMode() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}
