import { SectionHeader } from "./SectionHeader";

const tech = [
  "React", "Next.js", "Node.js", "Python", "MongoDB", "PostgreSQL",
  "Docker", "AWS", "Firebase", "Tailwind", "Figma", "TensorFlow",
];

export function TechStack() {
  const row = [...tech, ...tech];
  return (
    <section className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Technologies"
          title={<>The stack behind <span className="gradient-text-cyan">every build</span>.</>}
          description="Battle-tested tools, picked for the job — never for the hype."
        />
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#050816] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#050816] to-transparent" />
        <div className="overflow-hidden">
          <div className="flex w-max gap-4 animate-marquee">
            {row.map((t, i) => (
              <div
                key={`${t}-${i}`}
                className="group flex min-w-[180px] items-center justify-center rounded-2xl glass px-8 py-6 transition-all duration-300 hover:bg-white/10"
              >
                <span className="font-display text-lg text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
