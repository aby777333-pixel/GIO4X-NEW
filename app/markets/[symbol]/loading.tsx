import { Skeleton } from "@/components/ui/Skeleton";

// Route-level loading UI — shown during navigation to an instrument page.
export default function Loading() {
  return (
    <div>
      <div className="h-[380px] bg-[#0A1A33] md:h-[440px]" />
      <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-4 py-7 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-12" />
          ))}
        </div>
      </div>
      <div className="container mx-auto space-y-6 px-4 py-16">
        <Skeleton className="h-8 w-64" />
        <div className="grid gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-40" />
          ))}
        </div>
      </div>
    </div>
  );
}
