import { Github, Linkedin, Twitter } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const team = [
  { name: "Akshay R P", role: "Co-Founder & Developer", initials: "AR", grad: "from-[oklch(0.7_0.22_260)] to-[oklch(0.65_0.27_305)]" },
  { name: "Akshay Nadig", role: "Co-Founder & Developer", initials: "AN", grad: "from-[oklch(0.85_0.16_200)] to-[oklch(0.55_0.2_265)]" },
  { name: "B S Koushik", role: "AI Engineer", initials: "BK", grad: "from-[oklch(0.65_0.27_305)] to-[oklch(0.7_0.25_350)]" },
  { name: "Dhruva D", role: "Full Stack Developer", initials: "DD", grad: "from-[oklch(0.7_0.25_350)] to-[oklch(0.7_0.22_260)]" },
];

export function Team() {
  return (
    <section id="team" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="The team"
          title={<>Small, senior, <span className="gradient-text">deeply curious</span>.</>}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <motion.div whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-2xl glass p-6 text-center">
                <div className={`mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${m.grad} font-display text-xl font-semibold text-white shadow-[0_10px_30px_-10px_oklch(0.65_0.27_305_/_0.7)] transition-transform duration-500 group-hover:scale-110`}>
                  {m.initials}
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">{m.name}</h3>
                <div className="mt-4 flex justify-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {[Twitter, Linkedin, Github].map((I, idx) => (
                    <a key={idx} href="#" className="grid h-8 w-8 place-items-center rounded-full glass text-muted-foreground transition-colors hover:text-foreground">
                      <I className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
