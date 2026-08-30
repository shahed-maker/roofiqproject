import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import BeforeAfter from "../components/BeforeAfter";
import heroRoof from "../assets/hero-roof.jpg";
import aboutRoof from "../assets/about-roof.jpg";
import ba1Before from "../assets/ba1-before.jpg";
import ba1After from "../assets/ba1-after.jpg";
import ba2Before from "../assets/ba2-before.jpg";
import ba2After from "../assets/ba2-after.jpg";
import work1 from "../assets/work-1.jpg";
import work2 from "../assets/work-2.jpg";
import work3 from "../assets/work-3.jpg";
import work4 from "../assets/work-4.jpg";
import work5 from "../assets/work-5.jpg";
import work6 from "../assets/work-6.jpg";

const EMAIL = "theroofiq@gmail.com";
const INSTAGRAM = "https://www.instagram.com/roof.iq.official";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Before & After", href: "#before-after" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  ["Roof Inspections", "Detailed walkthroughs of membranes, seams, flashings and penetrations."],
  ["Roof Repairs", "Targeted repairs on problem areas before they spread."],
  ["Commercial Roofing", "Work focused on flat and low-slope commercial systems."],
  ["Roof Maintenance", "Routine upkeep that keeps small issues from becoming failures."],
  ["Leak Detection", "Tracing water back to the actual source, not just the stain."],
  ["Roof Restoration", "Coatings and restoration work to extend a roof's service life."],
];

const WHY = [
  ["Attention To Detail", "The details decide how a roof performs. That's where I look first."],
  ["Commercial Roofing Focus", "Flat and low-slope commercial systems are the everyday work."],
  ["Real Field Experience", "Observations come from roofs, not from a brochure."],
  ["Professional Approach", "Clear communication and clean, considered work."],
];

const GALLERY = [
  [work1, "Membrane installation on a commercial roof"],
  [work2, "Roof drain surrounded by debris and ponding water"],
  [work3, "Metal coping and flashing detail"],
  [work4, "Aerial view of a commercial rooftop"],
  [work5, "Roof coating being applied"],
  [work6, "Marked seam and blister during inspection"],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roof IQ — Commercial Roofing Insight From The Field" },
      {
        name: "description",
        content:
          "Roof IQ: commercial roofing expertise, inspections, repairs and real field observations. Most roof problems hide in the details.",
      },
      { property: "og:title", content: "Roof IQ — Commercial Roofing Insight From The Field" },
      {
        property: "og:description",
        content:
          "Commercial roofing expertise, inspections, repairs and real field observations from Roof IQ.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-accent uppercase">{eyebrow}</p>
      <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const phone = String(f.get("phone") || "").trim();
    const message = String(f.get("message") || "").trim();
    if (!name || !email || !message) {
      setError("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSent(true);
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:${EMAIL}?subject=Roof%20IQ%20Inquiry&body=${body}`;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="font-display text-xl uppercase tracking-[0.2em]">
            Roof<span className="text-accent">&nbsp;IQ</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Get In Touch
            </a>
          </nav>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden border border-border px-3 py-2 text-sm"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 text-sm"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Get In Touch
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative isolate">
        <img
          src={heroRoof}
          alt="Commercial flat roof with mechanical units"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              Commercial Roofing • USA
            </p>
            <h1 className="font-display text-4xl uppercase leading-[1.05] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              Most Roof Problems Hide In The Details.
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
              I find them. Commercial roofing expertise and real field observations from Roof IQ.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Explore Our Work
              </a>
              <a
                href="#contact"
                className="border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                Get In Touch
              </a>
            </div>
            <p className="mt-10 border-t border-primary-foreground/20 pt-5 text-xs tracking-[0.2em] text-primary-foreground/70 uppercase">
              Commercial Roofing • Field Experience • Attention To Detail
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="About" title="Roofing Experience From The Field" />
            <div className="space-y-4 text-muted-foreground">
              <p>
                Roof IQ is built around commercial roofing — flat and low-slope systems, the
                details that hold them together, and the problems that show up long before anyone
                notices water inside the building.
              </p>
              <p>
                Most of what goes wrong on a roof starts small: an open seam, a tired flashing, a
                drain that never clears. I spend my time looking at those details, tracing issues
                back to the real cause and documenting what I see.
              </p>
              <p>
                What I share here is field knowledge — straightforward observations from real
                rooftops, meant for building owners, managers and anyone who wants to understand
                what's actually happening above them.
              </p>
            </div>
          </div>
          <img
            src={aboutRoof}
            alt="Roofer inspecting a membrane seam by hand"
            width={1200}
            height={1000}
            loading="lazy"
            className="w-full border border-border object-cover"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionHead eyebrow="Services" title="Commercial Roofing Services" />
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(([title, desc], i) => (
              <div key={title} className="bg-background p-7">
                <span className="font-display text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg uppercase tracking-wide">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHead eyebrow="Approach" title="Why Roof IQ" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(([title, desc]) => (
            <div key={title} className="border-t-2 border-accent pt-5">
              <h3 className="font-display text-base uppercase tracking-wide">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section id="before-after" className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              Comparison
            </p>
            <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
              Before &amp; After
            </h2>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Drag the handle to compare. These are illustrative roofing examples, not Roof IQ
              project photos.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            <BeforeAfter
              before={ba1Before}
              after={ba1After}
              alt="Aged flat roof compared with a new membrane"
              caption="Aged, cracked membrane compared with a new single-ply system."
            />
            <BeforeAfter
              before={ba2Before}
              after={ba2After}
              alt="Rusted coping compared with new coping"
              caption="Rusted coping and failed sealant compared with new metal detail work."
            />
          </div>
        </div>
      </section>

      {/* OUR WORK */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHead eyebrow="Gallery" title="Work In The Field" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map(([src, alt]) => (
            <img
              key={src}
              src={src}
              alt={alt}
              width={1000}
              height={800}
              loading="lazy"
              className="h-56 w-full border border-border object-cover sm:h-64"
            />
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <SectionHead eyebrow="Videos" title="See The Work In Action" />
          <p className="-mt-6 mb-10 max-w-xl text-muted-foreground">
            Real roofing work, field observations and projects.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex aspect-video flex-col items-center justify-center gap-3 border border-border bg-background"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-accent">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="text-xs font-semibold tracking-[0.25em] text-muted-foreground uppercase">
                  Video
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center sm:py-24">
        <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">
          Commercial Roofing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Professional commercial roofing work and field expertise across the USA.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHead eyebrow="Contact" title="Let's Talk Roofing" />
              <p className="text-muted-foreground">
                Questions about a commercial roof, an inspection or something you're seeing in the
                field? Send a note.
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-6 inline-block font-display text-lg tracking-wide underline underline-offset-4 hover:text-accent"
              >
                {EMAIL}
              </a>
              <div className="mt-4">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Instagram — @roof.iq.official
                </a>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4 border border-border bg-background p-6">
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone", type: "tel" },
              ].map((f) => (
                <div key={f.name}>
                  <label
                    htmlFor={f.name}
                    className="mb-1 block text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    className="w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full border border-input bg-background px-3 py-2 text-sm outline-none focus:border-accent"
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              {sent && !error && (
                <p className="text-sm text-muted-foreground">
                  Opening your email app to send this message.
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Get In Touch
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-xl uppercase tracking-[0.2em]">
              Roof<span className="text-accent">&nbsp;IQ</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
              Commercial roofing insights and professional field work.
            </p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              Sections
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-accent">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              Contact
            </p>
            <a href={`mailto:${EMAIL}`} className="block text-sm hover:text-accent">
              {EMAIL}
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-sm hover:text-accent"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-primary-foreground/60">
            © 2026 Roof IQ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
