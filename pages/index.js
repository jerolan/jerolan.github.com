import Head from "next/head";

import ExternalLinks from "../components/ExternalLinks";
import DarkModeToggle from "../components/DarkModeToggle";
import SocialLink from "../components/SocialLink";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper title="Jerome Olvera" description="Software Engineer">
      <main className="px-6 sm:px-8 pt-8 max-w-screen-md mx-auto">
        <header className="pt-8 flex justify-between items-baseline">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl sm:text-4xl">Jerome Olvera</h1>
            <h2 className="text-lg sm:text-xl opacity-90 dark:opacity-100">
              Software Engineer
            </h2>
          </div>
          <DarkModeToggle />
        </header>
        <section className="max-w-xl pt-12 pb-8">
          <p className="text-base sm:text-lg">
            Soy un ingeniero apasionado por la tecnología, la cultura y la
            formación de equipos. Gran aficionado del diseño UX y el Lean
            Thinking. Estoy enfocado en enseñar conceptos básicos o modernos
            impulsados por un entorno colaborativo con técnicas como el Pair
            programming. Me encanta crear productos que la gente quiera usar.
          </p>
        </section>
        <nav className="flex flex-wrap space-x-3 pb-12">
          <SocialLink href="https://github.com/jerolan">Github</SocialLink>
          <SocialLink href="https://twitter.com/sediceyerom">
            Twitter
          </SocialLink>
        </nav>

        <div className="space-y-12 py-2">
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
            <ExternalLinks.Link href="https://medium.com/tauon/que-es-un-api-y-c%C3%B3mo-consumirla-21eeb130ef14">
              ¿Qué es un API? y cómo consumirla
            </ExternalLinks.Link>
          </ExternalLinks>

          <ExternalLinks title="Acercando a una comunidad">
            <ExternalLinks.Link href="https://www.facebook.com/javascriptmerida/">
              JavaScript Merida
            </ExternalLinks.Link>
            <ExternalLinks.Link href="https://www.awayfromjs.dev/">
              Away from JavaScript
            </ExternalLinks.Link>
          </ExternalLinks>
        </div>
      </main>
    </PageWrapper>
  );
}
