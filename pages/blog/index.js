import { getAllPosts } from "../../lib/postDataSource";
import Page from "../../components/Page";
import BlogList from "../../components/BlogList";
import PageNavigation from "../../components/PageNavigation";

export default function Blog({ posts }) {
  return (
    <Page title="Jerome Olvera" description="Blog">
      <PageNavigation />
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
    </Page>
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
