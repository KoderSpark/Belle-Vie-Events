import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => (
  <footer className="section-gradient-blush">
    <div className="container mx-auto px-6 py-16">
      <ScrollReveal>
        <div className="gold-divider mb-12" />
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-12">
        <ScrollReveal delay={0}>
          <div>
            <h3 className="text-2xl font-semibold text-charcoal mb-3">Belle Vie</h3>
            <p className="text-soft-gray text-sm leading-relaxed max-w-xs">
              Luxury event design & decor for your most cherished milestones. Every detail, beautifully curated.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <Link
                    to={`/${l.toLowerCase()}`}
                    className="text-soft-gray text-sm hover:text-gold transition-colors duration-200"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.16}>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Mail, href: "mailto:hello@bellevie.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 active:scale-95 text-soft-gray hover:text-gold"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-soft-gray text-sm mt-4">hello@bellevie.com</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="gold-divider mt-12 mb-6" />
      <p className="text-center text-xs text-soft-gray">
        © {new Date().getFullYear()} Belle Vie Event Design & Decor. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
