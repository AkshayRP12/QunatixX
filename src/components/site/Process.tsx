import { Lightbulb, ClipboardList, Palette, Code2, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { Icon: Lightbulb, title: "Idea", desc: "We listen, ask sharp questions, frame the problem." },
  { Icon: ClipboardList, title: "Planning", desc: "Scope, milestones, architecture and risk." },
  { Icon: Palette, title: "Design", desc: "High-fidelity flows, design system, motion." },
  { Icon: Code2, title: "Development", desc: "Production-grade code, weekly demos, no surprises." },
  { Icon: Rocket, title: "Launch", desc: "Ship, measure, iterate — and keep shipping." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 30%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative px-4 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Our process"
          title={<>Five steps from spark to <span className="gradient-text">scale</span>.</>}
        />

        <div ref={ref} className="relative mt-20">
          {/* Vertical track */}
          <div className="absolute left-6 top-0 h-full w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-[oklch(0.7_0.22_260)] via-[oklch(0.65_0.27_305)] to-[oklch(0.85_0.16_200)] sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className={`relative grid items-center gap-6 sm:grid-cols-2 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}>
                  <div className={i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"}>
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <span>0{i + 1}</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                  <div className={`pl-16 sm:pl-0 ${i % 2 === 0 ? "sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
                    <div className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.7_0.22_260)] to-[oklch(0.65_0.27_305)] text-white shadow-[0_0_30px_oklch(0.65_0.27_305_/_0.5)] sm:left-1/2 sm:-translate-x-1/2">
                      <s.Icon className="h-5 w-5" />
                    </div>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`inline-block rounded-2xl glass p-5 ${i % 2 === 0 ? "" : "sm:ml-auto"}`}
                    >
                      <s.Icon className="h-5 w-5 text-[oklch(0.85_0.16_200)]" />
                    </motion.div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
