"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type RevealProps = PropsWithChildren<{
  delay?: number;
  y?: number;
  durationMs?: number;
  className?: string;
}>;

export function Reveal({
  children,
  delay = 0,
  y = 20,
  durationMs = 600,
  className,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: durationMs / 1000, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

