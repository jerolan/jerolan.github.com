import React from "react";
import Link from "next/link";

export default function SocialLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="transition-opacity duration-300 bg-red-400 dark:bg-red-300 hover:bg-transparent text-red-400 dark:text-red-300 border border-red-400 dark:border-red-300 font-medium bg-opacity-10 dark:bg-opacity-10 px-4 py-1 rounded">
        {children}
      </a>
    </Link>
  );
}
