import { Smartphone, Camera, Film, Image as ImageIcon, Instagram, Clock, RefreshCw, FileText, Wallet, ShieldAlert } from "lucide-react";
import { PackageCard, type PackageCardProps } from "./PackageCard";

const packages: PackageCardProps[] = [
  {
    title: "Full Commercial Ad",
    subtitle: "iPhone Shoot",
    price: "₹10,000",
    description: "Entry-level, clean, budget-friendly production for emerging brands.",
    accentIcon: Smartphone,
    features: [
      { icon: Film, text: "3–5 minute advertisement" },
      { icon: Smartphone, text: "Shot using iPhone" },
      { icon: ImageIcon, text: "Color-graded final delivery" },
    ],
    ctaLabel: "Book Now",
  },
  {
    title: "Full Commercial Ad",
    subtitle: "DSLR Shoot",
    price: "₹25,000",
    description: "Premium, cinematic, high-quality production with professional gear.",
    accentIcon: Camera,
    features: [
      { icon: Film, text: "3–5 minute advertisement" },
      { icon: Camera, text: "Shot using DSLR" },
      { icon: ImageIcon, text: "Cinematic color treatment" },
    ],
    ctaLabel: "Book Now",
  },
  {
    title: "Instagram Content",
    subtitle: "Package 1",
    price: "₹30,000",
    originalPrice: "₹32,000",
    discountLabel: "Save ₹2,000",
    description: "Our most popular bundle — built for consistent monthly growth.",
    accentIcon: Instagram,
    badge: "Most Chosen",
    highlighted: true,
    features: [
      { icon: Film, text: "16 high-performing reels" },
      { icon: ImageIcon, text: "4 scroll-stopping posters" },
      { icon: Instagram, text: "Optimized for engagement" },
    ],
    ctaLabel: "Get Started",
  },
  {
    title: "Instagram Content",
    subtitle: "Package 2",
    price: "₹40,000",
    description: "Scale your presence with a fuller content mix every month.",
    accentIcon: Instagram,
    features: [
      { icon: Film, text: "16 high-performing reels" },
      { icon: ImageIcon, text: "10 curated posts" },
      { icon: Instagram, text: "Strategic content calendar" },
    ],
    ctaLabel: "Get Started",
  },
];

const rules = [
  {
    icon: Clock,
    text: "Tasks must be allocated minimum 4 days to 1 week in advance",
  },
  {
    icon: RefreshCw,
    text: "Only one revision allowed within 48 hours of delivery",
  },
  {
    icon: FileText,
    text: "All corrections must be provided in a single structured script with timestamps",
  },
  {
    icon: Wallet,
    text: "50% advance payment required before project start",
  },
  {
    icon: ShieldAlert,
    text: "Payments are non-refundable",
  },
];

export function PackagesSection() {
  return (
    <section className="relative w-full px-5 py-20 sm:px-8 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="opacity-0 animate-fade-up"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>

        {/* Rules block */}
        <div
          className="mt-16 opacity-0 animate-fade-up"
          style={{ animationDelay: `${packages.length * 90 + 150}ms` }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface/50 p-7 backdrop-blur-xl sm:p-9">
            <div className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
              <div className="lg:w-64 lg:flex-shrink-0">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Working Terms
                </div>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                  A few ground rules <span className="text-gradient-primary">to keep things smooth.</span>
                </h3>
              </div>

              <ul className="grid flex-1 grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {rules.map((rule, idx) => {
                  const Icon = rule.icon;
                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                        <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">{rule.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
