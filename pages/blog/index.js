import Head from "next/head";

import { getAllPosts } from "../../lib/postDataSource";
import Header from "../../components/Header";
import Page from "../../components/Page";
import SocialNav from "../../components/SocialNav";
import BlogList from "../../components/BlogList";

export default function Blog({ posts }) {
  return (
    <Page title="Jerome Olvera" description="Blog">
      <Header />
      <SocialNav>
        <SocialNav.Link href="https://github.com/jerolan">
          Github
        </SocialNav.Link>
        <SocialNav.Link href="https://twitter.com/sediceyerom">
          Twitter
        </SocialNav.Link>
        <SocialNav.Link href="/blog">Blog</SocialNav.Link>
      </SocialNav>
      <BlogList>
        {posts.map((post) => (
          <BlogList.Item
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            content={post.content}
          />
        ))}
      </BlogList>
    </Page>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(["slug", "title", "date", "content"]);

  return {
    props: {
      posts,
    },
  };
}
