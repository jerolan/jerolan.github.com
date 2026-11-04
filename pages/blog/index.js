import BlogList from "../../components/BlogList";
import Page from "../../components/Page";
import { getAllPosts } from "../../lib/postDataSource";

export default function Blog({ posts }) {
  return (
    <Page.Html title="Jerome Olvera" description="Blog">
      <header className="section-title">
        <h1>Artículos</h1>
        <p>Software, liderazgo y otras cosas que me interesan.</p>
      </header>
      <BlogList
        heading={`Archivo de artículos · ${posts.length} publicaciones`}
      >
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
