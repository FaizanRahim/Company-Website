"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Naam likhna zaroori hai.";
    if (!form.email.trim()) {
      next.email = "Email likhna zaroori hai.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Sahi email format likhein.";
    }
    if (!form.message.trim()) next.message = "Message likhna zaroori hai.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    // Simulated submit — replace with a real API route or service
    // (e.g. Formspree, Resend, or your own /api/contact route) when ready.
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="pb-10">
      <section className="mt-10 grid gap-10 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest text-sage"
          >
            Contact us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-display text-4xl font-semibold leading-tight md:text-5xl"
          >
            Let&apos;s talk about your project.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-sm text-sm leading-relaxed text-mist/60"
          >
            Fill the form and our team will get back to you within one
            business day. Prefer email? Reach us directly at
            hello@lumen.dev
          </motion.p>

          <div className="mt-10 space-y-4 text-sm text-mist/60">
            <p><span className="text-mist/40">Address —</span> Near KIU pump University Road Gilgit Infront of Applied Court</p>
            <p><span className="text-mist/40">Phone —</span> +92 300 1234567</p>
            <p><span className="text-mist/40">Hours —</span> Mon–Fri, 9am–6pm</p>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-6 md:p-8"
          noValidate
        >
          <div className="space-y-5">
            <div>
              <label className="mb-1 block text-xs text-mist/50">Full name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-mist/15 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-sage"
                placeholder="Ali Raza"
              />
              {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label className="mb-1 block text-xs text-mist/50">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-mist/15 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-sage"
                placeholder="you@company.com"
              />
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-1 block text-xs text-mist/50">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full rounded-xl border border-mist/15 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-sage"
                placeholder="Tell us about your project..."
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-sage px-6 py-3 text-sm font-medium text-ink transition hover:bg-sagelight disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl bg-sage/10 px-4 py-3 text-center text-sm text-sage"
                >
                  Thanks — your message has been sent. We&apos;ll reply soon.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </section>

      {/* Map */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="glass relative mt-16 overflow-hidden rounded-3xl">
        <iframe
          title="NorsTack location in Gilgit"
          src="https://www.google.com/maps?q=Near%20KIU%20pump%20University%20Road%20Gilgit%20Infront%20of%20Applied%20Court&output=embed"
          className="h-72 w-full border-0 md:h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
        <p className="absolute bottom-6 left-6 z-10 text-sm text-mist/70">Near KIU pump University Road Gilgit Infront of Applied Court</p>
      </motion.section>

      {/* Social */}
      <section className="mt-16">
        <p className="text-xs uppercase tracking-widest text-sage">Follow us</p>
        <div className="mt-4 flex gap-3">
          {["LinkedIn", "Facebook", "Instagram", "Twitter"].map((s, i) => (
            <motion.a key={s} href="#" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }} whileHover={{ y: -3 }}
              className="glass rounded-full px-5 py-2 text-sm text-mist/70 transition hover:text-sage">
              {s}
            </motion.a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-20">
        <p className="text-xs uppercase tracking-widest text-sage">FAQ</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Before you reach out</h2>
        <div className="mt-8 space-y-3">
          {[
            { q: "How fast will I get a reply?", a: "We respond to every inquiry within one business day, usually sooner." },
            { q: "Do you offer free consultations?", a: "Yes, the first call is always free with no obligation." },
            { q: "What info should I include?", a: "A short project summary, rough timeline, and budget range help us respond faster." },
          ].map((f, i) => (
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
