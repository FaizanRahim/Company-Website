"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";

const team = [
  { name: "Zaman", role: "CEO & Co-Founder", specialty: "UI/UX Design", img: "https://i.pravatar.cc/300?img=1", upwork: "Top Rated Plus" },
  { name: "Asim", role: "Co-Founder", specialty: "UI/UX Design", img: "/Asim.jpeg", upwork: "Top Rated" },
  { name: "Danish Ali", role: "CTO", specialty: "SEO Specialist", img: "/Danish.png", upwork: "Top Rated Plus" },
  { name: "Zakir Butt", role: "CFO & HR", specialty: "Project Management", img: "/zakir.jpeg", upwork: "Top Rated" },
  { name: "Ejaz Mir", role: "Web Developer", specialty: "React & Next.js", img: "/ejz.jpeg", upwork: "Top Rated" },
  { name: "Faizan Rahim", role: "Team Lead", specialty: "Full-Stack Development", img: "/Faizan.png", upwork: "Top Rated Plus" },
];

const values = [
  { title: "Ship fast, ship right", desc: "We move quickly without cutting corners on quality or security." },
  { title: "Transparent by default", desc: "Weekly updates, open roadmaps, no surprises at handover." },
  { title: "Built to scale", desc: "Every system we design accounts for 10x growth, not just launch day." },
];

const timeline = [
  { year: "2018", title: "Founded", desc: "Started as a two-person freelance studio in Islamabad." },
  { year: "2020", title: "First 10 clients", desc: "Grew the team to 8 engineers, opened our first office." },
  { year: "2022", title: "50+ projects shipped", desc: "Expanded into cloud infrastructure and security services." },
  { year: "2024", title: "Full-service IT partner", desc: "Now a 45-person team serving clients across 3 continents." },
];

export default function AboutPage() {
  return (
    <main className="pb-10">
      <section className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-widest text-sage">
            About us
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-2 font-display text-4xl font-semibold leading-tight md:text-5xl">
            An engineering team that thinks like a product team.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-6 text-sm leading-relaxed text-mist/60">
            Founded in 2018, NorsTack started as a two-person freelance
            studio and has grown into a full-service IT partner for
            startups and mid-size companies. We care as much about why
            we&apos;re building something as how it&apos;s built.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="glass relative h-64 overflow-hidden rounded-3xl md:h-80">
          <Image
            src="https://picsum.photos/seed/lumen-office/900/700"
            alt="Lumen team at the office"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="orb absolute -bottom-6 -right-6 h-28 w-28 rounded-full animate-float opacity-90" />
        </motion.div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[32px] p-8 md:p-10"
        >
          <p className="text-xs uppercase tracking-widest text-sage">Location</p>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Visit us in Gilgit</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist/60">
            Near KIU pump University Road Gilgit Infront of Applied Court.
          </p>
          <p className="mt-6 text-sm text-mist/50">
            We&apos;re available for project discussions, partnership talks, and client meetings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass overflow-hidden rounded-[32px]"
        >
          <iframe
            title="NorsTack location in Gilgit"
            src="https://www.google.com/maps?q=Near%20KIU%20pump%20University%20Road%20Gilgit%20Infront%20of%20Applied%20Court&output=embed"
            className="h-72 w-full border-0 md:h-full min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>

      {/* Founder spotlight */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass mt-16 flex flex-col items-center gap-6 rounded-[32px] p-8 text-center md:flex-row md:text-left md:p-10">
        <Image
          src="https://i.pravatar.cc/240?img=1"
          alt="Zaman, CEO & Co-Founder"
          width={120}
          height={120}
          className="h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-sage/40"
        />
        <div>
          <p className="text-xs uppercase tracking-widest text-sage">Founder&apos;s note</p>
          <p className="mt-2 text-lg leading-relaxed text-mist/80">
            &ldquo;We started this company with a vision to deliver
            exceptional solutions and build a talented team that cares
            about excellence. Every member brings unique expertise to
            the table, and together we create things that matter.&rdquo;
          </p>
          <p className="mt-3 text-sm font-medium">Zaman</p>
          <p className="text-xs text-mist/40">CEO & Co-Founder</p>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[{ n: 120, s: "+", l: "Projects shipped" }, { n: 45, s: "", l: "Team members" }, { n: 12, s: "", l: "Countries served" }, { n: 8, s: "", l: "Years in business" }].map((s, i) => (
          <motion.div key={s.l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }} className="glass rounded-2xl p-5 text-center">
            <Counter to={s.n} suffix={s.s} />
            <p className="mt-1 text-xs text-mist/50">{s.l}</p>
          </motion.div>
        ))}
      </section>

      {/* Timeline */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-widest text-sage">Our journey</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Six years of building</h2>

        <div className="relative mt-10 space-y-8 border-l border-mist/10 pl-8">
          {timeline.map((t, i) => (
            <motion.div key={t.year} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }} className="relative">
              <span className="absolute -left-[38px] flex h-5 w-5 items-center justify-center rounded-full bg-sage" />
              <p className="font-display text-sm font-semibold text-sage">{t.year}</p>
              <p className="mt-1 font-display text-lg font-medium">{t.title}</p>
              <p className="mt-1 text-sm text-mist/50">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-widest text-sage">What we value</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -4 }} className="glass rounded-2xl p-6">
              <p className="font-display text-lg font-medium">{v.title}</p>
              <p className="mt-2 text-sm text-mist/50">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-widest text-sage">The team</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">People behind the work</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }} whileHover={{ y: -4 }} className="glass rounded-3xl p-8 text-center">
              <Image src={t.img} alt={t.name} width={100} height={100} className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-sage/30" />
              <p className="mt-4 font-display text-lg font-semibold">{t.name}</p>
              <p className="text-sm text-sage font-medium">{t.role}</p>
              <p className="mt-2 text-xs text-mist/50">{t.specialty}</p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <span className="inline-block rounded-full bg-sage/20 px-3 py-1 text-xs font-medium text-sage">{t.upwork}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass mt-24 flex flex-col items-start justify-between gap-6 rounded-[32px] p-8 md:flex-row md:items-center md:p-12">
        <div>
          <h3 className="font-display text-2xl font-semibold">Want to work with us?</h3>
          <p className="mt-2 max-w-md text-sm text-mist/50">We&apos;re always open to new partnerships and ambitious projects.</p>
        </div>
        <Link href="/contact" className="rounded-full bg-sage px-6 py-3 text-sm font-medium text-ink transition hover:bg-sagelight">
          Get in touch
        </Link>
      </motion.section>
    </main>
  );
}
