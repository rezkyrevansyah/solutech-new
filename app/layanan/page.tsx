"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle, Server } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, WHATSAPP_URL } from "@/lib/constants";

export default function LayananPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-dark py-20 px-6 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/30 text-xs mb-6">
            <Link href="/" className="hover:text-white/60 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">Layanan Profesional</span>
          </div>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            IT Solutions
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Layanan Profesional Kami
          </h1>

          {/* Subtext */}
          <p className="text-white/50 text-base mt-4 max-w-2xl">
            Dari hardware provider hingga managed services — solusi IT lengkap untuk mendukung
            pertumbuhan bisnis Anda di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-[260px_1fr] gap-12">
            {/* LEFT SIDEBAR - Desktop Only */}
            <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
              <div className="text-xs uppercase tracking-widest text-brand-muted mb-6">
                IT Solutions
              </div>

              <div className="space-y-2">
                {SERVICES.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(index)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left transition-all duration-200 text-sm ${
                      activeService === index
                        ? "bg-brand-gray border-l-4 border-brand-accent text-brand-text font-semibold"
                        : "text-brand-muted hover:text-brand-text hover:bg-brand-gray"
                    }`}
                  >
                    <span className="text-xs text-brand-muted/40 w-5 font-mono flex-shrink-0">
                      {index + 1}
                    </span>
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Tabs - Below lg */}
            <div className="lg:hidden overflow-x-auto flex gap-2 pb-3 mb-6">
              {SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`flex-shrink-0 border rounded-full px-4 py-1.5 text-sm transition-colors ${
                    activeService === index
                      ? "bg-brand-dark text-white border-brand-dark"
                      : "border-brand-border text-brand-muted hover:border-brand-accent hover:text-brand-accent"
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={SERVICES[activeService].id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.18 }}
                >
                  {/* Service Badge */}
                  <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full">
                    {SERVICES[activeService].name}
                  </div>

                  {/* Service Title */}
                  <h1 className="text-3xl font-bold text-brand-text mt-4">
                    {SERVICES[activeService].name}
                  </h1>

                  {/* Service Description */}
                  <p className="text-brand-muted leading-relaxed mt-4 max-w-2xl">
                    {SERVICES[activeService].description}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-brand-border my-8" />

                  {/* Features Section */}
                  <div className="text-xs uppercase tracking-widest text-brand-muted mb-5">
                    Fitur Utama
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {SERVICES[activeService].features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-4 bg-brand-gray rounded-lg"
                      >
                        <CheckCircle className="text-brand-accent w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-brand-text font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Image Placeholder */}
                  <div className="mt-8 bg-brand-gray rounded-lg aspect-video flex flex-col items-center justify-center gap-4">
                    <Server className="text-brand-muted/20 w-20 h-20" />
                    <span className="text-brand-muted/30 text-sm">
                      {SERVICES[activeService].name}
                    </span>
                  </div>

                  {/* CTA Section */}
                  <div className="mt-8 p-6 bg-brand-dark rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <div className="text-white font-semibold">
                        Tertarik dengan layanan ini?
                      </div>
                      <div className="text-white/50 text-sm mt-1">
                        Tim kami siap membantu Anda.
                      </div>
                    </div>
                    <a
                      href={`${WHATSAPP_URL} - ${SERVICES[activeService].name}`}
                      className="bg-brand-accent text-black font-semibold px-6 py-3 rounded-sm text-sm hover:bg-brand-accent/90 transition-colors whitespace-nowrap"
                    >
                      Konsultasi Sekarang →
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
