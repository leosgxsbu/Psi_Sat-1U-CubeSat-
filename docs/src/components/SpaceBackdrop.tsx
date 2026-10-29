"use client";

import { backgroundForPath } from "@/lib/backgrounds";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/** Fixed space photo behind the existing site UI — changes per page. */
export function SpaceBackdrop() {
  const pathname = usePathname() || "/";
  const src = backgroundForPath(pathname);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <motion.img
        key={src}
        src={src}
        alt=""
        initial={{ scale: 1.04, opacity: 0.95 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-header/55 via-white/10 to-white/40" />
    </div>
  );
}
