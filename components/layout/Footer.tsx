import Link from "next/link";
import Image from "next/image";
import { CheckCircle, MapPin, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { FOOTER_LINKS, WHATSAPP_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer>
      {/* Top Eco Banner */}
      <div className="bg-[#0f172a] py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Side */}
          <div className="max-w-lg">
            <h2 className="text-white text-2xl font-bold leading-snug">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit
            </h2>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span className="text-white/60 text-sm">Lorem ipsum dolor sit amet consectetur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span className="text-white/60 text-sm">Dolor sit amet consectetur adipiscing</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <Link
            href={WHATSAPP_URL}
            className="border border-white/40 text-white px-8 py-3 rounded-sm hover:bg-white/10 transition-colors"
          >
            Lorem Ipsum
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#030712] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Column 1-2: Logo + About */}
            <div className="col-span-2">
              <Image
                src="/images/logos/logo-solutech.png"
                alt="Solutech Asia"
                width={140}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-white/40 text-sm mt-2 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex items-center gap-1 mt-4">
                <MapPin className="w-3 h-3 text-white/30" />
                <span className="text-white/30 text-xs">Lorem, City</span>
              </div>
            </div>

            {/* Column 3: Layanan */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Lorem 1</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/layanan#hardware-provider"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Lorem Ipsum
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan#managed-services"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Dolor Sit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan#it-support"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Amet Lorem
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan#cyber-security"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Consectetur
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan#cloud-computing"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Adipiscing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/layanan#rental-hardware"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    Elit Sed
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Perusahaan */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Lorem 2</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Kontak */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4">Lorem 3</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href={WHATSAPP_URL}
                    className="text-brand-accent text-sm hover:text-brand-accent/80 transition-colors"
                  >
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:lorem@lorem.com"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    lorem@lorem.com
                  </a>
                </li>
                <li>
                  <span className="text-white/50 text-sm">Lorem, City</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">
              © 2025 Lorem Ipsum. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/solutechasia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-brand-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/solutechasia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-brand-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/solutechasia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-brand-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/solutechasia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-brand-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
