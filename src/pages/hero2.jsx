import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLenis } from "lenis/react";
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Compass,
  Search,
  SlidersHorizontal,
  Building,
  DollarSign
} from "lucide-react";
import Navbar1 from "../components/layout/navbar1";
import Button from "../components/ui/button";
import Badge from "../components/ui/badge";
import FeaturedProperties from "../components/sections/properties";
import DevelopmentsSection from "../components/sections/developments";
import NeighborhoodsSection from "../components/sections/neighborhoods";
import TestimonialsSection from "../components/sections/testimonials";
import AboutSection from "../components/sections/about";
import ScheduleViewingSection from "../components/sections/schedule";
import Footer1 from "../components/layout/footer1";
import { getHouseImage } from "../data/houseimages";

const FLAGSHIP_ESTATES = [
  {
    id: "solarium",
    name: "Villa Solarium & Maritime Terraces",
    location: "Saint-Jean-Cap-Ferrat, French Riviera",
    coordinates: "43.6892° N, 7.3328° E",
    price: "$16,800,000",
    beds: 6,
    baths: 7.5,
    sqft: "9,400 sq ft",
    architect: "Jean Nouvel Atelier",
    headline: "Architecture Sculpted By Mediterranean Horizon",
    description: "Suspended over private limestone cliffs, Villa Solarium integrates floor-to-ceiling thermal glass with cascading infinity pools and private deep-water mooring.",
    image: "1.jpg",
    tag: "Riviera Trophy Asset"
  },
  {
    id: "monolith",
    name: "The Glass Monolith Residence",
    location: "Red Mountain, Aspen, Colorado",
    coordinates: "39.1911° N, 106.8175° W",
    price: "$21,500,000",
    beds: 5,
    baths: 6.5,
    sqft: "11,200 sq ft",
    architect: "Olson Kundig",
    headline: "Alpine Grandeur Wrapped in Raw Steel & Glass",
    description: "An architectural tour de force featuring hydraulic glass walls, private subterranean wellness spa, heated cantilevered terraces, and 360-degree snowpack panoramas.",
    image: "2.jpg",
    tag: "High Alpine Reserve"
  },
  {
    id: "penthouse",
    name: "The Crown Sky Pavilion",
    location: "TriBeCa, Manhattan, New York",
    coordinates: "40.7163° N, 74.0086° W",
    price: "$28,400,000",
    beds: 4,
    baths: 5.5,
    sqft: "8,800 sq ft",
    architect: "Herzog & de Meuron",
    headline: "A Floating Sanctuary Above The Skyline",
    description: "Occupying the entire top three levels with private high-speed elevator, 3,000 sq ft wraparound sculpture terrace, bronze fireplaces, and double-height ceiling galleries.",
    image: "3.jpg",
    tag: "Metropolitan Pinnacle"
  }
];

export default function Hero2({
  brandName,
  brandSubtitle,
  navLinks,
  phoneNumber,
  renderNavbar = true
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedType, setSelectedType] = useState("All Estates");
  const [selectedBudget, setSelectedBudget] = useState("Any Range");
  const lenis = useLenis();

  const currentEstate = FLAGSHIP_ESTATES[currentIndex];

  // Auto-cycle through estates every 9 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FLAGSHIP_ESTATES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? FLAGSHIP_ESTATES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FLAGSHIP_ESTATES.length);
  };

  const handleScheduleViewing = () => {
    const el = document.getElementById("schedule") || document.getElementById("contact");
    if (lenis && el) {
      lenis.scrollTo(el, { offset: -70, duration: 1.4 });
    } else if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Cinematic Hero Master Viewport */}
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-stone-950 text-white">
        {/* Dynamic Background Image Layers with Smooth Dissolve */}
        {FLAGSHIP_ESTATES.map((estate, idx) => (
          <div
            key={estate.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
            style={{ backgroundImage: `url(${getHouseImage(estate.image)})` }}
          />
        ))}

        {/* Cinematic Vignette & Atmospheric Contrast Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/60" />

        {/* Navbar */}
        {renderNavbar && (
          <div className="relative z-30">
            <Navbar1
              brandName={brandName}
              brandSubtitle={brandSubtitle}
              navLinks={navLinks}
              phoneNumber={phoneNumber}
              ctaText="Schedule Viewing"
              onCtaClick={handleScheduleViewing}
              className="bg-stone-950/70 border-stone-800/80 backdrop-blur-xl"
            />
          </div>
        )}

        {/* Hero Central Content */}
        <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            {/* Left Column: Coordinates & Grand Narrative */}
            <div className="lg:col-span-8 flex flex-col items-start">
              {/* Coordinates Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <Badge
                  variant="glass"
                  size="md"
                  dot
                  dotColor="bg-emerald-400 animate-pulse"
                  className="border-white/20 bg-black/40 text-stone-200 backdrop-blur-md"
                >
                  <span className="tracking-widest uppercase text-xs font-semibold">
                    {currentEstate.coordinates}
                  </span>
                </Badge>

                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-0.5 text-xs font-medium tracking-wider text-amber-300 uppercase backdrop-blur-md">
                  {currentEstate.tag}
                </span>
              </div>

              {/* Dynamic Title */}
              <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                {currentEstate.headline}
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-stone-300 font-light">
                {currentEstate.description}
              </p>

              {/* Estate Primary Specs Bar */}
              <div className="mt-8 flex flex-wrap items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-stone-300">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span className="text-xs sm:text-sm font-medium">{currentEstate.location}</span>
                </div>
                <div className="h-3 w-px bg-white/20" />
                <div className="flex items-center gap-2 text-stone-300">
                  <Bed className="h-4 w-4 text-stone-400" />
                  <span className="text-xs sm:text-sm font-medium">{currentEstate.beds} Suites</span>
                </div>
                <div className="h-3 w-px bg-white/20" />
                <div className="flex items-center gap-2 text-stone-300">
                  <Bath className="h-4 w-4 text-stone-400" />
                  <span className="text-xs sm:text-sm font-medium">{currentEstate.baths} Baths</span>
                </div>
                <div className="h-3 w-px bg-white/20" />
                <div className="flex items-center gap-2 text-stone-300">
                  <Maximize2 className="h-4 w-4 text-stone-400" />
                  <span className="text-xs sm:text-sm font-medium">{currentEstate.sqft}</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  onClick={handleScheduleViewing}
                  variant="white"
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="shadow-xl shadow-stone-950/40 cursor-pointer"
                >
                  Request Private Dossier
                </Button>

                <Link to="/#properties">
                  <Button
                    variant="glass"
                    size="lg"
                    rightIcon={<Sparkles className="h-4 w-4 text-amber-400" />}
                    className="cursor-pointer"
                  >
                    View All Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Floating Trophy Asset Card */}
            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="rounded-3xl border border-white/15 bg-black/60 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                    Flagship Valuation
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-400">
                    <Compass className="h-3.5 w-3.5" />
                    <span>{currentEstate.architect}</span>
                  </div>
                </div>

                <div className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {currentEstate.price}
                </div>

                <div className="mt-4 h-px w-full bg-white/10" />

                <div className="mt-4 flex items-center justify-between text-xs text-stone-400">
                  <span>Current Showcase</span>
                  <span className="font-mono text-stone-200">
                    0{currentIndex + 1} / 0{FLAGSHIP_ESTATES.length}
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {FLAGSHIP_ESTATES.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === currentIndex
                          ? "bg-amber-400 shadow-sm shadow-amber-400/50"
                          : "bg-white/20 hover:bg-white/40"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Carousel Navigation Arrows */}
                <div className="mt-6 flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:bg-white hover:text-stone-950 cursor-pointer"
                      aria-label="Previous estate"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-all hover:bg-white hover:text-stone-950 cursor-pointer"
                      aria-label="Next estate"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  <span className="text-xs text-stone-400 font-medium">
                    Auto-cycling 9s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Curated Search Bar */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-10 lg:px-8">
          <div className="rounded-2xl border border-white/15 bg-black/60 p-4 shadow-2xl backdrop-blur-2xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 items-center">
              {/* Filter 1: Location */}
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
                <div className="flex flex-col w-full">
                  <span className="text-xs uppercase font-bold tracking-widest text-stone-400">
                    Destination
                  </span>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm font-semibold text-white focus:outline-none cursor-pointer"
                  >
                    <option value="All Locations" className="bg-stone-900 text-white">All Global Destinations</option>
                    <option value="French Riviera" className="bg-stone-900 text-white">French Riviera & Monaco</option>
                    <option value="Aspen" className="bg-stone-900 text-white">Aspen & Rocky Mountains</option>
                    <option value="Manhattan" className="bg-stone-900 text-white">Manhattan & Hamptons</option>
                    <option value="California" className="bg-stone-900 text-white">Beverly Hills & Montecito</option>
                  </select>
                </div>
              </div>

              {/* Filter 2: Typology */}
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">
                <Building className="h-4 w-4 text-emerald-400 shrink-0" />
                <div className="flex flex-col w-full">
                  <span className="text-xs uppercase font-bold tracking-widest text-stone-400">
                    Architectural Style
                  </span>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm font-semibold text-white focus:outline-none cursor-pointer"
                  >
                    <option value="All Estates" className="bg-stone-900 text-white">All Architectural Typologies</option>
                    <option value="Modernist Villa" className="bg-stone-900 text-white">Modernist Waterfront Villa</option>
                    <option value="Skyline Penthouse" className="bg-stone-900 text-white">Trophy Skyline Penthouse</option>
                    <option value="Heritage Estate" className="bg-stone-900 text-white">Country & Vineyard Estate</option>
                  </select>
                </div>
              </div>

              {/* Filter 3: Budget Range */}
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">
                <DollarSign className="h-4 w-4 text-amber-400 shrink-0" />
                <div className="flex flex-col w-full">
                  <span className="text-xs uppercase font-bold tracking-widest text-stone-400">
                    Capital Allocation
                  </span>
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm font-semibold text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Any Range" className="bg-stone-900 text-white">All Price Brackets</option>
                    <option value="$10M – $20M" className="bg-stone-900 text-white">$10M – $20M</option>
                    <option value="$20M – $40M" className="bg-stone-900 text-white">$20M – $40M</option>
                    <option value="$40M+" className="bg-stone-900 text-white">$40M+ Ultra Prime</option>
                  </select>
                </div>
              </div>

              {/* Search CTA */}
              <div className="flex items-center gap-2">
                <Link to="/#properties" className="w-full">
                  <Button
                    variant="accent"
                    size="md"
                    fullWidth
                    leftIcon={<Search className="h-4 w-4" />}
                    className="py-3 rounded-xl cursor-pointer"
                  >
                    Search Acquisitions
                  </Button>
                </Link>
                <Link to="/#properties">
                  <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-stone-300 hover:border-white/30 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                    title="Advanced Filters"
                    aria-label="Advanced Filters"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Page Sections */}
      <FeaturedProperties />
      <DevelopmentsSection />
      <NeighborhoodsSection />
      <TestimonialsSection />
      <AboutSection />
      <ScheduleViewingSection />
      <Footer1 />
    </div>
  );
}
