import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import babyShowerImg from "@/assets/baby-shower.jpg";
import birthdayImg from "@/assets/birthday.jpg";
import bridalImg from "@/assets/bridal-shower.jpg";
import culturalImg from "@/assets/cultural.jpg";
import heroImg from "@/assets/hero-event.jpg";
import welcomeImg from "@/assets/welcome.jpg";

const images = [
  { src: babyShowerImg, cat: "Baby Showers", alt: "Baby shower balloon decor" },
  { src: birthdayImg, cat: "Birthdays", alt: "Birthday celebration setup" },
  { src: bridalImg, cat: "Bridal", alt: "Bridal shower event" },
  { src: culturalImg, cat: "Cultural", alt: "Cultural celebration" },
  { src: heroImg, cat: "Balloons", alt: "Grand balloon arch" },
  { src: welcomeImg, cat: "Balloons", alt: "Welcome event display" },
];

const filters = ["All", "Balloons", "Birthdays", "Baby Showers", "Bridal", "Cultural"];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.cat === active);

  return (
    <main className="pt-24 overflow-hidden">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4 text-center">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal text-center leading-[1.1]">Our Gallery</h1>
            <div className="gold-divider mx-auto mt-8 max-w-[120px]" />
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${
                    active === f
                      ? "btn-gradient text-charcoal shadow-sm"
                      : "bg-card text-soft-gray hover:text-charcoal shadow-sm"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((img, i) => (
              <ScrollReveal key={img.src + img.cat + i} delay={(i % 3) * 0.08}>
                <button
                  onClick={() => setLightbox(img.src)}
                  className="group relative block w-full overflow-hidden rounded-xl shadow-md break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300 flex items-end justify-start p-5">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-card font-serif text-sm font-medium">
                      {img.cat}
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-6 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-h-[85vh] max-w-full rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;
