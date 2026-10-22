import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cpu, Compass, Sparkles, ShieldCheck, Leaf, Crown, CheckCircle2, ChevronRight, ArrowRight, Shield, Layers, Activity, Sliders, Check, X, FileText } from "lucide-react";
import Navbar1 from "../components/layout/navbar1";
import Footer1 from "../components/layout/footer1";
import SEO from "../components/ui/seo";
import featuresData from "../data/featuresdata.json";

// Map string icon names to Lucide icon components
const ICON_MAP = {
  Cpu: Cpu,
  Compass: Compass,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Leaf: Leaf,
  Crown: Crown
};

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState("All Features");
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);

  // Lock background scroll when feature modal is open
  useEffect(() => {
    if (selectedFeature) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [selectedFeature]);

  // Filter features based on active category
  const filteredFeatures =
    activeCategory === "All Features"
      ? featuresData.features
      : featuresData.features.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-200 dark:bg-stone-950 dark:text-stone-100">
      <SEO
        title="Architectural Standards & Features | Verdant Estates"
        description="Discover the engineering, intelligent automation, private wellness sanctuaries, and sovereign privacy standards built into every Verdant estate."
        canonical="/features"
      />

      <Navbar1 />

      {/* Hero Header & Breadcrumb */}
      <section className="relative border-b border-stone-200 bg-white/70 py-12 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/50 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-stone-500 dark:text-stone-400">
            <Link to="/" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-stone-900 dark:text-white font-semibold">Features & Engineering</span>
          </nav>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-3.5 py-1 text-xs font-semibold text-stone-800 dark:border-stone-800 dark:bg-stone-800 dark:text-stone-200">
                <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
                <span>{featuresData.header.badge}</span>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl dark:text-white">
                {featuresData.header.title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-400">
                {featuresData.header.description}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-6 border-t border-stone-200 pt-4 md:border-t-0 md:pt-0 dark:border-stone-800">
              {featuresData.stats.slice(0, 3).map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-bold text-stone-950 dark:text-white">{stat.value}</span>
                  <span className="text-xs text-stone-500 dark:text-stone-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Exploration Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-stone-200 bg-white p-3 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          {featuresData.categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  isActive
                    ? "bg-stone-950 text-white shadow-sm dark:bg-white dark:text-stone-950"
                    : "border border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300 hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-800/60 dark:text-stone-300 dark:hover:bg-stone-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredFeatures.map((feature) => {
            const IconComponent = ICON_MAP[feature.icon] || Sparkles;

            return (
              <div
                key={feature.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-600 dark:hover:shadow-stone-900"
              >
                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition-transform group-hover:scale-110 dark:bg-emerald-950/60 dark:text-emerald-400">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-6">
                    <span className="text-xs font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {feature.category}
                    </span>
                    <h3 className="mt-1 text-xl font-bold tracking-tight text-stone-950 group-hover:text-emerald-600 transition-colors dark:text-white dark:group-hover:text-emerald-400">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-stone-500 dark:text-stone-400">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {feature.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="mt-6 space-y-2.5 border-t border-stone-100 pt-5 dark:border-stone-800">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-8 border-t border-stone-100 pt-4 dark:border-stone-800">
                  <button
                    type="button"
                    onClick={() => setSelectedFeature(feature)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-50 py-2.5 text-xs font-semibold text-stone-800 transition-colors hover:border-stone-300 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700"
                  >
                    <span>View Technical Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Section */}
        <div className="mt-20 rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900 sm:p-12">
          <div className="max-w-2xl">
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:bg-stone-800 dark:text-stone-300">
              Comparative Analysis
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl dark:text-white">
              {featuresData.comparison.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              {featuresData.comparison.subtitle}
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-xs font-bold uppercase tracking-wider text-stone-500 dark:border-stone-800 dark:text-stone-400">
                  <th className="py-4 pr-6">Specification</th>
                  <th className="py-4 px-6 text-stone-500">Conventional High-End</th>
                  <th className="py-4 pl-6 text-emerald-600 dark:text-emerald-400">
                    The Verdant Standard
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-sm dark:divide-stone-800">
                {featuresData.comparison.rows.map((row, i) => (
                  <tr key={i} className="hover:bg-stone-50/60 dark:hover:bg-stone-800/40 transition-colors">
                    <td className="py-4 pr-6 font-semibold text-stone-950 dark:text-white">
                      {row.spec}
                    </td>
                    <td className="py-4 px-6 text-stone-500 dark:text-stone-400">
                      {row.conventional}
                    </td>
                    <td className="py-4 pl-6 font-medium text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{row.verdant}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Architectural Consultation Form / CTA */}
        <div className="mt-16 rounded-3xl border border-stone-200 bg-gradient-to-r from-stone-900 to-stone-950 p-8 text-white shadow-xl dark:border-stone-800 sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-700 bg-stone-800/80 px-3 py-1 text-xs font-medium text-emerald-400">
                <FileText className="h-3.5 w-3.5" />
                Technical Blueprints & Audits
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Request Complete Engineering Dossier
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base">
                Architectural blueprints, acoustic engineering reports, and smart automation schematics are available for client architects and prospective buyers.
              </p>
            </div>

            <div className="lg:col-span-5">
              {consultationSubmitted ? (
                <div className="flex items-center gap-2 rounded-2xl bg-emerald-950/80 p-5 text-sm font-medium text-emerald-300 border border-emerald-800">
                  <Check className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span>Your request has been received. Our chief engineering advisor will provide the documentation.</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setConsultationSubmitted(true);
                  }}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your professional email"
                    className="flex-1 rounded-xl border border-stone-700 bg-stone-800/90 px-4 py-3 text-xs text-white placeholder:text-stone-400 focus:border-white focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-white px-5 py-3 text-xs font-bold text-stone-950 transition-colors hover:bg-stone-100"
                  >
                    Request Dossier
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Modal */}
      {selectedFeature && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedFeature(null)}
          />

          {/* Modal Container */}
          <div
            data-lenis-prevent
            className="relative z-10 flex flex-col w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-2xl dark:border-stone-800 dark:bg-stone-900"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedFeature(null)}
              aria-label="Close modal"
              className="absolute right-5 top-5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Scrollable Content */}
            <div data-lenis-prevent className="flex-1 overflow-y-auto pr-1 no-scrollbar">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  {selectedFeature.category}
                </span>
                <span className="text-xs text-stone-400">•</span>
                <span className="text-xs font-medium text-stone-500">{selectedFeature.badge}</span>
              </div>

              <h3 className="mt-3 text-2xl font-bold text-stone-950 dark:text-white">
                {selectedFeature.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-stone-500 dark:text-stone-400">
                {selectedFeature.subtitle}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                {selectedFeature.description}
              </p>

              <div className="mt-6 border-t border-stone-200 pt-5 dark:border-stone-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Key Engineering Deliverables
                </h4>
                <ul className="mt-3 space-y-3">
                  {selectedFeature.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-200">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 shrink-0 flex items-center justify-end gap-3 border-t border-stone-200 pt-4 dark:border-stone-800">
              <Link
                to="/properties"
                onClick={() => setSelectedFeature(null)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-stone-950 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
              >
                <span>Browse Featured Residences</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer1 />
    </div>
  );
}
