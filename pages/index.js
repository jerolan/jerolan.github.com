import Link from "next/link";
import Page from "../components/Page";
import BlogList from "../components/BlogList";
import { getAllPosts } from "../lib/postDataSource";

export default function Home({ posts }) {
  return (
    <Page.Html title="Jerome Olvera" description="Software Engineer">
      <section className="aero-panel welcome-panel">
        <h2 className="panel-heading">Bienvenido a mi rincón de internet</h2>
        <div className="welcome-content">
          <h1>Hola, soy Jerome.</h1>
          <p>
            Ingeniero de Software apasionado por la tecnología y la formación de
            equipos eficaces. Interesado en diseño UX y filosofía Lean Thinking,
            enfocado en entornos colaborativos, empleando técnicas como Pair
            Programming para mejorar la calidad del código y cohesión del
            equipo. Motivado por crear productos atractivos, desarrollando
            soluciones que satisfagan y enriquezcan la experiencia del usuario.
          </p>
        </div>
      </section>
      <section className="aero-panel panel-green">
        <h2 className="panel-heading">Cosas en las que he trabajado</h2>
        <ul className="work-links">
          <li>
            <a href="https://gbm.com/">GBM</a>
            <p>Liberando el potencial financiero de México y nuestra gente</p>
          </li>
          <li>
            <a href="https://yellowme.mx/">Yellowme</a>
            <p>Equipos en crecimiento</p>
          </li>
          <li>
            <a href="https://www.joinenso.com/">Enso</a>
            <p>Creando una nueva generación de servicios financieros</p>
          </li>
        </ul>
      </section>
      <section className="aero-panel">
        <h2 className="panel-heading">Últimos artículos</h2>
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
        <div className="panel-actions">
          <Link href="/blog" className="aero-button">
            Ver todos los artículos
          </Link>
        </div>
      </section>
    </Page.Html>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(["slug", "title", "date", "excerpt"]).slice(0, 4),
    },
  };
}
