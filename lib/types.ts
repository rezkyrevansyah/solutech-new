export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
}

export interface PartnerBrand {
  name: string;
  logo?: string;
}

export interface JobListing {
  department: string;
  positions: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
}
