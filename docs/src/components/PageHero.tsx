import Link from "next/link";
import { Reveal } from "./Reveal";

type Props = {
  title: string;
  subtitle?: string;
  crumbs?: { label: string; href?: string }[];
};

export function PageHero({ title, subtitle, crumbs }: Props) {
  return (
    <div className="relative z-10 border-b border-line bg-paper-soft/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <Reveal y={12}>
          {crumbs && crumbs.length > 0 && (
            <nav className="mb-3 text-sm text-muted">
              {crumbs.map((c, i) => (
                <span key={`${c.label}-${i}`}>
                  {i > 0 && <span className="mx-2 text-[#ccc]">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="text-link">
                      {c.label}
                    </Link>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-base text-muted">{subtitle}</p>
          )}
          <div className="mt-4 h-0.5 w-12 rounded bg-accent" />
        </Reveal>
      </div>
    </div>
  );
}
