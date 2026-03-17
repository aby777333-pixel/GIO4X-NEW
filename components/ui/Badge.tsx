interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "sky" | "navy" | "success" | "warning";
  className?: string;
}

const variants = {
  default: "bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] border-[var(--color-border)]",
  sky: "bg-[rgba(41,171,226,0.15)] text-[#29ABE2] border-[rgba(41,171,226,0.3)]",
  navy: "bg-[rgba(27,58,107,0.2)] text-[#5BCBF5] border-[rgba(27,58,107,0.3)]",
  success: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  warning: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
