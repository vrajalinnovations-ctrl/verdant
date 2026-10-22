import { useState } from "react";
import { Link } from "react-router-dom";
import { RefreshCw, Home,Phone,ShieldAlert,ShieldCheck,Sun,Moon,Activity,Server } from "lucide-react";
import Button from "../components/ui/button";
import Badge from "../components/ui/badge";
import SEO from "../components/ui/seo";
import { useTheme } from "../context/themecontext";
import navbarData from "../data/navbardata.json";
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";

export default function ServerError() {
  const { toggleTheme, isDark } = useTheme();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleReload = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 400);
  };

  const systemMetrics = [
    {
      label: "Vault Status",
      value: "Encrypted & Secured",
      icon: ShieldCheck,
      color: "text-emerald-500"
    },
    {
      label: "Diagnostic Code",
      value: "SYS_500_SRV_SYNC",
      icon: Activity,
      color: "text-amber-500"
    },
    {
      label: "Core Gateway",
      value: "Restoration in Progress",
      icon: Server,
      color: "text-stone-400"
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-stone-50 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100 flex flex-col justify-between">
      <SEO
        title="500 — System Maintenance"
        description="Our core infrastructure is undergoing architectural routine maintenance. All client escrow registries remain secure."
        noindex
      />
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft amber aura */}
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-rose-500/10 blur-3xl dark:bg-rose-500/5" />
        {/* Soft gold aura */}
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/5" />
        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-200/30 via-transparent to-stone-100/50 dark:from-stone-900/30 dark:via-transparent dark:to-stone-950/60" />
      </div>

      {/* Top Brand Bar */}
      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logoDark}
            alt="Verdant Estates"
            className="h-9 w-auto dark:hidden transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src={logoLight}
            alt="Verdant Estates"
            className="hidden h-9 w-auto dark:block transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-widest text-stone-950 uppercase dark:text-white">
              {navbarData.brandName || "VERDANT"}
            </span>
            <span className="text-xs tracking-widest text-stone-500 uppercase dark:text-stone-400">
              {navbarData.brandSubtitle || "ESTATES"}
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          {/* Theme switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-white/80 text-stone-700 shadow-sm backdrop-blur-sm transition-all hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-900/80 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Quick Concierge link */}
          <a
            href="tel:+18005550199"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-stone-700 shadow-sm backdrop-blur-sm transition hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-900/70 dark:text-stone-300 dark:hover:bg-stone-800"
          >
            <Phone className="h-3.5 w-3.5 text-amber-500" />
            <span>Emergency Advisory: {navbarData.phoneNumber || "+1 (800) 555-0199"}</span>
          </a>
        </div>
      </header>

      {/* Main 500 Hero Section */}
      <main className="relative z-10 mx-auto my-auto flex w-full max-w-4xl flex-col items-center px-6 py-12 text-center lg:px-8">
        {/* Status Pill Badge */}
        <Badge
          variant="outline"
          size="md"
          dot
          dotColor="bg-rose-500 animate-pulse"
          className="border-stone-300 bg-white/60 shadow-sm backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/60"
        >
          <span className="tracking-wider uppercase text-xs font-semibold text-stone-700 dark:text-stone-300">
            System Synchronization // 500
          </span>
        </Badge>

        {/* Sculptural 500 Display */}
        <div className="relative mt-4 select-none">
          <h1 className="text-8xl sm:text-9xl font-bold tracking-tighter leading-none bg-gradient-to-b from-stone-950 via-stone-700 to-stone-400 bg-clip-text text-transparent dark:from-white dark:via-stone-200 dark:to-stone-700 opacity-90 drop-shadow-sm">
            500
          </h1>
        
        </div>

        {/* Headline & Description */}
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl lg:text-4xl dark:text-white">
          Client Infrastructure Undergoing Maintenance
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-400">
          Our global property network and private advisory servers are momentarily synchronizing high-value portfolio data. Our engineering team is currently attending to this gateway.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            onClick={handleReload}
            variant="primary"
            size="lg"
            isLoading={isRefreshing}
            className="group shadow-md gap-2"
          >
            <RefreshCw className={`h-4 w-4 transition-transform duration-500 ${isRefreshing ? "animate-spin" : "group-hover:rotate-180"}`} />
            <span>Reconnect Gateway</span>
          </Button>

          <Link to="/">
            <Button
              variant="secondary"
              size="lg"
              className="gap-2 shadow-sm"
            >
              <Home className="h-4 w-4" />
              <span>Return to Portfolio</span>
            </Button>
          </Link>

          <a href="tel:+18005550199">
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Phone className="h-4 w-4 text-amber-500" />
              <span>Contact Private Advisory</span>
            </Button>
          </a>
        </div>

        {/* System Diagnostic Panel */}
        <div className="mt-12 w-full max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-stone-200 dark:bg-stone-800" />
            <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase dark:text-stone-500">
              Diagnostic Health Status
            </span>
            <div className="h-px w-12 bg-stone-200 dark:bg-stone-800" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {systemMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.label}
                  className="flex flex-col items-start rounded-xl border border-stone-200 bg-white/60 p-4 text-left shadow-sm backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/50"
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${metric.color}`} />
                    <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                      {metric.label}
                    </span>
                  </div>
                  <span className="mt-2 text-xs font-semibold text-stone-900 dark:text-stone-100">
                    {metric.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Luxury Security / Concierge Bottom Bar */}
      <footer className="relative z-20 border-t border-stone-200 bg-white/40 py-4 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-stone-500 sm:flex-row lg:px-8 dark:text-stone-400">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-amber-500" />
            <span>Encrypted Vault Standby &bull; Automated failover protocol active</span>
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} {navbarData.brandName || "VERDANT"} {navbarData.brandSubtitle || "ESTATES"}. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
