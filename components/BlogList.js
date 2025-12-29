import React from "react";
import Link from "next/link";

export default function BlogList({ children }) {
  return <section className="space-y-12">{children}</section>;
}

function Item({ slug, title, date, content }) {
  const formatedDate = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "full",
  }).format(new Date(date));

  return (
    <Link
      href={`/blog/${slug}`}
      className="block border-b dark:border-neutral-800 pb-8"
      legacyBehavior
    >
      <div className="space-y-2">
        <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
        <p className="capitalize pb-2 opacity-90 dark:opacity-100">
          {formatedDate}
        </p>
        <div
          className="opacity-90 dark:opacity-100"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Link>
  );
}

BlogList.Item = Item;
