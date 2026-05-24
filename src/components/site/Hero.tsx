import { motion } from "framer-motion";
import { ArrowRight, Play, Code2, Cpu, Cloud, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const floating = [
  { Icon: Code2, x: "8%", y: "20%", delay: 0 },
  { Icon: Cpu, x: "82%", y: "25%", delay: 0.6 },
  { Icon: Cloud, x: "14%", y: "75%", delay: 1.2 },
  { Icon: Sparkles, x: "85%", y: "70%", delay: 1.8 },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center px-4 pt-32">
      {/* Floating tech glyphs */}
      {floating.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + delay * 0.15, duration: 0.8 }}
          className="pointer-events-none absolute hidden md:block"
          style={{ left: x, top: y }}
        >
          <div
            className="grid h-14 w-14 place-items-center rounded-2xl glass animate-float"
            style={{ animationDelay: `${delay}s` }}
          >
            <Icon className="h-6 w-6 text-[oklch(0.85_0.16_200)]" />
          </div>
        </motion.div>
      ))}

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative grid h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[oklch(0.85_0.16_200)]" />
              <span className="relative h-2 w-2 rounded-full bg-[oklch(0.85_0.16_200)]" />
            </span>
            Now accepting new projects · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Transforming ideas into{" "}
            <span className="gradient-text animate-gradient">powerful digital experiences</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
          >
            We build websites, AI solutions, scalable applications and digital products
            for ambitious businesses and startups — engineered with craft, designed with soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[oklch(0.7_0.22_260)] to-[oklch(0.65_0.27_305)] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_oklch(0.65_0.27_305_/_0.8)] transition-transform hover:scale-[1.03]"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              View our work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground"
          >
            <span>React · Next.js</span>
            <span>AI · LLMs</span>
            <span>Cloud Native</span>
            <span>Design Systems</span>
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          {/* Logo only — no background */}
          <motion.img
            src={logo}
            alt="Company logo"
            width={1280}
            height={1280}
            className="relative h-full w-full object-contain"
            style={{
              filter: "drop-shadow(0 0 30px oklch(0.85 0.16 200 / 0.55)) drop-shadow(0 10px 40px oklch(0.65 0.27 305 / 0.5))",
            }}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

        </motion.div>
      </div>
    </section>
  );
}
