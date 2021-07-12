import Head from "next/head";

import DarkModeToggle from "../../components/DarkModeToggle";
import PageWrapper from "../../components/PageWrapper";
import { getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Blog({ posts }) {
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

        <section>
          {posts?.map((post) => (
            <p>{post.title}</p>
          ))}
        </section>
      </main>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(["title", "content"]);

  return {
    props: {
      posts,
    },
  };
}
