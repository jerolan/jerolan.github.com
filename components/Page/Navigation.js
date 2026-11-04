import Link from "next/link";
import { useRouter } from "next/router";

export default function PageNavigation() {
  const { pathname } = useRouter();
  return (
    <nav className="site-navigation" aria-label="Navegación principal">
      <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
        Inicio
      </Link>
      <Link
        href="/blog"
        aria-current={pathname.startsWith("/blog") ? "page" : undefined}
      >
        Artículos
      </Link>
      <a href="https://github.com/jerolan" className="desktop-nav-link">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/jerome-olvera-a0073ab5/">LinkedIn</a>
      <a href="https://twitter.com/sediceyerom" className="desktop-nav-link">
        Twitter
      </a>
      <span className="navigation-note">Blog personal</span>
    </nav>
  );
}
