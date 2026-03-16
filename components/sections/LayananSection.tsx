"use client";

import { useState } from "react";
import { CheckCircle, Server, ArrowRight, HelpCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES, WHATSAPP_URL } from "@/lib/constants";

export default function LayananSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES[activeIndex];

  return (
    <section className="bg-brand-gray py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Question */}
        <div className="mb-12 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full">
            Layanan Profesional
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-text mt-4 leading-tight">
            Layanan IT Profesional untuk Kebutuhan Bisnis Anda
          </h2>
          <p className="text-brand-muted text-sm mt-3 max-w-2xl">
            Dari hardware provider hingga managed services — kami tangani semua kebutuhan IT
            perusahaan Anda dengan delivery tercepat dan harga terkompetitif.
          </p>
        </div>

        {/* Question Prompt Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border-l-4 border-brand-accent rounded-lg p-6 mb-8 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-brand-accent" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-brand-text text-lg mb-2">
                Membutuhkan konsultasi untuk menentukan solusi IT yang tepat?
              </h3>
              <p className="text-brand-muted text-sm mb-4">
                Tim ahli kami siap membantu Anda menganalisis kebutuhan dan merekomendasikan solusi terbaik untuk bisnis Anda.
              </p>
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-2 bg-brand-accent text-black text-sm font-semibold px-5 py-2 rounded-sm hover:bg-brand-accent/90 transition-colors"
              >
                Hubungi Konsultan Kami
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Mobile Tabs - Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto flex gap-2 pb-3 mb-6 -mx-6 px-6 scrollbar-hide">
          {SERVICES.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveIndex(index)}
              className={`border rounded-full px-4 py-2 text-sm whitespace-nowrap transition-all duration-200 ${
                activeIndex === index
                  ? "bg-brand-dark text-white border-brand-dark shadow-md"
                  : "border-brand-border text-brand-muted hover:border-brand-accent"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Desktop: Two Panel Layout */}
        <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8">
          {/* LEFT PANEL - Service Navigation */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg p-4 shadow-sm sticky top-24">
              <div className="text-xs uppercase tracking-wider text-brand-muted mb-4 px-2">
                Pilih Layanan
              </div>
              <nav className="space-y-1">
                {SERVICES.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 text-sm text-left group ${
                      activeIndex === index
                        ? "bg-brand-dark text-white font-semibold shadow-sm"
                        : "text-brand-muted hover:text-brand-text hover:bg-brand-gray"
                    }`}
                  >
                    <span
                      className={`text-xs w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activeIndex === index
                          ? "bg-brand-accent text-black font-bold"
                          : "bg-brand-gray text-brand-muted/50 group-hover:bg-brand-accent/20"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="flex-1">{service.name}</span>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full bg-brand-accent"
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* RIGHT PANEL - Service Detail */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {activeService.name}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-brand-text">
                      {activeService.name}
                    </h3>
                  </div>
                  <div className="hidden lg:flex w-16 h-16 bg-brand-gray rounded-xl items-center justify-center">
                    <Server className="text-brand-accent w-8 h-8" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-brand-muted text-base leading-relaxed max-w-3xl">
                  {activeService.description}
                </p>

                {/* Features */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px flex-1 bg-brand-border" />
                    <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">
                      Fitur Utama
                    </div>
                    <div className="h-px flex-1 bg-brand-border" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    {activeService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-3 bg-brand-gray/50 rounded-lg p-3 hover:bg-brand-gray transition-colors"
                      >
                        <CheckCircle className="text-brand-accent w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-brand-text flex-1">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="mt-8 pt-6 border-t border-brand-border">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-brand-text font-semibold text-sm mb-1">
                        Tertarik dengan layanan ini?
                      </div>
                      <div className="text-brand-muted text-xs">
                        Konsultasi gratis dengan tim ahli kami
                      </div>
                    </div>
                    <a
                      href={`${WHATSAPP_URL}&text=Halo, saya tertarik dengan layanan ${activeService.name}`}
                      className="group bg-brand-accent text-black text-sm font-semibold px-6 py-3 rounded-sm inline-flex items-center gap-2 hover:bg-brand-accent/90 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                      Konsultasi Sekarang
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
