import { NavItem, Service, PartnerBrand, FaqItem, Stat } from "./types";

export const SITE_NAME = "Solutech Asia";
export const SITE_DESCRIPTION = "Independent IT solutions distributor and managed services provider based in Jatinegara, Jakarta Timur.";

export const WHATSAPP_URL = "https://wa.me/6281234567890?text=Halo%20Solutech%20Asia%2C%20saya%20ingin%20bertanya";

export const NAV_LINKS: NavItem[] = [
  { label: "Layanan Profesional", href: "/layanan" },
  { label: "Produk", href: "/produk" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Dukungan", href: "/dukungan" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "FAQ", href: "/faq" },
  { label: "Karir", href: "/karir" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
];

export const SERVICES: Service[] = [
  {
    id: "hardware-provider",
    name: "Hardware Provider",
    description: "Kami adalah distributor independen perangkat jaringan dan server dari berbagai brand terbaik dunia. Unggul dalam pengiriman cepat, harga kompetitif, dan garansi 1 tahun gratis untuk setiap perangkat.",
    features: [
      "Pengiriman 3-4 minggu (lebih cepat dari kompetitor)",
      "Garansi 1 tahun gratis untuk semua perangkat",
      "Perangkat 100% original dan bergaransi resmi",
      "Harga kompetitif, melayani seluruh Indonesia",
    ],
  },
  {
    id: "managed-services",
    name: "Managed Services",
    description: "Kami kelola infrastruktur IT Anda secara menyeluruh sehingga Anda bisa fokus mengembangkan bisnis. Tim kami berpengalaman menangani kebutuhan IT enterprise dari berbagai industri.",
    features: [
      "Pengelolaan infrastruktur IT end-to-end",
      "Monitoring proaktif 24/7",
      "Laporan berkala dan analisis performa",
      "Skalabel sesuai pertumbuhan bisnis Anda",
    ],
  },
  {
    id: "it-support",
    name: "IT Support",
    description: "Layanan dukungan teknis profesional mencakup instalasi, konfigurasi, troubleshoot, dan assessment. Cakupan layanan kami menjangkau seluruh pelosok Indonesia.",
    features: [
      "Instalasi dan konfigurasi perangkat",
      "Troubleshooting dan pemulihan sistem",
      "Assessment kebutuhan infrastruktur IT",
      "Layanan on-site dan remote seluruh Indonesia",
    ],
  },
  {
    id: "cyber-security",
    name: "Cyber Security",
    description: "Lindungi aset digital dan infrastruktur IT perusahaan Anda dari ancaman siber dengan solusi keamanan komprehensif dari Solutech Asia.",
    features: [
      "Network security dan firewall management",
      "Endpoint protection dan monitoring",
      "Vulnerability assessment dan penetration testing",
      "Incident response dan pemulihan",
    ],
  },
  {
    id: "cloud-computing",
    name: "Cloud Computing",
    description: "Akselerasi transformasi digital bisnis Anda dengan solusi cloud yang tepat. Kami membantu perencanaan, migrasi, dan pengelolaan lingkungan cloud secara efisien.",
    features: [
      "Perencanaan dan strategi migrasi cloud",
      "Setup hybrid cloud dan multi-cloud",
      "Optimasi biaya infrastruktur cloud",
      "Integrasi SaaS dan platform cloud",
    ],
  },
  {
    id: "rental-hardware",
    name: "Rental Hardware",
    description: "Solusi sewa perangkat IT fleksibel untuk kebutuhan bisnis jangka pendek maupun panjang. Hemat biaya investasi tanpa mengorbankan kualitas infrastruktur.",
    features: [
      "Sewa perangkat server, jaringan, dan komputasi",
      "Periode rental fleksibel sesuai kebutuhan",
      "Perangkat terjamin kualitas dan performanya",
      "Termasuk support teknis selama masa rental",
    ],
  },
  {
    id: "best-support",
    name: "BEST-support",
    description: "Program dukungan komprehensif Solutech Asia yang memberikan respons cepat dan solusi efektif untuk setiap permasalahan IT yang Anda hadapi.",
    features: [
      "Prioritas respons untuk klien terdaftar",
      "Dedicated account manager",
      "SLA terukur dan terjamin",
      "Dukungan multi-channel: WA, email, on-site",
    ],
  },
];

export const PARTNER_BRANDS: PartnerBrand[] = [
  { name: "Cisco", logo: "/images/partners/logo_cisco.png" },
  { name: "Fortinet", logo: "/images/partners/logo_fortinet.svg" },
  { name: "Juniper Networks", logo: "/images/partners/logo_juniper.png" },
  { name: "Hewlett Packard Enterprise", logo: "/images/partners/logo_hewlett.svg" },
  { name: "Aruba", logo: "/images/partners/logo_aruba.png" },
  { name: "Huawei", logo: "/images/partners/logo_huawei.png" },
];

export const STATS: Stat[] = [
  { value: "3-4", suffix: " minggu", label: "Delivery Time Tercepat" },
  { value: "1", suffix: " tahun", label: "Garansi Gratis Semua Produk" },
  { value: "100", suffix: "%", label: "Perangkat Original Bergaransi" },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Apa saja layanan dari Solutech Asia?",
    answer: "Kami adalah distributor independen perangkat jaringan dan server dari berbagai brand terbaik dunia, unggul dalam pengiriman, harga kompetitif, serta garansi 1 tahun gratis untuk perangkat yang dibeli dari Solutech Asia.",
  },
  {
    question: "Apakah menyediakan jasa instalasi?",
    answer: "Jasa instalasi, konfigurasi, managed service, rental perangkat, assessment, dan troubleshoot adalah beberapa layanan terbaik dari Solutech Asia. Cakupan layanan kami menjangkau seluruh pelosok Indonesia.",
  },
  {
    question: "Apa keuntungan membeli perangkat di Solutech Asia?",
    answer: "Delivery time kami 3-4 minggu, lebih cepat dari distributor lainnya yang mencapai 5-7 bulan. Semua perangkat kami garansi 1 tahun dan harga yang kami tawarkan sangat kompetitif.",
  },
  {
    question: "Apakah perangkat yang dijual original?",
    answer: "Kami menjamin bahwa perangkat yang kami distribusikan adalah ASLI dan bergaransi. Bilamana ditemukan perangkat yang tidak asli, kami bersedia mengganti uang dan memberikan kompensasi.",
  },
  {
    question: "Promo apa yang ditawarkan Solutech Asia?",
    answer: "Solutech Asia melakukan promo secara berkala. Silahkan cek website dan sosial media kami secara berkala untuk promo-promo terbaru.",
  },
  {
    question: "Bagaimana proses pembelian di Solutech Asia?",
    answer: "Silahkan hubungi kami melalui WhatsApp untuk respons cepat. Kami melayani pembelian dari seluruh pelosok Indonesia dan berupaya penuh menjadi mitra yang dapat diandalkan.",
  },
];
