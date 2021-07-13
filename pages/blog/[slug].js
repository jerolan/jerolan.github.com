import Head from "next/head";

import { getPostBySlug, getAllPosts } from "../../lib/postDataSource";
import BlogList from "../../components/BlogList";
import DarkModeToggle from "../../components/DarkModeToggle";
import Header from "../../components/Header";
import markdownToHtml from "../../lib/markdownToHtml";
import Page from "../../components/Page";
import SocialNav from "../../components/SocialNav";

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <Page title={post.title} description={post.excerpt}>
        <div className="pb-16">
          <DarkModeToggle />
        </div>
        <article className="mb-32">
          <div className="space-y-6">
            <h1 className="font-bold text-2xl md:text-3xl capitalize">
              {post.title}
            </h1>
            <div
              className="opacity-90 dark:opacity-100"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </Page>
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
    "ogImage",
    "coverImage",
    "excerpt",
  ]);

  const content = await markdownToHtml(post.content || "");

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
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
