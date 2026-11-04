import useDarkMode from "../hooks/useDarkMode";
import Head from "next/head";

export default function DarkModeToggle() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const action = isDarkMode ? "Activar Aero claro" : "Activar Aero oscuro";

  return (
    <>
      <Head>
        <meta name="theme-color" content={isDarkMode ? "#091725" : "#0875b0"} />
      </Head>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleDarkMode}
        aria-label={action}
        aria-pressed={isDarkMode}
        title={action}
      >
        <svg
          className="theme-toggle-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          {isDarkMode ? (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </>
          ) : (
            <path d="M20.5 14.2A8.6 8.6 0 0 1 9.8 3.5 8.6 8.6 0 1 0 20.5 14.2Z" />
          )}
        </svg>
        <span className="theme-toggle-label">
          {isDarkMode ? "Aero claro" : "Aero oscuro"}
        </span>
      </button>
    </>
  );
}
