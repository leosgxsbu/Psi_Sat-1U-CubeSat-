"use client";

import { motion } from "framer-motion";

type HeroProps = {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
};

export function Hero({ imageSrc, imageAlt = "", title, subtitle }: HeroProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const src = imageSrc.startsWith("/") ? `${basePath}${imageSrc}` : imageSrc;

  return (
    <section className="relative z-10 h-[68vh] min-h-[460px] w-full overflow-hidden bg-black md:h-[82vh]">
      {/* Background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        key={src}
        src={src}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ opacity: 0.6, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/70" />

      {/* Copy */}
      <div className="relative mx-auto flex h-full max-w-6xl items-end px-4 pb-10 md:px-6 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl font-semibold tracking-tight text-white md:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-3xl text-base text-white/85 md:text-xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

