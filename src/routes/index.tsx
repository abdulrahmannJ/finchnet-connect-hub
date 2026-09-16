import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Wrench, SlidersHorizontal, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, PackageCards, QuoteBanner, SectionHeading } from "@/components/shared";
import { services } from "@/lib/site-data";
import apartments from "@/assets/finchnet-apartments.jpeg.asset.json";
import home from "@/assets/finchnet-home.jpeg.asset.json";
import technician from "@/assets/finchnet-technician.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Finchnet Ventures | Internet & Network Solutions" },
    { name: "description", content: "Reliable residential internet and customized networking, security, and communication solutions." },
    { property: "og:title", content: "Finchnet Ventures | Internet & Network Solutions" },
    { property: "og:description", content: "High-speed residential internet and professional connectivity solutions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }] }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <>
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-deep text-primary-foreground">
      <img src={apartments.url} alt="Modern connected apartment development at night" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-deep/70" /><div className="network-grid absolute inset-0 opacity-20" />
      <div className="site-container relative flex min-h-[calc(100svh-5rem)] items-end py-12 md:items-center md:py-20">
        <div className="max-w-3xl"><Eyebrow light>Fast • Secure • Reliable</Eyebrow><h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-7xl">High-Speed Internet for Modern Living.</h1><p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/75 md:text-xl md:leading-9">Finchnet Ventures delivers reliable residential internet and customized networking solutions designed to keep homes, apartments, and communities connected.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="h-12 px-6"><Link to="/internet-packages">Explore internet packages <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="h-12 border-primary-foreground/35 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10"><Link to="/contact">Request a custom quote</Link></Button></div><div className="mt-9 inline-flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 border-l-2 border-cyan bg-deep/60 px-5 py-4 backdrop-blur"><span className="text-xs font-bold uppercase text-cyan">Available speeds</span>{["5", "10", "15", "30"].map((s) => <span key={s} className="text-sm font-extrabold">{s} Mbps</span>)}</div><div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-primary-foreground/75">{["Reliable connectivity", "Professional installation", "Customized network solutions"].map((x) => <span key={x} className="flex items-center gap-2"><CheckCircle2 className="size-4 text-cyan" />{x}</span>)}</div></div>
      </div>
    </section>
    <section className="py-20 md:py-28"><div className="site-container"><SectionHeading eyebrow="Residential packages" title="Internet Plans Designed Around Your Needs" text="Straightforward options for different connectivity needs. Commercial pricing and final terms remain editable pending confirmation." /><PackageCards compact /><div className="mt-10 text-center"><Button asChild variant="outline" size="lg"><Link to="/internet-packages">View all package details <ArrowRight /></Link></Button></div></div></section>
    <section className="bg-secondary py-20 md:py-28"><div className="site-container"><SectionHeading eyebrow="Complete capability" title="More Than Internet. Complete Connectivity Solutions." text="One technical partner for the systems that help homes, properties, and organizations communicate securely and efficiently." /><div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">{services.map((service) => { const Icon = service.icon; return <article key={service.title} className="group bg-background p-7"><Icon className="size-8 text-blue" /><h3 className="mt-8 text-xl font-extrabold">{service.title}</h3><p className="mt-3 min-h-18 text-sm leading-6 text-muted-foreground">{service.description}</p><Link to={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue">Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link></article>})}</div></div></section>
    <section className="py-20 md:py-28"><div className="site-container grid items-center gap-12 lg:grid-cols-2"><div className="relative"><img src={technician.url} alt="Technician organizing structured network cabling" loading="lazy" className="aspect-[4/3] w-full object-cover" /><div className="absolute -bottom-5 right-0 bg-primary px-6 py-5 text-primary-foreground"><p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan">Built with care</p><p className="mt-1 font-extrabold">Professional, organized setup</p></div></div><div><SectionHeading eyebrow="Why Finchnet" title="Connectivity Shaped Around Real Properties" text="We approach every project by understanding the property, its users, and the infrastructure required to support dependable connectivity." /><div className="mt-8 grid gap-5 sm:grid-cols-2">{[[SlidersHorizontal,"Tailored solutions"],[Wrench,"Professional setup"],[ShieldCheck,"Security-conscious design"],[CheckCircle2,"Customer-focused service"]].map(([Icon, label]) => { const I = Icon as typeof Wrench; return <div key={label as string} className="flex items-center gap-3 border-t border-border pt-4"><I className="size-5 text-blue" /><span className="text-sm font-bold">{label as string}</span></div>})}</div></div></div></section>
    <section className="bg-secondary py-20 md:py-28"><div className="site-container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><Eyebrow>Residential connectivity</Eyebrow><h2 className="text-3xl font-extrabold leading-tight md:text-5xl">A Better Connected Home Starts Here.</h2><p className="mt-6 text-base leading-8 text-muted-foreground">Suitable internet packages, structured cabling, and professionally installed network equipment help residential units stay connected with less complexity.</p><Button asChild size="lg" className="mt-8 h-12"><Link to="/residential-internet">Explore residential internet <ArrowRight /></Link></Button></div><img src={home.url} alt="Family using connected devices in a modern home" loading="lazy" className="aspect-[4/3] w-full object-cover" /></div></section>
    <QuoteBanner />
  </>;
}
