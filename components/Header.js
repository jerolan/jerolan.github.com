import React from "react";

import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="pb-12 flex justify-between items-baseline">
      <div className="space-y-2">
        <h1 className="font-bold text-3xl sm:text-4xl">Jerome Olvera</h1>
        <h2 className="text-lg sm:text-xl opacity-90 dark:opacity-100">
          Software Engineer
        </h2>
      </div>
      <DarkModeToggle />
    </header>
  );
}
