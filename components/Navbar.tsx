"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/services", label: "Services", icon: "⚙️" },
  { href: "/projects", label: "Projects", icon: "📁" },
  { href: "/about", label: "About us", icon: "👥" },
  { href: "/pricing", label: "Pricing", icon: "💰" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass sticky top-6 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full px-3 py-2"
    >
      <Link href="/" className="pl-3 font-display text-lg font-semibold">
        NorsTack<span className="text-sage">.</span>
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
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
            />
            
            {/* Side Drawer */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="glass fixed left-0 top-0 z-40 h-screen w-72 flex flex-col gap-2 rounded-0 p-6 md:hidden"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setOpen(false)}
                  className="text-3xl font-light text-mist/80 hover:text-mist"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              {/* Logo */}
              <Link 
                href="/" 
                onClick={() => setOpen(false)}
                className="mb-6 font-display text-xl font-semibold"
              >
                NorsTack<span className="text-sage">.</span>
              </Link>

              {/* Navigation Links with Icons */}
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-4 rounded-2xl px-4 py-3 text-sm transition-colors ${
                      active
                        ? "bg-sage font-medium text-ink"
                        : "text-mist/80 hover:text-mist hover:bg-white/5"
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                );
              })}

              {/* Contact Us */}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 rounded-2xl px-4 py-3 text-sm text-mist/80 hover:text-mist hover:bg-white/5 transition-colors mt-4"
              >
                <span className="text-xl">📧</span>
                <span>Contact us</span>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
