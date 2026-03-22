import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, Sparkles, Utensils, Star } from "lucide-react";
import heroImg from "@/assets/hero-event.webp";
import welcomeImg from "@/assets/welcome.webp";
import bridalImg from "@/assets/bridal-shower.webp";
import cateringImg from "@/assets/catering.webp";
import culturalImg from "@/assets/cultural.webp";
import { galleryImages } from "@/data/data";

const Index = () => {
  const featuredEvents = galleryImages.filter(img => img.featured);

  return (
    <main className="bg-background text-charcoal font-sans selection:bg-[#c2a15b]/20">
      {/* Grand Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxurious event hall with long tables and elegant lighting"
            className="w-full h-full object-cover opacity-50"
            src={heroImg}
          />
          <div className="absolute inset-0 bg-charcoal/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center mt-20">
          <ScrollReveal>
            <span className="font-sans text-[#c2a15b] uppercase tracking-[0.4em] text-xs font-semibold mb-8 block">
              Exclusivity Redefined
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[5.5rem] text-white tracking-tight leading-none mb-12 drop-shadow-lg max-w-6xl mx-auto">
              Exquisite Moments. <span className="italic font-normal">Timeless Design.</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <Link
                to="/contact"
                className="bg-[#c2a15b] text-white px-10 py-4 rounded-sm font-sans tracking-widest uppercase text-sm font-semibold hover:opacity-90 transition-all border border-[#c2a15b]"
              >
                Inquire Now
              </Link>
              <Link
                to="/gallery"
                className="font-sans text-[#c2a15b] border-b border-[#c2a15b]/40 pb-1 tracking-widest uppercase text-sm font-semibold hover:border-[#c2a15b] transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Single Row Quote Section */}
      <section className="py-24 bg-[#fbf9f6] border-y border-charcoal/5">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
              <div className="w-12 h-[1px] bg-[#c2a15b]/40"></div>
              <p className="font-serif text-2xl md:text-3xl lg:text-5xl text-charcoal/80 leading-relaxed italic tracking-wide">
                Luxury is in the details.
              </p>
              <div className="w-12 h-[1px] bg-[#c2a15b]/40"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story Section (Asymmetry) */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5 relative">
            <ScrollReveal direction="right">
              <div className="aspect-[4/5] bg-background p-3 sm:p-4 rounded-sm shadow-xl">
                <img
                  alt="Event planning team discussing details"
                  className="w-full h-full object-cover"
                  src={welcomeImg}
                />
              </div>
              <div className="absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-12 hidden md:block w-48 sm:w-64 h-64 sm:h-80 bg-white p-2 sm:p-3 rounded-sm shadow-2xl z-10">
                <img
                  alt="Elegant table setting close up"
                  className="w-full h-full object-cover"
                  src={bridalImg}
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 md:col-start-7 pt-12 md:pt-0">
            <ScrollReveal direction="left" delay={0.1}>
              <span className="font-sans text-[#c2a15b] font-semibold uppercase tracking-[0.2em] text-xs mb-6 block">
                Our Heritage
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl mb-8 leading-tight text-charcoal">
                The Art of <br />
                <span className="italic">Curation.</span>
              </h2>
              <div className="space-y-6 text-charcoal/70 leading-relaxed text-lg max-w-lg">
                <p>
                  We believe that every event is a story waiting to be told. From our very
                  first celebration, Belle Vie has been dedicated to the pursuit of
                  aesthetic perfection and unparalleled hospitality.
                </p>
                <p>
                  Our approach brings together the finest elements of design, culinary
                  artistry, and meticulous coordination—where every detail is hand-selected,
                  every course composed with intent, and every moment paced to perfection.
                </p>
              </div>
              <div className="mt-12">
                <Link
                  to="/about"
                  className="font-sans font-semibold text-[#c2a15b] text-xs uppercase tracking-[0.2em] border-b border-[#c2a15b]/40 pb-1 inline-block hover:border-[#c2a15b] transition-colors"
                >
                  Discover the legacy
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Events (Bento Grid Style) */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-16 gap-6">
              <div>
                <span className="font-sans text-[#c2a15b] font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">
                  The Gallery
                </span>
                <h2 className="font-serif text-4xl text-charcoal">Featured Events</h2>
              </div>
              <Link
                to="/gallery"
                className="font-sans font-semibold text-[#c2a15b] text-xs uppercase tracking-[0.2em] hover:text-charcoal transition-colors border-b border-transparent hover:border-charcoal pb-1"
              >
                View all collections
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="columns-1 md:columns-2 gap-6">
              {featuredEvents.map((event) => (
                <Link 
                  key={event.id}
                  to="/gallery" 
                  className="break-inside-avoid mb-6 relative group block overflow-hidden rounded-sm shadow-md"
                >
                  <img
                    alt={event.alt}
                    className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                    src={event.src}
                  />
                  <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-left">
                    <span className="text-white/90 font-sans font-semibold text-[10px] uppercase tracking-[0.3em] drop-shadow-md">
                      {event.location}
                    </span>
                    <h3 className="text-white font-serif text-2xl sm:text-3xl mt-2 italic drop-shadow-md">
                      {event.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20 lg:mb-24">
              <span className="font-sans text-[#c2a15b] font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">
                Bespoke Offerings
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Our Core Services</h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Service 1 */}
            <ScrollReveal delay={0.1}>
              <div className="text-center group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8 shadow-md bg-background relative block">
                  <img
                    src={culturalImg}
                    alt="Event Design"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500 pointer-events-none"></div>
                </div>
                <h3 className="font-serif text-2xl mb-4 italic text-charcoal">Event Design</h3>
                <p className="text-charcoal/70 leading-relaxed px-4">
                  From conceptual mood boards to the final floral arrangement, we design sensory experiences.
                </p>
              </div>
            </ScrollReveal>

            {/* Service 2 */}
            <ScrollReveal delay={0.2}>
              <div className="text-center group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8 shadow-md bg-background relative block md:mt-12">
                  <img
                    src={cateringImg}
                    alt="Artisanal Catering"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500 pointer-events-none"></div>
                </div>
                <h3 className="font-serif text-2xl mb-4 italic text-charcoal">Artisanal Catering</h3>
                <p className="text-charcoal/70 leading-relaxed px-4">
                  Menus inspired by seasonality and global trends, crafted by our executive culinary team.
                </p>
              </div>
            </ScrollReveal>

            {/* Service 3 */}
            <ScrollReveal delay={0.3}>
              <div className="text-center group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8 shadow-md bg-background relative block">
                  <img
                    src={welcomeImg}
                    alt="White Glove Service"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500 pointer-events-none"></div>
                </div>
                <h3 className="font-serif text-2xl mb-4 italic text-charcoal">White Glove Service</h3>
                <p className="text-charcoal/70 leading-relaxed px-4">
                  Flawless execution handled by a dedicated concierge team for every guest's absolute comfort.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


    </main>
  );
};

export default Index;
