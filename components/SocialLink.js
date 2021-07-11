import React from "react";

export default function SocialLink({ href, children }) {
  return (
    <a
      className="transition  duration-300 bg-indigo-500 hover:bg-transparent text-indigo-500 border border-indigo-500 font-medium bg-opacity-10 px-4 py-1 rounded"
      href={href}
    >
      {children}
    </a>
  );
}
