import React from "react";

export default function ExternalLinks({ title, children }) {
  return (
    <section>
      <h3 className="italic font-bold">{title}</h3>
      <div className="pt-4 leading-loose">
        {React.Children.map(children, (child) => {
          return (
            <article className="transition duration-500 opacity-50 hover:opacity-100">
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
