import NextLink from "next/link";
import React from "react";
import Button from "./Button";

export default function SocialNav({ children }) {
  return <nav className="flex flex-wrap space-x-3 pb-16">{children}</nav>;
}

function Link({ href, children }) {
  return (
    <Button className="bg-red-400 dark:bg-red-300 text-red-400 dark:text-red-300 border-red-400 dark:border-red-300 px-4 py-1">
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    </Button>
  );
}

SocialNav.Link = Link;
