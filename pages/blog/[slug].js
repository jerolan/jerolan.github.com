import fs from "fs";
import { join } from "path";
import Head from "next/head";
import Link from "next/link";
import Blog from "../../components/Blog";
import Markdown from "../../components/Markdown";
import Page from "../../components/Page";
import markdownToHtml from "../../lib/markdownToHtml";
import { getAllPosts, getPostBySlug } from "../../lib/postDataSource";

function formatDate(date) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogPost({ post }) {
  const dateTime = new Date(post.date).toISOString().slice(0, 10);

  return (
    <>
      {post.cover ? (
        <Head>
          <meta property="og:image" content={`/images/${post.cover.src}`} />
        </Head>
      ) : null}
      <Page.Html title={post.title} description={post.excerpt || post.title}>
        <nav className="article-breadcrumb" aria-label="Ruta de navegación">
          <ol>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog">Artículos</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{post.title}</li>
          </ol>
        </nav>

        <article className="aero-panel article-panel">
          <div className="panel-heading">Artículo</div>
          <div className="article-panel-body">
            <Blog.Title>{post.title}</Blog.Title>
            <p className="article-meta">
              <span>{post.author || "Jerome Olvera"}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={dateTime}>{formatDate(post.date)}</time>
            </p>
            <div className="article-content">
              {post.cover ? (
                <Blog.Cover src={post.cover.src} alt={post.cover.alt || ""} />
              ) : null}
              <Markdown>{post.content}</Markdown>
            </div>
          </div>
        </article>
      </Page.Html>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "cover",
    "excerpt",
  ]);
  const coverPath = post.cover?.src
    ? join(process.cwd(), "public", "images", post.cover.src)
    : null;

  if (!coverPath || !fs.existsSync(coverPath)) {
    delete post.cover;
  }

  const lines = (post.content || "").trimStart().split("\n");
  if (lines[0]?.replace(/^#\s+/, "").trim() === post.title) {
    lines.shift();
  }
  let content = await markdownToHtml(lines.join("\n"));
  content = content.replaceAll("/public/", "/");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
