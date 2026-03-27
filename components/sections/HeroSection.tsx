"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, Shield, Activity, Database, Cpu, Network, Award } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #01c986 1px, transparent 1px),
              linear-gradient(to bottom, #01c986 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 min-h-screen items-center py-12 lg:py-0">
            {/* LEFT COLUMN - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-medium px-4 py-2 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  Lorem ipsum dolor sit amet
                </div>
              </motion.div>

              {/* Animated Headline */}
              <motion.div
                className="mb-6"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
              >
                <motion.h1
                  variants={textVariants}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tighter mb-4"
                >
                  Lorem Ipsum
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-400">
                    Dolor Sit
                  </span>
                </motion.h1>
                <motion.p
                  variants={textVariants}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl lg:text-4xl font-bold text-white/60 leading-[1.1]"
                >
                  Amet Consectetur
                  <br />
                  Adipiscing Elit.
                </motion.p>
              </motion.div>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-white/50 text-lg leading-relaxed max-w-lg mb-10"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <span className="text-brand-accent font-medium">Sed do eiusmod tempor</span>, incididunt
                ut labore et dolore magna aliqua ut enim ad minim veniam.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-4 items-center flex-wrap mb-12"
              >
                <motion.a
                  href={WHATSAPP_URL}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-brand-accent text-black font-bold px-8 py-4 rounded-sm text-sm inline-flex items-center gap-2 shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 transition-shadow"
                >
                  Lorem Ipsum
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <Link
                  href="/layanan"
                  className="border border-white/20 text-white font-medium px-8 py-4 rounded-sm text-sm hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
                >
                  Dolor Sit Amet
                </Link>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mb-8"
              >
                <div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">3-4</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">
                    Lorem Ipsum
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">1 Dolor</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">
                    Sit Amet
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-accent mb-1">100%</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">Consectetur</div>
                </div>
              </motion.div>

              {/* Membership Badge Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="pt-6 border-t border-white/10"
              >
                <div className="flex items-start gap-4">
                  {/* Award Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <Award className="w-5 h-5 text-brand-accent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-white/40 text-xs uppercase tracking-wider mb-3">
                      Lorem Ipsum
                    </div>

                    {/* Logos Container */}
                    <div className="flex items-center gap-3 flex-wrap">
                      {/* HIPMI Logo */}
                      <div className="group relative">
                        <div className="bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-16 h-16 flex items-center justify-center">
                          <Image
                            src="/images/logos/Logo_HIPMI.png"
                            alt="HIPMI - Himpunan Pengusaha Muda Indonesia"
                            width={48}
                            height={48}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                          <div className="bg-white text-brand-dark text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                            HIPMI
                          </div>
                        </div>
                      </div>

                      {/* KADIN Logo */}
                      <div className="group relative">
                        <div className="bg-white rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-16 h-16 flex items-center justify-center">
                          <Image
                            src="/images/logos/logo_kadin.png"
                            alt="KADIN - Kamar Dagang dan Industri Indonesia"
                            width={48}
                            height={48}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                          <div className="bg-white text-brand-dark text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap">
                            KADIN
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description Text */}
                    <p className="text-white/30 text-xs mt-3 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN - Enhanced Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              {/* Main Dashboard Container */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-accent/20 to-blue-500/20 rounded-2xl blur-2xl opacity-30" />

                {/* Dashboard Card */}
                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl">
                  {/* Top Bar with Breadcrumb */}
                  <div className="bg-black/40 backdrop-blur-md border-b border-white/10 px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="text-white/40 text-xs flex items-center gap-1.5 ml-4">
                        <span>Lorem Dashboard</span>
                        <span>/</span>
                        <span className="text-brand-accent">Ipsum</span>
                      </div>
                    </div>
                    <div className="text-white/30 text-xs">Dolor Sit</div>
                  </div>

                  {/* Dashboard Grid */}
                  <div className="p-5 space-y-4">
                    {/* Top Row - Main Metrics */}
                    <div className="grid grid-cols-3 gap-4">
                      {/* Network Uptime */}
                      <div className="col-span-2 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-brand-accent/30 transition-colors group">
                        <div className="flex items-start justify-between mb-3">
                          <div className="text-white/40 text-xs font-medium uppercase tracking-wider">
                            Lorem Uptime
                          </div>
                          <Activity className="w-4 h-4 text-brand-accent" />
                        </div>
                        <div className="text-4xl font-bold text-brand-accent mb-1">99.8%</div>
                        <div className="flex items-center gap-2">
                          <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full w-[99.8%] bg-gradient-to-r from-brand-accent to-emerald-400" />
                          </div>
                          <span className="text-white/30 text-[10px]">Lorem</span>
                        </div>
                      </div>

                      {/* Server Status */}
                      <div className="bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 backdrop-blur-sm rounded-lg p-4 border border-brand-accent/30 flex flex-col items-center justify-center">
                        <Server className="w-8 h-8 text-brand-accent mb-2" />
                        <div className="text-brand-accent text-sm font-bold">Lorem</div>
                        <div className="text-white/30 text-xs">Ipsum</div>
                      </div>
                    </div>

                    {/* Traffic Monitor */}
                    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-white/40 text-xs font-medium uppercase tracking-wider">
                          Lorem Traffic
                        </div>
                        <div className="text-brand-accent text-xs font-mono">Ipsum</div>
                      </div>
                      <div className="relative h-20">
                        <svg viewBox="0 0 300 60" className="w-full h-full" preserveAspectRatio="none">
                          {/* Grid lines */}
                          <line x1="0" y1="20" x2="300" y2="20" stroke="#ffffff" strokeOpacity="0.05" />
                          <line x1="0" y1="40" x2="300" y2="40" stroke="#ffffff" strokeOpacity="0.05" />

                          {/* Gradient Definition */}
                          <defs>
                            <linearGradient id="trafficGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#01c986" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#01c986" stopOpacity="0" />
                            </linearGradient>
                          </defs>

                          {/* Area fill */}
                          <path
                            d="M0,50 L20,45 L40,42 L60,38 L80,25 L100,30 L120,22 L140,18 L160,28 L180,20 L200,15 L220,25 L240,18 L260,22 L280,12 L300,15 L300,60 L0,60 Z"
                            fill="url(#trafficGradient)"
                          />

                          {/* Line */}
                          <path
                            d="M0,50 L20,45 L40,42 L60,38 L80,25 L100,30 L120,22 L140,18 L160,28 L180,20 L200,15 L220,25 L240,18 L260,22 L280,12 L300,15"
                            stroke="#01c986"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                          />

                          {/* Animated dot */}
                          <circle cx="280" cy="12" r="3" fill="#01c986">
                            <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                          </circle>
                        </svg>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-white/30 text-xs">Avg: 2.4 Gbps</span>
                        <span className="text-brand-accent text-xs font-medium">+12%</span>
                      </div>
                    </div>

                    {/* Bottom Row - Quick Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {/* Devices */}
                      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-lg p-4 border border-white/10">
                        <Database className="w-5 h-5 text-blue-400 mb-2" />
                        <div className="text-white text-2xl font-bold">247</div>
                        <div className="text-white/40 text-xs">Lorem</div>
                      </div>

                      {/* CPU Usage */}
                      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-lg p-4 border border-white/10">
                        <Cpu className="w-5 h-5 text-purple-400 mb-2" />
                        <div className="text-white text-2xl font-bold">24%</div>
                        <div className="text-white/40 text-xs">Ipsum</div>
                      </div>

                      {/* Security */}
                      <div className="bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 backdrop-blur-sm rounded-lg p-4 border border-brand-accent/30">
                        <Shield className="w-5 h-5 text-brand-accent mb-2" />
                        <div className="text-brand-accent text-sm font-bold">Dolor</div>
                        <div className="text-white/40 text-xs">Sit Amet</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-brand-accent to-emerald-500 text-black px-6 py-3 rounded-lg shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <Network className="w-5 h-5" />
                    <div>
                      <div className="text-xs font-medium opacity-80">Lorem Status</div>
                      <div className="text-sm font-bold">Ipsum Dolor Operational</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-white/30 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
