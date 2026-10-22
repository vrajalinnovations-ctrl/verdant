import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  Sun,
  Moon
} from "lucide-react";
import Button from "../../components/ui/button";
import Badge from "../../components/ui/badge";
import { useTheme } from "../../context/themecontext";
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";

export default function ForgotPassword() {
  const { toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/verify", { state: { email } });
    }, 600);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-stone-50 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100 flex items-center justify-center p-6">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft gold aura */}
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/5" />
        {/* Soft emerald aura */}
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
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
          dotColor="bg-amber-500 animate-pulse"
          className="border-stone-300 bg-white/60 shadow-sm backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/60"
        >
          <span className="tracking-wider uppercase text-xs font-semibold text-stone-700 dark:text-stone-300">
            Passkey Recovery
          </span>
        </Badge>

        <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-white text-center">
          Recover Vault Access
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-stone-500 dark:text-stone-400 text-center max-w-sm">
          Enter your registered investor email. We will transmit an encrypted one-time recovery token.
        </p>

        {/* Card Form */}
        <div className="mt-8 w-full rounded-2xl border border-stone-200 bg-white/80 p-6 sm:p-8 shadow-xl shadow-stone-200/50 backdrop-blur-xl dark:border-stone-800 dark:bg-stone-900/80 dark:shadow-stone-950/60">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5"
              >
                Registered Email Address
              </label>
              <div className="relative flex items-center">
                <div className="pointer-events-none absolute left-3.5 text-stone-400">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="investor@domain.com"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50/50 py-2.5 pl-10 pr-4 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400/20 dark:border-stone-800 dark:bg-stone-950/50 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-950"
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={isLoading}
              rightIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
              className="mt-4 group shadow-md py-3 text-sm font-semibold tracking-wide cursor-pointer"
            >
              Transmit Recovery Token
            </Button>
          </form>
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
      </main>
    </div>
  );
}
