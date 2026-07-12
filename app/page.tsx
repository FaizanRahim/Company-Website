"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

const services = [
  { title: "UI/UX Design", desc: "Clean, conversion-focused interfaces and product flows that make apps easier to use.", icon: "◐" },
  { title: "Web Development", desc: "Fast, scalable web platforms built on modern stacks.", icon: "</>" },
  { title: "SEO Specialist", desc: "On-page, technical, and content SEO that improves visibility and search performance.", icon: "⌕" },
  { title: "Blogging", desc: "Consistent content planning and writing that supports authority, traffic, and leads.", icon: "✎" },
  { title: "AI Powered Apps", desc: "Smart applications that automate tasks and create better user experiences.", icon: "✦" },
  { title: "Project Management", desc: "Structured delivery, timelines, and coordination that keep work moving.", icon: "◎" },
  { title: "Digital Marketing", desc: "Campaigns and funnels that help brands reach the right audience.", icon: "↗" },
  { title: "Wordpress Development", desc: "Custom WordPress websites, themes, and plugin-based builds tailored to your needs.", icon: "W" },
  { title: "Medical & Business Software Development", desc: "Software built for healthcare and business workflows with reliability in mind.", icon: "⚕" },
  { title: "Mobile App Development", desc: "Cross-platform mobile applications that provide seamless user experiences.", icon: "📱" },
];

const process = [
  { step: "01", title: "Discover", desc: "We map your goals, users, and constraints before writing a line of code." },
  { step: "02", title: "Design", desc: "Wireframes and prototypes you can react to, not just imagine." },
  { step: "03", title: "Build", desc: "Agile sprints with weekly demos so you always see progress." },
  { step: "04", title: "Launch & scale", desc: "We stay on to monitor, iterate, and grow what we shipped." },
];

const testimonials = [
  { quote: "NorsTack rebuilt our platform in 10 weeks and it hasn't gone down since. Genuinely the best technical partner we've had.", name: "Alex Turner", role: "COO, Finlytics", img: "https://i.pravatar.cc/100?img=32" },
  { quote: "They think like product owners, not just contractors. Every recommendation was backed by real user data.", name: "Sydney Brooks", role: "Founder, Cartly", img: "https://i.pravatar.cc/100?img=12" },
  { quote: "Our infrastructure costs dropped 35% after their cloud audit. Paid for itself in the first month.", name: "John Miller", role: "CTO, Fleetwise", img: "https://i.pravatar.cc/100?img=45" },
];

const stack = ["React", "Next.js", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Python", "Kubernetes", "GraphQL"];

const faqs = [
  { q: "How long does a typical project take?", a: "Most web platforms take 8–14 weeks from kickoff to launch, depending on scope. We'll give you a firm timeline after discovery." },
  { q: "Do you work with startups?", a: "Yes — about half our clients are pre-seed to Series B startups. We also work with established mid-size companies." },
  { q: "What's your pricing model?", a: "We offer monthly retainers and fixed-scope project pricing. See our Pricing page for exact plans." },
  { q: "Can you take over an existing codebase?", a: "Regularly. We start with a codebase audit so you know exactly what you're inheriting before we touch anything." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative mt-10 overflow-hidden rounded-[32px] bg-panel p-6 md:p-12">
        <Image
          src="https://picsum.photos/seed/lumen-hero/1600/900"
          alt="Engineering team working on a digital product"
          fill
          priority
          className="pointer-events-none absolute inset-0 object-cover opacity-20"
        />
        <div className="noise pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="orb absolute -right-16 top-10 h-48 w-48 rounded-full animate-float md:h-64 md:w-64" />
          <div className="orb absolute bottom-10 right-1/3 h-16 w-16 rounded-full animate-drift opacity-60" />
          <div className="orb absolute -left-10 bottom-0 h-24 w-24 rounded-full animate-float opacity-40" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <motion.p initial="hidden" animate="show" variants={fadeUp} custom={0}
              className="mb-4 inline-block rounded-full border border-sage/30 px-3 py-1 text-xs text-sage">
              IT solutions & digital engineering
            </motion.p>

            <motion.h1 initial="hidden" animate="show" variants={fadeUp} custom={1}
              className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              We build
              <br />
              software that
              <br />
              <span className="text-sage">scales.</span>
            </motion.h1>

            <motion.p initial="hidden" animate="show" variants={fadeUp} custom={2}
              className="mt-6 max-w-md text-sm leading-relaxed text-mist/60">
              From UI/UX design to medical and business software, we partner with
              growing companies to design, build, and ship products that
              hold up under real traffic.
            </motion.p>

            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={3}
              className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="rounded-full bg-sage px-6 py-3 text-sm font-medium text-ink transition hover:bg-sagelight">
                Start a project
              </Link>
              <Link href="/projects" className="glass rounded-full px-6 py-3 text-sm transition hover:bg-white/10">
                View our work
              </Link>
            </motion.div>
          </div>

          <motion.div initial="hidden" animate="show" variants={fadeUp} custom={2}
            className="glass relative rounded-3xl p-6" whileHover={{ y: -4 }}>
            <p className="text-xs uppercase tracking-widest text-sage">What we do</p>
            <p className="mt-3 text-sm leading-relaxed text-mist/70">
              We specialize in engineering reliable digital products —
              web platforms, cloud systems, and secure infrastructure
              tailored to how your business actually works.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex -space-x-3">
                {[14, 25, 47].map((n) => (
                  <Image key={n} src={`https://i.pravatar.cc/80?img=${n}`} alt="Team member" width={40} height={40}
                    className="h-10 w-10 rounded-full border-2 border-panel object-cover" />
                ))}
              </div>
              <Link href="/services" className="flex h-10 w-10 items-center justify-center rounded-full bg-sage text-ink transition hover:bg-sagelight">
                &#8599;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="mt-14">
        <p className="mb-2 text-center text-xs uppercase tracking-widest text-mist/30">Trusted by teams at</p>
        <Marquee items={["Finlytics", "Cartly", "MedSync", "Fleetwise", "Studio OS", "Vaultpay"]} />
      </div>

      {/* Stats */}
      <section className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[{ n: 120, s: "+", l: "Projects shipped" }, { n: 45, s: "", l: "Engineers on team" }, { n: 98, s: "%", l: "Client retention" }, { n: 8, s: "", l: "Years in business" }].map((s, i) => (
          <motion.div key={s.l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }} className="glass rounded-2xl p-5 text-center">
            <Counter to={s.n} suffix={s.s} />
            <p className="mt-1 text-xs text-mist/50">{s.l}</p>
          </motion.div>
        ))}
      </section>

      {/* Services preview */}
      <section className="mt-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-sage">Services</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">What we deliver</h2>
          </div>
          <Link href="/services" className="hidden text-sm text-mist/60 hover:text-sage md:block">
            See all services &#8594;
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }} whileHover={{ y: -6, borderColor: "rgba(143,191,154,0.5)" }}
              className="glass rounded-2xl p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/10 text-sage">{s.icon}</span>
              <p className="mt-4 font-display text-lg font-medium">{s.title}</p>
              <p className="mt-2 text-sm text-mist/50">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-widest text-sage">How we work</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">A process built for momentum</h2>

        <div className="relative mt-10 grid gap-6 md:grid-cols-4">
          <div className="glow-line absolute left-0 right-0 top-6 hidden md:block" />
          {process.map((p, i) => (
            <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }} className="relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-sage font-display text-sm font-semibold text-ink">
                {p.step}
              </span>
              <p className="mt-4 font-display text-lg font-medium">{p.title}</p>
              <p className="mt-2 text-sm text-mist/50">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-widest text-sage">Testimonials</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">What clients say</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }} className="glass flex flex-col justify-between rounded-2xl p-6">
              <p className="text-sm leading-relaxed text-mist/70">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <Image src={t.img} alt={t.name} width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-mist/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-widest text-sage">Tech we use</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Modern, proven, boring in a good way</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {stack.map((t, i) => (
            <motion.span key={t} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }} whileHover={{ scale: 1.06 }}
              className="glass rounded-full px-4 py-2 text-sm text-mist/70">
              {t}
            </motion.span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-widest text-sage">FAQ</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Questions, answered</h2>
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

      {/* CTA */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass mt-24 flex flex-col items-start justify-between gap-6 rounded-[32px] p-8 md:flex-row md:items-center md:p-12">
        <div>
          <h3 className="font-display text-2xl font-semibold md:text-3xl">Let&apos;s build your next product.</h3>
          <p className="mt-2 max-w-md text-sm text-mist/50">Tell us about your project and we&apos;ll get back within one business day.</p>
        </div>
        <Link href="/contact" className="rounded-full bg-sage px-6 py-3 text-sm font-medium text-ink transition hover:bg-sagelight">
          Get in touch
        </Link>
      </motion.section>
    </main>
  );
}
