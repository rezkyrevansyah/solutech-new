"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "white" | "dark";
}

export default function Card({ children, className = "", variant = "white" }: CardProps) {
  const variants = {
    white: "bg-white border-brand-border text-brand-text",
    dark: "bg-brand-card-dark border-white/10 text-white",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`p-8 rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
