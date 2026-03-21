import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className="flex items-center gap-8 glass-strong rounded-full px-8 py-3 shadow-sm">
        {/* Brand */}
        <Link to="/" className="font-serif text-xl font-semibold tracking-tight text-charcoal mr-4">
          Belle Vie
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`relative text-sm font-medium tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${
                  pathname === l.to
                    ? "bg-[hsl(var(--peach)/0.35)] text-charcoal"
                    : "text-soft-gray hover:text-charcoal"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full mt-2 left-4 right-4 md:hidden glass-strong rounded-2xl px-6 pb-5 pt-4 shadow-lg">
          <ul className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-medium px-4 py-2.5 rounded-xl transition-all duration-200 ${
                    pathname === l.to
                      ? "bg-[hsl(var(--peach)/0.35)] text-charcoal"
                      : "text-soft-gray hover:text-charcoal"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
