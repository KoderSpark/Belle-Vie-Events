import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-event.jpg";
import welcomeImg from "@/assets/welcome.jpg";
import babyShowerImg from "@/assets/baby-shower.jpg";
import birthdayImg from "@/assets/birthday.jpg";
import bridalImg from "@/assets/bridal-shower.jpg";
import culturalImg from "@/assets/cultural.jpg";
import cateringImg from "@/assets/catering.png";
const categories = [
  { title: "Baby Showers", img: babyShowerImg },
  { title: "Milestone Birthdays", img: birthdayImg },
  { title: "Bridal Showers", img: bridalImg },
  { title: "Cultural Celebrations", img: culturalImg },
  { title: "Luxury Catering", img: cateringImg },
];

const testimonials = [
  { name: "Amara Okonkwo", text: "Belle Vie turned our daughter's first birthday into an absolute dream. Every detail was beyond anything I could have imagined.", rating: 5 },
  { name: "Sophie Laurent", text: "Working with this team felt effortless. They brought a vision to life I didn't even know I had. Pure magic.", rating: 5 },
  { name: "Priya Mehta", text: "Our cultural celebration was handled with such care and respect for tradition while still feeling modern and luxurious.", rating: 5 },
];

const Index = () => (
  <main className="overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Luxury balloon and floral event setup" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-charcoal"
        >
          Beautifully Curated Moments.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl text-soft-gray max-w-xl mx-auto leading-relaxed"
        >
          Custom balloon styling and luxury event decor for your most cherished milestones.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <Link
            to="/contact"
            className="btn-gradient inline-flex rounded-full px-8 py-3.5 text-base font-semibold text-charcoal"
          >
            Inquire Now
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Welcome */}
    <section className="section-gradient-blush py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img src={welcomeImg} alt="Elegant event welcome area" className="w-full h-auto object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Welcome to Belle Vie</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Where Every Detail Tells a Story</h2>
              <div className="gold-divider my-6 max-w-[80px]" />
              <p className="text-soft-gray leading-relaxed mb-4">
                We believe that life's most beautiful moments deserve an extraordinary setting. From intimate gatherings to grand celebrations, Belle Vie crafts immersive experiences that reflect your unique story.
              </p>
              <p className="text-soft-gray leading-relaxed">
                With a passion for color, texture, and artful design, we transform ordinary spaces into breathtaking environments that linger in memory long after the last guest departs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Our Specialties</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">Featured Categories</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <Link to="/gallery" className="group relative block overflow-hidden rounded-xl aspect-[3/4] shadow-md">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-semibold text-card font-serif">{cat.title}</h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-gradient-lavender py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">Kind Words</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">What Our Clients Say</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="glass rounded-xl p-8 shadow-sm h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-soft-gray leading-relaxed flex-1 italic">"{t.text}"</p>
                <p className="mt-6 font-serif font-semibold text-charcoal">{t.name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl gradient-blush-gold px-8 py-20 sm:px-16 sm:py-28 text-center">
            {/* Decorative blurred orbs */}
            <div className="absolute top-[-60px] left-[-40px] w-64 h-64 rounded-full bg-[hsl(var(--lavender)/0.4)] blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-80px] right-[-40px] w-80 h-80 rounded-full bg-[hsl(var(--gold)/0.25)] blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[hsl(var(--blush)/0.3)] blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] tracking-tight max-w-2xl mx-auto"
              >
                Ready to Create Something Beautiful?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-5 text-charcoal/60 text-base sm:text-lg max-w-md mx-auto leading-relaxed"
              >
                Let us bring your vision to life with a personalized event experience.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10"
              >
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-card px-10 py-4 text-base font-semibold text-charcoal shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] active:scale-[0.97]"
                >
                  Start Planning
                </Link>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </main>
);

export default Index;
