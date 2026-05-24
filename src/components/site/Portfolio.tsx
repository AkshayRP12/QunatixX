import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import lab from "@/assets/project-lab.png";
import stock from "@/assets/project-stock.png";

const projects = [
  { img: lab, title: "College Lab Booking System", desc: "Built for our college — students can book lab slots, admins manage schedules and approvals.", tech: ["PHP", "HTML/CSS/JS", "MySQL", "Apache"], span: "lg:col-span-2" },
  { img: stock, title: "Stock Exchange Predictor", desc: "Predicts stock prices for the next 6 months using ML models trained on historical market data.", tech: ["PHP", "HTML/CSS/JS", "MySQL", "Upstox API", "Apache"], span: "" },
];

export function Portfolio() {
  return (
    <section id="work" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Selected work"
          title={<>Projects we're <span className="gradient-text">proud of</span>.</>}
          description="A short selection from the last twelve months."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} className={p.span}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className="group relative block h-full overflow-hidden rounded-2xl glass"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.22_260)/.0] to-[oklch(0.65_0.27_305)/.35] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="relative p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
