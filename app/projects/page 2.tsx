"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Fintech", "E-commerce", "Healthcare", "Logistics", "SaaS", "Security"];

const projects = [
  { name: "Finlytics", tag: "Fintech", desc: "Real-time analytics platform for a payments startup, handling 2M+ transactions monthly.", stat: "2M+ tx / mo" },
  { name: "Cartly", tag: "E-commerce", desc: "Headless storefront rebuild that cut page load time by 60% and lifted conversion by 18%.", stat: "+18% conversion" },
  { name: "MedSync", tag: "Healthcare", desc: "HIPAA-compliant patient scheduling system used across 40 clinics.", stat: "40 clinics" },
  { name: "Fleetwise", tag: "Logistics", desc: "Cloud infrastructure and live tracking for a regional delivery fleet.", stat: "300+ vehicles" },
  { name: "Studio OS", tag: "SaaS", desc: "Project management tool built from scratch for creative agencies.", stat: "5k+ users" },
  { name: "Vaultpay", tag: "Security", desc: "Security audit and infrastructure hardening for a digital wallet provider.", stat: "0 breaches" },
  { name: "Ledgerly", tag: "Fintech", desc: "Automated bookkeeping platform integrating with 12 major banks.", stat: "12 bank APIs" },
  { name: "Shelfie", tag: "E-commerce", desc: "Inventory sync engine connecting Shopify, Amazon, and in-store POS.", stat: "3 channels synced" },
  { name: "CarePath", tag: "Healthcare", desc: "Patient intake and triage app reducing wait times by 40%.", stat: "-40% wait time" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <main className="pb-10">
      <section className="mt-10">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-widest text-sage">
          Projects
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mt-2 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
          Work we&apos;re proud to have shipped.
        </motion.h1>
      </section>

      {/* Filters */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              active === c ? "bg-sage font-medium text-ink" : "glass text-mist/60 hover:text-mist"
            }`}>
            {c}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div key={p.name} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05, duration: 0.4 }} whileHover={{ y: -4 }}
              className="glass flex flex-col justify-between rounded-2xl p-6">
              <div>
                <div className="flex h-32 items-end justify-between rounded-xl bg-gradient-to-br from-[#243a2c] to-[#101711] p-4">
                  <span className="rounded-full bg-black/30 px-3 py-1 text-xs text-sagelight">{p.stat}</span>
                </div>
                <p className="mt-4 text-xs uppercase tracking-widest text-sage">{p.tag}</p>
                <p className="mt-1 font-display text-lg font-medium">{p.name}</p>
                <p className="mt-2 text-sm text-mist/50">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass mt-20 flex flex-col items-start justify-between gap-6 rounded-[32px] p-8 md:flex-row md:items-center md:p-12">
        <div>
          <h3 className="font-display text-2xl font-semibold">Want to see your product here next?</h3>
          <p className="mt-2 max-w-md text-sm text-mist/50">Tell us what you&apos;re building and let&apos;s talk scope.</p>
        </div>
        <Link href="/contact" className="rounded-full bg-sage px-6 py-3 text-sm font-medium text-ink transition hover:bg-sagelight">
          Start a project
        </Link>
      </motion.section>
    </main>
  );
}
