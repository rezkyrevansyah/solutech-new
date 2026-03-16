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
            <span className="text-white/60">Syarat & Ketentuan</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium px-4 py-1.5 rounded-full mb-4">
            KEBIJAKAN
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Syarat & Ketentuan
          </h1>

          <p className="text-white/50 text-base mt-4 max-w-2xl">
            Ketentuan layanan dan kebijakan Solutech Asia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-text text-center mb-3">
            Ketentuan Layanan Kami
          </h2>
          <p className="text-brand-muted text-center mb-12 max-w-2xl mx-auto">
            Harap baca ketentuan berikut sebelum menggunakan layanan Solutech Asia.
          </p>

          {/* 3 Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {/* Card 1 - Warranty */}
            <div className="bg-[#FFF8F5] border border-orange-100 rounded-lg p-6">
              <div className="w-2 h-2 rounded-full bg-brand-accent mb-5" />
              <h3 className="font-semibold text-brand-text mb-2">
                Garansi Produk 1 Tahun
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Semua perangkat yang dibeli dari Solutech Asia dilengkapi garansi resmi 1 tahun. Jika ditemukan kerusakan akibat cacat produksi, kami akan mengganti perangkat.
              </p>
              <button className="text-brand-accent text-sm mt-4 font-medium hover:underline">
                Selengkapnya →
              </button>
            </div>

            {/* Card 2 - Authenticity */}
            <div className="bg-[#FFF8F5] border border-orange-100 rounded-lg p-6">
              <div className="w-2 h-2 rounded-full bg-brand-accent mb-5" />
              <h3 className="font-semibold text-brand-text mb-2">
                Keaslian Perangkat
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Kami menjamin bahwa seluruh perangkat yang didistribusikan adalah ASLI. Bilamana ditemukan perangkat tidak asli, kami bersedia mengganti uang dan memberikan kompensasi.
              </p>
              <button className="text-brand-accent text-sm mt-4 font-medium hover:underline">
                Selengkapnya →
              </button>
            </div>

            {/* Card 3 - Purchase Policy */}
            <div className="bg-[#FFF8F5] border border-orange-100 rounded-lg p-6">
              <div className="w-2 h-2 rounded-full bg-brand-accent mb-5" />
              <h3 className="font-semibold text-brand-text mb-2">
                Kebijakan Pembelian
              </h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                Pembelian dapat dilakukan via WhatsApp. Kami melayani dari seluruh Indonesia. Hubungi kami untuk informasi harga, ketersediaan, dan estimasi pengiriman.
              </p>
              <button className="text-brand-accent text-sm mt-4 font-medium hover:underline">
                Selengkapnya →
              </button>
            </div>
          </div>

          {/* Detailed Terms */}
          <div className="max-w-4xl mx-auto space-y-10 text-left">
            {/* Section 1 - Service Usage */}
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-4">
                Ketentuan Penggunaan Layanan
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Dengan menggunakan layanan Solutech Asia, Anda menyetujui untuk mematuhi semua syarat dan ketentuan yang berlaku. Layanan kami mencakup penjualan perangkat IT, instalasi, konfigurasi, managed services, dan dukungan teknis untuk infrastruktur IT enterprise.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Kami berhak untuk menolak atau membatalkan pesanan jika kami menemukan informasi yang tidak akurat, penipuan, atau aktivitas mencurigakan lainnya. Semua transaksi harus dilakukan dengan itikad baik dan sesuai dengan ketentuan yang telah disepakati.
              </p>
            </div>

            {/* Section 2 - Warranty Policy */}
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-4">
                Kebijakan Garansi
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Setiap perangkat yang dibeli dari Solutech Asia dilengkapi dengan garansi resmi selama 1 tahun sejak tanggal pembelian. Garansi mencakup kerusakan akibat cacat produksi atau malfungsi hardware yang bukan disebabkan oleh kesalahan pengguna.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Garansi tidak berlaku untuk kerusakan akibat pemakaian yang tidak sesuai, modifikasi tidak resmi, bencana alam, atau force majeure. Untuk klaim garansi, pelanggan wajib menyertakan bukti pembelian dan melaporkan kerusakan maksimal 7 hari sejak kerusakan ditemukan.
              </p>
            </div>

            {/* Section 3 - Delivery */}
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-4">
                Pengiriman & Delivery
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Solutech Asia berkomitmen memberikan pengiriman tercepat dengan estimasi 3-4 minggu untuk sebagian besar produk. Waktu pengiriman dapat bervariasi tergantung ketersediaan stok, lokasi pengiriman, dan kondisi logistik saat itu.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Kami melayani pengiriman ke seluruh Indonesia. Biaya pengiriman akan diinformasikan di awal pemesanan dan dapat bervariasi berdasarkan lokasi tujuan. Pelanggan bertanggung jawab memastikan alamat pengiriman yang akurat dan lengkap untuk menghindari keterlambatan.
              </p>
            </div>

            {/* Section 4 - Privacy Policy */}
            <div>
              <h3 className="text-2xl font-bold text-brand-text mb-4">
                Kebijakan Privasi
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Solutech Asia berkomitmen melindungi privasi dan data pribadi pelanggan. Informasi yang kami kumpulkan hanya digunakan untuk keperluan pemrosesan pesanan, pengiriman, dan komunikasi terkait layanan yang diberikan.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Kami tidak akan membagikan, menjual, atau menyewakan informasi pribadi pelanggan kepada pihak ketiga tanpa persetujuan eksplisit, kecuali diwajibkan oleh hukum atau untuk keperluan operasional bisnis seperti pengiriman dan pembayaran. Data pelanggan disimpan dengan aman dan hanya dapat diakses oleh personel resmi Solutech Asia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
