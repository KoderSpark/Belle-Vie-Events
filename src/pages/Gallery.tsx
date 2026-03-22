import { useState, useMemo } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { galleryImages, galleryFilters } from "@/data/data";
import welcomeImg from "@/assets/welcome.webp";

const Gallery = () => {
  const [active, setActive] = useState("ALL EVENTS");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return active === "ALL EVENTS" ? galleryImages : galleryImages.filter((img) => img.category === active);
  }, [active]);

  return (
    <main className="pb-24 overflow-hidden">
      {/* Hero Header */}
      <header className="relative min-h-[60vh] flex items-center overflow-hidden bg-charcoal mb-16">
        <div className="absolute inset-0 z-0">
          <img
            alt="Gallery background"
            className="w-full h-full object-cover opacity-40"
            src={welcomeImg}
          />
          <div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center py-20 mt-16">
          <ScrollReveal>
            <p className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#c2a15b] mb-6">
              Archive of Excellence
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans text-white leading-tight mb-8">
              Curated <span className="font-serif italic font-normal text-[#c2a15b]">Moments</span>
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              A visual journey through our most distinguished celebrations, from intimate
              soirees to grand galas. Each event is a testament to the art of hosting.
            </p>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-16">
              {galleryFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`pb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                    active === f
                      ? "text-[#c2ab87] border-b border-[#c2ab87]"
                      : "text-white/40 hover:text-white/80 border-b border-transparent"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Grid */}
      <section>
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Changed from columns to CSS grid for perfect squares with gap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filtered.map((img, i) => (
              <ScrollReveal key={img.src + img.category + i} delay={(i % 3) * 0.08}>
                <button
                  onClick={() => setLightbox(img.src)}
                  className="group relative block w-full aspect-square overflow-hidden bg-charcoal/5 focus:outline-none"
                >
                  <img
                    src={img.src}
                    loading="lazy"
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-6 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-h-[90vh] max-w-full shadow-2xl object-contain"
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
