import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

export default function TentangKamiPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Lorem Ipsum Dolor</h1>
        <p className="text-brand-muted mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex gap-4">
          <a
            href={WHATSAPP_URL}
            className="bg-brand-accent text-black font-semibold px-6 py-3 rounded-sm text-sm hover:bg-brand-accent/90 transition-colors"
          >
            Lorem Ipsum →
          </a>
          <Link
            href="/layanan"
            className="border border-white/20 text-white/70 text-sm px-6 py-3 rounded-sm hover:border-brand-accent hover:text-brand-accent transition-colors"
          >
            Lorem Dolor
          </Link>
        </div>
      </div>
    </main>
  );
}
