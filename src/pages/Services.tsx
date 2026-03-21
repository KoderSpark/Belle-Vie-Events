import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, Sparkles, PartyPopper, MessageCircle, ClipboardList, CalendarCheck, Truck, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-event.jpg";
import babyShowerImg from "@/assets/baby-shower.jpg";
import bridalImg from "@/assets/bridal-shower.jpg";

const services = [
  {
    icon: Palette,
    title: "Custom Balloon Styling",
    desc: "From organic garlands to sculptural arches, every balloon installation is handcrafted to complement your event's palette and personality.",
    img: heroImg,
  },
  {
    icon: Sparkles,
    title: "Themed Event Design",
    desc: "Full-concept design bringing your theme to life — florals, backdrops, tablescapes, and bespoke details woven into a cohesive vision.",
    img: babyShowerImg,
  },
  {
    icon: PartyPopper,
    title: "Specialty Events",
    desc: "Unique celebrations that go beyond the ordinary — gender reveals, milestone anniversaries, proposal setups, and intimate luxury gatherings.",
    img: bridalImg,
  },
];

const steps = [
  { icon: MessageCircle, title: "Discovery Call", desc: "We learn about your vision, style, and the moments that matter most." },
  { icon: ClipboardList, title: "Design & Proposal", desc: "A tailored design concept and transparent pricing aligned to your budget." },
  { icon: CalendarCheck, title: "Refinement", desc: "We perfect every detail together until the vision feels exactly right." },
  { icon: Truck, title: "Flawless Execution", desc: "Our team handles setup, styling, and breakdown so you simply enjoy." },
];

const Services = () => (
  <main className="pt-20 overflow-hidden">
    {/* Hero */}
    <section className="relative py-32 lg:py-44">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-60px] w-[420px] h-[420px] rounded-full bg-[hsl(var(--lavender)/0.25)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-60px] w-[380px] h-[380px] rounded-full bg-[hsl(var(--peach)/0.2)] blur-3xl pointer-events-none" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6"
        >
          What We Offer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.05] tracking-tight"
        >
          Designed to <span className="gradient-text">Inspire</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-soft-gray text-lg max-w-xl mx-auto leading-relaxed"
        >
          We offer bespoke event design services that turn your vision into an unforgettable, immersive experience.
        </motion.p>
      </div>
    </section>

    {/* Services — alternating editorial layout */}
    <section className="pb-12">
      <div className="container mx-auto px-6 space-y-20 lg:space-y-32">
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <ScrollReveal key={s.title}>
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? "" : "lg:direction-rtl"}`}>
                <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="overflow-hidden rounded-2xl shadow-xl group">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-[320px] lg:h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-blush-gold mb-6">
                    <s.icon size={22} className="text-charcoal" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-4">{s.title}</h2>
                  <p className="text-soft-gray leading-relaxed text-base mb-6">{s.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-charcoal transition-colors duration-200 group/link"
                  >
                    Inquire About This Service
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>

    {/* Process — visual timeline */}
    <section className="py-24 lg:py-32 section-gradient-lavender">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">How It Works</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">Our Process</h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-[hsl(var(--gold)/0.3)] lg:-translate-x-px" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className={`relative flex items-start gap-6 mb-16 last:mb-0 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className={`flex-1 pl-16 lg:pl-0 ${isLeft ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"}`}>
                    <span className="font-sans text-xs font-bold text-gold uppercase tracking-wider">Step {i + 1}</span>
                    <h3 className="font-serif text-xl font-semibold text-charcoal mt-2 mb-2">{step.title}</h3>
                    <p className="text-soft-gray text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Circle */}
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full gradient-blush-gold shadow-md z-10">
                    <step.icon size={20} className="text-charcoal" />
                  </div>

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden lg:block flex-1" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden gradient-blush-gold rounded-3xl px-8 py-20 sm:px-16 sm:py-24 text-center">
            <div className="absolute top-[-60px] right-[-40px] w-64 h-64 rounded-full bg-[hsl(var(--lavender)/0.4)] blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-60px] left-[-40px] w-72 h-72 rounded-full bg-[hsl(var(--gold)/0.2)] blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4 leading-tight">
                Have Something Special in Mind?
              </h2>
              <p className="text-charcoal/60 mb-10 max-w-md mx-auto text-base sm:text-lg">
                We love bringing unique visions to life. Let's chat about yours.
              </p>
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-card px-10 py-4 text-base font-semibold text-charcoal shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] active:scale-[0.97]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Services;
