"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star, Building2, CheckCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

// REAL Solutech Asia Customers
const clients = [
  { name: "Moratelindo", logo: "/images/clients/logo_moratelindo.png" },
  { name: "Multipolar Technology", logo: "/images/clients/logo_multipolar.png" },
  { name: "Angkasa Pura Supports", logo: "/images/clients/logo_angkasapura.png" },
  { name: "MyRepublic", logo: "/images/clients/logo_myrepublic.png" },
  { name: "Kao", logo: "/images/clients/logo_kao.png" },
  { name: "Matrix", logo: "/images/clients/logo_matrix.png" },
  { name: "Lotte Data Communication", logo: "/images/clients/logo_lotte.png" },
  { name: "Kereta Api Indonesia", logo: "/images/clients/logo_kai.png" },
  { name: "PT Maxindo Mitra Solusi", logo: "/images/clients/logo_maxindo.png" },
  { name: "Euronet Worldwide", logo: "/images/clients/logo_euronet.png" },
  { name: "Accor Hotels", logo: "/images/clients/logo_accorhotels.png" },
  { name: "Kemnaker", logo: "/images/clients/logo_kemnaker.png" },
  { name: "Mercure Hotels", logo: "/images/clients/logo_mercure.png" },
];

// Trusted by companies
const trustedCompanies = [
  { name: "Tesla", logo: "/images/clients/logo_tesla.png" },
  { name: "Disney", logo: "/images/clients/logo_disney.png" },
  { name: "Ooredoo", logo: "/images/clients/logo_ooredoo.png" },
];

const testimonials = [
  {
    name: "Lorem Ipsum Team",
    position: "Lorem Manager",
    company: "Lorem Technology",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
    rating: 5,
  },
  {
    name: "Lorem Dolor Director",
    position: "Head of Lorem",
    company: "Lorem Ipsum Corp",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    rating: 5,
  },
  {
    name: "Lorem Consectetur Lead",
    position: "Lorem CTO",
    company: "Lorem Ipsum Ltd",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    rating: 5,
  },
];

export default function CustomersSection() {
  return (
    <section className="bg-brand-dark-2 py-24 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full mb-4"
          >
            <Building2 className="w-3 h-3" />
            Lorem Happy Ipsum
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-white"
          >
            Lorem Ipsum Dolor Sit Amet
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-sm mt-3 max-w-2xl mx-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-brand-accent/30 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-8 h-8 text-brand-accent/30 group-hover:text-brand-accent/50 transition-colors" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-accent font-bold text-sm">
                    {testimonial.company.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-white/40 text-xs">
                    {testimonial.position} - {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Customer Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-brand-dark/60 text-sm mb-2">
              <CheckCircle className="w-4 h-4 text-brand-accent" />
              Real Solutech Asia Customers
            </div>
          </div>

          {/* First Row - 5 logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 mb-10">
            {clients.slice(0, 5).map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={80}
                  className="h-14 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-brand-border mb-10 max-w-5xl mx-auto" />

          {/* Second Row - 5 logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 mb-10">
            {clients.slice(5, 10).map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index + 5) * 0.05 }}
                className="flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={80}
                  className="h-14 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-brand-border mb-10 max-w-5xl mx-auto" />

          {/* Third Row - 3 logos centered */}
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
            {clients.slice(10).map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index + 10) * 0.05 }}
                className="flex items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={180}
                  height={80}
                  className="h-14 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-accent/10 via-brand-accent/5 to-brand-accent/10 border border-brand-accent/20 rounded-xl p-8"
        >
          <div className="text-center mb-6">
            <h3 className="text-white text-lg font-semibold mb-2">Lorem ipsum dolor sit</h3>
            <p className="text-white/50 text-xs">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl px-8 py-4 flex items-center justify-center"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={50}
                  className="h-8 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { value: "13+", label: "Lorem Ipsum" },
            { value: "500+", label: "Dolor Sit" },
            { value: "98%", label: "Amet Lorem" },
            { value: "24/7", label: "Consectetur" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-brand-accent mb-2">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 p-8 bg-white/5 border border-white/10 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
        >
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">Lorem ipsum dolor sit amet?</h3>
            <p className="text-white/50 text-sm">Lorem ipsum consectetur adipiscing elit sed do eiusmod.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={WHATSAPP_URL}
              className="bg-brand-accent text-black font-semibold px-6 py-3 rounded-sm text-sm hover:bg-brand-accent/90 transition-colors whitespace-nowrap"
            >
              Lorem Ipsum →
            </a>
            <Link
              href="/tentang-kami"
              className="border border-white/20 text-white/70 text-sm px-6 py-3 rounded-sm hover:border-brand-accent hover:text-brand-accent transition-colors whitespace-nowrap"
            >
              Lorem Dolor
            </Link>
          </div>
        </motion.div>

        {/* Bottom Accent Line */}
        <div className="mt-12 w-24 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto rounded-full" />
      </div>
    </section>
  );
}
