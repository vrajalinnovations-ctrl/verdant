import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Phone,
  Sparkles,
  Building2,
  Waves,
  Trees,
  Sun,
  Moon,
  ShieldCheck,
  ArrowUpRight
} from "lucide-react";
import Button from "../components/ui/button";
import Badge from "../components/ui/badge";
import { useTheme } from "../context/themecontext";
import navbarData from "../data/navbardata.json";
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const { toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/");
    }
  };

  const curatedPortfolios = [
    {
      title: "Trophy Penthouses",
      subtitle: "Panoramic skyline sanctuaries",
      icon: Building2,
      href: "/#properties"
    },
    {
      title: "Coastal Sanctuaries",
      subtitle: "Private beachfronts & ocean havens",
      icon: Waves,
      href: "/#properties"
    },
    {
      title: "Country Estates",
      subtitle: "Historic vineyards & rolling acreage",
      icon: Trees,
      href: "/#properties"
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-stone-50 text-stone-900 transition-colors duration-300 dark:bg-stone-950 dark:text-stone-100 flex flex-col justify-between">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft gold aura */}
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-400/5" />
        {/* Soft emerald aura */}
        <div className="absolute top-1/3 -left-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
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
            <span>Private Desk: {navbarData.phoneNumber || "+1 (800) 555-0199"}</span>
          </a>
        </div>
      </header>

      {/* Main 404 Hero Section */}
      <main className="relative z-10 mx-auto my-auto flex w-full max-w-4xl flex-col items-center px-6 py-12 text-center lg:px-8">
        {/* Status Pill Badge */}
        <Badge
          variant="outline"
          size="md"
          dot
          dotColor="bg-amber-500 animate-pulse"
          className="border-stone-300 bg-white/60 shadow-sm backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/60"
        >
          <span className="tracking-wider uppercase text-xs font-semibold text-stone-700 dark:text-stone-300">
            Coordinates Unlisted // 404
          </span>
        </Badge>

        {/* Sculptural 404 Display */}
        <div className="relative mt-4 select-none">
          <h1 className="text-8xl sm:text-9xl font-bold tracking-tighter leading-none bg-gradient-to-b from-stone-950 via-stone-700 to-stone-400 bg-clip-text text-transparent dark:from-white dark:via-stone-200 dark:to-stone-700 opacity-90 drop-shadow-sm">
            404
          </h1>
        </div>

        {/* Headline & Description */}
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl lg:text-4xl dark:text-white">
          This Architectural Residence Is Undiscovered
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-400">
          The property, wing, or portfolio address you are trying to view has been retired, privately archived, or relocated within our global register.
        </p>

        {/* Quick Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-8 flex w-full max-w-lg items-center rounded-2xl border border-stone-200 bg-white/90 p-1.5 shadow-lg shadow-stone-200/40 backdrop-blur-xl transition-all focus-within:border-stone-400 focus-within:ring-2 focus-within:ring-stone-400/20 dark:border-stone-800 dark:bg-stone-900/90 dark:shadow-stone-950/50 dark:focus-within:border-stone-600"
        >
          <div className="flex items-center pl-3.5 pr-2 text-stone-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by neighborhood, villa name, or ID..."
            className="w-full bg-transparent text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none dark:text-stone-100 dark:placeholder:text-stone-500"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="rounded-xl font-semibold shadow-sm"
          >
            Locate
          </Button>
        </form>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/">
            <Button
              variant="primary"
              size="lg"
              className="group shadow-md gap-2"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Return to Main Portfolio</span>
            </Button>
          </Link>

          <a href="/#properties">
            <Button
              variant="secondary"
              size="lg"
              className="gap-2 shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span>Explore Featured Estates</span>
            </Button>
          </a>

          <a href="/#contact">
            <Button
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Phone className="h-4 w-4" />
              <span>Schedule Concierge Call</span>
            </Button>
          </a>
        </div>

        {/* Curated Alternatives Mini-Cards */}
        <div className="mt-12 w-full">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-stone-200 dark:bg-stone-800" />
            <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase dark:text-stone-500">
              Alternative Premier Portfolios
            </span>
            <div className="h-px w-12 bg-stone-200 dark:bg-stone-800" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {curatedPortfolios.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group relative flex flex-col items-start rounded-xl border border-stone-200 bg-white/60 p-4 text-left shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white/90 hover:shadow-md dark:border-stone-800 dark:bg-stone-900/50 dark:hover:border-stone-700 dark:hover:bg-stone-900/90"
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-100 text-stone-800 transition-colors group-hover:bg-amber-400 group-hover:text-stone-950 dark:bg-stone-800 dark:text-stone-200 dark:group-hover:bg-amber-400 dark:group-hover:text-stone-950">
                      <Icon className="h-4 w-4" />
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-stone-900 dark:group-hover:text-white" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-stone-900 dark:text-stone-100">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 line-clamp-1">
                    {item.subtitle}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </main>

      {/* Luxury Security / Concierge Bottom Bar */}
      <footer className="relative z-20 border-t border-stone-200 bg-white/40 py-4 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-stone-500 sm:flex-row lg:px-8 dark:text-stone-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>Private Client Reserve &bull; Encrypted Institutional Advisory</span>
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} {navbarData.brandName || "VERDANT"} {navbarData.brandSubtitle || "ESTATES"}. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
