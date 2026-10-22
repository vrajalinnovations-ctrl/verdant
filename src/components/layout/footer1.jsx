import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, Check } from "lucide-react";
import { useLenis } from "lenis/react";
import footerData from "../../data/footerdata.json";
const logoDark = "/logo/logo-dark.png";
const logoLight = "/logo/logo-light.png";

function InstagramIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 17a24 24 0 0 1 0-10 2 2 0 0 1 1.4-1.4 50 50 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24 24 0 0 1 0 10 2 2 0 0 1-1.4 1.4 50 50 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3v6Z" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer1({
  brandName = footerData.brandName,
  brandSubtitle = footerData.brandSubtitle,
  tagline = footerData.tagline,
  contact = footerData.contact,
  columns = footerData.columns,
  newsletter = footerData.newsletter,
  legal = footerData.legal,
  onSubscribe,
  className = ""
}) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const lenis = useLenis();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    if (onSubscribe) {
      onSubscribe(email);
    }
    setIsSubmitted(true);
    setEmail("");
  };

  const handleFooterNavClick = (e, href) => {
    if (!href) return;

    // Direct route link (e.g., "/properties", "/features")
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

    // Anchor hash link (e.g., "#about", "/#developments")
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
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`relative w-full border-t border-stone-200 bg-white text-stone-900 transition-colors duration-200 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 ${className}`}
    >
      {/* Top Newsletter & Advisory Banner */}
      <div className="border-b border-stone-200 dark:border-stone-800">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:bg-stone-900 dark:text-stone-300">
                {newsletter.badge}
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950 dark:text-white sm:text-3xl">
                {newsletter.title}
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {newsletter.description}
              </p>
            </div>

            <div className="lg:col-span-5">
              {isSubmitted ? (
                <div className="flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <Check className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>Thank you for subscribing. You have been added to our private register.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={newsletter.placeholder}
                      className="w-full rounded-lg border border-stone-300 bg-stone-50 py-2.5 pl-10 pr-4 text-sm text-stone-900 placeholder-stone-400 focus:border-stone-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:placeholder-stone-500 dark:focus:border-white dark:focus:ring-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
                  >
                    <span>{newsletter.buttonText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Links & Company Info */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand & Contact Column */}
          <div className="space-y-6 lg:col-span-4">
            <div>
              <a
                href="#"
                onClick={handleBrandClick}
                className="group inline-flex items-center gap-3 cursor-pointer text-2xl font-bold tracking-tight text-stone-950 dark:text-white"
              >
                <img
                  src={logoDark}
                  alt={`${brandName} ${brandSubtitle}`}
                  className="h-9 w-auto dark:hidden transition-transform duration-300 group-hover:scale-105"
                />
                <img
                  src={logoLight}
                  alt={`${brandName} ${brandSubtitle}`}
                  className="hidden h-9 w-auto dark:block transition-transform duration-300 group-hover:scale-105"
                />
                <span>
                  {brandName}
                  <span className="ms-1 font-light text-stone-500 dark:text-stone-400">
                    {brandSubtitle}
                  </span>
                </span>
              </a>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {tagline}
              </p>
            </div>

            <div className="space-y-3 text-sm text-stone-600 dark:text-stone-400">
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 transition-colors hover:text-stone-950 dark:hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-stone-500" />
                <span>{contact.phone}</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 transition-colors hover:text-stone-950 dark:hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-stone-500" />
                <span>{contact.email}</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-stone-500" />
                <span className="leading-snug">{contact.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-stone-600 transition-colors hover:border-stone-400 hover:bg-stone-100 hover:text-stone-950 dark:border-stone-800 dark:text-stone-400 dark:hover:border-stone-700 dark:hover:bg-stone-900 dark:hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-stone-600 transition-colors hover:border-stone-400 hover:bg-stone-100 hover:text-stone-950 dark:border-stone-800 dark:text-stone-400 dark:hover:border-stone-700 dark:hover:bg-stone-900 dark:hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-stone-600 transition-colors hover:border-stone-400 hover:bg-stone-100 hover:text-stone-950 dark:border-stone-800 dark:text-stone-400 dark:hover:border-stone-700 dark:hover:bg-stone-900 dark:hover:text-white"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 text-stone-600 transition-colors hover:border-stone-400 hover:bg-stone-100 hover:text-stone-950 dark:border-stone-800 dark:text-stone-400 dark:hover:border-stone-700 dark:hover:bg-stone-900 dark:hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((column, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-950 dark:text-white">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        onClick={(e) => handleFooterNavClick(e, link.href)}
                        className="cursor-pointer text-sm text-stone-600 transition-colors hover:text-stone-950 dark:text-stone-400 dark:hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-stone-200 dark:border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-stone-500 dark:text-stone-400 sm:flex-row lg:px-8">
          <p>{legal.copyright}</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {legal.links.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="transition-colors hover:text-stone-950 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
