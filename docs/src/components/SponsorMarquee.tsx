"use client";

type Logo = {
  src: string;
  alt: string;
  href?: string;
};

export function SponsorMarquee({
  logos,
  speed = 30,
}: {
  logos: Logo[];
  speed?: number;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const resolved = logos.map((l) => ({
    ...l,
    src: l.src.startsWith("/") ? `${basePath}${l.src}` : l.src,
  }));

  // Build track for infinite scroll effect.
  // When we only have 1 logo, interleave large spacers so the viewport
  // generally shows just one logo at a time instead of three clustered copies.
  const isSingle = resolved.length === 1;
  let track: (Logo | { spacer: true; key: string })[] = [];
  if (isSingle) {
    const spacer = (k: number): { spacer: true; key: string } => ({
      spacer: true,
      key: `sp-${k}`,
    });
    track = [resolved[0], spacer(1), spacer(2), resolved[0], spacer(3), spacer(4), resolved[0]];
  } else {
    track = [...resolved, ...resolved, ...resolved];
  }

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
          {track.map((entry, i) => {
            if ("spacer" in entry) {
              return (
                <div
                  key={entry.key + i}
                  className="shrink-0"
                  style={{ width: "min(42vw, 560px)" }}
                />
              );
            }
            const img = (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${entry.src}-${i}`}
                src={entry.src}
                alt={entry.alt}
                className="mx-10 h-10 w-auto md:h-12"
                loading="lazy"
              />
            );
            return entry.href ? (
              <a
                key={`${entry.src}-${i}-a`}
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={entry.alt}
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

