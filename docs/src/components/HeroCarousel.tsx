"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type Slide = {
  src: string;
  alt: string;
};

type HeroCarouselProps = {
  slides: Slide[];
  intervalMs?: number;
  title: string;
  subtitle?: string;
};

export function HeroCarousel({
  slides,
  intervalMs = 5000,
  title,
  subtitle,
}: HeroCarouselProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const safeSlides = useMemo(
    () => slides.map((s) => ({ ...s, src: s.src.startsWith("/") ? `${basePath}${s.src}` : s.src })),
    [slides, basePath],
  );

  useEffect(() => {
    if (paused || safeSlides.length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeSlides.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, safeSlides.length, intervalMs]);

  const go = (delta: number) => {
    setIndex((i) => {
      const next = (i + delta + safeSlides.length) % safeSlides.length;
      return next;
    });
  };

  return (
    <section
      className="relative z-10 h-[68vh] min-h-[420px] w-full overflow-hidden bg-header/90 md:h-[78vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={safeSlides[index]?.src}
            src={safeSlides[index]?.src}
            alt={safeSlides[index]?.alt || ""}
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-header/70 via-header/30 to-white/10" />
      </div>

      <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-base text-white/85 md:text-lg">{subtitle}</p>
          )}
          <div className="mt-6 flex gap-3">
            <Link
              href="/architecture"
              className="rounded-md border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Explore Architecture
            </Link>
            <Link
              href="/repository"
              className="rounded-md border border-accent bg-accent px-4 py-2.5 text-sm font-semibold text-header transition hover:bg-accent/90"
            >
              Repository
            </Link>
          </div>
        </motion.div>
      </div>

      {safeSlides.length > 1 && (
        <>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-white/70 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="m-2 rounded-full border border-white/30 bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="m-2 rounded-full border border-white/30 bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2">
              {safeSlides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
                  }`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

