
const BADGE_VARIANTS = {
  default: "bg-stone-100 text-stone-800 border-stone-300/80 dark:bg-stone-900/90 dark:text-stone-300 dark:border-stone-800",
  outline: "bg-transparent text-stone-700 border-stone-300 dark:text-stone-300 dark:border-stone-700",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30",
  accent: "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-400/30",
  glass: "bg-stone-950/80 text-white border-stone-700/50 backdrop-blur-sm"
};

const BADGE_SIZES = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3.5 py-1 text-xs"
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  dot = false,
  dotColor = "bg-emerald-500 dark:bg-emerald-400",
  className = ""
}) {
  const variantClass = BADGE_VARIANTS[variant] || BADGE_VARIANTS.default;
  const sizeClass = BADGE_SIZES[size] || BADGE_SIZES.md;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors duration-200 ${variantClass} ${sizeClass} ${className}`}
    >
      {dot && <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />}
      {children}
    </span>
  );
}

export default Badge;
