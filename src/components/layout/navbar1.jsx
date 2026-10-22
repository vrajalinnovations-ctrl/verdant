import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone, Menu, X, Sun, Moon, Languages, User } from "lucide-react";
import { useLenis } from "lenis/react";
import Button from "../ui/button";
import navbarData from "../../data/navbardata.json";
import { useTheme } from "../../context/themecontext";
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";

/* eslint-disable-next-line react-refresh/only-export-components */
export const DEFAULT_NAV_LINKS = navbarData.navLinks;

export default function Navbar1({
  brandName = navbarData.brandName,
  brandSubtitle = navbarData.brandSubtitle,
  navLinks = navbarData.navLinks,
  phoneNumber = navbarData.phoneNumber,
  ctaText = navbarData.ctaText,
  onCtaClick,
  className = ""
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, dir, toggleDir, isDark, isRtl } = useTheme();
  const lenis = useLenis();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    if (!href) return;
    setMenuOpen(false);

    // If it's a page route like "/properties" or "/features"
    if (href.startsWith("/") && !href.startsWith("/#")) {
      e.preventDefault();
      navigate(href);
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.8 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Anchor link (e.g. "#properties", "/#developments")
    if (href.startsWith("#") || href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "").replace("#", "");

      if (location.pathname !== "/") {
        navigate(`/#${targetId}`);
        setTimeout(() => {
          let element = document.getElementById(targetId);
          if (!element && targetId === "sell") {
            element = document.getElementById("contact") || document.getElementById("schedule");
          }
          if (element) {
            if (lenis) {
              lenis.scrollTo(element, { offset: -70, duration: 1.2 });
            } else {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 150);
        return;
      }

      let element = document.getElementById(targetId);
      if (!element && targetId === "sell") {
        element = document.getElementById("contact") || document.getElementById("schedule");
      }
      if (lenis && element) {
        lenis.scrollTo(element, { offset: -70, duration: 1.4 });
      } else if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    }
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById("schedule") || document.getElementById("contact");
      if (lenis && el) {
        lenis.scrollTo(el, { offset: -70, duration: 1.4 });
      } else if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-30 border-b border-stone-200 bg-white/80 backdrop-blur-md transition-colors duration-200 dark:border-stone-800 dark:bg-stone-950/80 ${className}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-2">
          <a
            href="#"
            onClick={handleBrandClick}
            className="group flex items-center gap-2.5 cursor-pointer text-xl font-bold tracking-tight text-stone-950 dark:text-white"
          >
            <img
              src={logoDark}
              alt={`${brandName} ${brandSubtitle}`}
              className="h-8 w-auto dark:hidden transition-transform duration-300 group-hover:scale-105"
            />
            <img
              src={logoLight}
              alt={`${brandName} ${brandSubtitle}`}
              className="hidden h-8 w-auto dark:block transition-transform duration-300 group-hover:scale-105"
            />
            <span>
              {brandName}
              <span className="ms-1 font-light text-stone-500 dark:text-stone-400">
                {brandSubtitle}
              </span>
            </span>
          </a>
        </div>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.href;
            return (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-stone-200 text-stone-950 font-semibold dark:bg-stone-800 dark:text-white"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-stone-300 bg-stone-100 text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:text-stone-950 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-700 dark:hover:bg-stone-800 dark:hover:text-white"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-stone-700" />}
          </button>

          <button
            type="button"
            onClick={toggleDir}
            className="flex cursor-pointer items-center gap-1 rounded-lg border border-stone-300 bg-stone-100 px-2.5 py-1 text-xs font-semibold text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:text-stone-950 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-700 dark:hover:bg-stone-800 dark:hover:text-white"
            aria-label={`Switch direction to ${isRtl ? "LTR" : "RTL"}`}
            title={`Switch direction to ${isRtl ? "LTR" : "RTL"}`}
          >
            <Languages className="h-3.5 w-3.5" />
            <span>{dir.toUpperCase()}</span>
          </button>

          {phoneNumber && (
            <a
              href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
              className="ms-1 flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-950 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              {phoneNumber}
            </a>
          )}

          <Link
            to="/login"
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white"
          >
            <User className="h-3.5 w-3.5" />
            <span>Login</span>
          </Link>

          <Button
            variant="primary"
            size="sm"
            onClick={handleCta}
          >
            {ctaText}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-stone-300 bg-stone-100 text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:text-stone-950 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-700 dark:hover:bg-stone-800 dark:hover:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={toggleDir}
            className="flex h-8 cursor-pointer items-center px-2.5 rounded-lg border border-stone-300 bg-stone-100 text-xs font-bold text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:text-stone-950 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-700 dark:hover:bg-stone-800 dark:hover:text-white"
            aria-label="Toggle direction"
          >
            {dir.toUpperCase()}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ms-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-stone-200 bg-white p-6 md:hidden dark:border-stone-800 dark:bg-stone-900">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.href;
              return (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`cursor-pointer rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-stone-100 font-semibold text-stone-950 dark:bg-stone-800 dark:text-white"
                      : "text-stone-800 hover:bg-stone-100 hover:text-stone-950 dark:text-stone-200 dark:hover:bg-stone-800 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="mt-4 flex flex-col gap-2 border-t border-stone-200 pt-4 dark:border-stone-800">
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-stone-200 bg-stone-50 py-2.5 text-sm font-semibold text-stone-800 transition-colors hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-200 dark:hover:bg-stone-800"
              >
                <User className="h-4 w-4" />
                <span>Client Login</span>
              </Link>
              <Button
                variant="primary"
                fullWidth
                size="md"
                onClick={() => {
                  setMenuOpen(false);
                  handleCta();
                }}
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
