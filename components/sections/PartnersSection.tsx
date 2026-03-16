"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { PARTNER_BRANDS, WHATSAPP_URL } from "@/lib/constants";

export default function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-text text-3xl lg:text-4xl font-bold mb-4"
          >
            IT Solutions from the World's Top Manufacturers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-muted text-base max-w-2xl mx-auto"
          >
            Authorized distributor resmi perangkat jaringan & server dari brand global terpercaya.
          </motion.p>
        </div>

        {/* Partner Logos - Horizontal Rows */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 mb-12 border border-brand-border"
        >
          {/* First Row - 3 logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-12 mb-12">
            {PARTNER_BRANDS.slice(0, 3).map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                ) : (
                  <span className="font-bold text-2xl text-brand-dark/80">
                    {brand.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-brand-border/30 mb-12" />

          {/* Second Row - 3 logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-12">
            {PARTNER_BRANDS.slice(3, 6).map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
                className="flex items-center justify-center"
              >
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                ) : (
                  <span className="font-bold text-2xl text-brand-dark/80">
                    {brand.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Grid - Clean & Simple */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "100% Original",
              desc: "Semua produk dijamin keaslian dengan sertifikat resmi",
            },
            {
              title: "Garansi 1 Tahun",
              desc: "Full warranty support untuk semua perangkat",
            },
            {
              title: "Harga Terbaik",
              desc: "Competitive pricing sebagai authorized distributor",
            },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-brand-accent" />
              </div>
              <h4 className="text-brand-text font-semibold text-lg mb-2">{benefit.title}</h4>
              <p className="text-brand-muted text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-brand-gray/50 border border-brand-border rounded-xl p-8"
        >
          <h3 className="text-brand-text text-xl font-bold mb-2">
            Butuh Konsultasi Produk?
          </h3>
          <p className="text-brand-muted text-sm mb-6 max-w-2xl mx-auto">
            Tim sales kami siap membantu Anda memilih perangkat yang tepat sesuai kebutuhan infrastruktur IT Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              className="bg-brand-accent text-black font-semibold px-8 py-3 rounded-sm hover:bg-brand-accent/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Hubungi Sales Team
            </a>
            <a
              href="/produk"
              className="border-2 border-brand-accent text-brand-accent font-semibold px-8 py-3 rounded-sm hover:bg-brand-accent hover:text-black transition-colors inline-flex items-center justify-center"
            >
              Lihat Katalog Produk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
