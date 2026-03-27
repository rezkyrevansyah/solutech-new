"use client";

import Link from "next/link";
import {
  Server,
  Shield,
  Cloud,
  Cpu,
  Users,
  Headphones,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Building2,
  Network,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

export default function ExploreSection() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Lorem More
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-brand-text"
          >
            Lorem Ipsum Dolor, Sit Amet
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-muted text-sm mt-3 max-w-2xl mx-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
          </motion.p>
        </div>

        {/* 
          Bento Grid — HPE style:
          - 3 columns, asymmetric heights matching the reference
          - Sharp corners (rounded-sm or none)
          - Dark slates/grey themes 
        */}

        {/* Mobile stack */}
        <div className="flex flex-col gap-4 lg:hidden">
          <BentoCard1 />
          <BentoCard2 />
          <BentoCard3 />
          <BentoCard4 />
          <BentoCard5 />
        </div>

        {/* Desktop bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hidden lg:grid gap-4"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "250px 100px 250px",
            gridTemplateAreas: `
              "card1 card3 card5"
              "card1 card4 card5"
              "card2 card4 card5"
            `,
          }}
        >
          <BentoCard1 className="[grid-area:card1]" />
          <BentoCard2 className="[grid-area:card2]" />
          <BentoCard3 className="[grid-area:card3]" />
          <BentoCard4 className="[grid-area:card4]" />
          <BentoCard5 className="[grid-area:card5]" />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-brand-muted text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/layanan"
              className="inline-block bg-brand-dark text-white font-semibold px-8 py-4 rounded-sm hover:bg-brand-dark/90 transition-all text-sm shadow-lg"
            >
              Lorem Ipsum Dolor
            </Link>
            <a
              href={WHATSAPP_URL}
              className="inline-block border-2 border-brand-accent text-brand-accent font-semibold px-8 py-4 rounded-sm hover:bg-brand-accent hover:text-black transition-all text-sm"
            >
              Amet Consectetur
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Bento card components ─────────────────────────────────────────────── */

function BentoCard1({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#2a3038] p-8 flex flex-col justify-between group cursor-pointer border border-white/5 min-h-[250px] ${className}`}>
      {/* Background abstract overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a3038] to-[#1e2329]" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-accent/5 blur-3xl group-hover:bg-brand-accent/10 transition-colors duration-500 rounded-full" />
      
      <div className="relative z-10 lg:w-[85%]">
        <h3 className="text-white text-2xl lg:text-3xl font-bold leading-snug mb-3">
          Lorem Profesional
        </h3>
        <p className="text-white/70 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <Link
        href="/layanan"
        className="relative z-10 mt-8 inline-flex items-center gap-2 text-brand-accent text-sm font-semibold group-hover:gap-3 transition-all"
      >
        Lorem ipsum dolor
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function BentoCard2({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#1c2229] border border-white/5 p-8 flex flex-col group cursor-pointer min-h-[250px] ${className}`}>
      {/* Abstract darker image background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity grayscale group-hover:opacity-30 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c2229] via-transparent to-[#1c2229]/80" />

      <div className="relative z-10 w-full lg:w-[90%]">
        <h3 className="text-white text-xl lg:text-2xl font-bold leading-snug mb-3">
          Lorem & Ipsum
        </h3>
        <p className="text-white/70 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing.
        </p>
      </div>

      <div className="relative z-10 mt-auto pt-6">
        <Link
          href="/karir"
          className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold group-hover:gap-3 transition-all"
        >
          Lorem ipsum dolor
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

function BentoCard3({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#242932] border border-white/5 p-8 flex flex-col justify-between group cursor-pointer min-h-[250px] ${className}`}>
      <div className="relative z-10 w-[90%]">
        <h3 className="text-white text-xl lg:text-2xl font-bold leading-snug mb-3">
          Lorem 24/7
        </h3>
        <p className="text-white/70 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
        </p>
      </div>

      <Link
        href="/dukungan"
        className="relative z-10 mt-6 inline-flex items-center gap-2 text-brand-accent text-sm font-semibold group-hover:gap-3 transition-all"
      >
        Lorem ipsum
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function BentoCard4({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#353b47] border border-white/5 p-8 flex flex-col justify-between group cursor-pointer min-h-[250px] ${className}`}>
      <div className="relative z-10 w-full lg:w-[85%]">
        <h3 className="text-white text-2xl lg:text-3xl font-bold leading-snug mb-3">
          Lorem & Ipsum
        </h3>
        <p className="text-white/80 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
        </p>
      </div>

      <Link
        href="/produk"
        className="relative z-10 mt-8 inline-flex items-center gap-2 text-brand-accent text-sm font-semibold group-hover:gap-3 transition-all"
      >
        Lorem dolor ipsum
        <ArrowRight className="w-4 h-4" />
      </Link>

      {/* Table graphic simulation */}
      <div className="absolute right-0 bottom-0 w-[55%] h-[40%] bg-[#242932] shadow-2xl opacity-60 group-hover:-translate-y-2 transition-transform duration-500 rounded-tl-lg border-t border-l border-white/5 hidden lg:flex flex-col gap-3 p-5">
        <div className="w-full h-2.5 bg-white/10 rounded-sm" />
        <div className="w-4/5 h-2.5 bg-white/5 rounded-sm" />
        <div className="w-full h-2.5 bg-white/5 rounded-sm" />
        <div className="w-3/5 h-2.5 bg-white/5 rounded-sm" />
      </div>
    </div>
  );
}

function BentoCard5({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#242831] border border-white/5 flex flex-col group cursor-pointer min-h-[400px] lg:h-full ${className}`}>
      {/* Top half image */}
      <div className="w-full h-[45%] lg:h-[42%] bg-[#1c2027] lg:p-6 flex-shrink-0">
        <div className="w-full h-full relative overflow-hidden bg-white/5 border border-white/5 lg:rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
            alt="Server Room"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-screen"
          />
        </div>
      </div>

      <div className="flex-1 p-8 flex flex-col">
        <h3 className="text-white text-2xl lg:text-3xl font-bold leading-snug mb-3">
          Lorem Ipsum Dolor
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-8 flex-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
        </p>

        <div className="flex items-center justify-between mt-auto">
          <a
            href={WHATSAPP_URL}
            className="inline-flex items-center gap-2 text-brand-accent text-sm font-semibold group-hover:gap-3 transition-all"
          >
            Lorem Ipsum <ArrowRight className="w-4 h-4" />
          </a>
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-brand-accent/50 transition-colors">
            <ExternalLink className="w-3.5 h-3.5 text-white/50 group-hover:text-brand-accent" />
          </div>
        </div>
      </div>
    </div>
  );
}
