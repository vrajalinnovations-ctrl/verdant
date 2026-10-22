import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, ArrowRight, ArrowLeft, ShieldCheck, Sun, Moon, CheckCircle2, KeyRound } from "lucide-react";
import Button from "../../components/ui/button";
import Badge from "../../components/ui/badge";
import SEO from "../../components/ui/seo";
import { useTheme } from "../../context/themecontext";
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";

export default function ConfirmPassword() {
  const { toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const hasMinLength = password.length >= 8;
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hasMinLength) {
      setErrorMessage("Passkey must be at least 8 characters long.");
      return;
    }
    if (!passwordsMatch) {
      setErrorMessage("Passkeys do not match.");
      return;
    }

    setErrorMessage("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-stone-50 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100 flex items-center justify-center p-6">
      <SEO
        title="Confirm & Reset Passkey"
        description="Establish your new encrypted credentials with live security checklist verification on Verdant Estates."
        canonical="/confirm-password"
        noindex
      />
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft gold aura */}
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/5" />
        {/* Soft emerald aura */}
        <div className="absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-200/30 via-transparent to-stone-100/50 dark:from-stone-900/30 dark:via-transparent dark:to-stone-950/60" />
      </div>

      {/* Floating Theme Switcher */}
      <div className="absolute top-6 right-6 z-20">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-white/80 text-stone-700 shadow-sm backdrop-blur-sm transition-all hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-900/80 dark:text-stone-300 dark:hover:bg-stone-800"
        >
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>

      {/* Main Authentication Container */}
      <main className="relative z-10 w-full max-w-md flex flex-col items-center">
        {/* Brand Logo Header */}
        <Link
          to="/"
          className="group mb-5 flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logoDark}
            alt="Verdant Estates"
            className="h-9 w-auto dark:hidden"
          />
          <img
            src={logoLight}
            alt="Verdant Estates"
            className="hidden h-9 w-auto dark:block"
          />
          <span className="text-xl font-bold tracking-tight text-stone-950 dark:text-white">
            VERDANT
            <span className="ms-1 font-light text-stone-500 dark:text-stone-400">
              ESTATES
            </span>
          </span>
        </Link>

        {/* Status Badge */}
        <Badge
          variant="outline"
          size="md"
          dot
          dotColor="bg-emerald-500 animate-pulse"
          className="border-stone-300 bg-white/60 shadow-sm backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/60"
        >
          <span className="tracking-wider uppercase text-xs font-semibold text-stone-700 dark:text-stone-300">
            Security Protocol // Clearance Approved
          </span>
        </Badge>

        <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-stone-100 shadow-md ring-1 ring-stone-900/10 dark:bg-stone-100 dark:text-stone-950">
          <KeyRound className="h-6 w-6" />
        </div>

        <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-white text-center">
          Set New Passkey
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-stone-500 dark:text-stone-400 text-center max-w-sm">
          Establish a new confidential passkey to restore full access to your private client portfolio.
        </p>

        {/* Card Form */}
        <div className="mt-8 w-full rounded-2xl border border-stone-200 bg-white/80 p-6 sm:p-8 shadow-xl shadow-stone-200/50 backdrop-blur-xl dark:border-stone-800 dark:bg-stone-900/80 dark:shadow-stone-950/60">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="rounded-xl border border-rose-200 bg-rose-50/80 p-3 text-xs text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/50 dark:text-rose-300">
                  {errorMessage}
                </div>
              )}

              {/* New Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5"
                >
                  New Confidential Passkey
                </label>
                <div className="relative flex items-center">
                  <div className="pointer-events-none absolute left-3.5 text-stone-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 8 characters"
                    className="w-full rounded-xl border border-stone-200 bg-stone-50/50 py-2.5 pl-10 pr-10 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400/20 dark:border-stone-800 dark:bg-stone-950/50 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-950"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5"
                >
                  Confirm New Passkey
                </label>
                <div className="relative flex items-center">
                  <div className="pointer-events-none absolute left-3.5 text-stone-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Repeat your passkey"
                    className="w-full rounded-xl border border-stone-200 bg-stone-50/50 py-2.5 pl-10 pr-10 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400/20 dark:border-stone-800 dark:bg-stone-950/50 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-950"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Requirements Checklist */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className={`h-3.5 w-3.5 ${hasMinLength ? "text-emerald-500" : "text-stone-300 dark:text-stone-700"}`} />
                  <span className={hasMinLength ? "text-stone-700 dark:text-stone-300" : "text-stone-400 dark:text-stone-600"}>
                    At least 8 characters
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className={`h-3.5 w-3.5 ${passwordsMatch ? "text-emerald-500" : "text-stone-300 dark:text-stone-700"}`} />
                  <span className={passwordsMatch ? "text-stone-700 dark:text-stone-300" : "text-stone-400 dark:text-stone-600"}>
                    Passkeys match
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={!hasMinLength || !passwordsMatch}
                isLoading={isLoading}
                rightIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
                className="mt-4 group shadow-md py-3 text-sm font-semibold tracking-wide cursor-pointer"
              >
                Confirm New Passkey
              </Button>
            </form>
          ) : (
            <div className="py-4 text-center space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-stone-950 dark:text-white">
                Passkey Updated Successfully
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                Your credentials have been securely updated. You can now unlock your client vault using your new passkey.
              </p>
              <div className="pt-2">
                <Button
                  onClick={() => navigate("/login")}
                  variant="primary"
                  size="md"
                  fullWidth
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="shadow-md"
                >
                  Proceed to Client Login
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Links */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <Link
            to="/login"
            className="group flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Client Portal Login</span>
          </Link>
          <Link
            to="/"
            className="text-xs text-stone-400 hover:text-stone-700 dark:text-stone-500 dark:hover:text-stone-300 transition-colors"
          >
            &larr; Return to Homepage
          </Link>
        </div>

        {/* Security badges */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-stone-400 dark:text-stone-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span>End-to-End Encrypted</span>
          </div>
          <span>&bull;</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
            <span>Zero-Knowledge Vault</span>
          </div>
        </div>
      </main>
    </div>
  );
}
