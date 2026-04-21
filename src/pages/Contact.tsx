import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send, ChevronRight, ChevronLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-event.webp";

const eventTypes = ["Baby Shower", "Birthday", "Bridal Shower", "Wedding", "Cultural Celebration", "Corporate Event", "Other"];
const budgets = ["Under $500", "$500 – $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "$5,000+"];

const contactInfo = [
  { icon: Mail, label: "Email", value: "bellevieeventdesign@gmail.com" },
  { 
    icon: Phone, 
    label: "Phone", 
    value: (
      <div className="flex flex-col">
        <a href="tel:+919347442350" className="hover:text-[#c2a15b] transition-colors">+91 93474 42350</a>
        <a href="tel:+918096110643" className="hover:text-[#c2a15b] transition-colors">+91 80961 10643</a>
      </div>
    )
  },
  { icon: MapPin, label: "Based in", value: "Priyarani Residency, Film Nagar, Hyderabad" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

const Contact = () => {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    budget: "",
    location: "",
    theme: "",
    inspiration: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Enquiry sent! We'll reach out within 24 hours.");
      setStep(1);
      setFormData({
        name: "", email: "", phone: "", eventType: "", date: "",
        guests: "", budget: "", location: "", theme: "",
        inspiration: "", message: ""
      });
    }, 1500);
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/20 py-4 text-lg text-gray-100 placeholder:text-gray-100/30 focus:outline-none focus:border-[#c2a15b] transition-all duration-300 font-sans";

  const stepLabels = ["The Basics", "The Celebration", "The Vision"];

  return (
    <main className="pb-20 overflow-hidden bg-[#050505]">
      {/* Hero Header */}
      <header className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 z-0">
          <img alt="Contact" className="w-full h-full object-cover opacity-40" src={heroImg} />
          <div className="absolute inset-0 bg-[#111111]/40 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 py-20 mt-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-[#c2a15b] mb-6"
          >
            Connect With Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-gray-100 leading-tight"
          >
            Let's Start <span className="italic font-normal">Planning</span>
          </motion.h1>
        </div>
      </header>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-20">
            
            {/* Left: Info & Progress */}
            <div className="lg:col-span-4 space-y-12">
              <ScrollReveal>
                <div className="space-y-8">
                  <h2 className="font-serif text-3xl text-gray-100">Enquiry <br/>Stage</h2>
                  
                  {/* Custom Progress Indicator */}
                  <div className="space-y-6 pt-4">
                    {stepLabels.map((label, i) => (
                      <div key={label} className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${
                          step === i + 1 ? 'border-[#c2a15b] bg-[#c2a15b] text-gray-100 shadow-lg' : 
                          step > i + 1 ? 'border-white/20 bg-[#111111] text-gray-100' : 'border-white/20 text-gray-100/30'
                        }`}>
                          {i + 1}
                        </div>
                        <span className={`font-sans text-[11px] uppercase tracking-widest font-semibold transition-colors duration-500 ${
                          step === i + 1 ? 'text-gray-100' : 'text-gray-100/30'
                        }`}>
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-20 space-y-8 hidden lg:block">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="mt-1 p-2 bg-[#111111]/[0.03] rounded-sm">
                        <info.icon size={16} className="text-[#c2a15b]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-100/30 mb-1">{info.label}</p>
                        <p className="text-sm font-medium text-gray-100">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Interactive Form */}
            <div className="lg:col-span-8">
              <div className="bg-[#0a0a0a] p-8 md:p-16 rounded-sm shadow-sm border border-white/5 min-h-[600px] flex flex-col relative overflow-hidden">
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-10 flex-1"
                      >
                        <div className="space-y-2">
                          <h3 className="font-serif text-2xl text-gray-100">Who shall we speak with?</h3>
                          <p className="text-gray-100/40 text-sm">Tell us who you are so we can address you personally.</p>
                        </div>
                        <div className="space-y-8">
                          <input required name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" className={inputClass} />
                          <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Email address" className={inputClass} />
                          <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="Phone number (optional)" className={inputClass} />
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-10 flex-1"
                      >
                        <div className="space-y-2">
                          <h3 className="font-serif text-2xl text-gray-100">The Celebration</h3>
                          <p className="text-gray-100/40 text-sm">Help us understand the scale and style of your event.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-100/40">Event Type</label>
                            <select name="eventType" value={formData.eventType} onChange={handleInputChange} className={inputClass}>
                              <option value="">Select an option</option>
                              {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-100/40">Desired Date</label>
                            <input name="date" value={formData.date} onChange={handleInputChange} type="date" className={inputClass} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-100/40">Guest Count</label>
                            <input name="guests" value={formData.guests} onChange={handleInputChange} type="number" placeholder="Approx. guests" className={inputClass} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-100/40">Investment / Budget</label>
                            <select name="budget" value={formData.budget} onChange={handleInputChange} className={inputClass}>
                              <option value="">Select range</option>
                              {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-10 flex-1"
                      >
                        <div className="space-y-2">
                          <h3 className="font-serif text-2xl text-gray-100">The Vision</h3>
                          <p className="text-gray-100/40 text-sm">Every detail counts. Share your inspiration with us.</p>
                        </div>
                        <div className="space-y-8">
                          <input name="location" value={formData.location} onChange={handleInputChange} placeholder="Planned location / Venue" className={inputClass} />
                          <input name="theme" value={formData.theme} onChange={handleInputChange} placeholder="Theme or color palette (e.g. Blush & Gold)" className={inputClass} />
                          <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} placeholder="Tell us more about your dream event..." className={inputClass} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
                    {step > 1 ? (
                      <button type="button" onClick={prevStep} className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest text-gray-100/40 hover:text-gray-100 transition-colors">
                        <ChevronLeft size={14} /> Back
                      </button>
                    ) : <div />}

                    {step < 3 ? (
                      <button type="button" onClick={nextStep} className="bg-[#111111] text-gray-100 px-8 py-3 rounded-sm flex items-center gap-3 font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-[#c2a15b] transition-all duration-300 shadow-md">
                        Continue <ChevronRight size={14} />
                      </button>
                    ) : (
                      <button type="submit" disabled={submitting} className="bg-[#c2a15b] text-gray-100 px-8 py-3 rounded-sm flex items-center gap-3 font-sans text-[10px] font-bold uppercase tracking-widest hover:bg-[#111111] transition-all duration-300 shadow-lg disabled:opacity-50">
                        {submitting ? "Sending..." : <>Complete Inquiry <Send size={14} /></>}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
