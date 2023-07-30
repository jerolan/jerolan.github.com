import ExternalLinks from "../components/ExternalLinks";
import Page from "../components/Page";

export default function Home() {
  return (
    <Page.Html title="Jerome Olvera" description="Software Engineer">
      <section className="max-w-xl pb-8">
        <p className="text-base sm:text-lg">
          Soy un Ingeniero de Software apasionado por la tecnología, impulsado
          por la integración de la cultura y la formación de equipos altamente
          efectivos. Con un gran interés en el diseño de Experiencia de Usuario
          (UX) y una firme adherencia a la filosofía Lean Thinking, me dedico a
          implementar y enseñar tanto conceptos básicos como modernos.
          <br />
          Mi enfoque se centra en fomentar un entorno colaborativo, utilizando
          técnicas innovadoras como el Pair Programming. Esta metodología me
          permite no solo mejorar la calidad del código, sino también compartir
          conocimientos y fortalecer la cohesión del equipo.
          <br />
          Lo que realmente me entusiasma es la creación de productos que las
          personas quieran utilizar. Creo en desarrollar soluciones que no solo
          satisfagan las necesidades del usuario, sino que también ofrezcan una
          experiencia intuitiva y agradable.
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

        <ExternalLinks title="Pasatiempos y comunidades">
          <ExternalLinks.Link href="https://www.facebook.com/javascriptmerida/">
            JavaScript Merida
          </ExternalLinks.Link>
          <ExternalLinks.Link href="https://www.awayfromjs.dev/">
            Away from JavaScript
          </ExternalLinks.Link>
          <ExternalLinks.Link href="https://redactado.cafe/">
            Redactado Café
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
      </div>
    </Page.Html>
  );
}
