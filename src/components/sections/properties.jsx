import { useState } from "react";
import { MapPin, Bed, Bath, Maximize2, Heart, ArrowRight, Sparkles } from "lucide-react";
import propertiesData from "../../data/propertiesdata.json";
import { getHouseImage } from "../../data/houseimages";

export default function FeaturedProperties({
  header = propertiesData.sectionHeader,
  categories = propertiesData.categories,
  properties = propertiesData.properties,
  onPropertySelect = (property) => console.log("Selected property:", property),
  onViewAll = () => console.log("View all clicked"),
  className = ""
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredProperties =
    activeCategory === "All"
      ? properties
      : properties.filter((item) => item.category === activeCategory);

  return (
    <section
      id="properties"
      className={`relative w-full bg-stone-50 py-20 text-stone-900 transition-colors duration-200 dark:bg-stone-950 dark:text-stone-100 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3.5 py-1 text-xs font-semibold text-stone-800 shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>{header.badge}</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl dark:text-white">
              {header.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-400">
              {header.description}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                    isActive
                      ? "bg-stone-950 text-white shadow-sm dark:bg-white dark:text-stone-950"
                      : "border border-stone-200 bg-white text-stone-600 hover:border-stone-300 hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-600 dark:hover:bg-stone-800 dark:hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => {
            const isFav = !!favorites[property.id];

            return (
              <div
                key={property.id}
                onClick={() => onPropertySelect(property)}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-600 dark:hover:shadow-stone-900"
              >
                {/* Property Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-stone-200 sm:h-72 dark:bg-stone-800">
                  <img
                    src={getHouseImage(property.image)}
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient overlay for readability */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60" />

                  {/* Top Badge */}
                  {property.tag && (
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center rounded-full border border-stone-700 bg-stone-950/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                        {property.tag}
                      </span>
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    type="button"
                    onClick={(e) => toggleFavorite(property.id, e)}
                    aria-label={isFav ? "Remove from saved" : "Save property"}
                    className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-stone-200 bg-white/90 text-stone-700 shadow-sm backdrop-blur-md transition-colors hover:bg-white hover:text-rose-600 dark:border-stone-700 dark:bg-stone-950/80 dark:text-stone-300 dark:hover:border-stone-500 dark:hover:bg-stone-900 dark:hover:text-rose-400"
                  >
                    <Heart
                      className={`h-4 w-4 transition-colors ${
                        isFav
                          ? "fill-rose-500 text-rose-500"
                          : "text-stone-700 dark:text-stone-200"
                      }`}
                    />
                  </button>

                  {/* Price Tag Over Image */}
                  <div className="absolute bottom-4 left-4">
                    <span className="block text-xs font-medium uppercase tracking-wider text-stone-300">
                      Guide Price
                    </span>
                    <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {property.price}
                    </span>
                  </div>
                </div>

                {/* Property Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-stone-400">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-stone-400 dark:text-stone-500" />
                      <span>{property.location}</span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-stone-950 transition-colors group-hover:text-stone-700 sm:text-xl dark:text-white dark:group-hover:text-stone-300">
                      {property.title}
                    </h3>
                  </div>

                  {/* Specs & Action Row */}
                  <div className="mt-6 border-t border-stone-100 pt-4 dark:border-stone-800">
                    <div className="flex items-center justify-between gap-2 text-xs font-medium text-stone-600 dark:text-stone-400">
                      <div className="flex items-center gap-1.5">
                        <Bed className="h-4 w-4 text-stone-400 dark:text-stone-500" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="h-4 w-4 text-stone-400 dark:text-stone-500" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="h-4 w-4 text-stone-400 dark:text-stone-500" />
                        <span>{property.sqft}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
                        {property.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-stone-950 dark:text-white">
                        <span>Explore Residence</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p className="text-sm text-stone-600 dark:text-stone-400">
            Looking for something tailored? Explore our complete private catalog.
          </p>
          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
          >
            <span>View All 140+ Properties</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
