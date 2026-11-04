import Link from "next/link";
import Navigation from "./Navigation";
import DarkModeToggle from "../DarkModeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-glass">
          <div className="header-topline">
            <Link href="/" className="site-address">
              jerolan.github.com
            </Link>
            <DarkModeToggle />
          </div>
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
