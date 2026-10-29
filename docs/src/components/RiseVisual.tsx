"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type RiseVisualProps = {
  imageSrc: string;
  imageAlt?: string;
  caption?: string;
};

export function RiseVisual({ imageSrc, imageAlt = "", caption }: RiseVisualProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const src = imageSrc.startsWith("/") ? `${basePath}${imageSrc}` : imageSrc;
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);

  return (
    <section ref={ref} className="relative bg-black py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-10 text-center font-display text-3xl font-semibold tracking-tight text-white md:mb-14 md:text-5xl">
          Concept Visual
        </h2>
        <div className="relative">
          <motion.div style={{ y, opacity, scale }} className="mx-auto w-full max-w-4xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={imageAlt}
              className="w-full rounded-md border border-white/10 bg-black/50 shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>
          {caption && (
            <p className="mt-4 text-center text-sm text-white/70">
              {caption}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

