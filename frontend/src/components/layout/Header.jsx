import { Menu } from 'lucide-react';
import { Container } from './Container';

export function Header() {
  return (
    <header className="w-full bg-white">
      <Container>
        <div
          className="
            grid grid-cols-2 md:grid-cols-3
            items-center
            py-4 md:h-24
          "
        >

          {/* LEFT NAV (desktop only) */}
          <nav className="hidden md:flex items-center gap-10 text-base font-semibold text-black">
            <a href="#">Home</a>
            <a href="#">Who We Are</a>
            <a href="#">Impact</a>
          </nav>

          {/* LOGO */}
          <div className="flex justify-start md:justify-center">
            <img
              src="/logo.svg"
              alt="Impact Lens"
              className="h-16 md:h-20 w-auto"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="flex justify-end items-center">

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10 text-base font-semibold text-black">
              <a href="#">Contribute</a>
              <a href="#">Impact Jobs</a>
              <a href="#">Login</a>
            </nav>

            {/* Mobile hamburger (true last column) */}
            <button
              className="md:hidden p-2"
              aria-label="Open menu"
            >
              <Menu size={28} strokeWidth={2} />
            </button>

          </div>

        </div>
      </Container>
    </header>
  );
}
