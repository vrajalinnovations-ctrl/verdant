import { useState } from "react";
import {  Compass,MapPin,TrendingUp,ArrowUpRight,Sparkles,Check} from "lucide-react";
import neighborhoodsData from "../../data/neighborhoodsdata.json";
import { getHouseImage } from "../../data/houseimages";

export default function NeighborhoodsSection({
  header = neighborhoodsData.sectionHeader,
  neighborhoods = neighborhoodsData.neighborhoods,
  promo = neighborhoodsData.areaGuidePromo,
  onExplore = (neighborhood) => console.log("Explore neighborhood:", neighborhood),
  onRequestGuide = () => console.log("Request area guide triggered"),
  className = ""
}) {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(
    neighborhoods[0]?.id || "neigh-1"
  );
  const [guideRequested, setGuideRequested] = useState(false);

  const handleGuideClick = () => {
    onRequestGuide();
    setGuideRequested(true);
    setTimeout(() => setGuideRequested(false), 3000);
  };

  return (
    <section
      id="neighborhoods"
      className={`relative w-full border-t border-stone-200 bg-stone-50 py-20 text-stone-900 transition-colors duration-200 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3.5 py-1 text-xs font-semibold text-stone-800 shadow-sm dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
              <Compass className="h-3.5 w-3.5 text-stone-700 dark:text-stone-300" />
              <span>{header.badge}</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl dark:text-white">
              {header.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-400">
              {header.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
              Showing {neighborhoods.length} Premier Global Enclaves
            </span>
          </div>
        </div>

        {/* Neighborhood Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {neighborhoods.map((item) => {
            const isHoveredOrSelected = selectedNeighborhood === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setSelectedNeighborhood(item.id)}
                onClick={() => onExplore(item)}
                className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-stone-900 ${
                  isHoveredOrSelected
                    ? "border-stone-400 dark:border-stone-600"
                    : "border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700"
                }`}
              >
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden bg-stone-200 sm:h-80 dark:bg-stone-800">
                  <img
                    src={getHouseImage(item.image)}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Scrim for Legibility */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute left-5 top-5 right-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-700 bg-stone-950/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      <MapPin className="h-3 w-3 text-stone-400" />
                      <span>{item.region}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full border border-stone-700 bg-stone-900/80 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md">
                      <Sparkles className="h-3 w-3" />
                      <span>Index: {item.lifestyleScore}</span>
                    </span>
                  </div>

                  {/* Title & Tagline Over Image */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-stone-300 sm:text-sm">
                      {item.tagline}
                    </p>
                  </div>
                </div>

                {/* Content & Market Stats Body */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                    {item.description}
                  </p>

                  {/* Market Data Chips */}
                  <div className="mt-6 grid grid-cols-3 gap-3 border-y border-stone-200 py-4 text-center dark:border-stone-800">
                    <div className="border-r border-stone-200 pr-2 dark:border-stone-800">
                      <span className="block text-xs font-medium text-stone-500 dark:text-stone-400">
                        Avg. Home Value
                      </span>
                      <span className="mt-1 block text-sm font-bold text-stone-950 sm:text-base dark:text-white">
                        {item.avgPrice}
                      </span>
                    </div>

                    <div className="border-r border-stone-200 pr-2 dark:border-stone-800">
                      <span className="block text-xs font-medium text-stone-500 dark:text-stone-400">
                        YoY Growth
                      </span>
                      <div className="mt-1 flex items-center justify-center gap-1 text-sm font-bold text-emerald-600 sm:text-base dark:text-emerald-400">
                        <TrendingUp className="h-3.5 w-3.5" />
                        <span>{item.growth}</span>
                      </div>
                    </div>

                    <div>
                      <span className="block text-xs font-medium text-stone-500 dark:text-stone-400">
                        Active Estates
                      </span>
                      <span className="mt-1 block text-sm font-bold text-stone-950 sm:text-base dark:text-white">
                        {item.activeListings}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Tags & Action */}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.highlights.map((tag, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700 transition-colors dark:bg-stone-800 dark:text-stone-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-950 transition-colors group-hover:text-stone-700 dark:text-white dark:group-hover:text-stone-300">
                      <span>Explore Enclave</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Area Guide Download Banner */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm transition-colors dark:border-stone-800 dark:bg-stone-900 sm:p-12">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl dark:text-white">
              {promo.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              {promo.description}
            </p>

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={handleGuideClick}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-stone-950 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
              >
                {guideRequested ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-500" />
                    <span>Area Dossier Dispatched</span>
                  </>
                ) : (
                  <>
                    <span>{promo.buttonText}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
