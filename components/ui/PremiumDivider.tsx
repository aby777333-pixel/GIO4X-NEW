// PremiumDivider — a thin gold rule with a centred jewel. A signature detail
// for separating major sections without heavy borders.

export function PremiumDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`premium-divider ${className}`} aria-hidden="true">
      <span className="premium-divider__gem" />
    </div>
  );
}
