"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Newspaper, ArrowRight, Sparkles } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/constants";

export default function NewsSection() {
  return (
    <section className="bg-brand-dark py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Lorem News
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-4xl font-bold text-white"
              >
                Lorem Ipsum Dolor
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/50 text-sm mt-3 max-w-xl"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-sm px-5 py-2.5 rounded-sm hover:border-brand-accent hover:text-brand-accent transition-colors whitespace-nowrap"
              >
                Lorem Ipsum
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="overflow-x-auto pb-6 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40"
        >
          <div className="flex gap-4" style={{ minWidth: "max-content" }}>
            {NEWS_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="w-[280px] flex-shrink-0 bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-brand-accent/30 hover:bg-white/8 transition-colors group flex flex-col"
              >
                {/* Image placeholder */}
                <div
                  className="relative aspect-[4/5] w-full flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: item.bgColor }}
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  {/* Grid pattern */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: `linear-gradient(to right, #01c986 1px, transparent 1px), linear-gradient(to bottom, #01c986 1px, transparent 1px)`,
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <Newspaper className="w-12 h-12 text-white/20 relative z-10" />

                  {/* Category badge — bottom left */}
                  <div className="absolute bottom-3 left-3 z-10">
                    <span className="bg-black/40 backdrop-blur-sm text-white/80 text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/10">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-5">
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-brand-accent text-xs font-semibold hover:gap-2.5 transition-all"
                  >
                    {item.linkText}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom accent line */}
        <div className="mt-12 w-24 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto rounded-full" />
      </div>
    </section>
  );
}
