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
} from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

export default function ExploreSection() {
  return (
    <section className="bg-gradient-to-b from-brand-gray to-white py-24 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Explore More
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-brand-text"
          >
            Explore Lebih Jauh, Selagi Di sini
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-muted text-sm mt-3 max-w-2xl mx-auto"
          >
            Temukan semua yang Solutech Asia tawarkan untuk kebutuhan IT bisnis Anda
          </motion.p>
        </div>

        {/*
          Bento Grid — persis seperti referensi HPE:

          Desktop layout (3 kolom, 2 baris):
          ┌─────────────────┬─────────────────┬──────────────┐
          │                 │                 │              │
          │  Card A (wide)  │  Card B (wide)  │  Card C      │
          │  Layanan        │  Produk         │  (tall/foto) │
          │                 │                 │              │
          ├────────┬────────┴────────┬────────┤  row-span-2  │
          │ Card D │   Card E        │ Card F │              │
          │ Karir  │   Dukungan      │ Ttg    │              │
          └────────┴─────────────────┴────────┴──────────────┘

          Implementasi: CSS Grid dengan grid-template-areas
        */}

        {/* Mobile: single column stack */}
        <div className="flex flex-col gap-4 lg:hidden">
          <BentoCardA />
          <BentoCardB />
          <BentoCardD />
          <BentoCardE />
          <BentoCardF />
          <BentoCardC />
        </div>

        {/* Desktop: true CSS grid dengan template areas */}
        <div
          className="hidden lg:grid gap-4"
          style={{
            gridTemplateColumns: "1fr 1fr 340px",
            gridTemplateRows: "300px 240px",
            gridTemplateAreas: `
              "cardA cardB cardC"
              "cardD cardE cardC"
            `,
          }}
        >
          {/* CARD A — Layanan Profesional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            whileHover={{ scale: 1.015 }}
            style={{ gridArea: "cardA" }}
            className="bg-gradient-to-br from-brand-dark via-[#111827] to-brand-dark text-white rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-lg"
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(to right, #01c986 1px, transparent 1px), linear-gradient(to bottom, #01c986 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-accent/20 rounded-xl flex items-center justify-center">
                  <Server className="w-5 h-5 text-brand-accent" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white/60" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-white/60" />
                </div>
              </div>
              <h3 className="text-white text-2xl font-bold leading-tight mb-2">
                Layanan Profesional
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Managed Services, IT Support, Cyber Security, dan Cloud Computing — semua dalam satu mitra terpercaya.
              </p>
            </div>

            <Link
              href="/layanan"
              className="relative z-10 inline-flex items-center gap-2 text-brand-accent text-sm font-semibold hover:gap-3 transition-all group/link"
            >
              Lihat semua layanan
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* CARD B — Produk & Hardware */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.015 }}
            style={{ gridArea: "cardB" }}
            className="bg-white border border-brand-border rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-lg transition-shadow"
          >
            {/* Decorative dot grid */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-5 group-hover:opacity-10 transition-opacity"
              style={{
                backgroundImage: `radial-gradient(#111827 1.5px, transparent 1.5px)`,
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <Network className="w-5 h-5 text-orange-500" />
                </div>
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-blue-500" />
                </div>
                <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-accent" />
                </div>
              </div>
              <h3 className="text-brand-text text-2xl font-bold leading-tight mb-2">
                Produk & Hardware
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
                Router, Switch, WiFi 6, Firewall, dan Server dari brand global — Cisco, Fortinet, HPE, Juniper, dan lebih banyak lagi.
              </p>
            </div>

            <Link
              href="/produk"
              className="relative z-10 inline-flex items-center gap-2 text-brand-dark text-sm font-semibold hover:gap-3 transition-all group/link"
            >
              Lihat katalog produk
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* CARD C — Konsultasi Gratis (tall, row-span-2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.015 }}
            style={{ gridArea: "cardC" }}
            className="bg-brand-accent rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-lg shadow-brand-accent/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

            {/* Decorative circles */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-black/10 rounded-full" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black/10 rounded-full" />

            <div className="relative z-10">
              <div className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-black text-2xl font-bold leading-tight mb-3">
                Mulai Konsultasi
                <br />
                Gratis
              </h3>
              <p className="text-black/60 text-sm leading-relaxed mb-4">
                Chat langsung dengan tim expert kami. Kami siap membantu menemukan solusi IT yang tepat untuk bisnis Anda.
              </p>
              <div className="inline-flex items-center gap-2 bg-black/10 rounded-full px-3 py-1.5">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
                <span className="text-black/70 text-xs font-medium">Respons &lt; 5 menit</span>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              className="relative z-10 bg-black text-white font-bold px-6 py-3 rounded-sm text-sm flex items-center justify-center gap-2 hover:bg-black/80 transition-colors group/btn"
            >
              Chat Sekarang
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* CARD D — Karir */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -4 }}
            style={{ gridArea: "cardD" }}
            className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-2xl p-6 flex flex-col justify-between group hover:shadow-lg transition-shadow"
          >
            <div>
              <div className="w-11 h-11 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <Users className="w-5 h-5 text-purple-500" />
              </div>
              <h4 className="font-bold text-brand-text text-base mb-1.5">Karir & Peluang</h4>
              <p className="text-brand-muted text-xs leading-relaxed">
                Bergabung dengan tim profesional kami dan kembangkan karir IT Anda.
              </p>
            </div>
            <Link
              href="/karir"
              className="inline-flex items-center gap-1 text-purple-500 text-xs font-semibold mt-4 hover:gap-2 transition-all"
            >
              Lihat posisi terbuka <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* CARD E — Dukungan & Tentang Kami (wide card, row 2 col 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            whileHover={{ scale: 1.015 }}
            style={{ gridArea: "cardE" }}
            className="bg-white border border-brand-border rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow"
          >
            {/* Decorative accent line top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-blue-400 to-purple-400 rounded-t-2xl" />

            <div className="relative z-10 flex items-start gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Headphones className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-brand-text text-lg mb-1.5">Dukungan 24/7</h4>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Support teknis tersedia kapan saja — via WhatsApp, email, maupun on-site di seluruh Indonesia.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-brand-border mt-4">
              <Link
                href="/dukungan"
                className="inline-flex items-center gap-1.5 text-blue-500 text-sm font-semibold hover:gap-2.5 transition-all"
              >
                Pusat dukungan <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-1.5 text-brand-muted text-sm hover:text-brand-accent transition-colors"
              >
                <Building2 className="w-4 h-4" />
                Tentang Kami
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-14 text-center"
        >
          <p className="text-brand-muted text-sm mb-6">
            Masih ada pertanyaan? Tim kami siap membantu Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/layanan"
              className="inline-block bg-brand-dark text-white font-semibold px-8 py-4 rounded-sm hover:bg-brand-dark/90 transition-all text-sm shadow-lg"
            >
              Lihat Semua Layanan
            </Link>
            <a
              href={WHATSAPP_URL}
              className="inline-block border-2 border-brand-accent text-brand-accent font-semibold px-8 py-4 rounded-sm hover:bg-brand-accent hover:text-black transition-all text-sm"
            >
              Hubungi Sales Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Shared mobile-only card components ──────────────────────────────────── */

function BentoCardA() {
  return (
    <div className="bg-gradient-to-br from-brand-dark via-[#111827] to-brand-dark text-white rounded-2xl p-7 flex flex-col gap-5 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl" />
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 bg-brand-accent/20 rounded-xl flex items-center justify-center">
          <Server className="w-5 h-5 text-brand-accent" />
        </div>
        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
          <Shield className="w-5 h-5 text-white/60" />
        </div>
        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
          <Cloud className="w-5 h-5 text-white/60" />
        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-white text-xl font-bold mb-2">Layanan Profesional</h3>
        <p className="text-white/50 text-sm leading-relaxed">
          Managed Services, IT Support, Cyber Security, dan Cloud Computing dalam satu mitra.
        </p>
      </div>
      <Link href="/layanan" className="relative z-10 inline-flex items-center gap-2 text-brand-accent text-sm font-semibold">
        Lihat semua layanan <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function BentoCardB() {
  return (
    <div className="bg-white border border-brand-border rounded-2xl p-7 flex flex-col gap-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
          <Network className="w-5 h-5 text-orange-500" />
        </div>
        <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
          <Cpu className="w-5 h-5 text-blue-500" />
        </div>
        <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center">
          <Shield className="w-5 h-5 text-brand-accent" />
        </div>
      </div>
      <div>
        <h3 className="text-brand-text text-xl font-bold mb-2">Produk & Hardware</h3>
        <p className="text-brand-muted text-sm leading-relaxed">
          Router, Switch, WiFi 6, Firewall, dan Server dari brand global terpercaya.
        </p>
      </div>
      <Link href="/produk" className="inline-flex items-center gap-2 text-brand-dark text-sm font-semibold">
        Lihat katalog produk <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function BentoCardC() {
  return (
    <div className="bg-brand-accent rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden shadow-lg shadow-brand-accent/20">
      <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-black/10 rounded-full" />
      <div className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center relative z-10">
        <MessageCircle className="w-7 h-7 text-black" />
      </div>
      <div className="relative z-10">
        <h3 className="text-black text-xl font-bold mb-2">Mulai Konsultasi Gratis</h3>
        <p className="text-black/60 text-sm leading-relaxed">
          Chat langsung dengan tim expert kami untuk solusi IT yang tepat.
        </p>
        <div className="inline-flex items-center gap-2 bg-black/10 rounded-full px-3 py-1.5 mt-3">
          <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
          <span className="text-black/70 text-xs font-medium">Respons &lt; 5 menit</span>
        </div>
      </div>
      <a href={WHATSAPP_URL} className="relative z-10 bg-black text-white font-bold px-6 py-3 rounded-sm text-sm flex items-center justify-center gap-2">
        Chat Sekarang <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function BentoCardD() {
  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-2xl p-6 flex flex-col gap-4">
      <div className="w-11 h-11 bg-purple-500/20 rounded-xl flex items-center justify-center">
        <Users className="w-5 h-5 text-purple-500" />
      </div>
      <div>
        <h4 className="font-bold text-brand-text text-base mb-1">Karir & Peluang</h4>
        <p className="text-brand-muted text-xs leading-relaxed">Bergabung dengan tim profesional kami.</p>
      </div>
      <Link href="/karir" className="inline-flex items-center gap-1 text-purple-500 text-xs font-semibold">
        Lihat posisi terbuka <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

function BentoCardE() {
  return (
    <div className="bg-gradient-to-br from-[#111827] to-brand-dark text-white rounded-2xl p-6 flex flex-col gap-4">
      <div className="w-11 h-11 bg-blue-500/20 rounded-xl flex items-center justify-center">
        <Headphones className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <h4 className="font-bold text-white text-base mb-1">Dukungan 24/7</h4>
        <p className="text-white/50 text-xs leading-relaxed">Support teknis tersedia kapan saja di seluruh Indonesia.</p>
      </div>
      <Link href="/dukungan" className="inline-flex items-center gap-1 text-blue-400 text-xs font-semibold">
        Pusat dukungan <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

function BentoCardF() {
  return (
    <div className="bg-gradient-to-br from-[#111827] to-brand-dark text-white rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(#01c986 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 flex items-start gap-3">
        <div className="w-11 h-11 bg-brand-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <Building2 className="w-5 h-5 text-brand-accent" />
        </div>
        <div>
          <h4 className="font-bold text-white text-base mb-1">Tentang Solutech Asia</h4>
          <p className="text-white/50 text-xs leading-relaxed">Mitra IT terpercaya, anggota resmi HIPMI dan KADIN Indonesia.</p>
        </div>
      </div>
      <Link href="/tentang-kami" className="relative z-10 inline-flex items-center gap-1 text-brand-accent text-xs font-semibold">
        Kenali kami lebih dekat <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
