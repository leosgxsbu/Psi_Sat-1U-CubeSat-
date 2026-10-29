"use client";

type Logo = {
  src: string;
  alt: string;
  href?: string;
};

export function SponsorMarquee({ logos, speed = 30 }: { logos: Logo[]; speed?: number }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolved = logos.map((l) => ({
    ...l,
    src: l.src.startsWith("/") ? `${basePath}${l.src}` : l.src,
  }));

  // Duplicate track for infinite scroll effect
  const track = [...resolved, ...resolved, ...resolved];

  return (
    <section aria-labelledby="marquee-title" className="relative bg-black py-8 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="marquee-title" className="mb-6 text-center font-display text-sm tracking-[0.25em] text-white/70">
          POWERING PSISAT
        </h2>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />
        <div
          className="marquee flex items-center"
          style={{
            animationDuration: `${speed}s`,
          }}
        >
          {track.map((logo, i) => {
            const img = (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${logo.src}-${i}`}
                src={logo.src}
                alt={logo.alt}
                className="mx-10 h-10 w-auto opacity-90 md:h-12"
                loading="lazy"
              />
            );
            return logo.href ? (
              <a
                key={`${logo.src}-${i}-a`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.alt}
                className="inline-block"
              >
                {img}
              </a>
            ) : (
              img
            );
          })}
        </div>
      </div>
    </section>
  );
}

