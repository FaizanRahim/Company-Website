"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const monthlyPlans = [
  { name: "Starter", price: "$1,500", desc: "For small teams needing a dedicated engineer part-time.", features: ["1 dedicated engineer", "20 hrs / week", "Weekly check-ins", "Email support"] },
  { name: "Growth", price: "$4,200", desc: "A full pod for teams shipping regularly.", features: ["Full engineering pod", "40 hrs / week", "Daily standups", "Priority support", "DevOps included"], highlighted: true },
  { name: "Enterprise", price: "Custom", desc: "For organizations with complex, ongoing needs.", features: ["Dedicated team", "Custom SLAs", "Security & compliance", "24/7 support", "Quarterly strategy reviews"] },
];

const yearlyPlans = [
  { name: "Starter", price: "$1,275", desc: "For small teams needing a dedicated engineer part-time.", features: ["1 dedicated engineer", "20 hrs / week", "Weekly check-ins", "Email support"] },
  { name: "Growth", price: "$3,570", desc: "A full pod for teams shipping regularly.", features: ["Full engineering pod", "40 hrs / week", "Daily standups", "Priority support", "DevOps included"], highlighted: true },
  { name: "Enterprise", price: "Custom", desc: "For organizations with complex, ongoing needs.", features: ["Dedicated team", "Custom SLAs", "Security & compliance", "24/7 support", "Quarterly strategy reviews"] },
];

const faqs = [
  { q: "Is there a minimum commitment?", a: "Starter and Growth plans run month-to-month with a 4-week minimum. Enterprise plans are custom." },
  { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade at the start of any billing cycle." },
  { q: "What's included in support?", a: "All plans include bug fixes and monitoring. Priority support adds same-day response times." },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const plans = yearly ? yearlyPlans : monthlyPlans;

  return (
    <main className="pb-10">
      <section className="mt-10">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-widest text-sage">
          Pricing
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mt-2 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
          Simple plans, no hidden fees.
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mt-8 inline-flex items-center gap-3 rounded-full glass p-1">
          <button onClick={() => setYearly(false)}
            className={`rounded-full px-4 py-2 text-sm transition ${!yearly ? "bg-sage font-medium text-ink" : "text-mist/60"}`}>
            Monthly
          </button>
          <button onClick={() => setYearly(true)}
            className={`rounded-full px-4 py-2 text-sm transition ${yearly ? "bg-sage font-medium text-ink" : "text-mist/60"}`}>
            Yearly <span className="text-xs opacity-70">(save 15%)</span>
          </button>
        </motion.div>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div key={p.name} layout initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -4 }}
            className={`rounded-2xl p-6 ${p.highlighted ? "border-2 border-sage bg-panel" : "glass"}`}>
            {p.highlighted && (
              <span className="mb-3 inline-block rounded-full bg-sage px-3 py-1 text-xs font-medium text-ink">Most popular</span>
            )}
            <p className="font-display text-lg font-medium">{p.name}</p>
            <p className="mt-2 text-sm text-mist/50">{p.desc}</p>
            <p className="mt-6">
              <motion.span key={p.price} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                className="font-display text-3xl font-semibold">{p.price}</motion.span>
              {p.price !== "Custom" && <span className="text-sm text-mist/40"> / month</span>}
            </p>
            <ul className="mt-6 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-mist/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/contact"
              className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-medium transition ${
                p.highlighted ? "bg-sage text-ink hover:bg-sagelight" : "glass hover:bg-white/10"
              }`}>
              Get started
            </Link>
          </motion.div>
        ))}
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <p className="text-xs uppercase tracking-widest text-sage">FAQ</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Pricing questions</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <motion.details key={f.q} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }} className="glass group rounded-2xl px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                {f.q}
                <span className="ml-4 text-sage transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-mist/50">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>
    </main>
  );
}
