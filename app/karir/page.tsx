import Link from "next/link";
import { ChevronRight, MapPin, CheckCircle, Package, TrendingUp, Users } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function KarirPage() {
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
            <span className="text-white/60">Karir</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            WE HELP INDUSTRIES WE HELP
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Karir
          </h1>

          <p className="text-white/50 text-base mt-4 max-w-2xl">
            Bergabunglah bersama tim Solutech Asia dan bangun karir IT Anda bersama kami.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-text mb-3">
            Kesempatan Bergabung dengan Solutech Asia
          </h2>
          <p className="text-brand-muted mb-12 max-w-2xl mx-auto">
            Kami selalu mencari talenta terbaik yang passionate di bidang IT.
          </p>

          {/* Job Cards */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* LEFT - IT Technical */}
            <div className="border border-brand-border rounded-lg overflow-hidden shadow-sm text-left">
              <div className="h-1 bg-brand-accent" />
              <div className="p-6">
                <h3 className="font-bold text-brand-text text-lg mb-1">
                  IT Technical
                </h3>
                <div className="flex items-center gap-1 text-brand-muted text-xs mb-4">
                  <MapPin className="w-3 h-3" />
                  Jatinegara, Jakarta Timur
                </div>

                <div className="border-t border-brand-border pt-4 space-y-0">
                  <div className="flex items-center gap-3 py-2.5 border-b border-brand-border">
                    <CheckCircle className="text-brand-accent w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-brand-text">Network Engineer</span>
                  </div>
                  <div className="flex items-center gap-3 py-2.5 border-b border-brand-border">
                    <CheckCircle className="text-brand-accent w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-brand-text">System Administrator</span>
                  </div>
                  <div className="flex items-center gap-3 py-2.5 border-b border-brand-border">
                    <CheckCircle className="text-brand-accent w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-brand-text">IT Support Specialist</span>
                  </div>
                  <div className="flex items-center gap-3 py-2.5">
                    <CheckCircle className="text-brand-accent w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-brand-text">Cloud Engineer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Business & Sales */}
            <div className="border border-brand-border rounded-lg overflow-hidden shadow-sm text-left">
              <div className="h-1 bg-blue-500" />
              <div className="p-6">
                <h3 className="font-bold text-brand-text text-lg mb-1">
                  Business & Sales
                </h3>
                <div className="flex items-center gap-1 text-brand-muted text-xs mb-4">
                  <MapPin className="w-3 h-3" />
                  Jatinegara, Jakarta Timur
                </div>

                <div className="border-t border-brand-border pt-4 space-y-0">
                  <div className="flex items-center gap-3 py-2.5 border-b border-brand-border">
                    <CheckCircle className="text-blue-500 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-brand-text">Account Manager</span>
                  </div>
                  <div className="flex items-center gap-3 py-2.5 border-b border-brand-border">
                    <CheckCircle className="text-blue-500 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-brand-text">Business Development</span>
                  </div>
                  <div className="flex items-center gap-3 py-2.5 border-b border-brand-border">
                    <CheckCircle className="text-blue-500 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-brand-text">IT Sales Consultant</span>
                  </div>
                  <div className="flex items-center gap-3 py-2.5">
                    <CheckCircle className="text-blue-500 w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-brand-text">Client Relations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Motivational Quote */}
          <div className="mt-10">
            <p className="italic text-brand-muted text-lg">
              "This is your sign, go for it."
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Package className="text-brand-accent w-5 h-5" />
              <span className="text-xs text-brand-muted">Gaji Kompetitif</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="text-brand-accent w-5 h-5" />
              <span className="text-xs text-brand-muted">Jenjang Karir Jelas</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-brand-accent w-5 h-5" />
              <span className="text-xs text-brand-muted">Tim yang Solid</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href={`${WHATSAPP_URL}%20-%20Halo%2C%20saya%20ingin%20melamar%20posisi%20di%20Solutech%20Asia`}
              className="inline-block bg-brand-accent text-black font-bold px-12 py-4 rounded-sm text-sm hover:bg-brand-accent/90 transition-colors"
            >
              LAMAR SEKARANG
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
