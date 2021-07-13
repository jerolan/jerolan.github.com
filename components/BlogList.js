import React from "react";
import Link from "next/link";

export default function BlogList({ children }) {
  return <section className="space-y-12">{children}</section>;
}

function Item({ slug, title, date, content }) {
  const formatedDate = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date(date));

  return (
    <Link href={`/blog/${slug}`}>
      <a className="block">
        <div className="space-y-2">
          <h3 className="font-bold text-xl md:text-2xl capitalize">{title}</h3>
          <p className="capitalize pb-2 opacity-90 dark:opacity-100">
            {formatedDate}
          </p>
          <div
            className="overflow-ellipsis overflow-hidden h-16 opacity-90 dark:opacity-100"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </a>
    </Link>
  );
}

BlogList.Item = Item;
