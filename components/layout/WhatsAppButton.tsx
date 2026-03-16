"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";

export default function WhatsAppButton() {
  const scrollY = useScrollPosition();
  const [showTooltip, setShowTooltip] = useState(false);

  const isVisible = scrollY > 300;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-14 top-1/2 -translate-y-1/2 bg-white text-brand-text text-xs px-3 py-1 rounded shadow-md whitespace-nowrap"
                >
                  Chat via WhatsApp
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="flex items-center justify-center bg-[#25D366] rounded-full p-3.5 shadow-lg hover:scale-110 transition-transform"
              aria-label="Chat via WhatsApp"
            >
              <MessageCircle className="text-white w-6 h-6" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
