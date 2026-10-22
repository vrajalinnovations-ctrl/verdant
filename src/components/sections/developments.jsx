import { useState } from "react";
import {
  Building2,
  Calendar,
  Layers,
  ArrowUpRight,
  Download,
  ShieldCheck,
  Check,
  MapPin
} from "lucide-react";
import developmentsData from "../../data/developmentsdata.json";
import { getHouseImage } from "../../data/houseimages";

export default function DevelopmentsSection({
  header = developmentsData.sectionHeader,
  developments = developmentsData.developments,
  consultation = developmentsData.consultationBanner,
  onInquire = (dev) => console.log("Inquire development:", dev),
  onDownload = (dev) => console.log("Download factsheet:", dev),
  className = ""
}) {
  const [selectedId, setSelectedId] = useState(developments[0]?.id || "dev-1");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const activeDev =
    developments.find((d) => d.id === selectedId) || developments[0];

  const handleDownloadClick = (dev) => {
    onDownload(dev);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section
      id="developments"
      className={`relative w-full border-t border-stone-200 bg-white py-20 text-stone-900 transition-colors duration-200 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-3.5 py-1 text-xs font-semibold text-stone-800 shadow-sm dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200">
              <Building2 className="h-3.5 w-3.5 text-stone-700 dark:text-stone-300" />
              <span>{header.badge}</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl dark:text-white">
              {header.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-400">
              {header.description}
            </p>
          </div>

          {/* Development Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {developments.map((dev) => {
              const isActive = dev.id === selectedId;
              return (
                <button
                  key={dev.id}
                  type="button"
                  onClick={() => setSelectedId(dev.id)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                    isActive
                      ? "bg-stone-950 text-white shadow-sm dark:bg-white dark:text-stone-950"
                      : "border border-stone-200 bg-stone-50 text-stone-600 hover:border-stone-300 hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300 dark:hover:border-stone-600 dark:hover:bg-stone-800 dark:hover:text-white"
                  }`}
                >
                  {dev.name.split(" ")[0]} {dev.name.split(" ")[1]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Development Showcase */}
        {activeDev && (
          <div className="mt-12 overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 shadow-sm transition-all duration-300 dark:border-stone-800 dark:bg-stone-950">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Media Imagery Column */}
              <div className="relative min-h-80 overflow-hidden lg:col-span-7 lg:min-h-full">
                <img
                  src={getHouseImage(activeDev.heroImage)}
                  alt={activeDev.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent lg:hidden" />

                <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-stone-700 bg-stone-950/80 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {activeDev.status}
                  </span>
                  <span className="rounded-full border border-stone-700 bg-stone-900/80 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md">
                    {activeDev.availability}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {activeDev.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-stone-300">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{activeDev.location}</span>
                  </p>
                </div>
              </div>

              {/* Development Details Column */}
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-5">
                <div>
                  <div className="hidden lg:block">
                    <div className="flex items-center gap-2 text-xs font-medium text-stone-500 dark:text-stone-400">
                      <MapPin className="h-3.5 w-3.5 text-stone-400 dark:text-stone-500" />
                      <span>{activeDev.location}</span>
                    </div>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl dark:text-white">
                      {activeDev.name}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {activeDev.description}
                  </p>

                  {/* Architecture & Timeline Meta */}
                  <div className="mt-6 grid grid-cols-2 gap-4 border-y border-stone-200 py-5 dark:border-stone-800">
                    <div>
                      <span className="block text-xs font-medium text-stone-500 dark:text-stone-400">
                        Lead Architect
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-stone-950 dark:text-white">
                        {activeDev.architect}
                      </span>
                    </div>

                    <div>
                      <span className="block text-xs font-medium text-stone-500 dark:text-stone-400">
                        Estimated Completion
                      </span>
                      <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-stone-950 dark:text-white">
                        <Calendar className="h-4 w-4 text-stone-500" />
                        <span>{activeDev.completion}</span>
                      </div>
                    </div>

                    <div>
                      <span className="block text-xs font-medium text-stone-500 dark:text-stone-400">
                        Units / Scale
                      </span>
                      <div className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-stone-950 dark:text-white">
                        <Layers className="h-4 w-4 text-stone-500" />
                        <span>{activeDev.unitsCount}</span>
                      </div>
                    </div>

                    <div>
                      <span className="block text-xs font-medium text-stone-500 dark:text-stone-400">
                        Pricing Tier
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-stone-950 dark:text-white">
                        From {activeDev.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Curated Amenities */}
                  <div className="mt-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-950 dark:text-white">
                      Key Development Amenities
                    </span>
                    <ul className="mt-3 space-y-2.5">
                      {activeDev.amenities.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2.5 text-xs text-stone-600 sm:text-sm dark:text-stone-300"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-900 dark:bg-stone-800 dark:text-stone-200">
                            <Check className="h-3 w-3 stroke-2" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => onInquire(activeDev)}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
                  >
                    <span>Request Private Dossier</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDownloadClick(activeDev)}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:border-stone-500 dark:hover:bg-stone-800 dark:hover:text-white"
                  >
                    {downloadSuccess ? (
                      <>
                        <ShieldCheck className="h-4 w-4 text-emerald-500" />
                        <span>Dossier Sent</span>
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4 text-stone-500" />
                        <span>Floor Plans (PDF)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Landmark Developments Comparison Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {developments.map((dev) => {
            const isSelected = dev.id === selectedId;

            return (
              <div
                key={dev.id}
                onClick={() => setSelectedId(dev.id)}
                className={`group cursor-pointer rounded-2xl border p-5 transition-all duration-300 ${
                  isSelected
                    ? "border-stone-950 bg-stone-100 shadow-md dark:border-white dark:bg-stone-800"
                    : "border-stone-200 bg-stone-50 hover:border-stone-300 hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-950 dark:hover:border-stone-600 dark:hover:bg-stone-900"
                }`}
              >
                <div className="relative h-44 w-full overflow-hidden rounded-xl bg-stone-200 dark:bg-stone-800">
                  <img
                    src={getHouseImage(dev.heroImage)}
                    alt={dev.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-stone-950/80 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-md">
                    {dev.status}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                    <span>{dev.location}</span>
                    <span>{dev.completion}</span>
                  </div>

                  <h4 className="mt-1 text-base font-bold text-stone-950 group-hover:text-stone-700 dark:text-white dark:group-hover:text-stone-200">
                    {dev.name}
                  </h4>

                  <div className="mt-3 flex items-center justify-between border-t border-stone-200/80 pt-3 text-xs dark:border-stone-800">
                    <span className="font-semibold text-stone-900 dark:text-white">
                      From {dev.startingPrice}
                    </span>
                    <span className="font-medium text-stone-600 dark:text-stone-400">
                      {dev.availability}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Private Advisory Banner */}
        <div className="mt-16 rounded-2xl border border-stone-200 bg-stone-100 p-8 text-center transition-colors dark:border-stone-800 dark:bg-stone-950 sm:p-12">
          <h3 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl dark:text-white">
            {consultation.title}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {consultation.description}
          </p>
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => onInquire(activeDev)}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-stone-950 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
            >
              <span>{consultation.ctaText}</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
