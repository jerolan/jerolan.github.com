import Head from "next/head";

import ExternalLinks from "../components/ExternalLinks";
import DarkModeToggle from "../components/DarkModeToggle";
import SocialLink from "../components/SocialLink";

export default function Home() {
  return (
    <main>
      <div className="px-6 pt-8 max-w-6xl mx-auto antialiased leading-7">
        <header className="pt-8 flex justify-between items-baseline">
          <div className="space-y-2">
            <h1 className="font-bold text-3xl">Jerome Olvera</h1>
            <h2 className="text-lg opacity-95">Software Engineer</h2>
          </div>
          <DarkModeToggle />
        </header>
        <section className="max-w-2xl pt-12 pb-8">
          <p>
            I'm an engineer passionate about technology, culture and team
            building. Big fan of UX Design and Lean Thinking. I'm focused on
            teaching modern / basic concepts driven by a collaborative
            environment with techniques like Pair Programing. I love to build
            products that people want to use.
          </p>
        </section>
        <nav className="flex flex-wrap space-x-2 pb-12">
          <SocialLink href="https://github.com/jerolan">Github</SocialLink>
          <SocialLink href="https://twitter.com/sediceyerom">
            Twitter
          </SocialLink>
        </nav>

        <div className="space-y-5 py-2">
          <ExternalLinks title="Sharing my ideas in software">
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

          <ExternalLinks title="Sharing my ideas in software">
            <ExternalLinks.Link href="https://gbm.com/">
              Unleashing the financial potential of Mexico and our people at
              <span className="underline">GBM</span>
            </ExternalLinks.Link>
            <ExternalLinks.Link href="https://yellowme.mx/">
              Growing teams at
              <span class="underline">Yellowme</span>
            </ExternalLinks.Link>
            <ExternalLinks.Link href="https://www.joinenso.com/">
              Creating a new generation of financial services at
              <span class="underline">Enso</span>
            </ExternalLinks.Link>
          </ExternalLinks>

          <ExternalLinks title="Bringing a community closer">
            <ExternalLinks.Link href="https://www.facebook.com/javascriptmerida/">
              JavaScript Merida
            </ExternalLinks.Link>
            <ExternalLinks.Link href="https://www.awayfromjs.dev/">
              Away from JavaScript
            </ExternalLinks.Link>
          </ExternalLinks>
        </div>
      </div>
    </main>
  );
}
