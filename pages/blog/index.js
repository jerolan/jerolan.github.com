import BlogList from "../../components/BlogList";
import Page from "../../components/Page";
import { getAllPosts } from "../../lib/postDataSource";

export default function Blog({ posts }) {
  return (
    <Page.Html title="Jerome Olvera" description="Blog">
      <Page.Navigation />
      <BlogList>
        {posts.map((post) => (
          <BlogList.Item
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            content={post.excerpt}
          />
        ))}
      </BlogList>
    </Page.Html>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(["slug", "title", "date", "excerpt"]);

  return {
    props: {
      posts,
    },
  };
}
