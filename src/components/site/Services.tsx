import {
  Globe, LayoutDashboard, Palette, Brain, Cloud, Workflow, Search,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const services = [
  { Icon: Globe, title: "Website Development", desc: "Beautifully crafted marketing sites that convert.", color: "from-[oklch(0.7_0.22_260)] to-[oklch(0.65_0.27_305)]" },
  { Icon: LayoutDashboard, title: "Custom Web Apps", desc: "Scalable SaaS and internal tools, built to last.", color: "from-[oklch(0.65_0.27_305)] to-[oklch(0.7_0.25_350)]" },
  { Icon: Palette, title: "UI / UX Design", desc: "Interfaces with personality, clarity and craft.", color: "from-[oklch(0.7_0.25_350)] to-[oklch(0.65_0.27_305)]" },
  { Icon: Brain, title: "AI Solutions", desc: "LLM agents, RAG pipelines and intelligent automations.", color: "from-[oklch(0.7_0.22_260)] to-[oklch(0.85_0.16_200)]" },
  { Icon: Cloud, title: "Cloud Deployment", desc: "AWS, GCP and edge — observable and resilient.", color: "from-[oklch(0.55_0.2_265)] to-[oklch(0.7_0.22_260)]" },
  { Icon: Workflow, title: "Automation Systems", desc: "Workflow engines that quietly do the heavy lifting.", color: "from-[oklch(0.65_0.27_305)] to-[oklch(0.85_0.16_200)]" },
  { Icon: Search, title: "SEO & Optimization", desc: "Technical SEO and performance tuning, end to end.", color: "from-[oklch(0.7_0.22_260)] to-[oklch(0.7_0.25_350)]" },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="What we do"
          title={<>Services engineered for <span className="gradient-text">modern teams</span>.</>}
          description="From the first wireframe to production deployment, we own every layer of the stack."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-shadow duration-500 hover:shadow-[0_20px_60px_-20px_oklch(0.65_0.27_305_/_0.6)]"
              >
                <div className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${s.color} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.18]`} />
                <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-[oklch(0.7_0.22_260)/.0] to-[oklch(0.65_0.27_305)/.4] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className={`mb-5 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-[0_8px_24px_-8px_oklch(0.65_0.27_305_/_0.7)]`}>
                  <s.Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
