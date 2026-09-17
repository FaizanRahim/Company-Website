"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Tourism", "Healthcare", "Agency", "UI/UX Design", "Blogging", "E-commerce"];

const projects = [
  // Tourism Projects
  { name: "Paradise Travel - Hotel Booking Platform", tag: "Tourism", desc: "Luxury hotel and resort booking website with real-time availability, interactive maps, and 5-star guest reviews. Increased bookings by 240%.", stat: "+240% bookings", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop&q=90" },
  { name: "Adventure Tours - Travel Agency Website", tag: "Tourism", desc: "Complete travel itinerary platform with tour packages, destination guides, and integrated payment system. Ranked #1 for local keywords.", stat: "#1 local SEO", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop&q=90" },

  // Healthcare Projects
  { name: "HealthCare Plus - Patient Portal", tag: "Healthcare", desc: "HIPAA-compliant patient management system with appointment booking, medical records, and telemedicine integration for 50+ clinics.", stat: "50+ clinics", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=90" },
  { name: "MediSync - Doctor Consultation App", tag: "Healthcare", desc: "Mobile-first appointment and prescription management for healthcare providers. Reduced no-shows by 65%.", stat: "-65% no-shows", img: "https://images.unsplash.com/photo-1631217314230-afa03d10db00?w=800&h=600&fit=crop&q=90" },

  // Agency Websites
  { name: "Creative Studios - Agency Portfolio", tag: "Agency", desc: "Stunning agency portfolio showcasing case studies, team, and services with interactive animations and client testimonials. Won design award.", stat: "Design Award", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=90" },
  { name: "Digital Innovations Co - Service Showcase", tag: "Agency", desc: "Corporate agency website with service showcase, project gallery, and lead generation forms. Generated 500+ qualified leads monthly.", stat: "500+ leads/mo", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=90" },

  // UI/UX Design Projects
  { name: "SaaS Dashboard Design System", tag: "UI/UX Design", desc: "Complete design system with 200+ components, dark/light themes, and accessibility standards. Improved user engagement by 45%.", stat: "+45% engagement", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=90" },
  { name: "Mobile App UI/UX Overhaul", tag: "UI/UX Design", desc: "User research-driven redesign increasing app retention by 38% and app store rating to 4.8 stars.", stat: "4.8★ rating", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=90" },

  // Blogging Projects
  { name: "Tech Blog Platform - SEO Optimized", tag: "Blogging", desc: "Content management system for tech publishing with SEO optimization, ranking 80+ keywords in Google top 3. 50k+ monthly readers.", stat: "50k+ readers/mo", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=90" },
  { name: "Lifestyle Magazine - Content Hub", tag: "Blogging", desc: "Multi-author blogging platform with advanced search, reading time estimates, and social sharing. Grew organic traffic by 320%.", stat: "+320% traffic", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=90" },

  // E-commerce Projects
  { name: "Fashion E-store - Shopify Plus", tag: "E-commerce", desc: "High-performance fashion store with 3D product views, size guides, and AI recommendations. AOV increased by 55%.", stat: "+55% AOV", img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&h=600&fit=crop&q=90" },
  { name: "Organic Products Shop - B2B/B2C", tag: "E-commerce", desc: "Multi-vendor marketplace for organic products with inventory sync and wholesale pricing. $2M+ first-year revenue.", stat: "$2M+ revenue", img: "https://images.unsplash.com/photo-1624623278313-c3b50312cb1d?w=800&h=600&fit=crop&q=90" },
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
                <div className="relative flex h-32 items-end overflow-hidden rounded-xl">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="relative z-10 m-4 rounded-full bg-black/40 px-3 py-1 text-xs text-sagelight backdrop-blur-sm">{p.stat}</span>
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
