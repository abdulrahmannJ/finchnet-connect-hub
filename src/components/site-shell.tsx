import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/brand";
import { navItems, services } from "@/lib/site-data";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Brand />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className={`px-3 py-2 text-sm font-semibold transition-colors hover:text-blue ${pathname === item.href ? "text-blue" : "text-muted-foreground"}`}>{item.label}</Link>
            ))}
            <Button asChild className="ml-3 h-11 px-5"><Link to="/contact">Request a quote <ArrowUpRight /></Link></Button>
          </nav>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => <Link key={item.href} to={item.href} onClick={() => setOpen(false)} className="border-b border-border py-3 text-base font-semibold">{item.label}</Link>)}
              <Button asChild className="mt-4 h-12"><Link to="/contact" onClick={() => setOpen(false)}>Request a quote <ArrowUpRight /></Link></Button>
            </div>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="bg-deep text-primary-foreground">
        <div className="site-container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_.7fr_1fr_1fr]">
          <div><Brand inverse /><p className="mt-6 max-w-sm text-sm leading-7 text-primary-foreground/65">Reliable residential internet and tailored networking infrastructure for homes, properties, and organizations.</p></div>
          <div><h2 className="footer-title">Navigate</h2><div className="mt-5 grid gap-3 text-sm text-primary-foreground/70">{navItems.slice(1).map((i) => <Link key={i.href} to={i.href} className="hover:text-cyan">{i.label}</Link>)}</div></div>
          <div><h2 className="footer-title">Services</h2><div className="mt-5 grid gap-3 text-sm text-primary-foreground/70">{services.slice(0, 5).map((i) => <Link key={i.title} to={i.href} className="hover:text-cyan">{i.title}</Link>)}</div></div>
          <div><h2 className="footer-title">Contact</h2><div className="mt-5 grid gap-4 text-sm text-primary-foreground/70"><p className="flex gap-3"><Phone className="mt-0.5 size-4 shrink-0 text-cyan" /> Phone to be confirmed</p><p className="flex gap-3"><Mail className="mt-0.5 size-4 shrink-0 text-cyan" /> Email to be confirmed</p><p className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-cyan" /> Business location to be confirmed</p></div></div>
        </div>
        <div className="border-t border-primary-foreground/10"><div className="site-container flex flex-col gap-4 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Finchnet Ventures. All rights reserved.</p><div className="flex gap-5"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Service</Link></div></div></div>
      </footer>
    </div>
  );
}