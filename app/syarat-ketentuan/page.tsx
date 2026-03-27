import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SyaratKetentuanPage() {
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
            <span className="text-white/60">Lorem Ipsum</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            LOREM IPSUM
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Lorem Ipsum & Dolor
          </h1>

          <p className="text-white/50 text-base mt-4 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-text text-center mb-3">
            Lorem Ipsum Dolor Sit
          </h2>
          <p className="text-brand-muted text-center mb-12 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
          </p>

          {/* 3 Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {/* Card 1 - Warranty */}
            <div className="bg-[#FFF8F5] border border-orange-100 rounded-lg p-6">
              <div className="w-2 h-2 rounded-full bg-brand-accent mb-5" />
              <h3 className="font-semibold text-brand-text mb-2">
                Lorem Ipsum Dolor
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
              </p>
              <button className="text-brand-accent text-sm mt-4 font-medium hover:underline">
                Lorem Ipsum →
              </button>
            </div>

            {/* Card 2 - Authenticity */}
            <div className="bg-[#FFF8F5] border border-orange-100 rounded-lg p-6">
              <div className="w-2 h-2 rounded-full bg-brand-accent mb-5" />
              <h3 className="font-semibold text-brand-text mb-2">
                Dolor Sit Amet
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
              </p>
              <button className="text-brand-accent text-sm mt-4 font-medium hover:underline">
                Lorem Ipsum →
              </button>
            </div>

            {/* Card 3 - Purchase Policy */}
            <div className="bg-[#FFF8F5] border border-orange-100 rounded-lg p-6">
              <div className="w-2 h-2 rounded-full bg-brand-accent mb-5" />
              <h3 className="font-semibold text-brand-text mb-2">
                Consectetur Adipiscing
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
              </p>
              <button className="text-brand-accent text-sm mt-4 font-medium hover:underline">
                Lorem Ipsum →
              </button>
            </div>
          </div>

          {/* Detailed Terms */}
          <div className="max-w-4xl mx-auto space-y-10 text-left">
            {/* Section 1 - Service Usage */}
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-4">
                Lorem Ipsum Dolor Sit Amet
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Section 2 - Warranty Policy */}
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-4">
                Consectetur Adipiscing Elit
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Section 3 - Delivery */}
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-4">
                Lorem Dolor & Ipsum
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Section 4 - Privacy Policy */}
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-4">
                Amet Sit Consectetur
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
