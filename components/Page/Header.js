import Link from "next/link";
import Navigation from "./Navigation";
import DarkModeToggle from "../DarkModeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-glass">
        <div className="site-identity">
          <Link href="/" className="site-name">
            Jerome Olvera
          </Link>
          <p className="site-role">Software Engineer</p>
        </div>
        <DarkModeToggle />
      </div>
      <Navigation />
    </header>
  );
}
