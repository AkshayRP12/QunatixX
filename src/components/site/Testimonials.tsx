import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { quote: "Honestly I was not expecting much, thought it will be like other vendors who take money and disappear. But these boys delivered on time and the system is working fine. No complaints.", name: "Ramesh Babu", role: "Owner, Babu Textiles Pvt Ltd" },
  { quote: "Price was very reasonable compared to what the big agencies were quoting. Work is good, communication is good. My CA was also happy with the invoice. Will recommend to others.", name: "Suresh Nair", role: "Director, NSN Trading Co" },
  { quote: "My son suggested I try these people for our shop website. I was doubtful at first but they explained everything patiently. Now our online orders have picked up nicely.", name: "Mohan Krishnan", role: "Proprietor, Krishnan Electricals" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative px-4 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Kind words from <span className="gradient-text">clients</span>.</>}
        />

        <div className="relative mt-16 overflow-hidden rounded-3xl glass-strong p-10 sm:p-14">
          <Quote className="absolute right-8 top-8 h-16 w-16 text-white/5" />
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-balance font-display text-2xl leading-snug sm:text-3xl">
                  "{items[i].quote}"
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[oklch(0.7_0.22_260)] to-[oklch(0.65_0.27_305)]" />
                  <div>
                    <div className="text-sm font-semibold">{items[i].name}</div>

                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-10 bg-gradient-to-r from-[oklch(0.7_0.22_260)] to-[oklch(0.65_0.27_305)]" : "w-4 bg-white/15"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
