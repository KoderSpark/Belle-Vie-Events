import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTop = !scrolled;

  const glassClass = isTop ? "glass-dark" : "glass-strong";
  const textClass = isTop ? "text-gray-100" : "text-gray-100";
  const mutedTextClass = isTop ? "text-gray-100/70" : "text-soft-gray";
  const activeBgClass = isTop ? "bg-[#0a0a0a]/10" : "bg-[#0a0a0a]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-500">
      <nav className={`flex items-center gap-8 ${glassClass} rounded-full px-8 py-3 shadow-sm transition-all duration-500`}>
        {/* Brand */}
        <Link to="/" className={`flex items-center font-serif text-xl font-semibold tracking-tight ${textClass} mr-4 transition-colors`}>
          <img src={logo} alt="haus of veloura logo" className="w-10 h-10 rounded-sm mr-3 object-cover" />
          <span>haus of veloura</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`relative text-sm font-medium tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${
                  pathname === l.to
                    ? `${activeBgClass} ${textClass}`
                    : `${mutedTextClass} hover:${textClass}`
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
          className={`md:hidden p-2 ${textClass} transition-colors`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className={`absolute top-full mt-2 left-4 right-4 md:hidden ${glassClass} rounded-2xl px-6 pb-5 pt-4 shadow-lg transition-all`}>
          <ul className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-medium px-4 py-2.5 rounded-xl transition-all duration-200 ${
                    pathname === l.to
                      ? `${activeBgClass} ${textClass}`
                      : `${mutedTextClass} hover:${textClass}`
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
