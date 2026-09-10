import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowDown, Check, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dossierImage from "@/assets/pinatelier-dossier.jpg";
import brandMark from "@/assets/pinatelier-mark-red.svg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PinAtelier — Fashion Trend Intelligence" },
      { name: "description", content: "Know what consumers will want next. PinAtelier turns cultural and search signals into growth for fashion and lifestyle brands." },
      { property: "og:title", content: "PinAtelier — Fashion Trend Intelligence" },
      { property: "og:description", content: "Private market and trend intelligence for fashion and lifestyle brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [interest, setInterest] = useState<"beta" | "demo">("demo");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <header className="border-b border-border">
        <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 lg:px-10">
          <a href="#top" aria-label="PinAtelier home" className="flex items-center gap-3">
            <img src={brandMark.url} alt="" className="h-11 w-8 object-contain" />
            <span className="font-display text-xl uppercase">PinAtelier</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-[13px] font-medium md:flex">
            <a href="#practice" className="transition-colors hover:text-primary">Practice</a>
            <a href="#intelligence" className="transition-colors hover:text-primary">Intelligence</a>
            <a href="#process" className="transition-colors hover:text-primary">Process</a>
          </nav>
          <Button asChild variant="dossierOutline" size="lg"><a href="#access">Request access</a></Button>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-[1320px] px-5 pb-20 pt-14 lg:px-10">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-7">
            <div className="dossier-rise [animation-delay:80ms]">
              <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"><span className="h-px w-8 bg-primary" />Fashion &amp; lifestyle intelligence</div>
              <h1 className="font-display text-[clamp(4rem,10vw,9rem)] uppercase leading-[0.86] tracking-normal">Know what<br />they'll want<br /><span className="text-primary">next.</span></h1>
              <div className="dossier-line mt-8 h-px bg-border [animation-delay:500ms]" />
            </div>
          </div>
          <div className="col-span-12 self-center md:col-span-4 md:col-start-9">
            <div className="dossier-rise [animation-delay:200ms]">
              <p className="max-w-[40ch] text-[16px] leading-relaxed text-foreground/75">PinAtelier helps fashion and lifestyle brands understand what consumers will want next — and makes them discoverable when that demand emerges.</p>
              <div className="mt-7 flex flex-wrap gap-2">{["Pinterest", "Search", "AI", "Runway"].map((item) => <span key={item} className="border border-primary/20 bg-secondary px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary">{item}</span>)}</div>
              <a href="#practice" className="mt-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-primary">Explore the practice <ArrowDown className="size-4" /></a>
            </div>
          </div>
          <div className="dossier-rise col-span-12 md:col-span-7 md:col-start-4 [animation-delay:320ms]">
            <div className="relative overflow-hidden bg-primary p-8 text-primary-foreground lg:p-10">
              <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">The journey we build for</div>
              <div className="flex flex-wrap items-center gap-3 text-sm font-medium"><span>Don't know you</span><MoveRight className="size-4 opacity-40"/><span>Find you</span><MoveRight className="size-4 opacity-40"/><span>Love you</span><MoveRight className="size-4 opacity-40"/><strong>Buy from you</strong></div>
              <div className="mt-8 flex items-end justify-between border-t border-primary-foreground/25 pt-6"><div><div className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-60">Practice status</div><div className="mt-1 font-display text-3xl uppercase">Invitation only</div></div><div className="text-right"><div className="font-mono text-[10px] uppercase tracking-[0.14em] opacity-60">Beta</div><div className="mt-1 font-display text-3xl uppercase">Limited</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="border-t border-border py-20">
        <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-x-6 gap-y-10 px-5 lg:px-10">
          <div className="col-span-12 md:col-span-5 md:col-start-2"><Eyebrow>Practice</Eyebrow><h2 className="mt-6 font-display text-[clamp(3rem,6vw,5.5rem)] uppercase leading-[0.9]">From signal<br />to growth.</h2><div className="mt-7 h-px w-24 bg-primary"/><p className="mt-8 max-w-[42ch] leading-relaxed text-foreground/70">We watch what is shifting, decode what it means, and make your brand the answer before the opportunity becomes obvious.</p></div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">{[
            ["01", "Signal watch", "Culture, search, AI conversations, runway and street style — read before a trend becomes obvious."],
            ["02", "Demand intelligence", "Emerging aesthetics, questions and markets translated into evidence your team can use."],
            ["03", "Discoverability", "Pinterest, search and AI presence shaped to meet your future buyer at the moment of intent."],
            ["04", "Growth", "Qualified discovery becomes conversion, while the same intelligence reveals where to move next."],
          ].map(([number, title, copy]) => <article key={number} className="grid grid-cols-12 gap-4 border-t border-border py-7 last:border-b"><span className="col-span-2 font-mono text-xs text-primary">({number})</span><div className="col-span-10"><h3 className="font-display text-2xl uppercase">{title}</h3><p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-foreground/70">{copy}</p></div></article>)}</div>
        </div>
      </section>

      <section id="intelligence" className="border-t border-border py-20">
        <div className="mx-auto grid max-w-[1320px] grid-cols-12 items-center gap-x-6 gap-y-12 px-5 lg:px-10">
          <div className="col-span-12 md:col-span-6"><div className="relative"><div className="absolute -inset-3 border border-primary/30"/><img src={dossierImage} alt="PinAtelier fashion trend intelligence dossier with market signals and material samples" loading="lazy" width={1024} height={1280} className="relative aspect-[4/5] w-full object-cover" /></div></div>
          <div className="col-span-12 md:col-span-5 md:col-start-8"><Eyebrow>Live intelligence</Eyebrow><h2 className="mt-5 font-display text-4xl uppercase">What we track</h2><div className="mt-9 space-y-7">{[
            ["Runway & street style", "82%"], ["Search & AI behavior", "68%"], ["Geographic demand", "51%"], ["Retail white space", "34%"]
          ].map(([label, width], index) => <div key={label}><div className="mb-2 flex justify-between"><span className="text-sm font-medium">{label}</span><span className="font-mono text-[11px] text-primary">Signal {String(index + 1).padStart(2,"0")}</span></div><div className="h-[3px] overflow-hidden bg-border"><div className="dossier-bar h-full bg-primary" style={{ width, animationDelay: `${400 + index * 120}ms` }} /></div></div>)}</div><p className="mt-9 border-t border-border pt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">Forecast → Search → Visual behavior → Social → Retail → Culture → AI → Runway</p></div>
        </div>
      </section>

      <section id="process" className="border-t border-border py-20">
        <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-x-6 gap-y-10 px-5 lg:px-10">
          <div className="col-span-12 md:col-span-4"><Eyebrow>Ways to work</Eyebrow><h2 className="mt-6 font-display text-5xl uppercase leading-[0.92]">Intelligence,<br />your way.</h2></div>
          <Service number="01" title="Managed Pinterest">We run your presence, content and discoverability end to end — powered by search, AI and trend intelligence.</Service>
          <Service number="02" title="Self-serve intelligence">We hand your team the evidence to decide what to design, say and prioritize before everyone else does.</Service>
        </div>
      </section>

      <section id="access" className="border-t border-border py-24">
        <div className="mx-auto grid max-w-[1320px] grid-cols-12 gap-x-6 gap-y-12 px-5 lg:px-10">
          <div className="col-span-12 md:col-span-5 md:col-start-2"><Eyebrow>Access</Eyebrow><h2 className="mt-6 font-display text-[clamp(3.5rem,7vw,6.5rem)] uppercase leading-[0.86]">A limited<br /><span className="text-primary">cohort.</span></h2><div className="mt-8 h-px w-24 bg-primary"/><p className="mt-8 max-w-[40ch] leading-relaxed text-foreground/70">Join the private beta or request a live demonstration. Early access is curated for fashion and lifestyle brands.</p></div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <div className="relative"><div className="absolute -inset-2 border border-primary/25"/><div className="relative border border-border bg-background p-7 lg:p-10">
              {submitted ? <div className="flex min-h-[390px] flex-col justify-between" role="status"><div><div className="flex size-10 items-center justify-center bg-primary text-primary-foreground"><Check className="size-5" /></div><Eyebrow className="mt-8">Request received</Eyebrow><h3 className="mt-5 font-display text-5xl uppercase leading-none">You're on<br />the list.</h3><p className="mt-6 max-w-[35ch] text-sm leading-relaxed text-foreground/70">Thank you. We’ll contact you when your invitation or demo slot is ready.</p></div><button type="button" onClick={() => setSubmitted(false)} className="self-start border-b border-foreground font-mono text-[10px] uppercase tracking-[0.14em]">Submit another request</button></div> :
              <form onSubmit={handleSubmit}><div className="mb-8 flex items-center justify-between"><Eyebrow>Request form</Eyebrow><span className="font-mono text-[10px] uppercase text-primary">Nº limited</span></div>
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Work email</label><input id="email" name="email" required type="email" placeholder="you@brand.com" className="mt-2 w-full border-b border-input bg-transparent py-3 outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary" />
                <fieldset className="mt-8"><legend className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">I'm interested in</legend><div className="mt-3 grid gap-3 sm:grid-cols-2">{(["beta", "demo"] as const).map((value) => <label key={value} className={`cursor-pointer border p-4 transition-colors ${interest === value ? "border-primary bg-secondary" : "border-border hover:border-primary"}`}><input className="sr-only" type="radio" name="interest" value={value} checked={interest === value} onChange={() => setInterest(value)} /><span className={`font-display text-xl uppercase ${interest === value ? "text-primary" : ""}`}>{value === "beta" ? "Beta access" : "Live demo"}</span><span className="mt-1 block text-xs leading-relaxed text-foreground/60">{value === "beta" ? "Join the next intelligence cohort." : "See the intelligence practice live."}</span></label>)}</div></fieldset>
                <label htmlFor="brand" className="mt-8 block font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Brand / company</label><input id="brand" name="brand" required type="text" placeholder="Your label" className="mt-2 w-full border-b border-input bg-transparent py-3 outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary" />
                <Button type="submit" variant="dossier" size="lg" className="mt-8 h-12 w-full">Request invitation <MoveRight /></Button><p className="mt-4 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground">No newsletters. Only meaningful beta updates.</p>
              </form>}
            </div></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10"><div className="flex items-center gap-3"><img src={brandMark.url} alt="" className="h-9 w-7 object-contain"/><span className="font-display text-lg uppercase">PinAtelier</span></div><div className="flex flex-wrap gap-5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground"><span>Market &amp; trend intelligence</span><span>Private beta</span><span>© 2026</span></div></div></footer>
    </main>
  );
}

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) { return <div className={`font-mono text-[10px] uppercase tracking-[0.18em] text-primary ${className}`}>{children}</div>; }

function Service({ number, title, children }: { number: string; title: string; children: ReactNode }) { return <article className="col-span-12 border-l border-foreground pl-7 md:col-span-4"><span className="font-mono text-xs text-primary">({number})</span><h3 className="mt-8 font-display text-3xl uppercase">{title}</h3><p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-foreground/70">{children}</p></article>; }
