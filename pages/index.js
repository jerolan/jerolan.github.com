import ExternalLinks from "../components/ExternalLinks";
import Page from "../components/Page";

export default function Home() {
  return (
    <Page.Html title="Jerome Olvera" description="Software Engineer">
      <section className="max-w-xl pb-8">
        <p className="text-base sm:text-lg">
          Soy un ingeniero apasionado por la tecnología, la cultura y la
          formación de equipos. Gran aficionado del diseño UX y el Lean
          Thinking. Estoy enfocado en enseñar conceptos básicos o modernos
          impulsados por un entorno colaborativo con técnicas como el Pair
          programming. Me encanta crear productos que la gente quiera usar.
        </p>
      </section>

      <Page.Navigation />

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
          <ExternalLinks.Link href="https://www.beyond.dev/people/jerome-olvera">
            Conoce a Jerome Olvera (una pequeña entrevista con el equipo de
            Beyond)
          </ExternalLinks.Link>
          <ExternalLinks.Link href="https://medium.com/yellowme/react-in-theory-70379c23fbfc">
            React In Theory (Eng)
          </ExternalLinks.Link>
          <ExternalLinks.Link href="https://medium.com/tauon/trabajando-con-monorepos-cf941c7d57dc">
            Trabajando con Monorepos
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
    </Page.Html>
  );
}
