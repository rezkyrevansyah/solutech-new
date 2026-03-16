import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LinkArrowProps {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export default function LinkArrow({ href, children, variant = "light", className = "" }: LinkArrowProps) {
  const colors = {
    light: "text-brand-accent hover:text-brand-accent/80",
    dark: "text-brand-accent hover:text-white", // In dark mode/backgrounds, usually green accent
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center text-base font-semibold group transition-colors ${colors[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
