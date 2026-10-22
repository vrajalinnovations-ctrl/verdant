import { forwardRef } from "react";

const CARD_VARIANTS = {
  default:
    "bg-white border-stone-200 shadow-lg dark:bg-stone-900/90 dark:border-stone-800 dark:shadow-xl",
  subtle:
    "bg-stone-100/90 border-stone-200/80 shadow-sm dark:bg-stone-900/90 dark:border-stone-800",
  glass:
    "bg-white/80 border-white/40 backdrop-blur-md shadow-md dark:bg-stone-900/80 dark:border-stone-700/60",
  flat:
    "bg-stone-50 border-stone-200/60 dark:bg-stone-950/60 dark:border-stone-800/80",
  interactive:
    "bg-white border-stone-200 shadow-xl transition-all duration-300 hover:border-stone-300 dark:bg-stone-900 dark:border-stone-800 dark:shadow-2xl dark:hover:border-stone-700"
};

export const Card = forwardRef(function Card(
  {
    children,
    variant = "default",
    as: Component = "div",
    className = "",
    ...props
  },
  ref
) {
  const variantStyles = CARD_VARIANTS[variant] || CARD_VARIANTS.default;

  return (
    <Component
      ref={ref}
      className={`rounded-3xl border transition-colors duration-200 ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
});

Card.displayName = "Card";

export default Card;
