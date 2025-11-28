import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type CTAButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  isLoading?: boolean;
};

const CTAButton = ({ children, href, onClick, className = "", type = "button", isLoading = false }: CTAButtonProps) => {
  const shared =
    "inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-base font-bold text-white shadow-cta transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:opacity-60 disabled:cursor-not-allowed";

  if (href) {
    return (
      <a href={href} className={`${shared} ${className}`} style={{ background: "linear-gradient(135deg, #D66B4D, #E78963)" }}>
        {children}
        <ArrowRight className="w-5 h-5" />
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${shared} ${className}`}
      style={{ background: "linear-gradient(135deg, #D66B4D, #E78963)" }}
    >
      {isLoading ? "送信中..." : children}
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};

export default CTAButton;

