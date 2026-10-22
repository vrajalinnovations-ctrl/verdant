import { useState, useMemo, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Search,
  Grid,
  List,
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Heart,
  Sparkles,
  X,
  ChevronRight,
  Share2,
  Check,
  Calendar,
  Phone,
  Shield,
  RotateCcw,
  SlidersHorizontal,
  ArrowRight
} from "lucide-react";
import Navbar1 from "../components/layout/navbar1";
import Footer1 from "../components/layout/footer1";
import SEO from "../components/ui/seo";
import propertiesData from "../data/propertiesdata.json";
import { getHouseImage } from "../data/houseimages";

export default function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter and view state
  const initialCategory = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [priceFilter, setPriceFilter] = useState("all");
  const [bedFilter, setBedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'list'

  // Interactive state
  const [favorites, setFavorites] = useState({});
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeModalImage, setActiveModalImage] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync category state if URL parameter changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && cat !== activeCategory) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  // Lock background scroll when property modal is open
  useEffect(() => {
    if (selectedProperty) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [selectedProperty]);

  // Update URL search parameters when category changes
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  // Toggle favorite bookmark
  const toggleFavorite = (id, e) => {
    e?.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
    setPriceFilter("all");
    setBedFilter("all");
    setSortBy("featured");
    setSearchParams({});
  };

  // Filter and sort properties based on user selection
  const filteredProperties = useMemo(() => {
    return propertiesData.properties
      .filter((prop) => {
        // Category filter
        if (activeCategory !== "All" && prop.category !== activeCategory) {
          return false;
        }

        // Text search (matches title, location, or architectural description)
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchTitle = prop.title.toLowerCase().includes(query);
          const matchLoc = prop.location.toLowerCase().includes(query);
          const matchCat = prop.category.toLowerCase().includes(query);
          if (!matchTitle && !matchLoc && !matchCat) return false;
        }

        // Price range filter
        if (priceFilter === "under-8m" && prop.rawPrice >= 8000000) return false;
        if (priceFilter === "8m-12m" && (prop.rawPrice < 8000000 || prop.rawPrice > 12000000)) return false;
        if (priceFilter === "above-12m" && prop.rawPrice <= 12000000) return false;

        // Bedroom filter
        if (bedFilter === "4+" && prop.beds < 4) return false;
        if (bedFilter === "5+" && prop.beds < 5) return false;
        if (bedFilter === "6+" && prop.beds < 6) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.rawPrice - b.rawPrice;
        if (sortBy === "price-desc") return b.rawPrice - a.rawPrice;
        if (sortBy === "sqft-desc") return b.rawSqft - a.rawSqft;
        return 0; // Default featured order
      });
  }, [activeCategory, searchQuery, priceFilter, bedFilter, sortBy]);

  // Handle opening the details modal
  const openPropertyDetails = (property) => {
    setSelectedProperty(property);
    setActiveModalImage(property.image);
    setInquirySubmitted(false);
  };

  // Copy property link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-200 dark:bg-stone-950 dark:text-stone-100">
      <SEO
        title="Luxury Residences & Private Estates Portfolio | Verdant"
        description="Explore our handpicked collection of architectural trophy homes, waterfront estates, and sky penthouses available for private acquisition."
        canonical="/properties"
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
            <span className="text-stone-900 dark:text-white font-semibold">Properties</span>
          </nav>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-3.5 py-1 text-xs font-semibold text-stone-800 dark:border-stone-800 dark:bg-stone-800 dark:text-stone-200">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>Exclusive Private Catalog</span>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl dark:text-white">
                Curated Luxury Residences
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-400">
                Explore an exclusive selection of architectural masterworks, coastal estates, and sky penthouses worldwide.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-6 border-t border-stone-200 pt-4 md:border-t-0 md:pt-0 dark:border-stone-800">
              <div>
                <div className="text-2xl font-bold text-stone-950 dark:text-white">
                  {propertiesData.properties.length}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400">Prime Offerings</div>
              </div>
              <div className="h-8 w-px bg-stone-200 dark:bg-stone-800" />
              <div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-xs text-stone-500 dark:text-stone-400">Verified Estates</div>
              </div>
              <div className="h-8 w-px bg-stone-200 dark:bg-stone-800" />
              <div>
                <div className="text-2xl font-bold text-stone-950 dark:text-white">Global</div>
                <div className="text-xs text-stone-500 dark:text-stone-400">Acquisitions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Properties Content */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Filter Controls Bar */}
        <div className="space-y-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-center">
            {/* Search Input */}
            <div className="relative md:col-span-5">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, city, or style..."
                className="w-full rounded-xl border border-stone-200 bg-stone-50 py-2.5 pl-10 pr-9 text-sm text-stone-900 placeholder:text-stone-400 focus:border-stone-950 focus:bg-white focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-stone-400 dark:focus:bg-stone-800"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Price Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full rounded-xl border border-stone-200 bg-stone-50 py-2.5 px-3 text-sm text-stone-800 focus:border-stone-950 focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
              >
                <option value="all">All Price Ranges</option>
                <option value="under-8m">Under $8,000,000</option>
                <option value="8m-12m">$8,000,000 - $12,000,000</option>
                <option value="above-12m">$12,000,000 and Above</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-xl border border-stone-200 bg-stone-50 py-2.5 px-3 text-sm text-stone-800 focus:border-stone-950 focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="sqft-desc">Interior Sq Ft</option>
              </select>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center justify-end gap-1 md:col-span-2">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                  viewMode === "grid"
                    ? "border-stone-950 bg-stone-950 text-white dark:border-white dark:bg-white dark:text-stone-950"
                    : "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                aria-label="List view"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-colors ${
                  viewMode === "list"
                    ? "border-stone-950 bg-stone-950 text-white dark:border-white dark:bg-white dark:text-stone-950"
                    : "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Category Chips & Bedroom Filter */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-3 dark:border-stone-800">
            {/* Category selection */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="mr-1 text-xs font-medium text-stone-500 dark:text-stone-400">Category:</span>
              {propertiesData.categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-stone-950 text-white dark:bg-white dark:text-stone-950"
                        : "border border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-800/80 dark:text-stone-300 dark:hover:bg-stone-800"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Bedroom selection */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-stone-500 dark:text-stone-400">Bedrooms:</span>
              {["all", "4+", "5+", "6+"].map((bed) => (
                <button
                  key={bed}
                  type="button"
                  onClick={() => setBedFilter(bed)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                    bedFilter === bed
                      ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
                  }`}
                >
                  {bed === "all" ? "Any" : bed}
                </button>
              ))}

              {/* Reset button if any filter is active */}
              {(activeCategory !== "All" || searchQuery || priceFilter !== "all" || bedFilter !== "all") && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="ml-2 inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40 transition-colors"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between text-xs font-medium text-stone-500 dark:text-stone-400">
          <span>
            Showing <strong className="text-stone-900 dark:text-stone-100">{filteredProperties.length}</strong> of{" "}
            {propertiesData.properties.length} Available Residences
          </span>
          {activeCategory !== "All" && (
            <span className="rounded-md bg-stone-200/70 px-2 py-0.5 text-stone-700 dark:bg-stone-800 dark:text-stone-300">
              Filter: {activeCategory}
            </span>
          )}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="my-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center dark:border-stone-800 dark:bg-stone-900">
            <SlidersHorizontal className="h-10 w-10 text-stone-400" />
            <h3 className="mt-4 text-lg font-semibold text-stone-900 dark:text-white">
              No matching residences found
            </h3>
            <p className="mt-1 max-w-sm text-sm text-stone-500 dark:text-stone-400">
              Try adjusting your search criteria, price range, or category filter to discover available properties.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 rounded-xl bg-stone-950 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Properties Grid View */}
        {viewMode === "grid" && (
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => {
              const isFav = !!favorites[property.id];

              return (
                <div
                  key={property.id}
                  onClick={() => openPropertyDetails(property)}
                  className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-600 dark:hover:shadow-stone-900"
                >
                  {/* Property Image */}
                  <div className="relative h-64 w-full overflow-hidden bg-stone-200 sm:h-72 dark:bg-stone-800">
                    <img
                      src={getHouseImage(property.image)}
                      alt={property.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60" />

                    {/* Tag badge */}
                    {property.tag && (
                      <div className="absolute left-4 top-4">
                        <span className="inline-flex items-center rounded-full border border-stone-700/80 bg-stone-950/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                          {property.tag}
                        </span>
                      </div>
                    )}

                    {/* Category pill */}
                    <div className="absolute right-4 top-4">
                      <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-stone-900 backdrop-blur-md dark:bg-stone-900/90 dark:text-white">
                        {property.category}
                      </span>
                    </div>

                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <p className="text-xs uppercase tracking-wider text-stone-300 font-medium">Acquisition Price</p>
                      <p className="text-2xl font-bold text-white tracking-tight">{property.price}</p>
                    </div>

                    {/* Favorite Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(property.id, e)}
                      aria-label={isFav ? "Remove from wishlist" : "Save to wishlist"}
                      className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-stone-900/80 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-stone-900"
                    >
                      <Heart
                        className={`h-4 w-4 transition-colors ${
                          isFav ? "fill-rose-500 text-rose-500" : "text-stone-300"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Property Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
                        <MapPin className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>{property.location}</span>
                      </div>

                      <h3 className="mt-2 text-xl font-bold text-stone-950 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
                        {property.title}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                        {property.description}
                      </p>
                    </div>

                    {/* Quick Specs */}
                    <div className="mt-6 border-t border-stone-100 pt-4 dark:border-stone-800">
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="flex flex-col items-center justify-center rounded-lg bg-stone-50 py-2 dark:bg-stone-800/60">
                          <Bed className="h-4 w-4 text-stone-600 dark:text-stone-400 mb-1" />
                          <span className="font-semibold text-stone-900 dark:text-white">{property.beds}</span>
                          <span className="text-[10px] text-stone-500">Beds</span>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-lg bg-stone-50 py-2 dark:bg-stone-800/60">
                          <Bath className="h-4 w-4 text-stone-600 dark:text-stone-400 mb-1" />
                          <span className="font-semibold text-stone-900 dark:text-white">{property.baths}</span>
                          <span className="text-[10px] text-stone-500">Baths</span>
                        </div>
                        <div className="flex flex-col items-center justify-center rounded-lg bg-stone-50 py-2 dark:bg-stone-800/60">
                          <Maximize2 className="h-4 w-4 text-stone-600 dark:text-stone-400 mb-1" />
                          <span className="font-semibold text-stone-900 dark:text-white">{property.sqft.replace(" sq ft", "")}</span>
                          <span className="text-[10px] text-stone-500">Sq Ft</span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between text-xs font-semibold text-stone-700 dark:text-stone-300">
                        <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                          <span>View Full Dossier</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-stone-400 text-[11px]">Built {property.yearBuilt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Properties List View */}
        {viewMode === "list" && (
          <div className="mt-8 space-y-6">
            {filteredProperties.map((property) => {
              const isFav = !!favorites[property.id];

              return (
                <div
                  key={property.id}
                  onClick={() => openPropertyDetails(property)}
                  className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:border-stone-300 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900 md:flex-row"
                >
                  {/* Thumbnail */}
                  <div className="relative h-64 w-full md:h-auto md:w-80 shrink-0 overflow-hidden bg-stone-200 dark:bg-stone-800">
                    <img
                      src={getHouseImage(property.image)}
                      alt={property.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3">
                      <span className="rounded-full bg-stone-950/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md">
                        {property.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
                            <MapPin className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>{property.location}</span>
                          </div>
                          <h3 className="mt-1 text-xl font-bold text-stone-950 group-hover:text-emerald-600 transition-colors dark:text-white dark:group-hover:text-emerald-400">
                            {property.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-stone-950 dark:text-white">{property.price}</p>
                          <span className="text-[11px] text-stone-500">Off-Market Terms</span>
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                        {property.description}
                      </p>

                      {/* Amenities pills */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {property.amenities?.slice(0, 4).map((amenity, i) => (
                          <span
                            key={i}
                            className="rounded-md bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-700 dark:bg-stone-800 dark:text-stone-300"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer specs */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-stone-100 pt-4 dark:border-stone-800">
                      <div className="flex items-center gap-6 text-xs text-stone-600 dark:text-stone-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Bed className="h-4 w-4 text-stone-400" />
                          <strong>{property.beds}</strong> Beds
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Bath className="h-4 w-4 text-stone-400" />
                          <strong>{property.baths}</strong> Baths
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Maximize2 className="h-4 w-4 text-stone-400" />
                          <strong>{property.sqft}</strong>
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={(e) => toggleFavorite(property.id, e)}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 text-stone-600 transition-colors hover:border-stone-300 hover:bg-stone-100 dark:border-stone-800 dark:text-stone-300 dark:hover:bg-stone-800"
                        >
                          <Heart
                            className={`h-4 w-4 ${isFav ? "fill-rose-500 text-rose-500" : "text-stone-400"}`}
                          />
                        </button>
                        <button
                          type="button"
                          onClick={() => openPropertyDetails(property)}
                          className="rounded-xl bg-stone-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
                        >
                          View Specifications
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Private Off-Market Consultation Banner */}
        <div className="mt-16 rounded-3xl border border-stone-200 bg-gradient-to-r from-stone-900 to-stone-950 p-8 text-white shadow-xl dark:border-stone-800 sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-700 bg-stone-800/80 px-3 py-1 text-xs font-medium text-emerald-400">
                <Shield className="h-3.5 w-3.5" />
                Confidential Acquisitions
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Seeking a Confidential Off-Market Residence?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-300 sm:text-base">
                Over 40% of Verdant transactions occur privately under non-disclosure agreements. Register with our Senior Advisory Partners to receive confidential dossiers on unpublished private sanctuaries.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              <a
                href="#schedule"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("schedule") || document.getElementById("contact");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100"
              >
                <Calendar className="h-4 w-4" />
                <span>Private Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Property Detail Modal */}
      {selectedProperty && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/75 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProperty(null)}
          />

          {/* Modal Container: Constrained to screen height with smooth internal scrolling */}
          <div
            data-lenis-prevent
            className="relative z-10 flex flex-col w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200 bg-white shadow-2xl dark:border-stone-800 dark:bg-stone-900"
          >
            {/* Modal Header Actions (Always accessible at top) */}
            <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                aria-label="Share property link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-950/70 text-white backdrop-blur-md transition-colors hover:bg-stone-950"
              >
                {copiedLink ? <Check className="h-4 w-4 text-emerald-400" /> : <Share2 className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={() => setSelectedProperty(null)}
                aria-label="Close modal"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-950/70 text-white backdrop-blur-md transition-colors hover:bg-stone-950"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Modal Content: Images, Specs, Narrative & Inquiry Form */}
            <div
              data-lenis-prevent
              className="flex-1 overflow-y-auto overscroll-contain no-scrollbar"
            >
              {/* Main Image Header */}
              <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-stone-200 dark:bg-stone-800">
                <img
                  src={getHouseImage(activeModalImage || selectedProperty.image)}
                  alt={selectedProperty.title}
                  className="h-full w-full object-cover transition-all duration-500"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-stone-900 backdrop-blur-md dark:bg-stone-900/95 dark:text-white">
                      {selectedProperty.category}
                    </div>
                    <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      {selectedProperty.title}
                    </h2>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-stone-300">
                      <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{selectedProperty.location}</span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <div className="text-[11px] uppercase tracking-wider text-stone-300">Listed At</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">{selectedProperty.price}</div>
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery Row */}
              {selectedProperty.gallery && selectedProperty.gallery.length > 1 && (
                <div className="flex gap-2 border-b border-stone-200 bg-stone-100 p-3 dark:border-stone-800 dark:bg-stone-950/60 overflow-x-auto no-scrollbar">
                  {selectedProperty.gallery.map((imgKey, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveModalImage(imgKey)}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        (activeModalImage || selectedProperty.image) === imgKey
                          ? "border-emerald-500 scale-105"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={getHouseImage(imgKey)} alt={`Thumbnail ${idx + 1}`} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Modal Body Info */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Architecture Summary */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                    Architectural Narrative
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                    {selectedProperty.description}
                  </p>
                </div>

                {/* Specifications Matrix */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5 text-center dark:border-stone-800 dark:bg-stone-800/40">
                    <span className="text-xs text-stone-500">Bedrooms</span>
                    <p className="mt-1 text-base font-bold text-stone-950 dark:text-white">{selectedProperty.beds} Suites</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5 text-center dark:border-stone-800 dark:bg-stone-800/40">
                    <span className="text-xs text-stone-500">Bathrooms</span>
                    <p className="mt-1 text-base font-bold text-stone-950 dark:text-white">{selectedProperty.baths} Baths</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5 text-center dark:border-stone-800 dark:bg-stone-800/40">
                    <span className="text-xs text-stone-500">Living Space</span>
                    <p className="mt-1 text-base font-bold text-stone-950 dark:text-white">{selectedProperty.sqft}</p>
                  </div>
                  <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5 text-center dark:border-stone-800 dark:bg-stone-800/40">
                    <span className="text-xs text-stone-500">Lot & Grounds</span>
                    <p className="mt-1 text-base font-bold text-stone-950 dark:text-white">{selectedProperty.lotSize || "Private Parcel"}</p>
                  </div>
                </div>

                {/* Bespoke Amenities */}
                {selectedProperty.amenities && (
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                      Bespoke In-Residence Amenities
                    </h4>
                    <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {selectedProperty.amenities.map((amenity, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-lg border border-stone-200 bg-stone-50/50 px-3 py-2 text-xs font-medium text-stone-800 dark:border-stone-800 dark:bg-stone-800/30 dark:text-stone-200"
                        >
                          <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Inquiry Form */}
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-800/40">
                  <h4 className="text-sm font-bold text-stone-950 dark:text-white">
                    Schedule Private Walkthrough
                  </h4>
                  <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                    Direct inquiry to the dedicated listing director for {selectedProperty.title}.
                  </p>

                  {inquirySubmitted ? (
                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-4 text-xs font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Your private viewing inquiry has been registered. An estate director will contact you promptly.</span>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setInquirySubmitted(true);
                      }}
                      className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
                    >
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        className="rounded-xl border border-stone-300 bg-white px-3.5 py-2 text-xs text-stone-900 focus:border-stone-950 focus:outline-none dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Private Email Address"
                        className="rounded-xl border border-stone-300 bg-white px-3.5 py-2 text-xs text-stone-900 focus:border-stone-950 focus:outline-none dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
                      />
                      <input
                        type="tel"
                        placeholder="Direct Telephone Number"
                        className="rounded-xl border border-stone-300 bg-white px-3.5 py-2 text-xs text-stone-900 focus:border-stone-950 focus:outline-none dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
                      />
                      <button
                        type="submit"
                        className="rounded-xl bg-stone-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
                      >
                        Request Confidential Tour
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Pinned Modal Footer */}
            <div className="shrink-0 flex items-center justify-between border-t border-stone-200 bg-stone-50 px-6 py-3.5 dark:border-stone-800 dark:bg-stone-950">
              <a
                href="tel:+18005550199"
                className="flex items-center gap-2 text-xs font-medium text-stone-600 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Concierge: +1 (800) 555-0199</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedProperty(null)}
                className="rounded-xl border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-800 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer1 />
    </div>
  );
}
