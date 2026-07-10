"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About us" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass sticky top-6 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full px-3 py-2"
    >
      <Link href="/" className="pl-3 font-display text-lg font-semibold">
        Lumen<span className="text-sage">.</span>
      </Link>

      <div className="hidden items-center gap-1 md:flex">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active
                  ? "bg-sage font-medium text-ink"
                  : "text-mist/80 hover:text-mist"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <Link
          href="/contact"
          className="glass hidden rounded-full px-5 py-2 text-sm font-medium transition hover:bg-white/10 md:block"
        >
          Contact us
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="glass flex h-9 w-9 items-center justify-center rounded-full md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute left-0 right-0 top-16 flex flex-col gap-1 rounded-3xl p-3 md:hidden"
          >
            {links.concat([{ href: "/contact", label: "Contact us" }]).map(
              (link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    pathname === link.href
                      ? "bg-sage font-medium text-ink"
                      : "text-mist/80"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
