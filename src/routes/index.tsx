import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Check, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/pinatelier-dossier.jpg";
import brandMark from "@/assets/pinatelier-mark-red.svg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PinAtelier — Fashion Research & Discoverability Studio" },
      { name: "description", content: "Know what your customers are looking for. Be there when they find it. PinAtelier is a fashion research publication with a working studio behind it." },
      { property: "og:title", content: "PinAtelier — Fashion Research & Discoverability Studio" },
      { property: "og:description", content: "Trend research and discoverability for fashion and lifestyle brands. Join the private beta." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const clients = ["Maison —", "Atelier —", "Studio —", "Label —", "House —", "Edition —", "Collective —", "Bureau —"];

function Index() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="PinAtelier home">
            <img src={brandMark.url} alt="" className="h-8 w-6 object-contain" />
            <span className="font-display text-lg font-light uppercase tracking-[0.12em]">PinAtelier</span>
          </a>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:block">Research · Nº 01 · Winter 2026</span>
          <a href="#beta" className="text-sm text-primary underline-offset-4 hover:underline">Join the beta</a>
        </div>
      </header>

      <section id="top" className="mx-auto grid max-w-[1240px] grid-cols-12 gap-x-6 gap-y-10 px-5 pb-16 pt-14 lg:px-10">
        <div className="dossier-rise col-span-12 md:col-span-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Fashion research publication & studio</div>
          <h1 className="mt-8 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-extralight uppercase leading-[1.02] tracking-[-0.015em]">Know what your customers are looking for. Be there when they find it.</h1>
          <p className="mt-8 max-w-[46ch] text-[16px] leading-relaxed text-foreground/70">We study how taste moves — through search, Pinterest, AI and the street — and make your brand the answer at the moment of intent.</p>
        </div>
        <figure className="dossier-rise col-span-12 md:col-span-5 [animation-delay:150ms]">
          <img src={heroImage} alt="Editorial research table with runway prints, fabric swatches and trend notes" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
          <figcaption className="mt-3 flex justify-between border-t border-border pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"><span>Fig. 1 — The research table</span><span>Studio, 2026</span></figcaption>
        </figure>
      </section>

      <section id="beta" className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-[1240px] grid-cols-12 items-center gap-6 px-5 py-14 lg:px-10">
          <div className="col-span-12 md:col-span-5"><h2 className="font-display text-3xl font-extralight uppercase tracking-[-0.015em]">The private beta</h2><p className="mt-3 max-w-[40ch] text-sm leading-relaxed text-foreground/70">A limited cohort of fashion and lifestyle brands. Leave your details and we'll write when your invitation is ready.</p></div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            {submitted ? (
              <div role="status" className="flex items-center gap-3 text-sm"><Check className="size-4 text-primary" /> Thank you — you're on the list.</div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
                <label className="sr-only" htmlFor="email">Work email</label>
                <input id="email" required type="email" placeholder="you@brand.com" className="flex-1 border-b border-input bg-transparent py-3 outline-none placeholder:text-muted-foreground/60 focus:border-primary" />
                <Button type="submit" variant="dossier" size="lg" className="h-12">Join the beta <MoveRight /></Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-20 lg:px-10">
        <Label>Brands we work with</Label>
        <div className="mt-8 grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
          {clients.map((c) => <div key={c} className="flex h-28 items-center justify-center border-b border-r border-border font-display text-lg font-light uppercase tracking-[0.14em] text-foreground/45">{c}</div>)}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-[1240px] grid-cols-12 gap-6 px-5 py-28 lg:px-10">
          <div className="col-span-12 md:col-span-3"><Label>A note on method</Label></div>
          <div className="col-span-12 md:col-span-7">
            <p className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-extralight leading-snug">Trends are not announced. They are searched for, saved, and asked about long before they appear in stores.</p>
            <p className="mt-8 max-w-[58ch] leading-relaxed text-foreground/70">Our work is patient: we read the signals, write down what they mean, and then build the presence that lets the right customer find you. Research first, then craft — the way a good publication works.</p>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">— The PinAtelier studio</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-[1240px] justify-between px-5 py-8 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground lg:px-10"><span>PinAtelier</span><span>© 2026</span></div></footer>
    </main>
  );
}

function Label({ children }: { children: ReactNode }) { return <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">{children}</div>; }
