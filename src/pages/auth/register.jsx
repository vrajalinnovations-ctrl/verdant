import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  Sun,
  Moon,
  Building,
  CheckCircle2
} from "lucide-react";
import Button from "../../components/ui/button";
import Badge from "../../components/ui/badge";
import { useTheme } from "../../context/themecontext";
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";

export default function Register() {
  const { toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    clientType: "private-collector",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-stone-50 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100 flex items-center justify-center p-6">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft gold aura */}
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/5" />
        {/* Soft emerald aura */}
        <div className="absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
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
      <main className="relative z-10 w-full max-w-lg flex flex-col items-center">
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
            Private Client Application
          </span>
        </Badge>

        <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-white text-center">
          Apply For Portfolio Access
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-stone-500 dark:text-stone-400 text-center max-w-sm">
          Join our invitation-only network of global collectors, architectural connoisseurs, and institutional investors.
        </p>

        {/* Card Form */}
        <div className="mt-8 w-full rounded-2xl border border-stone-200 bg-white/80 p-6 sm:p-8 shadow-xl shadow-stone-200/50 backdrop-blur-xl dark:border-stone-800 dark:bg-stone-900/80 dark:shadow-stone-950/60">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Field */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5"
              >
                Full Legal Name
              </label>
              <div className="relative flex items-center">
                <div className="pointer-events-none absolute left-3.5 text-stone-400">
                  <User className="h-4 w-4" />
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Lord Alexander Sterling"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50/50 py-2.5 pl-10 pr-4 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400/20 dark:border-stone-800 dark:bg-stone-950/50 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-950"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5"
              >
                Official Contact Email
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
                  placeholder="sterling@familyoffice.ch"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50/50 py-2.5 pl-10 pr-4 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400/20 dark:border-stone-800 dark:bg-stone-950/50 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-stone-600 dark:focus:bg-stone-950"
                />
              </div>
            </div>

            {/* Client Tier Selection */}
            <div>
              <label
                htmlFor="clientType"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5"
              >
                Client Classification
              </label>
              <div className="relative flex items-center">
                <div className="pointer-events-none absolute left-3.5 text-stone-400">
                  <Building className="h-4 w-4" />
                </div>
                <select
                  id="clientType"
                  name="clientType"
                  value={formData.clientType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50/50 py-2.5 pl-10 pr-4 text-sm text-stone-900 focus:border-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400/20 dark:border-stone-800 dark:bg-stone-950/50 dark:text-stone-100 dark:focus:border-stone-600 dark:focus:bg-stone-950"
                >
                  <option value="private-collector">Private Buyer / Trophy Home Collector</option>
                  <option value="family-office">Single / Multi-Family Office</option>
                  <option value="institutional-fund">Institutional Real Estate Fund</option>
                  <option value="architectural-trust">Architectural Trust / Heritage Investor</option>
                </select>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-1.5"
              >
                Confidential Passkey
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
                  value={formData.password}
                  onChange={handleChange}
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

            {/* Confidentiality Terms */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-stone-300 text-stone-900 focus:ring-stone-400 dark:border-stone-700 dark:bg-stone-800 dark:focus:ring-stone-500"
                />
                <span className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  I agree to the <span className="underline text-stone-800 dark:text-stone-200 font-medium">Non-Disclosure Agreement</span> and acknowledge that off-market estate coordinates remain confidential.
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
              disabled={!agreedToTerms}
              rightIcon={<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
              className="mt-4 group shadow-md py-3 text-sm font-semibold tracking-wide cursor-pointer"
            >
              Submit Application
            </Button>
          </form>
        </div>

        {/* Redirect to Login & Home */}
        <div className="mt-6 flex flex-col items-center gap-2 text-center text-xs text-stone-500 dark:text-stone-400">
          <p>
            Already accredited?{" "}
            <Link
              to="/login"
              className="font-semibold text-stone-900 hover:underline dark:text-stone-100"
            >
              Access Client Portal
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
            <span>Strict Discretion</span>
          </div>
          <span>&bull;</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-500" />
            <span>Encrypted Verification</span>
          </div>
        </div>
      </main>
    </div>
  );
}
