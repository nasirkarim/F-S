import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  const isDark = theme === "dark";

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-[#A78660]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A78660]">
            {eyebrow}
          </span>
          {align === "center" && <span className="w-6 h-[1px] bg-[#A78660]"></span>}
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15] mb-4 ${
          isDark ? "text-[#F8F5EF]" : "text-[#211914]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed font-light ${
            isDark ? "text-[#E7D8C5]/80" : "text-[#292725]/80"
          } ${align === "center" ? "max-w-2xl" : "max-w-xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
