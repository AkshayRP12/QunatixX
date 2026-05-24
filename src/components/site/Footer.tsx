import { Github, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 px-4 pt-20 pb-10">
      <div
        className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-72 w-[80%] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.27 305 / 0.6), transparent 70%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
            <img src={logo} alt="quantixX logo" className="h-8 w-auto object-contain" />
            <span className="gradient-text">quantixX</span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A small studio of engineers and designers building thoughtful digital products with startups and modern teams.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: Github, href: "https://github.com/SKYFALLrumbles", label: "GitHub" },
              { Icon: Instagram, href: "https://www.instagram.com/quantixx.tech?igsh=MTZ6dTFlMHhjbmxtaw==", label: "Instagram" }
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground transition-colors hover:text-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Studio" links={[
          { label: "About", href: "#about" },
          { label: "Process", href: "#process" },
          { label: "Team", href: "#team" },
          { label: "Careers" }
        ]} />
        <FooterCol title="Services" links={[
          { label: "Web Apps", href: "#services" },
          { label: "AI Solutions", href: "#services" },
          { label: "Mobile", href: "#services" },
          { label: "Design", href: "#services" }
        ]} />
        <FooterCol title="Contact" links={[
          { label: "quantixxtech@gmail.com", href: "mailto:quantixxtech@gmail.com" },
          { label: "Mysore, India" }
        ]} />
      </div>

      <div className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} quantixX. All rights reserved.</p>
        <p>Crafted with care · Mysore</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href?: string }[] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            {l.href ? (
              <a href={l.href} className="text-foreground/80 transition-colors hover:text-foreground">{l.label}</a>
            ) : (
              <span className="text-foreground/80">{l.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
