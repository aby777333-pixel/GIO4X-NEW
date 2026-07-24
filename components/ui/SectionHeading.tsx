interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, centered = true, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-[#29ABE2] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-[var(--text-h2)] font-medium text-[var(--color-text)] mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}
