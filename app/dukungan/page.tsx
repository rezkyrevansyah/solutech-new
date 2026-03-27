import Link from "next/link";
import { ChevronRight, Globe, MessageCircle, Headphones, BookOpen, FileText } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function DukunganPage() {
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
            Lorem Ipsum Dolor
          </h1>

          <p className="text-white/50 text-base mt-4 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Intro */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-brand-muted leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
            </p>
          </div>

          {/* Support Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Card 1 - Customer Portal */}
            <div className="bg-white border-t-4 border-t-brand-accent border border-brand-border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-brand-accent w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-text text-lg mb-2">
                Lorem Ipsum
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
              </p>
              <button className="text-brand-accent text-sm font-medium hover:underline">
                Lorem Ipsum →
              </button>
            </div>

            {/* Card 2 - WhatsApp Support */}
            <div className="bg-white border-t-4 border-t-brand-accent border border-brand-border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="text-brand-accent w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-text text-lg mb-2">
                Dolor Sit Amet
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
              </p>
              <a href={WHATSAPP_URL} className="text-brand-accent text-sm font-medium hover:underline">
                Lorem Ipsum →
              </a>
            </div>

            {/* Card 3 - Technical Support */}
            <div className="bg-white border-t-4 border-t-brand-accent border border-brand-border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="text-brand-accent w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-text text-lg mb-2">
                Consectetur Adipiscing
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
              </p>
              <a href={WHATSAPP_URL} className="text-brand-accent text-sm font-medium hover:underline">
                Lorem Ipsum →
              </a>
            </div>
          </div>

          {/* Bottom 2 Cards - Centered */}
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 4 - Documentation */}
            <div className="bg-white border-t-4 border-t-brand-accent border border-brand-border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-brand-accent w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-text text-lg mb-2">
                Lorem Ipsum
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
              </p>
              <button className="text-brand-accent text-sm font-medium hover:underline">
                Lorem Ipsum →
              </button>
            </div>

            {/* Card 5 - Terms */}
            <div className="bg-white border-t-4 border-t-brand-accent border border-brand-border rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-brand-accent w-6 h-6" />
              </div>
              <h3 className="font-bold text-brand-text text-lg mb-2">
                Dolor & Adipiscing
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
              </p>
              <Link href="/syarat-ketentuan" className="text-brand-accent text-sm font-medium hover:underline">
                Lorem Ipsum →
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 pt-12 border-t border-brand-border">
            <h3 className="text-brand-text font-semibold text-xl mb-3">
              Lorem ipsum dolor sit amet?
            </h3>
            <a
              href={WHATSAPP_URL}
              className="inline-block bg-brand-accent text-black font-semibold px-10 py-3.5 rounded-sm hover:bg-brand-accent/90 transition-colors"
            >
              Lorem Ipsum Dolor
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
