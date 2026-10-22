import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

const VARIANTS = {
  primary:
    "bg-stone-900 text-white hover:bg-stone-800 active:bg-stone-700 shadow-sm border border-transparent dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200 dark:active:bg-stone-300",
  secondary:
    "bg-stone-100 text-stone-900 hover:bg-stone-200 active:bg-stone-300 border border-stone-300 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700 dark:active:bg-stone-600 dark:border-stone-700/60",
  outline:
    "bg-transparent text-stone-800 border border-stone-300 hover:bg-stone-100 hover:text-stone-950 dark:text-stone-200 dark:border-stone-700/80 dark:hover:bg-stone-800/80 dark:hover:text-white",
  ghost:
    "bg-transparent text-stone-700 hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-stone-800/60 dark:hover:text-white",
  dark:
    "bg-stone-900 text-white border border-stone-800 hover:bg-stone-800 dark:bg-stone-950 dark:text-white dark:border-stone-800 dark:hover:bg-stone-900",
  accent:
    "bg-amber-400 text-stone-950 hover:bg-amber-300 active:bg-amber-500 shadow-md font-semibold",
  white:
    "bg-white text-stone-950 hover:bg-stone-200 active:bg-stone-300 border border-transparent shadow-md font-semibold",
  glass:
    "bg-white/10 text-white border border-white/25 hover:bg-white/20 hover:border-white/50 backdrop-blur-md font-semibold",
  link:
    "bg-transparent text-stone-700 underline-offset-4 hover:underline hover:text-stone-950 dark:text-stone-300 dark:hover:text-white p-0 h-auto"
};

const SIZES = {
  sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
  md: "px-4 py-2 text-xs sm:text-sm rounded-lg gap-2",
  lg: "px-6 py-3 text-sm sm:text-base rounded-xl gap-2.5",
  icon: "h-9 w-9 p-0 rounded-lg justify-center items-center",
  iconSm: "h-7 w-7 p-0 rounded-full justify-center items-center"
};

export const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    isLoading = false,
    disabled = false,
    leftIcon = null,
    rightIcon = null,
    as: Component = "button",
    className = "",
    type = "button",
    ...props
  },
  ref
) {
  const variantStyles = VARIANTS[variant] || VARIANTS.primary;
  const sizeStyles = variant === "link" ? "" : SIZES[size] || SIZES.md;
  const widthStyle = fullWidth ? "w-full" : "w-auto";
  const disabledStyle =
    disabled || isLoading
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "cursor-pointer";

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2";

  const buttonProps = Component === "button" ? { type } : {};

  return (
    <Component
      ref={ref}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${widthStyle} ${disabledStyle} ${className}`}
      {...buttonProps}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin text-current shrink-0" />
          {children}
        </>
      ) : (
        <>
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </>
      )}
    </Component>
  );
});

Button.displayName = "Button";

export default Button;
