import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline-light" | "outline-dark";
  className?: string;
  onClick?: () => void;
  withArrow?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  withArrow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 group";
  
  const variants = {
    primary: "bg-brand-accent text-brand-dark hover:bg-white hover:text-brand-dark hover:shadow-lg",
    "outline-light": "border border-brand-border text-brand-text hover:bg-brand-gray",
    "outline-dark": "border border-white/40 text-white hover:bg-white/10 hover:border-white",
  };

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
