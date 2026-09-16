import { Link } from "@tanstack/react-router";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" aria-label="Finchnet Ventures home" className="inline-flex items-center gap-3">
      <span className="relative grid size-10 shrink-0 place-items-center border border-cyan/40 bg-primary">
        <span className="absolute h-px w-6 rotate-45 bg-cyan" />
        <span className="absolute h-px w-6 -rotate-45 bg-cyan" />
        <span className="relative size-2 bg-primary-foreground ring-2 ring-cyan" />
      </span>
      <span className={`leading-none ${inverse ? "text-primary-foreground" : "text-foreground"}`}>
        <span className="block text-base font-extrabold tracking-[0.08em]">FINCHNET</span>
        <span className="mt-1 block text-[0.62rem] font-semibold tracking-[0.32em] text-blue">VENTURES</span>
      </span>
    </Link>
  );
}