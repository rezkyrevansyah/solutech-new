"use client";

import Link from "next/link";
import { Package, ShieldCheck, CheckCircle, Truck, Globe, ArrowRight, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full">
            Tentang Kami
          </div>
          <h2 className="text-4xl font-bold text-brand-text mt-3 leading-tight">
            Solutech Asia adalah mitra kerja yang cepat dan dapat diandalkan
          </h2>
          <p className="text-brand-muted text-base mt-4 leading-relaxed">
            Memiliki mitra dengan pemahaman yang luas mengenai teknologi yang dibutuhkan di
            perusahaan Anda membuat pertumbuhan yang signifikan antara berkembangnya bisnis dan
            efektivitas nyata.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mt-4">
          {/* LEFT - Mockup Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Visual Card */}
            <div className="bg-gradient-to-br from-brand-dark to-brand-dark-2 rounded-xl p-6 shadow-xl">
              {/* Top Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-brand-accent rounded-full" />
                    <span className="text-white/50 text-xs">Active Users</span>
                  </div>
                  <div className="text-3xl font-bold text-white">2.4K</div>
                  <div className="text-brand-accent text-xs mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +12% this month
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-white/50 text-xs">Projects</span>
                  </div>
                  <div className="text-3xl font-bold text-white">147</div>
                  <div className="text-blue-400 text-xs mt-1">Active now</div>
                </div>
              </div>

              {/* Progress Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm font-medium">Implementation Progress</span>
                  <span className="text-brand-accent text-sm font-bold">87%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-brand-accent to-emerald-400 rounded-full"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2 text-white/40 text-xs">
                  <Users className="w-3 h-3" />
                  <span>15 team members working</span>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="mt-4 inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-xs px-3 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                Real-time Monitoring
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className="flex gap-3 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-1 bg-white border border-brand-border rounded-lg p-4 shadow-sm"
              >
                <div className="text-2xl font-bold text-brand-accent">99.8%</div>
                <div className="text-brand-muted text-xs mt-1">System Uptime</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex-1 bg-white border border-brand-border rounded-lg p-4 shadow-sm"
              >
                <div className="text-2xl font-bold text-brand-accent">24/7</div>
                <div className="text-brand-muted text-xs mt-1">Support Available</div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT - Content Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Card A - Hardware Provider */}
            <div className="border border-brand-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                  <Package className="text-brand-accent w-5 h-5" />
                </div>
                <h3 className="font-bold text-brand-text text-lg">Hardware Provider</h3>
              </div>
              <p className="mt-3 text-brand-muted text-sm leading-relaxed">
                Kami menyediakan perangkat terbaik dari brand global dengan kualitas terjamin dan
                tempo pengiriman <span className="text-brand-accent font-semibold">3-4 minggu</span> — jauh lebih cepat dari kompetitor.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-brand-muted">
                  <CheckCircle className="w-4 h-4 text-brand-accent" />
                  Original 100%
                </div>
                <div className="flex items-center gap-1.5 text-brand-muted">
                  <CheckCircle className="w-4 h-4 text-brand-accent" />
                  Garansi 1 Tahun
                </div>
              </div>
              <Link
                href="/layanan"
                className="mt-4 text-brand-accent text-sm flex items-center gap-1 hover:gap-2 transition-all font-medium"
              >
                Explore layanan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card B - Managed Services */}
            <div className="border border-brand-border rounded-lg p-6 mt-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="text-blue-500 w-5 h-5" />
                </div>
                <h3 className="font-bold text-brand-text text-lg">Managed Services</h3>
              </div>
              <p className="mt-3 text-brand-muted text-sm leading-relaxed">
                Kami kelola infrastruktur IT Anda secara menyeluruh dengan monitoring 24/7,
                sehingga Anda bisa fokus pada pertumbuhan bisnis.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">24/7 Monitoring</span>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">Proactive Support</span>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">Scalable</span>
              </div>
            </div>

            {/* Trust Badges Row */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="text-brand-accent w-6 h-6" />
                </div>
                <div className="text-brand-text text-xs font-medium">Fast Delivery</div>
                <div className="text-brand-muted text-xs">3-4 Minggu</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <ShieldCheck className="text-brand-accent w-6 h-6" />
                </div>
                <div className="text-brand-text text-xs font-medium">Warranty</div>
                <div className="text-brand-muted text-xs">1 Tahun Gratis</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Globe className="text-brand-accent w-6 h-6" />
                </div>
                <div className="text-brand-text text-xs font-medium">Coverage</div>
                <div className="text-brand-muted text-xs">Seluruh Indonesia</div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={WHATSAPP_URL}
              className="mt-6 w-full bg-brand-dark text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-brand-dark/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Konsultasi Gratis Sekarang
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
