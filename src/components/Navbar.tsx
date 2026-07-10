import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/new_logo.png";

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
  const activeBgClass = isTop ? "bg-[#112244]/10" : "bg-[#112244]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-500">
      <nav className={`flex items-center justify-between w-full md:w-auto gap-3 md:gap-8 ${glassClass} rounded-full px-4 md:px-8 py-2 md:py-3 shadow-sm transition-all duration-500`}>
        {/* Brand */}
        <Link to="/" className={`flex items-center font-serif text-[10px] min-[375px]:text-xs sm:text-sm md:text-xl lg:text-2xl font-light tracking-wider md:tracking-[0.2em] uppercase mr-2 md:mr-4 transition-colors overflow-hidden`}>
          <img src={logo} alt="Haus Of Veloura By JP Logo" className="w-9 h-9 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full mr-2 md:mr-4 object-cover shadow-sm border border-[#C9BFA3]/30 shrink-0" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C9BFA3] to-[#E8DFC8] whitespace-nowrap">Haus Of Veloura By JP</span>
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
