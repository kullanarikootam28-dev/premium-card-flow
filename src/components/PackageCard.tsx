import { Check, Sparkles, ArrowRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PackageFeature {
  icon: LucideIcon;
  text: string;
}

export interface PackageCardProps {
  title: string;
  subtitle?: string;
  price: string;
  originalPrice?: string;
  discountLabel?: string;
  description: string;
  features: PackageFeature[];
  ctaLabel?: string;
  badge?: string;
  highlighted?: boolean;
  accentIcon: LucideIcon;
}

export function PackageCard({
  title,
  subtitle,
  price,
  originalPrice,
  discountLabel,
  description,
  features,
  ctaLabel = "Get Started",
  badge,
  highlighted = false,
  accentIcon: AccentIcon,
}: PackageCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-3xl p-7 transition-all duration-500 ease-out",
        "border border-border/60 bg-surface/70 backdrop-blur-xl",
        "hover:-translate-y-2 hover:border-primary/40",
        highlighted
          ? "card-glow-highlight border-highlight/40 bg-gradient-to-br from-surface-elevated via-surface to-surface"
          : "hover:card-glow-primary",
      )}
    >
      {/* Highlighted ribbon background */}
      {highlighted && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -top-32 -right-20 h-64 w-64 rounded-full bg-highlight/20 blur-3xl animate-glow-pulse" />
          <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        </div>
      )}

      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 rounded-full bg-highlight px-3.5 py-1.5 text-xs font-semibold tracking-wide text-highlight-foreground shadow-lg shadow-highlight/30">
            <Sparkles className="h-3.5 w-3.5" />
            {badge}
          </div>
        </div>
      )}

      <div className="relative flex h-full flex-col">
        {/* Icon */}
        <div
          className={cn(
            "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3",
            highlighted
              ? "bg-highlight/15 text-highlight ring-1 ring-highlight/30"
              : "bg-primary/10 text-primary ring-1 ring-primary/20",
          )}
        >
          <AccentIcon className="h-6 w-6" strokeWidth={2} />
        </div>

        {/* Title block */}
        <div className="mb-5">
          {subtitle && (
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {subtitle}
            </p>
          )}
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>

        {/* Price */}
        <div className="mb-6 flex items-end gap-2.5">
          <span
            className={cn(
              "font-display text-4xl font-bold tracking-tight",
              highlighted ? "text-gradient-highlight" : "text-foreground",
            )}
          >
            {price}
          </span>
          {originalPrice && (
            <div className="flex flex-col pb-1">
              <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
              {discountLabel && (
                <span className="text-[11px] font-semibold uppercase tracking-wider text-highlight">
                  {discountLabel}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="mb-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Features */}
        <ul className="mb-8 flex-1 space-y-3.5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full",
                    highlighted ? "bg-highlight/15 text-highlight" : "bg-primary/10 text-primary",
                  )}
                >
                  <Icon className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="leading-snug">{feature.text}</span>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <button
          className={cn(
            "group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300",
            highlighted
              ? "bg-highlight text-highlight-foreground hover:shadow-lg hover:shadow-highlight/40"
              : "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30",
            "active:scale-[0.98]",
          )}
        >
          <span>{ctaLabel}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

// Helper checkmark export for any external use
export { Check };
