import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, CheckCircle, BookOpen } from "lucide-react";
const heroImg = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2048&auto=format&fit=crop";
const welcomeImg = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2048&auto=format&fit=crop";
const cateringImg = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2048&auto=format&fit=crop";
const bridalImg = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2048&auto=format&fit=crop";
const culturalImg = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2048&auto=format&fit=crop";

const Services = () => {
  return (
    <main className="pb-20 overflow-hidden bg-background">
      {/* Hero Header */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#111111] mb-24">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxurious event hosting"
            className="w-full h-full object-cover opacity-50"
            src={heroImg}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[#111111]/60 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 mt-16">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
              <div className="max-w-2xl">
                <span className="text-[#c2a15b] font-sans uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
                  Our Expertise
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-tight mb-0 text-gray-100">
                  The Art of <br />
                  <span className="italic text-[#c2a15b]">Exceptional</span> Hosting
                </h1>
              </div>
              <p className="text-gray-100/70 font-sans text-lg max-w-md pb-2 lg:border-l lg:border-white/20 lg:pl-8 leading-relaxed">
                A curated suite of services designed for those who believe every gathering
                is a canvas for storytelling and refined hospitality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Service Section 1: Full-Service Event Planning */}
      <section className="mb-32 lg:mb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 relative">
            <ScrollReveal direction="left">
              <div className="aspect-[4/5] bg-card rounded-sm overflow-hidden shadow-sm">
                <img
                  alt="Luxury event planning"
                  className="w-full h-full object-cover"
                  src={welcomeImg}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Asymmetric Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#0a0a0a] opacity-50 -z-10 rounded-sm" />
            </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="inline-flex items-center gap-4 text-[#c2a15b]">
                <span className="h-[1px] w-8 bg-current"></span>
                <span className="font-sans uppercase tracking-widest text-xs font-semibold">
                  Category 01
                </span>
              </div>
              <h2 className="text-4xl font-serif text-gray-100 mt-4 mb-6">
                Full-Service Event Planning
              </h2>
              <p className="text-gray-100/70 text-lg leading-relaxed font-sans mb-8">
                From the initial mood board to the final guest departure, we
                orchestrate every detail with meticulous precision. Our approach is
                bespoke, ensuring your unique narrative is woven into the fabric of
                the event through venue sourcing, logistics, and on-site management.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-gray-100">
                  <CheckCircle className="text-[#c2a15b] w-5 h-5 flex-shrink-0" />
                  <span className="font-sans">Curated Venue Selection &amp; Negotiations</span>
                </li>
                <li className="flex items-center gap-4 text-gray-100">
                  <CheckCircle className="text-[#c2a15b] w-5 h-5 flex-shrink-0" />
                  <span className="font-sans">Comprehensive Vendor Orchestration</span>
                </li>
                <li className="flex items-center gap-4 text-gray-100">
                  <CheckCircle className="text-[#c2a15b] w-5 h-5 flex-shrink-0" />
                  <span className="font-sans">Seamless Day-of Production Management</span>
                </li>
              </ul>
              <div className="pt-8">
                <Link
                  to="/contact"
                  className="border-b border-[#c2a15b]/40 pb-1 text-[#c2a15b] font-sans font-semibold uppercase tracking-widest text-sm hover:border-[#c2a15b] transition-colors inline-flex items-center gap-2 group"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Section 2: Gourmet Catering (Inverted Layout) */}
      <section className="py-24 bg-[#080808] mb-32 lg:mb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 relative">
            <ScrollReveal direction="right">
              <div className="aspect-[16/10] bg-[#0a0a0a] rounded-sm overflow-hidden shadow-sm">
                <img
                  alt="Gourmet Catering"
                  className="w-full h-full object-cover"
                  src={cateringImg}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Overlaid small detail image */}
              <div className="absolute -top-12 -left-12 w-40 h-40 hidden md:block border-4 border-[#f6f3ed] overflow-hidden shadow-lg bg-card z-10">
                <img
                  alt="Detail"
                  className="w-full h-full object-cover"
                  src={culturalImg}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2 space-y-8">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="inline-flex items-center gap-4 text-[#c2a15b]">
                <span className="h-[1px] w-8 bg-current"></span>
                <span className="font-sans uppercase tracking-widest text-xs font-semibold">
                  Category 02
                </span>
              </div>
              <h2 className="text-4xl font-serif text-gray-100 mt-4 mb-6">Gourmet Catering</h2>
              <p className="text-gray-100/70 text-lg leading-relaxed font-sans mb-8">
                Gastronomy is the heart of every great host. Our culinary team crafts
                seasonal menus that are as visually stunning as they are delicious. We
                prioritize locally sourced ingredients and innovative techniques to
                create a dining experience that lingers long after the last bite.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 bg-[#0a0a0a] rounded-sm shadow-sm border border-white/5">
                  <h4 className="font-serif text-lg mb-2 text-gray-100">Tasting Menus</h4>
                  <p className="text-sm text-gray-100/60 font-sans leading-relaxed">
                    Multi-course journeys through seasonal flavors.
                  </p>
                </div>
                <div className="p-6 bg-[#0a0a0a] rounded-sm shadow-sm border border-white/5">
                  <h4 className="font-serif text-lg mb-2 text-gray-100">Mixology</h4>
                  <p className="text-sm text-gray-100/60 font-sans leading-relaxed">
                    Artisanal cocktails curated for your theme.
                  </p>
                </div>
              </div>
              <div className="pt-8">
                <Link
                  to="/contact"
                  className="inline-flex bg-[#111111] text-gray-200 px-8 py-4 rounded-sm font-sans font-semibold uppercase tracking-widest text-sm hover:opacity-90 active:scale-95 transition-all"
                >
                  Enquire Now
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service Section 3: Exquisite Floral Design */}
      <section className="mb-32 lg:mb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full md:w-1/3 space-y-8">
              <ScrollReveal direction="up">
                <div className="inline-flex items-center gap-4 text-[#c2a15b]">
                  <span className="h-[1px] w-8 bg-current"></span>
                  <span className="font-sans uppercase tracking-widest text-xs font-semibold">
                    Category 03
                  </span>
                </div>
                <h2 className="text-4xl font-serif text-gray-100 mt-4 mb-6">
                  Exquisite Floral Design
                </h2>
                <p className="text-gray-100/70 text-lg leading-relaxed font-sans mb-8">
                  Our floral arrangements are more than decorations; they are living
                  sculptures that define the atmosphere. Using rare blooms and
                  architectural greenery, we create immersive environments that
                  captivate the senses.
                </p>
                <div className="pt-4">
                  <Link
                    to="/gallery"
                    className="border-b border-[#c2a15b]/40 pb-1 text-[#c2a15b] font-sans font-semibold uppercase tracking-widest text-sm hover:border-[#c2a15b] transition-colors inline-flex items-center gap-2 group"
                  >
                    Explore Portfolio
                    <BookOpen className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="mt-12 p-8 border border-white/10 rounded-sm bg-[#050505]/50">
                  <p className="italic font-serif text-xl text-gray-100 leading-relaxed">
                    "The flowers were not just part of the room; they were the
                    conversation itself."
                  </p>
                  <p className="mt-4 font-sans uppercase tracking-[0.15em] text-xs text-[#c2a15b] font-semibold">
                    — Julianne V., Private Client
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 sm:gap-6">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-sm bg-card col-span-1 md:mt-12">
                  <img
                    alt="Floral Design 1"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    src={bridalImg}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-sm bg-card col-span-1">
                  <img
                    alt="Floral Design 2"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    src={heroImg}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 lg:mb-40">
        <ScrollReveal>
          <div className="bg-[#0a0a0a] p-10 md:p-24 text-center rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[#c2a15b] opacity-[0.03] pointer-events-none"></div>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-100 mb-6 relative z-10">
              Begin Your Journey
            </h2>
            <p className="text-gray-100/70 font-sans text-lg max-w-xl mx-auto mb-10 relative z-10 leading-relaxed">
              Whether it's an intimate dinner or a grand celebration, let us curate an
              experience that reflects your vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link
                to="/contact"
                className="bg-[#111111] text-gray-200 px-10 py-4 rounded-sm font-sans font-semibold uppercase tracking-widest text-sm hover:opacity-90 transition-all text-center border border-white/20 block"
              >
                Request a Proposal
              </Link>
              <Link
                to="/services"
                className="border border-white/20 text-gray-100 px-10 py-4 rounded-sm font-sans font-semibold uppercase tracking-widest text-sm hover:bg-[#0a0a0a]/50 transition-all text-center block"
              >
                View Packages
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Services;
