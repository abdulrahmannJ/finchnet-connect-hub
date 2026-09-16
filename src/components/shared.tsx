import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, CircleCheck, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { packages } from "@/lib/site-data";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] ${light ? "text-cyan" : "text-blue"}`}><span className="h-px w-7 bg-current" />{children}</p>;
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image?: string }) {
  return <section className="relative overflow-hidden bg-primary text-primary-foreground"><div className="network-grid absolute inset-0 opacity-30" />{image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />}<div className="site-container relative py-20 md:py-28"><Eyebrow light>{eyebrow}</Eyebrow><h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/70 md:text-lg">{text}</p></div></section>;
}

export function SectionHeading({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><Eyebrow>{eyebrow}</Eyebrow><h2 className="text-3xl font-extrabold leading-tight md:text-5xl">{title}</h2>{text && <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{text}</p>}</div>;
}

export function PackageCards({ compact = false }: { compact?: boolean }) {
  return <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{packages.map((plan) => <article key={plan.speed} className={`relative flex flex-col border bg-card p-6 ${plan.recommended ? "border-blue shadow-premium" : "border-border"}`}>{plan.recommended && <span className="absolute right-4 top-0 -translate-y-1/2 bg-blue px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-primary-foreground">Recommended</span>}<div className="flex items-start justify-between"><div><p className="text-sm font-bold text-blue">{plan.name}</p><h3 className="mt-2 text-3xl font-extrabold">{plan.speed}</h3></div><span className="grid size-10 place-items-center border border-border bg-secondary text-blue">↗</span></div><p className="mt-5 min-h-14 text-sm leading-6 text-muted-foreground">{plan.description}</p><div className="my-6 border-y border-border py-4"><span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">Monthly price</span><span className="mt-1 block text-lg font-bold">{plan.price}</span></div>{!compact && <ul className="mb-7 grid gap-3">{plan.features.map((feature) => <li key={feature} className="flex gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-blue" />{feature}</li>)}</ul>}<Button asChild variant={plan.recommended ? "default" : "outline"} className="mt-auto h-11"><Link to="/contact">Get started <ArrowRight /></Link></Button></article>)}</div>;
}

export function ProcessSteps({ steps }: { steps: string[] }) {
  return <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{steps.map((step, index) => <li key={step} className="border-t-2 border-blue bg-card p-5"><span className="text-xs font-extrabold text-blue">0{index + 1}</span><p className="mt-8 font-bold leading-6">{step}</p></li>)}</ol>;
}

export function QuoteBanner() {
  return <section className="bg-primary text-primary-foreground"><div className="site-container grid gap-8 py-14 md:grid-cols-[1fr_auto] md:items-center"><div><Eyebrow light>Designed around your property</Eyebrow><h2 className="text-3xl font-extrabold md:text-4xl">Need a network designed for your property?</h2><p className="mt-4 max-w-2xl text-primary-foreground/70">From apartment developments to customized communication systems, we can shape a solution around your connectivity requirements.</p></div><Button asChild size="lg" className="h-12 bg-cyan text-deep hover:bg-cyan/90"><Link to="/contact">Request a custom quote <ArrowRight /></Link></Button></div></section>;
}

type EnquiryFormProps = { kind?: "contact" | "package" | "coverage" };
export function EnquiryForm({ kind = "contact" }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const form = e.currentTarget; if (!form.checkValidity()) { setError("Please complete the required fields before continuing."); form.reportValidity(); return; } setError(""); setSubmitted(true); }
  if (submitted) return <div className="border border-blue/30 bg-secondary p-8" role="status"><CircleCheck className="size-10 text-blue" /><h3 className="mt-5 text-2xl font-extrabold">Request prepared</h3><p className="mt-3 max-w-lg leading-7 text-muted-foreground">This is a frontend demonstration, so your enquiry has not been delivered. Email or CRM delivery can be connected when the website backend is added.</p><Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>Send another request</Button></div>;
  return <form onSubmit={submit} noValidate className="grid gap-5" aria-label={`${kind} enquiry form`}>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Full name" required><Input name="name" required placeholder="Your full name" /></Field><Field label="Email address" required><Input name="email" required type="email" placeholder="you@example.com" /></Field></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field label="Phone number" required><Input name="phone" required type="tel" placeholder="Your phone number" /></Field><Field label={kind === "coverage" ? "Property / building name" : "Customer type"} required>{kind === "coverage" ? <Input required placeholder="Property or building" /> : <Select required options={["Residential", "Property Manager", "Business"]} />}</Field></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field label={kind === "coverage" ? "Location" : "Service interested in"} required>{kind === "coverage" ? <Input required placeholder="Area or address" /> : <Select required options={["Residential Internet", "Network Infrastructure", "Network Security", "Unified Communications", "VoIP", "Call Center", "Access Control", "Structural Cabling"]} />}</Field><Field label="Preferred internet package"><Select options={packages.map((p) => `${p.name} — ${p.speed}`)} /></Field></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field label={kind === "coverage" ? "Number of residential units" : "Property or business location"} required><Input required placeholder={kind === "coverage" ? "e.g. 24" : "Area or address"} /></Field><Field label="Number of units, if applicable"><Input type="number" min="1" placeholder="Optional" /></Field></div>
    <Field label="Message"><textarea className="min-h-32 w-full rounded-md border border-input bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us what you need" /></Field>
    {error && <p className="text-sm font-semibold text-destructive" role="alert">{error}</p>}
    <Button type="submit" size="lg" className="h-12 justify-self-start px-7">Submit request <Send /></Button>
    <p className="text-xs leading-5 text-muted-foreground">Demo form only. Submitting does not send or store your information.</p>
  </form>;
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) { return <label className="grid gap-2 text-sm font-bold">{label}{required && <span className="sr-only"> required</span>}{children}</label>; }
function Select({ options, required }: { options: string[]; required?: boolean }) { return <select required={required} defaultValue="" className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"><option value="" disabled>Select an option</option>{options.map((o) => <option key={o}>{o}</option>)}</select>; }