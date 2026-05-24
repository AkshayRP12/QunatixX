import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  details: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      details: fd.get("details"),
    });
    if (!parsed.success) {
      setStatus(parsed.error.issues[0]?.message ?? "Please review the form");
      return;
    }

    setStatus("Sending...");

    fetch("https://formsubmit.co/ajax/quantixxtech@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: parsed.data.name,
        email: parsed.data.email,
        details: parsed.data.details,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setStatus("Thanks — we'll reply within 24 hours.");
        (e.target as HTMLFormElement).reset();
      })
      .catch(() => {
        setStatus("Oops! There was a problem submitting your form.");
      });
  };

  return (
    <section id="contact" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Let's build"
          title={<>Tell us about your <span className="gradient-text">project</span>.</>}
          description="We reply within 24 hours, on working days."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl glass-strong p-8">
              <div className="space-y-5">
                {[
                  { Icon: Mail, label: "Email", value: "quantixxtech@gmail.com" },
                  { Icon: Phone, label: "Phone", value: "+91 6362084524" },
                  { Icon: MapPin, label: "Location", value: "Remote · Mysore, India" },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.7_0.22_260)] to-[oklch(0.65_0.27_305)] text-white">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
                      <div className="mt-0.5 text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Embedded map placeholder */}
              <div className="relative h-44 overflow-hidden rounded-2xl glass">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.22_260)/.2] to-[oklch(0.65_0.27_305)/.3]" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs">
                    <span className="relative grid h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-[oklch(0.85_0.16_200)]" />
                      <span className="relative h-2 w-2 rounded-full bg-[oklch(0.85_0.16_200)]" />
                    </span>
                    Mysore, India
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-4 rounded-3xl glass-strong p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
              </div>
              <Field label="Project details" name="details" textarea placeholder="What are you building?" />
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.7_0.22_260)] to-[oklch(0.65_0.27_305)] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_oklch(0.65_0.27_305_/_0.8)] transition-transform hover:scale-[1.02]"
              >
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              {status && <p className="text-xs text-muted-foreground">{status}</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, textarea,
}: { label: string; name: string; type?: string; placeholder?: string; textarea?: boolean }) {
  const cls =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-[oklch(0.65_0.27_305)] focus:bg-white/[0.07] focus:ring-2 focus:ring-[oklch(0.65_0.27_305)/.25]";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={5} placeholder={placeholder} maxLength={1000} className={cls} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} maxLength={255} className={cls} />
      )}
    </label>
  );
}
