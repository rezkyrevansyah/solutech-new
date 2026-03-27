import { NavItem, Service, PartnerBrand, FaqItem, Stat } from "./types";

export const SITE_NAME = "Lorem Ipsum Asia";
export const SITE_DESCRIPTION = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const WHATSAPP_URL = "https://wa.me/6281234567890?text=Halo%20Solutech%20Asia%2C%20saya%20ingin%20bertanya";

export const NAV_LINKS: NavItem[] = [
  { label: "Lorem Profesional", href: "/layanan" },
  { label: "Lorem Ipsum", href: "/produk" },
  { label: "Lorem Kami", href: "/tentang-kami" },
  { label: "Lorem Dolor", href: "/dukungan" },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: "Lorem Kami", href: "/tentang-kami" },
  { label: "Lorem FAQ", href: "/faq" },
  { label: "Lorem Ipsum", href: "/karir" },
  { label: "Lorem & Dolor", href: "/syarat-ketentuan" },
];

export const SERVICES: Service[] = [
  {
    id: "hardware-provider",
    name: "Lorem Service Uno",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
      "Aliqua ut enim ad minim veniam",
    ],
  },
  {
    id: "managed-services",
    name: "Lorem Service Duo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
      "Aliqua ut enim ad minim veniam",
    ],
  },
  {
    id: "it-support",
    name: "Lorem Service Tres",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
      "Aliqua ut enim ad minim veniam",
    ],
  },
  {
    id: "cyber-security",
    name: "Lorem Service Quad",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
      "Aliqua ut enim ad minim veniam",
    ],
  },
  {
    id: "cloud-computing",
    name: "Lorem Service Cinco",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.",
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
      "Aliqua ut enim ad minim veniam",
    ],
  },
  {
    id: "rental-hardware",
    name: "Lorem Service Seis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
      "Aliqua ut enim ad minim veniam",
    ],
  },
  {
    id: "best-support",
    name: "Lorem Service Siete",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    features: [
      "Lorem ipsum dolor sit amet consectetur",
      "Adipiscing elit sed do eiusmod tempor",
      "Incididunt ut labore et dolore magna",
      "Aliqua ut enim ad minim veniam",
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
  { value: "3-4", suffix: " minggu", label: "Lorem Ipsum Dolor Sit" },
  { value: "1", suffix: " tahun", label: "Lorem Ipsum Dolor Amet" },
  { value: "100", suffix: "%", label: "Lorem Ipsum Consectetur" },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "Adipiscing elit sed do eiusmod tempor?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Incididunt ut labore et dolore magna?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Ut enim ad minim veniam quis nostrud?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
  },
  {
    question: "Exercitation ullamco laboris nisi ut aliquip?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    question: "Ex ea commodo consequat duis aute irure?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  },
];

export const NEWS_ITEMS = [
  {
    id: "news-1",
    category: "Lorem Ipsum",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    linkText: "Lorem ipsum",
    href: "#",
    bgColor: "#0f2d1e",
  },
  {
    id: "news-2",
    category: "Dolor Sit",
    title: "Amet consectetur adipiscing elit sed do eiusmod tempor incididunt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud.",
    linkText: "Lorem ipsum",
    href: "#",
    bgColor: "#1a2035",
  },
  {
    id: "news-3",
    category: "Lorem Amet",
    title: "Sed do eiusmod tempor incididunt ut labore et dolore magna",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    linkText: "Lorem ipsum",
    href: "#",
    bgColor: "#0f1a2e",
  },
  {
    id: "news-4",
    category: "Ipsum Dolor",
    title: "Ut labore et dolore magna aliqua enim ad minim veniam quis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non.",
    linkText: "Lorem ipsum",
    href: "#",
    bgColor: "#1a0f2e",
  },
  {
    id: "news-5",
    category: "Consectetur",
    title: "Quis nostrud exercitation ullamco laboris nisi aliquip ex ea",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut.",
    linkText: "Lorem ipsum",
    href: "#",
    bgColor: "#0f1f2e",
  },
  {
    id: "news-6",
    category: "Adipiscing",
    title: "Ex ea commodo consequat duis aute irure dolor in reprehenderit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur.",
    linkText: "Lorem ipsum",
    href: "#",
    bgColor: "#1f1a0f",
  },
];
