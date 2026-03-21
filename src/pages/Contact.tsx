import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const eventTypes = ["Baby Shower", "Birthday", "Bridal Shower", "Wedding", "Cultural Celebration", "Corporate Event", "Other"];
const budgets = ["Under $500", "$500 – $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "$5,000+"];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@bellevie.design" },
  { icon: Phone, label: "Phone", value: "(555) 234-5678" },
  { icon: MapPin, label: "Based in", value: "Los Angeles, CA" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Your inquiry has been sent! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-card/80 px-4 py-3.5 text-sm text-charcoal placeholder:text-soft-gray/50 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--blush)/0.5)] focus:border-transparent transition-all duration-200";

  return (
    <main className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-100px] right-[-80px] w-[480px] h-[480px] rounded-full bg-[hsl(var(--blush)/0.2)] blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] rounded-full bg-[hsl(var(--lavender)/0.15)] blur-3xl pointer-events-none" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.05] tracking-tight"
          >
            Let's Start <span className="gradient-text">Planning</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-soft-gray text-lg max-w-xl mx-auto leading-relaxed"
          >
            Tell us about your dream event and we'll craft something extraordinary together.
          </motion.p>
        </div>
      </section>

      {/* Contact info cards + Form */}
      <section className="pb-24 lg:pb-32">
        <div className="container mx-auto px-6">
          {/* Info cards */}
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {contactInfo.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl p-6 text-center group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-blush-gold mx-auto mb-3 transition-transform duration-200 group-hover:scale-110">
                    <c.icon size={18} className="text-charcoal" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-soft-gray mb-1">{c.label}</p>
                  <p className="text-sm font-medium text-charcoal">{c.value}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="relative glass rounded-3xl p-8 sm:p-12 shadow-lg overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-48 h-48 gradient-blush-gold opacity-20 rounded-bl-[100px] pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-2">Event Inquiry</h2>
                  <p className="text-soft-gray text-sm mb-10">Fields marked with * are required</p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-soft-gray mb-2">Name *</label>
                        <input required type="text" placeholder="Your full name" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-soft-gray mb-2">Email *</label>
                        <input required type="email" placeholder="you@example.com" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-soft-gray mb-2">Phone</label>
                        <input type="tel" placeholder="(555) 123-4567" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-soft-gray mb-2">Event Type *</label>
                        <select required className={inputClass}>
                          <option value="">Select event type</option>
                          {eventTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-soft-gray mb-2">Event Date</label>
                        <input type="date" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-soft-gray mb-2">Location</label>
                        <input type="text" placeholder="Venue or city" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-soft-gray mb-2">Guest Count</label>
                        <input type="number" placeholder="Approximate guests" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-soft-gray mb-2">Budget</label>
                        <select className={inputClass}>
                          <option value="">Select budget range</option>
                          {budgets.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-soft-gray mb-2">Theme / Colors</label>
                        <input type="text" placeholder="e.g. Blush & gold, tropical vibes" className={inputClass} />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-soft-gray mb-2">Pinterest / Inspiration Link</label>
                        <input type="url" placeholder="https://pinterest.com/..." className={inputClass} />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-soft-gray mb-2">Message</label>
                        <textarea rows={4} placeholder="Tell us more about your vision…" className={inputClass} />
                      </div>
                    </div>

                    <div className="mt-10 flex justify-center">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-gradient rounded-full px-12 py-4 text-base font-semibold text-charcoal disabled:opacity-60 inline-flex items-center gap-2"
                      >
                        {submitting ? (
                          "Sending…"
                        ) : (
                          <>
                            Send Inquiry
                            <Send size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
