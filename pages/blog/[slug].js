import Head from "next/head";

import DarkModeToggle from "../../components/DarkModeToggle";
import PageWrapper from "../../components/PageWrapper";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export default function PostEntry({ post }) {
  return (
    <PageWrapper title="Jerome Olvera" description="Software Engineer">
      <main className="px-6 sm:px-8 pt-16 max-w-screen-md mx-auto">
        <header className="pb-12 flex justify-between items-baseline">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl sm:text-4xl">Jerome Olvera</h1>
            <h2 className="text-lg sm:text-xl opacity-90 dark:opacity-100">
              Software Engineer
            </h2>
          </div>
          <DarkModeToggle />
        </header>

        <section>{post.content}</section>
      </main>
    </PageWrapper>
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
