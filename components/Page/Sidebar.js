import Link from "next/link";

function LinkPanel({ title, green, children }) {
  return (
    <section className={`aero-panel${green ? " panel-green" : ""}`}>
      <h2 className="panel-heading">{title}</h2>
      <ul className="sidebar-links">{children}</ul>
    </section>
  );
}

export default function Sidebar() {
  return (
    <aside
      className="site-sidebar"
      aria-label="Acerca de Jerome y otros enlaces"
    >
      <section className="aero-panel profile-panel">
        <h2 className="panel-heading">Mi perfil</h2>
        <div className="profile-content">
          <div className="profile-orb" aria-hidden="true">
            JO
          </div>
          <p className="profile-name">Jerome Olvera</p>
          <p className="profile-role">Software Engineer</p>
          <a
            className="aero-button"
            href="https://www.linkedin.com/in/jerome-olvera-a0073ab5/"
          >
            Ver LinkedIn
          </a>
        </div>
      </section>
      <LinkPanel title="Explorar">
        <li>
          <Link href="/">
            Inicio
            <img
              src="/images/aero/oxygen/go-home.png"
              alt=""
              width="24"
              height="24"
            />
          </Link>
        </li>
        <li>
          <Link href="/blog">Todos los artículos</Link>
        </li>
        <li>
          <a href="https://github.com/jerolan">GitHub</a>
        </li>
        <li>
          <a href="https://twitter.com/sediceyerom">Twitter</a>
        </li>
      </LinkPanel>
      <LinkPanel title="Pasatiempos y comunidades" green>
        <li>
          <a href="https://www.facebook.com/javascriptmerida/">
            JavaScript Merida
            <img
              src="/images/aero/oxygen/applications-internet.png"
              alt=""
              width="24"
              height="24"
            />
          </a>
        </li>
        <li>
          <a href="https://www.awayfromjs.dev/">Away from JavaScript</a>
        </li>
        <li>
          <a href="https://www.instagram.com/redactado.cafe/">Redactado Café</a>
        </li>
      </LinkPanel>
      <LinkPanel title="En otras páginas">
        <li>
          <a href="https://medium.com/yellowme/react-in-theory-70379c23fbfc">
            React In Theory (Eng)
          </a>
        </li>
        <li>
          <a href="https://medium.com/tauon/trabajando-con-monorepos-cf941c7d57dc">
            Trabajando con Monorepos
          </a>
        </li>
      </LinkPanel>
    </aside>
  );
}
