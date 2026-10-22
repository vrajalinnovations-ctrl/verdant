import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Sun, Moon, CheckCircle2 } from "lucide-react";
import Button from "../../components/ui/button";
import Badge from "../../components/ui/badge";
import SEO from "../../components/ui/seo";
import { useTheme } from "../../context/themecontext";
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";

export default function Login() {
  const { toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-stone-50 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100 flex items-center justify-center p-6">
      <SEO
        title="Client Portal Login"
        description="Access your confidential real estate portfolio, saved acquisitions, and private off-market invitations with Verdant Estates."
        canonical="/login"
      />
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft gold aura */}
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/5" />
        {/* Soft emerald aura */}
        <div className="absolute bottom-12 -right-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
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

      {/* Main Authentication Card */}
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
            Private Client Portal
          </span>
        </Badge>

        <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-white text-center">
          Access Your Portfolio
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-stone-500 dark:text-stone-400 text-center max-w-sm">
          Enter your accredited investor credentials to view off-market acquisitions and private architectural reserves.
        </p>

        {/* Card Form */}
        <div className="mt-8 w-full rounded-2xl border border-stone-200 bg-white/80 p-6 sm:p-8 shadow-xl shadow-stone-200/50 backdrop-blur-xl dark:border-stone-800 dark:bg-stone-900/80 dark:shadow-stone-950/60">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5"
              >
                Client Email
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="investor@domain.com"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50/50 py-2.5 pl-10 pr-4 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400/20 dark:border-stone-800 dark:bg-stone-950/50 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-950"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300"
                >
                  Passkey
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-amber-600 hover:text-amber-500 dark:text-amber-400 dark:hover:text-amber-300 transition-colors"
                >
                  Forgot passkey?
                </Link>
              </div>
              <div className="relative flex items-center">
                <div className="pointer-events-none absolute left-3.5 text-stone-400">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
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

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-400 dark:border-stone-700 dark:bg-stone-800 dark:focus:ring-stone-500"
                />
                <span className="text-xs text-stone-600 dark:text-stone-400">
                  Trust this device for 30 days
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={isLoading}
              rightIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
              className="mt-4 group shadow-md py-3 text-sm font-semibold tracking-wide cursor-pointer"
            >
              Unlock Vault
            </Button>
          </form>

          {/* Institutional SSO Divider */}
          <div className="relative my-6 flex items-center justify-center">
            <div className="h-px w-full bg-stone-200 dark:bg-stone-800" />
            <span className="absolute bg-white px-3 text-xs uppercase tracking-widest text-stone-400 dark:bg-stone-900 dark:text-stone-500">
              Institutional SSO
            </span>
          </div>

          {/* Social Sign-in Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-50/60 py-2.5 px-4 text-xs font-semibold text-stone-700 shadow-sm transition-all hover:bg-white hover:border-stone-300 dark:border-stone-800 dark:bg-stone-950/60 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:border-stone-700"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.24 10.285V13.4h6.887C18.2 16.27 15.65 18 12.24 18c-3.32 0-6-2.68-6-6s2.68-6 6-6c1.47 0 2.82.53 3.86 1.41l2.36-2.36C16.92 3.52 14.72 2.7 12.24 2.7 7.14 2.7 3 6.84 3 12s4.14 9.3 9.24 9.3c5.34 0 8.87-3.75 8.87-9.03 0-.6-.06-1.19-.18-1.985H12.24z"
                />
              </svg>
              <span>Google SSO</span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-50/60 py-2.5 px-4 text-xs font-semibold text-stone-700 shadow-sm transition-all hover:bg-white hover:border-stone-300 dark:border-stone-800 dark:bg-stone-950/60 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:border-stone-700"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.98.6-2.61 1.34-.56.64-1.05 1.71-.92 2.74 1.01.08 2.01-.5 2.61-1.23z" />
              </svg>
              <span>Apple ID</span>
            </button>
          </div>
        </div>

        {/* Redirect to Register & Home */}
        <div className="mt-6 flex flex-col items-center gap-2 text-center text-xs text-stone-500 dark:text-stone-400">
          <p>
            Not yet accredited?{" "}
            <Link
              to="/register"
              className="font-semibold text-stone-900 hover:underline dark:text-stone-100"
            >
              Apply for Client Membership
            </Link>
          </p>
          <Link
            to="/"
            className="text-stone-400 hover:text-stone-700 dark:text-stone-500 dark:hover:text-stone-300 transition-colors"
          >
            &larr; Return to Homepage
          </Link>
        </div>

        {/* Security badges */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-stone-400 dark:text-stone-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span>256-Bit SSL Secured</span>
          </div>
          <span>&bull;</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
            <span>Private Reserve Protocol</span>
          </div>
        </div>
      </main>
    </div>
  );
}
