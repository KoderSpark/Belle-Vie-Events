import { Link } from "react-router-dom";
import { useState } from "react";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  // Particle system for the light luxury theme
  const [particles] = useState(() => 
    Array.from({ length: 25 }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      animationDelay: `${Math.random() * 3}s`,
      size: `${Math.random() * 5 + 3}px`,
      opacity: Math.random() * 0.4 + 0.1
    }))
  );

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@200;300;400&display=swap');
          
          .font-serif-premium {
            font-family: 'Playfair Display', serif;
          }
          
          .font-sans-elegant {
            font-family: 'Montserrat', sans-serif;
          }

          .gold-gradient-text {
            background: linear-gradient(135deg, #997A15 0%, #D4AF37 25%, #8A6D1C 50%, #B38728 75%, #997A15 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            background-size: 200% auto;
            animation: shine 5s ease-in-out infinite alternate;
          }

          @keyframes shine {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }

          @keyframes float-up {
            0% { transform: translateY(50px) scale(0.5); opacity: 0; }
            20% { opacity: var(--max-opacity); }
            80% { opacity: var(--max-opacity); }
            100% { transform: translateY(-100vh) scale(1.2); opacity: 0; }
          }

          .bubble-light {
            position: absolute;
            bottom: -50px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #ffffff, #D4AF37);
            box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
            animation: float-up infinite linear;
          }
        `}
      </style>

      <footer 
        className="text-[#B3B3B3] pt-24 pb-12 relative z-10 mt-auto overflow-hidden bg-cover bg-center bg-no-repeat border-t border-[#D4AF37]/20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')" }}
      >
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-[#050505]/95 z-0" />

        {/* Subtle gold glow at the top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-40 z-10" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {particles.map((p, i) => (
            <div 
              key={i} 
              className="bubble-light"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDuration: p.animationDuration,
                animationDelay: p.animationDelay,
                '--max-opacity': p.opacity
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mb-20">
              {/* Brand Column */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-3xl font-serif-premium gold-gradient-text mb-6">Belle Vie</h2>
                <p className="text-sm font-light leading-relaxed text-[#CCCCCC]/80 mb-8 max-w-xs font-sans-elegant">
                  Luxury event design & decor for your most cherished milestones. Every detail, beautifully curated for ultimate elegance.
                </p>
                <div className="flex gap-4">
                  {[
                    { Icon: Instagram, href: "#" },
                    { Icon: Facebook, href: "#" },
                    { Icon: Linkedin, href: "#" }
                  ].map((s, idx) => (
                    <a key={idx} href={s.href} className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] transition-all duration-300">
                      <s.Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h4 className="text-[#E6C875] text-[10px] tracking-[0.3em] uppercase font-bold mb-8">Quick Links</h4>
                <ul className="space-y-4 text-sm font-sans-elegant">
                  {["Home", "Services", "Gallery", "About", "Contact"].map((l) => (
                    <li key={l}>
                      <Link to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-[#CCCCCC]/60 hover:text-[#D4AF37] transition-colors duration-300 tracking-wide">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Column */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left font-sans-elegant">
                <h4 className="text-[#E6C875] text-[10px] tracking-[0.3em] uppercase font-bold mb-8">Contact Us</h4>
                <ul className="space-y-5 text-sm">
                  <li className="flex items-start justify-center md:justify-start gap-4">
                    <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0 opacity-80" />
                    <span className="text-[#CCCCCC]/80 leading-relaxed">Priyarani Residency, Sai Baba Temple Lane,<br/>Film Nagar, Hyderabad</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-4">
                    <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 opacity-80" />
                    <a href="mailto:hello@bellevie.com" className="text-[#CCCCCC]/80 hover:text-[#D4AF37] transition-colors">hello@bellevie.com</a>
                  </li>
                  <li className="flex items-center justify-center md:justify-start gap-4">
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 opacity-80" />
                    <div className="flex flex-col text-[#CCCCCC]/80">
                      <a href="tel:+919347442350" className="hover:text-[#D4AF37] transition-colors">+91 93474 42350</a>
                      <a href="tel:+918096110643" className="hover:text-[#D4AF37] transition-colors">+91 80961 10643</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom Section: Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#D4AF37]/10 text-[10px] font-sans-elegant tracking-[0.1em] text-[#8A8A8A]">
            <p className="uppercase">© {new Date().getFullYear()} Belle Vie Events. All Rights Reserved.</p>
            <div className="flex gap-8 mt-6 md:mt-0 uppercase">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
