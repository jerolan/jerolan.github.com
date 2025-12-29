import Head from "next/head";
import Blog from "../../components/Blog";
import Markdown from "../../components/Markdown";
import Page from "../../components/Page";
import markdownToHtml from "../../lib/markdownToHtml";
import { getAllPosts, getPostBySlug } from "../../lib/postDataSource";

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <meta property="og:image" content={post.cover.src} />
      </Head>
      <Page.Html title={post.title} description={post.excerpt}>
        <Page.Navigation />
        <Blog.FloatingHeader title={post.title} />
        <Blog.Title>{post.title}</Blog.Title>
        <Blog.Cover src={post.cover.src} alt={post.cover.alt} />
        <Markdown>{post.content}</Markdown>
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

  let content = await markdownToHtml(post.content || "");

  // Adjust image paths for public folder
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
