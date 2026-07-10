"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";

const services = [
  { title: "Web development", desc: "Custom web applications and marketing sites built with modern frameworks, optimized for speed and SEO.", points: ["React & Next.js", "Headless CMS integration", "Performance tuning"], icon: "</>" },
  { title: "Cloud & DevOps", desc: "Infrastructure design, CI/CD pipelines, and monitoring so your systems scale without breaking.", points: ["AWS / GCP / Azure", "Containerization", "Automated deployments"], icon: "☁" },
  { title: "Cybersecurity", desc: "Security audits, penetration testing, and hardening for applications handling sensitive data.", points: ["Vulnerability audits", "Compliance readiness", "24/7 monitoring"], icon: "◈" },
  { title: "Mobile app development", desc: "Native and cross-platform apps for iOS and Android with a shared, maintainable codebase.", points: ["React Native", "App store deployment", "Push notifications"], icon: "▤" },
  { title: "Data & analytics", desc: "Data pipelines and dashboards that turn raw numbers into decisions your team can act on.", points: ["ETL pipelines", "Custom dashboards", "Predictive models"], icon: "▦" },
  { title: "IT consulting", desc: "Technical strategy for teams deciding what to build, buy, or rearchitect next.", points: ["Architecture review", "Tech stack audits", "Team augmentation"], icon: "◐" },
];

const industries = ["Fintech", "Healthcare", "E-commerce", "Logistics", "SaaS", "Education"];

const compare = [
  { feature: "Dedicated engineering team", diy: false, us: true },
  { feature: "Weekly progress demos", diy: false, us: true },
  { feature: "Security built in from day one", diy: false, us: true },
  { feature: "Post-launch support", diy: false, us: true },
  { feature: "No hiring or onboarding overhead", diy: false, us: true },
];

const faqs = [
  { q: "Do you sign NDAs before scoping a project?", a: "Yes, always. We sign your NDA or ours before any detailed discussion." },
  { q: "Can I hire you for just part of the stack?", a: "Yes — many clients bring us in for a single service like cloud migration or a security audit." },
  { q: "How do you handle ongoing maintenance?", a: "Every project includes a support window, with optional retainers after launch for ongoing work." },
];

export default function ServicesPage() {
  return (
    <main className="pb-10">
      <section className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-widest text-sage">
            Services
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-2 max-w-xl font-display text-4xl font-semibold leading-tight md:text-5xl">
            Everything you need to ship reliable software.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-4 max-w-lg text-sm text-mist/50">
            Six core services, one accountable team. We plug in wherever
            you need us — from a single audit to your entire engineering
            function.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="glass relative h-56 overflow-hidden rounded-3xl md:h-72">
          <Image src="https://picsum.photos/seed/lumen-services/900/600" alt="Engineers pairing on a project" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </motion.div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {services.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }} whileHover={{ y: -5, borderColor: "rgba(143,191,154,0.5)" }}
            className="glass rounded-2xl p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10 text-sage">{s.icon}</span>
            <p className="mt-4 font-display text-xl font-medium">{s.title}</p>
            <p className="mt-2 text-sm text-mist/50">{s.desc}</p>
            <ul className="mt-4 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-mist/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Industries */}
      <section className="mt-20">
        <p className="text-xs uppercase tracking-widest text-sage">Industries we serve</p>
        <div className="mt-6">
          <Marquee items={industries} />
        </div>
      </section>

      {/* Comparison */}
      <section className="mt-20">
        <p className="text-xs uppercase tracking-widest text-sage">Why not hire in-house?</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Us vs. building solo</h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass mt-8 overflow-hidden rounded-2xl">
          <div className="grid grid-cols-3 border-b border-mist/10 px-6 py-4 text-xs uppercase tracking-widest text-mist/40">
            <span>Feature</span>
            <span className="text-center">Solo hire</span>
            <span className="text-center text-sage">NorsTack</span>
          </div>
          {compare.map((c, i) => (
            <div key={c.feature} className={`grid grid-cols-3 items-center px-6 py-4 text-sm ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}>
              <span className="text-mist/70">{c.feature}</span>
              <span className="text-center text-mist/30">—</span>
              <span className="text-center text-sage">&#10003;</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <p className="text-xs uppercase tracking-widest text-sage">FAQ</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Common questions</h2>
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

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass mt-20 flex flex-col items-start justify-between gap-6 rounded-[32px] p-8 md:flex-row md:items-center md:p-12">
        <div>
          <h3 className="font-display text-2xl font-semibold">Not sure which service you need?</h3>
          <p className="mt-2 max-w-md text-sm text-mist/50">Book a free 30-minute call and we&apos;ll help you scope it.</p>
        </div>
        <Link href="/contact" className="rounded-full bg-sage px-6 py-3 text-sm font-medium text-ink transition hover:bg-sagelight">
          Book a call
        </Link>
      </motion.section>
    </main>
  );
}
