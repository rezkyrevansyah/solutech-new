"use client";

import { CheckCircle, X, Minus, Award, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const comparisonData: Array<{
  criteria: string;
  solutech: boolean | "partial";
  distributor: boolean | "partial";
  vendor: boolean | "partial";
}> = [
  {
    criteria: "Lorem ipsum dolor sit",
    solutech: true,
    distributor: false,
    vendor: false,
  },
  {
    criteria: "Amet consectetur adipiscing",
    solutech: true,
    distributor: "partial" as const,
    vendor: false,
  },
  {
    criteria: "Elit sed do eiusmod",
    solutech: true,
    distributor: true,
    vendor: "partial" as const,
  },
  {
    criteria: "Tempor incididunt ut labore",
    solutech: true,
    distributor: "partial" as const,
    vendor: false,
  },
  {
    criteria: "Dolore magna aliqua enim",
    solutech: true,
    distributor: false,
    vendor: false,
  },
  {
    criteria: "Ad minim veniam quis",
    solutech: true,
    distributor: false,
    vendor: false,
  },
  {
    criteria: "Nostrud exercitation ullamco",
    solutech: true,
    distributor: "partial" as const,
    vendor: false,
  },
  {
    criteria: "Laboris nisi ut aliquip",
    solutech: true,
    distributor: false,
    vendor: false,
  },
];

const tags = ["Lorem Ipsum", "Dolor Sit", "Amet", "Consectetur", "Adipiscing", "Elit"];

function StatusIcon({ status }: { status: boolean | "partial" }) {
  if (status === true) {
    return <CheckCircle className="text-brand-accent w-5 h-5" />;
  } else if (status === "partial") {
    return <Minus className="text-yellow-400 w-5 h-5" />;
  } else {
    return <X className="text-red-300 w-5 h-5" />;
  }
}

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full">
            Lorem Ipsum
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-text mt-3 leading-tight">
            Lorem ipsum dolor sit amet consectetur adipiscing elit?
          </h2>
          <p className="text-brand-muted text-sm mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
          </p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 - Success Rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-brand-accent/10 to-brand-accent/5 border-2 border-brand-accent/30 rounded-xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <Award className="w-8 h-8 text-brand-accent mb-3" />
              <div className="text-5xl font-bold text-brand-accent mb-2">98%</div>
              <div className="text-brand-text font-semibold">Lorem Ipsum Dolor</div>
              <div className="text-brand-muted text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipiscing
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Speed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-2 border-blue-500/30 rounded-xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <Zap className="w-8 h-8 text-blue-500 mb-3" />
              <div className="text-5xl font-bold text-blue-500 mb-2">3-4</div>
              <div className="text-brand-text font-semibold">Amet Consectetur</div>
              <div className="text-brand-muted text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur elit
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-2 border-purple-500/30 rounded-xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16" />
            <div className="relative">
              <Target className="w-8 h-8 text-purple-500 mb-3" />
              <div className="text-5xl font-bold text-purple-500 mb-2">100%</div>
              <div className="text-brand-text font-semibold">Dolor Adipiscing</div>
              <div className="text-brand-muted text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Comparison Section */}
        <div className="bg-brand-gray rounded-2xl p-8 mb-8">
          <h3 className="text-center text-xl font-bold text-brand-text mb-6">
            Lorem Ipsum Dolor Sit Amet
          </h3>

          {/* Comparison Table */}
          <div className="overflow-x-auto" ref={ref}>
            <table className="w-full border-collapse min-w-[600px] bg-white rounded-lg overflow-hidden shadow-sm">
              {/* Header */}
              <thead>
                <tr className="bg-brand-dark">
                  <th className="text-white/50 text-sm text-left px-6 py-4 rounded-tl-lg">
                    Lorem
                  </th>
                  <th className="text-white font-bold text-sm px-6 py-4 border-b-4 border-brand-accent">
                    Lorem Asia
                  </th>
                  <th className="text-white/50 text-sm px-6 py-4">Vendor 1</th>
                  <th className="text-white/50 text-sm px-6 py-4 rounded-tr-lg">Vendor 2</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 text-sm border-b border-brand-border text-brand-text font-medium">
                      {row.criteria}
                    </td>
                    <td className="px-6 py-4 text-sm border-b border-brand-border bg-brand-accent/5">
                      <div className="flex justify-center">
                        <StatusIcon status={row.solutech} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm border-b border-brand-border">
                      <div className="flex justify-center">
                        <StatusIcon status={row.distributor} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm border-b border-brand-border">
                      <div className="flex justify-center">
                        <StatusIcon status={row.vendor} />
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Feature Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Left - Head Hits Back Checklist */}
          <div className="bg-white border border-brand-border rounded-xl p-6">
            <h4 className="font-bold text-brand-text text-lg mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-brand-accent" />
              </div>
              Lorem Ipsum Dolor
            </h4>
            <div className="space-y-3">
              {[
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit sed",
                "Do eiusmod tempor incididunt",
                "Ut labore et dolore magna",
                "Aliqua ut enim ad minim",
                "Veniam quis nostrud exercitation",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 text-brand-text text-sm"
                >
                  <div className="w-5 h-5 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="bg-gradient-to-br from-brand-dark to-brand-dark-2 text-white rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-xl mb-2">Lorem Ipsum Dolor?</h4>
              <p className="text-white/60 text-sm mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Link
              href="/layanan"
              className="bg-brand-accent text-black font-semibold px-6 py-3 rounded-sm hover:bg-brand-accent/90 transition-colors text-center"
            >
              Lorem Ipsum
            </Link>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <button
              key={tag}
              className="border border-brand-border text-brand-muted text-xs px-4 py-2 rounded-full cursor-pointer hover:border-brand-accent hover:text-brand-accent transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
