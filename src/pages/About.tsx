import { motion } from "framer-motion";
import { Heart, Eye, Gem, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
const aboutImg = "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2048&auto=format&fit=crop";
const welcomeImg = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2048&auto=format&fit=crop";
const bridalImg = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2048&auto=format&fit=crop";

const values = [
  {
    title: "Artistry",
    desc: "Every installation is a work of art, crafted with intention and an eye for the extraordinary.",
    index: "01"
  },
  {
    title: "Warmth",
    desc: "We design with heart — your story, your culture, your joy are at the center of everything.",
    index: "02"
  },
  {
    title: "Precision",
    desc: "From the first sketch to the final petal, meticulous attention to detail defines our process.",
    index: "03"
  },
];

const About = () => {
  return (
    <main className="pb-20 overflow-hidden bg-background">
      {/* Hero — full-width editorial dark */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#111111] mb-24 lg:mb-32">
        <div className="absolute inset-0 z-0 text-gray-100">
          <img
            alt="Elegant event background"
            className="w-full h-full object-cover opacity-50"
            src={welcomeImg}
          />
          <div className="absolute inset-0 bg-[#111111]/60 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 py-20 mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#c2a15b] mb-6"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-sans font-bold text-gray-100 leading-[1.05] tracking-tight"
            >
              Crafting a
              <br />
              <span className="italic font-normal text-[#c2a15b] font-serif">Beautiful Life</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-gray-100/70 text-lg max-w-xl mx-auto leading-relaxed"
            >
              Born from a love of beauty and a passion for celebration, haus of veloura transforms ordinary moments into extraordinary memories.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Founder — Asymmetric Layers */}
      <section className="py-24 lg:py-40 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Image Layering */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal direction="right">
                <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm shadow-2xl max-w-xl mx-auto lg:mx-0">
                  <img src={aboutImg} loading="lazy" alt="haus of veloura founder" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000" />
                </div>
                {/* Overlapping secondary image - tucked closer */}
                <div className="absolute -bottom-10 -left-6 hidden xl:block w-56 h-72 z-20 border-[10px] border-white shadow-xl overflow-hidden rounded-sm">
                  <img src={bridalImg} loading="lazy" alt="Detail" className="w-full h-full object-cover" />
                </div>
                {/* Floating stat card - tucked closer */}
                <div className="absolute top-10 -right-6 hidden sm:block p-6 bg-[#111111] text-gray-100 shadow-2xl z-20 rounded-sm">
                  <div className="mb-0.5">
                    <span className="text-3xl font-serif text-[#c2a15b]">200+</span>
                  </div>
                  <p className="font-sans text-[9px] uppercase tracking-widest text-gray-100/60">Events Styled</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 space-y-10 lg:pl-10">
              <ScrollReveal direction="left" delay={0.2}>
                <span className="font-sans text-[#c2a15b] font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">
                  The Founder
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl text-gray-100 leading-tight">
                  The Heart <br />
                  <span className="italic">Behind haus of veloura</span>
                </h2>
                <div className="space-y-6 text-gray-100/70 leading-relaxed text-lg pt-4">
                  <p>
                    haus of veloura was born from a deeply personal belief: that every celebration,
                    no matter the scale, deserves to feel extraordinary. What started as a
                    creative passion for balloon artistry evolved into a full-service luxury
                    event design studio.
                  </p>
                  <p>
                    Our founder's journey began with a simple question —
                    <em className="text-gray-100 font-medium"> "What if every detail could spark joy?"</em>
                    That curiosity led to years of studying color theory, spatial design,
                    and the delicate art of atmosphere.
                  </p>
                </div>
                <div className="pt-8 flex gap-12">
                  <div>
                    <h4 className="font-serif text-2xl text-gray-100">6</h4>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-[#c2a15b] mt-1">Years Exc.</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-gray-100">100%</h4>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-[#c2a15b] mt-1">Satisfaction</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — Staggered Numbered Layout */}
      <section className="py-24 lg:py-40 bg-[#080808]">
        <div className="container mx-auto px-6 max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-24">
              <span className="font-sans text-[#c2a15b] font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">
                Philosophy
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-100 italic">What We Stand For</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-32">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 relative">
                    <span className="absolute -top-20 -left-10 md:-left-16 text-[120px] md:text-[180px] font-serif text-gray-100/5 pointer-events-none select-none">
                      {v.index}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-gray-100 relative z-10 mb-6">
                      {v.title}
                    </h3>
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-100/60 text-lg md:text-xl leading-relaxed font-sans border-l-2 border-[#c2a15b]/30 pl-8">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision — Immersive Manifesto */}
      <section className="relative py-40 lg:py-56 overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 z-0">
          <img src={welcomeImg} loading="lazy" alt="Elegant event" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-transparent to-charcoal/80" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <span className="font-sans text-[#c2a15b] font-semibold uppercase tracking-[0.3em] text-xs block">
                Our Vision
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-gray-100 leading-[1.15] italic">
                "More than decor — it's the rhythm <br className="hidden md:block" /> of an unforgettable experience."
              </h2>
              <div className="w-20 h-[1px] bg-[#c2a15b] mx-auto opacity-50" />
              <div className="space-y-8 text-gray-100/60 text-lg md:text-2xl font-sans max-w-2xl mx-auto leading-relaxed italic">
                <p>
                  We envision a world where every milestone — from the quiet first birthday
                  to the grandest anniversary — is wrapped in beauty and meaning.
                </p>
                <p>
                  haus of veloura is a feeling. A moment frozen in time that reminds you
                  <span className="text-gray-100"> how beautiful life truly is.</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default About;