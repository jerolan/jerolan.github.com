import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-glass">
          <Link href="/" className="site-address">
            jerolan.github.com
          </Link>
          <Link href="/" className="site-name">
            Jerome Olvera
          </Link>
          <p className="site-role">Software Engineer</p>
          <p className="site-tagline">
            Software, equipos e ideas que vale la pena compartir.
          </p>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
