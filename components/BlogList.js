import Link from "next/link";

function formatDate(date) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogList({ children, heading }) {
  if (!heading) return <ul className="topic-list">{children}</ul>;
  return (
    <section className="aero-panel" aria-label={heading || "Artículos"}>
      {heading ? <h2 className="panel-heading">{heading}</h2> : null}
      <ul className="topic-list">{children}</ul>
    </section>
  );
}

function Item({ slug, title, date, content }) {
  const dateLabel = formatDate(date);
  const dateTime = new Date(date).toISOString().slice(0, 10);

  return (
    <li className="topic-row">
      <img
        className="topic-icon"
        src="/images/aero/notes.png"
        alt=""
        width="40"
        height="40"
      />
      <h3 className="topic-title">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <time className="topic-date" dateTime={dateTime}>
        {dateLabel}
      </time>
      {content ? <p className="topic-excerpt">{content}</p> : null}
    </li>
  );
}

BlogList.Item = Item;
