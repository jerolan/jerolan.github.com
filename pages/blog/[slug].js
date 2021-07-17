import Head from "next/head";

import { getPostBySlug, getAllPosts } from "../../lib/postDataSource";
import markdownToHtml from "../../lib/markdownToHtml";
import Page from "../../components/Page";
import Markdown from "../../components/Markdown";
import PageNavigation from "../../components/PageNavigation";

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <meta property="og:image" content={post.coverImage} />
      </Head>
      <Page title={post.title} description={post.excerpt}>
        <PageNavigation />
        <article className="mb-32">
          <div className="space-y-6">
            <h1 className="font-bold text-2xl md:text-3xl">{post.title}</h1>
            <Markdown>{post.content}</Markdown>
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
