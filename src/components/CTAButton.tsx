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
  const baseClasses = "relative group overflow-hidden rounded-[50px] shadow-cta hover:shadow-cta-hover transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0";
  const gradientClasses = "gradient-cta";
  const isExternalLink = href?.startsWith("http");

  const content = (
    <>
      <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-opacity" />
      <div className="relative flex items-center justify-center gap-3 px-8 py-4 md:py-5">
        <span className="font-bold text-white text-base md:text-lg tracking-wide">
          {isLoading ? "送信中..." : children}
        </span>
        <ArrowRight className="w-5 h-5 text-white" />
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noreferrer noopener" : undefined}
        className={`${baseClasses} ${gradientClasses} ${className} block text-center disabled:opacity-60 disabled:cursor-not-allowed`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={`${baseClasses} ${gradientClasses} ${className} w-full disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {content}
    </button>
  );
};

export default CTAButton;

