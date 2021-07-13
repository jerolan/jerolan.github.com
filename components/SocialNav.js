import React from "react";
import NextLink from "next/link";

export default function SocialNav({ children }) {
  return <nav className="flex flex-wrap space-x-3 pb-16">{children}</nav>;
}

function Link({ href, children }) {
  return (
    <NextLink href={href}>
      <a className="transition-opacity duration-300 bg-red-400 dark:bg-red-300 hover:bg-transparent text-red-400 dark:text-red-300 border border-red-400 dark:border-red-300 font-medium bg-opacity-10 dark:bg-opacity-10 px-4 py-1 rounded">
        {children}
      </a>
    </NextLink>
  );
}

SocialNav.Link = Link;
