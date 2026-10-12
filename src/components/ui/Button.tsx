import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "light" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  icon,
  iconPosition = "right",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78660] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none tracking-wide rounded-sm cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5 uppercase tracking-wider",
    md: "text-sm px-6 py-3 gap-2 uppercase tracking-widest",
    lg: "text-base px-8 py-4 gap-2.5 uppercase tracking-widest",
  };

  const variantStyles = {
    primary:
      "bg-[#30231D] text-[#F8F5EF] hover:bg-[#A78660] hover:shadow-lg hover:shadow-[#30231D]/10 active:scale-[0.99]",
    secondary:
      "bg-transparent text-[#30231D] border border-[#30231D] hover:bg-[#30231D] hover:text-[#F8F5EF] active:scale-[0.99]",
    outline:
      "bg-transparent text-[#A78660] border border-[#A78660] hover:bg-[#A78660] hover:text-[#FFFFFF] active:scale-[0.99]",
    light:
      "bg-[#F8F5EF] text-[#211914] hover:bg-[#FFFFFF] hover:text-[#30231D] hover:shadow-md active:scale-[0.99]",
    link:
      "bg-transparent text-[#30231D] hover:text-[#A78660] p-0 border-b border-current pb-0.5 rounded-none uppercase tracking-widest",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${combinedClasses}`} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${combinedClasses}`}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
