import { motion } from "framer-motion";
import { Heart, Eye, Gem } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import aboutImg from "@/assets/about-founder.jpg";
import welcomeImg from "@/assets/welcome.jpg";

const values = [
  { icon: Heart, title: "Artistry", desc: "Every installation is a work of art, crafted with intention and an eye for the extraordinary." },
  { icon: Eye, title: "Warmth", desc: "We design with heart — your story, your culture, your joy are at the center of everything." },
  { icon: Gem, title: "Precision", desc: "From the first sketch to the final petal, meticulous attention to detail defines our process." },
];

const stats = [
  { value: "200+", label: "Events Styled" },
  { value: "6", label: "Years of Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const About = () => (
  <main className="pt-20 overflow-hidden">
    {/* Hero — full-width editorial */}
    <section className="relative py-32 lg:py-44">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full bg-[hsl(var(--blush)/0.25)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-60px] w-[400px] h-[400px] rounded-full bg-[hsl(var(--lavender)/0.2)] blur-3xl pointer-events-none" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.05] tracking-tight"
          >
            Crafting a
            <br />
            <span className="gradient-text">Beautiful Life</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-soft-gray text-lg max-w-xl mx-auto leading-relaxed"
          >
            Born from a love of beauty and a passion for celebration, Belle Vie transforms ordinary moments into extraordinary memories.
          </motion.p>
        </div>
      </div>
    </section>

    {/* Founder — overlapping editorial layout */}
    <section className="pb-24 lg:pb-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          <ScrollReveal direction="left" className="lg:col-span-7">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img src={aboutImg} alt="Belle Vie founder" className="w-full h-[420px] lg:h-[540px] object-cover" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 glass-strong rounded-2xl p-6 shadow-lg max-w-[220px]">
                <p className="font-serif text-3xl font-bold text-charcoal">200+</p>
                <p className="text-soft-gray text-sm mt-1">Events beautifully styled</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-5 lg:pl-12">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">The Founder</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
              The Heart Behind Belle Vie
            </h2>
            <div className="space-y-4">
              <p className="text-soft-gray leading-relaxed">
                Belle Vie was born from a deeply personal belief: that every celebration, no matter the scale, deserves to feel extraordinary. What started as a creative passion for balloon artistry evolved into a full-service luxury event design studio.
              </p>
              <p className="text-soft-gray leading-relaxed">
                Our founder's journey began with a simple question — <em className="text-charcoal font-medium">"What if every detail could spark joy?"</em> That curiosity led to years of studying color theory, spatial design, and the delicate art of atmosphere.
              </p>
            </div>
            <div className="gold-divider mt-8 max-w-[80px]" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Stats banner */}
    <section className="py-16">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="gradient-blush-gold rounded-3xl py-12 px-8 relative overflow-hidden">
            <div className="absolute top-[-40px] left-[-40px] w-48 h-48 rounded-full bg-[hsl(var(--lavender)/0.3)] blur-3xl pointer-events-none" />
            <div className="grid grid-cols-3 gap-6 relative z-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">{s.value}</p>
                  <p className="text-charcoal/60 text-sm mt-2">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Values — staggered cards */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Philosophy</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">What We Stand For</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.12}>
              <div className="group relative glass rounded-2xl p-10 h-full text-center transition-all duration-300 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-full gradient-blush-gold mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                  <v.icon size={24} className="text-charcoal" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">{v.title}</h3>
                <p className="text-soft-gray leading-relaxed text-sm">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Vision — immersive */}
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={welcomeImg} alt="Elegant event" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Our Vision</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
              More Than Decor — It's an Experience
            </h2>
            <p className="text-soft-gray leading-relaxed text-lg mb-4">
              We envision a world where every milestone — from the quiet first birthday to the grandest anniversary — is wrapped in beauty and meaning.
            </p>
            <p className="text-soft-gray leading-relaxed text-lg">
              Belle Vie is a feeling. A moment frozen in time that reminds you how beautiful life truly is.
            </p>
            <div className="gold-divider mx-auto mt-10 max-w-[100px]" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default About;
