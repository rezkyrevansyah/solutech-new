import Link from "next/link";
import { ChevronRight, Router, Wifi, Shield, CheckCircle, Zap, DollarSign, Server, Cloud, RefreshCw, Headphones } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function ProdukPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-brand-dark py-20 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/30 text-xs mb-6">
            <Link href="/" className="hover:text-white/60 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">Produk</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            PRODUK
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Produk Kami
          </h1>

          <p className="text-white/50 text-base mt-4 max-w-2xl">
            Perangkat jaringan dan server dari brand global terpercaya dengan garansi resmi 1 tahun.
          </p>
        </div>
      </section>

      {/* SECTION 1 - Perangkat Jaringan */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            PRODUK
          </div>
          <h2 className="text-3xl font-bold text-brand-text mb-2">
            Perangkat Jaringan
          </h2>
          <p className="text-brand-muted text-sm mb-12 max-w-2xl">
            Perangkat dari merek terbaik dunia
          </p>

          {/* 3 Product Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Product 1 - Router & Switch */}
            <div className="border border-brand-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-brand-gray aspect-[4/3] flex items-center justify-center relative">
                <Router className="text-brand-muted/20 w-24 h-24" />
                <div className="absolute top-4 right-4">
                  <span className="bg-brand-accent text-black text-xs font-semibold px-3 py-1 rounded-full">
                    Best Seller
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-brand-text mb-2">
                  Router & Switch
                </h3>
                <p className="text-brand-muted text-sm mb-4 leading-relaxed">
                  Perangkat routing dan switching enterprise dari brand global terpercaya
                </p>
                <div className="flex items-center gap-1 text-brand-accent text-xs mb-4">
                  <CheckCircle className="w-3 h-3" />
                  Garansi 1 Tahun
                </div>
                <a
                  href={WHATSAPP_URL}
                  className="inline-block w-full text-center bg-brand-accent text-black font-semibold py-2.5 rounded-sm text-sm hover:bg-brand-accent/90 transition-colors"
                >
                  Explore More →
                </a>
              </div>
            </div>

            {/* Product 2 - Access Point */}
            <div className="border border-brand-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-purple-50 aspect-[4/3] flex items-center justify-center">
                <Wifi className="text-purple-200 w-24 h-24" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-brand-text mb-2">
                  Access Point WiFi 6
                </h3>
                <p className="text-brand-muted text-sm mb-4 leading-relaxed">
                  Access point enterprise dengan teknologi WiFi 6 terbaru
                </p>
                <div className="flex items-center gap-1 text-brand-accent text-xs mb-4">
                  <CheckCircle className="w-3 h-3" />
                  802.11ax Support
                </div>
                <a
                  href={WHATSAPP_URL}
                  className="inline-block w-full text-center border-2 border-brand-accent text-brand-accent font-semibold py-2.5 rounded-sm text-sm hover:bg-brand-accent hover:text-black transition-colors"
                >
                  Explore More →
                </a>
              </div>
            </div>

            {/* Product 3 - Firewall */}
            <div className="border border-brand-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-orange-50 aspect-[4/3] flex items-center justify-center">
                <Shield className="text-orange-200 w-24 h-24" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-brand-text mb-2">
                  Firewall & Security
                </h3>
                <p className="text-brand-muted text-sm mb-4 leading-relaxed">
                  Next-generation firewall untuk keamanan jaringan maksimal
                </p>
                <div className="flex items-center gap-1 text-brand-accent text-xs mb-4">
                  <CheckCircle className="w-3 h-3" />
                  IPS/IDS Included
                </div>
                <a
                  href={WHATSAPP_URL}
                  className="inline-block w-full text-center border-2 border-brand-accent text-brand-accent font-semibold py-2.5 rounded-sm text-sm hover:bg-brand-accent hover:text-black transition-colors"
                >
                  Explore More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Key Features (Blue Design from Wireframe) */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-brand-text text-3xl font-bold mb-3">
              Tidak perlu ragu, kami berikan kepastian & keandalan
            </h2>
            <p className="text-brand-muted text-sm">
              Setiap produk kami jamin keaslian dan kualitasnya.
            </p>
          </div>

          {/* Blue Featured Box - Key Features */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 rounded-3xl p-12 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h3 className="text-white text-2xl font-bold text-center mb-12">
                Key Features
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 - Speed */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Zap className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3">
                    Speed
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Pengiriman tercepat 3-4 minggu, jauh lebih cepat dari kompetitor
                  </p>
                </div>

                {/* Feature 2 - Warranty */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Shield className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3">
                    Warranty
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Garansi 1 tahun gratis untuk semua perangkat original
                  </p>
                </div>

                {/* Feature 3 - Price */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <DollarSign className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-3">
                    Save Cost
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Harga kompetitif terbaik dengan konsultasi gratis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - More Products Catalog */}
      <section className="bg-brand-gray py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-brand-text text-center mb-3">
            Katalog Produk Lainnya
          </h2>
          <p className="text-brand-muted text-sm text-center mb-10 max-w-2xl mx-auto">
            Jelajahi berbagai kategori perangkat IT untuk kebutuhan bisnis Anda
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Catalog 1 - Managed IT */}
            <div className="bg-white rounded-lg border border-brand-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-brand-accent" />
              <div className="p-6">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Server className="text-brand-accent w-6 h-6" />
                </div>
                <h3 className="font-semibold text-brand-text text-base mb-2">
                  Managed IT
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  Solusi pengelolaan infrastruktur IT menyeluruh
                </p>
                <Link
                  href="/layanan"
                  className="text-brand-accent text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Explore More →
                </Link>
              </div>
            </div>

            {/* Catalog 2 - Cloud & Server */}
            <div className="bg-white rounded-lg border border-brand-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-brand-accent" />
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="text-blue-500 w-6 h-6" />
                </div>
                <h3 className="font-semibold text-brand-text text-base mb-2">
                  Cloud & Server
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  Infrastruktur cloud dan server enterprise
                </p>
                <Link
                  href="/layanan"
                  className="text-brand-accent text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Explore More →
                </Link>
              </div>
            </div>

            {/* Catalog 3 - Rental Program */}
            <div className="bg-white rounded-lg border border-brand-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-brand-accent" />
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                  <RefreshCw className="text-purple-500 w-6 h-6" />
                </div>
                <h3 className="font-semibold text-brand-text text-base mb-2">
                  Rental Program
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  Sewa perangkat IT fleksibel untuk bisnis
                </p>
                <Link
                  href="/layanan"
                  className="text-brand-accent text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Explore More →
                </Link>
              </div>
            </div>

            {/* Catalog 4 - IT Support 24/7 */}
            <div className="bg-white rounded-lg border border-brand-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-1 bg-brand-accent" />
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="text-orange-500 w-6 h-6" />
                </div>
                <h3 className="font-semibold text-brand-text text-base mb-2">
                  IT Support 24/7
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  Dukungan teknis on-site dan remote siap membantu
                </p>
                <Link
                  href="/layanan"
                  className="text-brand-accent text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Explore More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
