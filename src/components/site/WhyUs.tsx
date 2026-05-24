import { Rocket, Layers3, Cpu, ShieldCheck, Headphones, Wand2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const items = [
  { Icon: Rocket, title: "Fast delivery", desc: "Ship in weeks, not quarters — without sacrificing polish." },
  { Icon: Layers3, title: "Scalable architecture", desc: "Designed for ten users and ten million, from day one." },
  { Icon: Cpu, title: "Modern technologies", desc: "React, Next.js, edge runtimes and LLM-native stacks." },
  { Icon: ShieldCheck, title: "Secure systems", desc: "Auth, RLS, encryption and audit logs by default." },
  { Icon: Headphones, title: "Dedicated support", desc: "A real human, in your Slack, on European hours." },
  { Icon: Wand2, title: "Honest pricing", desc: "No hidden costs, no agency markups. You get top-tier work at a price that won't make your accountant cry." },
];

export function WhyUs() {
  return (
    <section className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Why choose us"
          title={<>Six reasons teams keep <span className="gradient-text">coming back</span>.</>}
        />
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6">
                <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-lg bg-white/5 text-[oklch(0.85_0.16_200)] transition-transform duration-500 group-hover:scale-110 group-hover:text-[oklch(0.65_0.27_305)]">
                  <it.Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
                <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.27_305)/.5] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
