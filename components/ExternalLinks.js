import React from "react";

export default function ExternalLinks({ title, children }) {
  return (
    <section>
      <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      <div className="pt-4 space-y-3">
        {React.Children.map(children, (child) => {
          return (
            <article className="transition-opacity duration-300 opacity-80 dark:opacity-100 hover:opacity-100 sm:text-lg">
              {child}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function Link({ href, children }) {
  return (
    <a href={href}>
      <p>{children}</p>
    </a>
  );
}

ExternalLinks.Link = Link;
