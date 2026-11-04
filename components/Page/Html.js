import Head from "next/head";
import Link from "next/link";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Html({ children, title, description }) {
  return (
    <>
      <Head>
        <title>
          {title === "Jerome Olvera"
            ? `${title} | ${description}`
            : `${title} | Jerome Olvera`}
        </title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Jerome Olvera" />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sediceyerom" />
        <meta name="theme-color" content="#0875b0" />
      </Head>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <div className="site-layout">
        <main id="contenido" className="page-content" tabIndex={-1}>
          {children}
        </main>
        <Sidebar />
      </div>
      <footer className="site-footer">
        <div className="footer-top">
          <p>Jerome Olvera · Sitio personal</p>
          <a href="#top">Volver arriba</a>
        </div>
        <p className="resource-credit">
          Estética y recursos de{" "}
          <a href="https://frutigeraeroarchive.org/">Frutiger Aero Archive</a>.
          Iconos <a href="https://github.com/KDE/oxygen-icons">Oxygen / KDE</a>.{" "}
          <Link href="/creditos">Créditos y fuentes</Link>.
        </p>
      </footer>
    </>
  );
}
