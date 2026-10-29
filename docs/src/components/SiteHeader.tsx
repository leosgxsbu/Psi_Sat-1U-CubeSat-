"use client";

import { MISSION, NAV_LINKS, PROJECT_NAME, PROJECT_SUBTITLE } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-20 bg-header/85 text-white backdrop-blur supports-[backdrop-filter]:bg-header/75">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto flex max-w-6xl items-start justify-between gap-4 px-4 py-5 md:items-center md:px-6"
      >
        <div>
          <Link href="/" className="no-underline hover:no-underline">
            <p className="font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
              {PROJECT_NAME}
            </p>
            <p className="mt-0.5 text-[0.8rem] text-white/70 md:text-sm">{PROJECT_SUBTITLE}</p>
            <p className="mt-0.5 text-[0.8rem] text-white/60 md:text-sm">{MISSION.org}</p>
          </Link>
        </div>
        <button
          type="button"
          className="rounded-md border border-accent/60 bg-accent px-2.5 py-2 text-header shadow-sm transition hover:bg-accent/90 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      <nav className="border-t border-white/10">
        <div
          className={`mx-auto max-w-6xl px-4 md:flex md:items-center md:gap-1.5 md:px-6 ${
            open ? "block" : "hidden md:flex"
          }`}
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-3 text-sm no-underline transition md:inline-block ${
                  active
                    ? "text-white"
                    : "text-white/75 hover:text-white"
                }`}
              >
                <span
                  className={`relative after:block after:h-0.5 after:rounded after:transition-all ${
                    active
                      ? "after:w-full after:bg-accent"
                      : "after:w-0 after:bg-accent hover:after:w-full"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
          <a
            href="mailto:umermaalik24@gmail.com?subject=Join%20PsiSAT%20team"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md border border-accent bg-transparent px-3 py-2 text-sm font-semibold text-white transition hover:bg-accent/20 md:ml-auto md:mt-0 md:inline-block"
          >
            Join the team
          </a>
        </div>
      </nav>
    </header>
  );
}
