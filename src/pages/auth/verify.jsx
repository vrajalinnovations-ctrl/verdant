import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Sun,
  Moon,
  RefreshCw,
  CheckCircle2,
  KeyRound
} from "lucide-react";
import Button from "../../components/ui/button";
import Badge from "../../components/ui/badge";
import { useTheme } from "../../context/themecontext";
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";

export default function Verify() {
  const { toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const targetEmail = location.state?.email || "investor@domain.com";

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(45);
  const canResend = countdown === 0;
  const inputRefs = useRef([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index, value) => {
    // Only accept numeric inputs
    const char = value.slice(-1);
    if (!/^\d*$/.test(char)) return;

    const newCode = [...code];
    newCode[index] = char;
    setCode(newCode);

    // Auto-advance to next box if filled
    if (char && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pastedData)) return;

    const digits = pastedData.slice(0, 6).split("");
    const newCode = [...code];
    digits.forEach((digit, idx) => {
      newCode[idx] = digit;
    });
    setCode(newCode);

    const focusIdx = Math.min(digits.length, 5);
    inputRefs.current[focusIdx]?.focus();
  };

  const handleResend = () => {
    if (!canResend) return;
    setCountdown(45);
    setCode(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length < 6) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/confirm-password");
    }, 800);
  };

  const isComplete = code.every((digit) => digit !== "");

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-stone-50 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100 flex items-center justify-center p-6">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft gold aura */}
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/5" />
        {/* Soft emerald aura */}
        <div className="absolute bottom-12 -left-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
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
            Two-Factor Clearance
          </span>
        </Badge>

        <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-900 text-stone-100 shadow-md ring-1 ring-stone-900/10 dark:bg-stone-100 dark:text-stone-950">
          <KeyRound className="h-6 w-6" />
        </div>

        <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-white text-center">
          Verify Security Token
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-stone-500 dark:text-stone-400 text-center max-w-sm">
          A one-time 6-digit authorization code has been dispatched to{" "}
          <span className="font-semibold text-stone-800 dark:text-stone-200">
            {targetEmail}
          </span>
        </p>

        {/* Card Form */}
        <div className="mt-8 w-full rounded-2xl border border-stone-200 bg-white/80 p-6 sm:p-8 shadow-xl shadow-stone-200/50 backdrop-blur-xl dark:border-stone-800 dark:bg-stone-900/80 dark:shadow-stone-950/60">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 text-center mb-3">
                Security Code
              </label>

              {/* 6 Digit Inputs */}
              <div className="flex items-center justify-between gap-2">
                {code.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => (inputRefs.current[idx] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e.target)}
                    onPaste={idx === 0 ? handlePaste : undefined}
                    className="h-12 w-10 sm:h-14 sm:w-12 rounded-xl border border-stone-200 bg-stone-50/60 text-center text-lg sm:text-xl font-bold text-stone-950 shadow-inner transition-all focus:border-stone-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400/20 dark:border-stone-800 dark:bg-stone-950/60 dark:text-white dark:focus:border-stone-500 dark:focus:bg-stone-950"
                  />
                ))}
              </div>
            </div>

            {/* Resend Link & Timer */}
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
              <span>Didn&apos;t receive code?</span>
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResend}
                  className="flex items-center gap-1.5 font-semibold text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Resend Token</span>
                </button>
              ) : (
                <span className="text-stone-400 dark:text-stone-500 font-mono">
                  Resend in {countdown}s
                </span>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={!isComplete}
              isLoading={isLoading}
              rightIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
              className="group shadow-md py-3 text-sm font-semibold tracking-wide cursor-pointer"
            >
              Authorize Clearance
            </Button>
          </form>
        </div>

        {/* Navigation Links */}
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
            <span>Encrypted Token</span>
          </div>
          <span>&bull;</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
            <span>Single-Use Protocol</span>
          </div>
        </div>
      </main>
    </div>
  );
}
