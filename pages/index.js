import ExternalLinks from "../components/ExternalLinks";
import Header from "../components/Header";
import Page from "../components/Page";
import SocialNav from "../components/SocialNav";

export default function Home() {
  return (
    <Page title="Jerome Olvera" description="Software Engineer">
      <Header />

      <section className="max-w-xl pb-8">
        <p className="text-base sm:text-lg">
          Soy un ingeniero apasionado por la tecnología, la cultura y la
          formación de equipos. Gran aficionado del diseño UX y el Lean
          Thinking. Estoy enfocado en enseñar conceptos básicos o modernos
          impulsados por un entorno colaborativo con técnicas como el Pair
          programming. Me encanta crear productos que la gente quiera usar.
        </p>
      </section>

      <SocialNav>
        <SocialNav.Link href="https://github.com/jerolan">
          Github
        </SocialNav.Link>
        <SocialNav.Link href="https://twitter.com/sediceyerom">
          Twitter
        </SocialNav.Link>
        <SocialNav.Link href="/blog">Blog</SocialNav.Link>
      </SocialNav>

      <div className="space-y-12 pb-12">
        <ExternalLinks title="Cosas en las que he trabajado">
          <ExternalLinks.Link href="https://gbm.com/">
            Liberando el potencial financiero de México y nuestra gente en{" "}
            <span className="underline">GBM</span>
          </ExternalLinks.Link>
          <ExternalLinks.Link href="https://yellowme.mx/">
            Equipos en crecimiento en{" "}
            <span className="underline">Yellowme</span>
          </ExternalLinks.Link>
          <ExternalLinks.Link href="https://www.joinenso.com/">
            Creando una nueva generación de servicios financieros en{" "}
            <span className="underline">Enso</span>
          </ExternalLinks.Link>
        </ExternalLinks>

        <ExternalLinks title="Compartiendo mis ideas en software">
          <ExternalLinks.Link href="https://medium.com/yellowme/react-in-theory-70379c23fbfc">
            React In Theory (Eng)
          </ExternalLinks.Link>
          <ExternalLinks.Link href="https://medium.com/tauon/trabajando-con-monorepos-cf941c7d57dc">
            Trabajando con Monorepos
          </ExternalLinks.Link>
          <ExternalLinks.Link href="https://medium.com/tauon/design-systems-con-react-sketchapp-2243c7fdbcfa">
            Design Systems con React Sketchapp
          </ExternalLinks.Link>
        </ExternalLinks>

        <ExternalLinks title="Pasatiempos y comunidades">
          <ExternalLinks.Link href="https://www.facebook.com/javascriptmerida/">
            JavaScript Merida
          </ExternalLinks.Link>
          <ExternalLinks.Link href="https://www.awayfromjs.dev/">
            Away from JavaScript
          </ExternalLinks.Link>
          <ExternalLinks.Link href="https://coffee.really-good.dev/">
            Really Good Coffees
          </ExternalLinks.Link>
        </ExternalLinks>
      </div>
    </Page>
  );
}
