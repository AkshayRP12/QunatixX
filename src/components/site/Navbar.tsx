import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`relative mx-auto w-[calc(100%-2rem)] grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]" : "glass"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold justify-self-start">
          <img src={logo} alt="quantixX logo" className="h-8 w-auto object-contain" />
          <span className="gradient-text">quantixX</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex justify-self-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-[oklch(0.7_0.22_260)] after:to-[oklch(0.65_0.27_305)] after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>


        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-[oklch(0.7_0.22_260)] to-[oklch(0.65_0.27_305)] px-5 py-2 text-sm font-medium text-white shadow-[0_8px_30px_-8px_oklch(0.65_0.27_305_/_0.7)] transition-transform hover:scale-[1.03] md:inline-block justify-self-end"
        >
          Let's talk
        </a>


        <button
          aria-label="Menu"
          className="grid h-9 w-9 place-items-center rounded-lg glass md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-2 rounded-2xl glass-strong p-5 md:hidden"
        >
          <ul className="flex flex-col gap-4 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
