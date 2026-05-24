import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Projects shipped" },
  { value: 20, suffix: "+", label: "Happy clients" },
  { value: 99, suffix: "%", label: "Satisfaction" },
  { value: 24, suffix: "/7", label: "Dedicated support" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Who we are"
          title={<>A small team of builders, designers and <span className="gradient-text">AI engineers</span>.</>}
          description="We help startups and growing businesses turn ambitious ideas into impactful digital products — from polished marketing sites to AI-powered systems running in production."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl glass p-7"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[oklch(0.7_0.22_260)/.0] to-[oklch(0.65_0.27_305)/.25] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="font-display text-4xl font-semibold gradient-text">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
