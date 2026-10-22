import { useLenis } from "lenis/react";
import Navbar1, { DEFAULT_NAV_LINKS } from "../components/layout/navbar1";
import Badge from "../components/ui/badge";
import HeroSearchBox from "../components/sections/search";
import HeroPropertyCard from "../components/sections/herocard";
import HeroMetrics from "../components/sections/metrics";
import HeroTrustFooter from "../components/sections/trust";
import Showcase1 from "../components/sections/showcase";
import FeaturedProperties from "../components/sections/properties";
import DevelopmentsSection from "../components/sections/developments";
import NeighborhoodsSection from "../components/sections/neighborhoods";
import TestimonialsSection from "../components/sections/testimonials";
import AboutSection from "../components/sections/about";
import ScheduleViewingSection from "../components/sections/schedule";
import Footer1 from "../components/layout/footer1";
import SEO from "../components/ui/seo";
import heroData from "../data/herodata.json";

export { Navbar1, DEFAULT_NAV_LINKS, HeroSearchBox, HeroPropertyCard, HeroMetrics, HeroTrustFooter, Showcase1, FeaturedProperties, DevelopmentsSection, NeighborhoodsSection, TestimonialsSection, AboutSection, ScheduleViewingSection, Footer1, SEO };

export default function Hero1({
  brandName,
  brandSubtitle,
  navLinks,
  phoneNumber,
  badgeText = heroData.heroContent.badgeText,
  headline = heroData.heroContent.headline,
  description = heroData.heroContent.description,
  properties = heroData.properties,
  metrics = heroData.metrics,
  searchTabs = heroData.searchTabs,
  propertyTypes = heroData.propertyTypes,
  priceRanges = heroData.priceRanges,
  availableCount = heroData.heroContent.availableCount,
  onSearch = (data) => console.log("Search query:", data),
  onScheduleViewing,
  onPropertyClick = (property) => console.log("Property selected:", property),
  renderNavbar = true
}) {
  const lenis = useLenis();

  const handleScheduleViewing = () => {
    if (onScheduleViewing) {
      onScheduleViewing();
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
    <div className="w-full">
      <SEO
        title="Ultra-Luxury Real Estate & Architectural Residences"
        description="Explore trophy architectural residences, private hillside pavilions, waterfront villas, and bespoke off-market acquisitions worldwide."
        canonical="/"
      />
      {/* Hero Master Section */}
      <section id="hero" className="relative flex min-h-screen flex-col justify-between bg-stone-50 text-stone-900 transition-colors duration-200 dark:bg-stone-950 dark:text-stone-100">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-200/40 via-transparent to-stone-50 dark:from-stone-900/40 dark:via-transparent dark:to-stone-950" />

        {renderNavbar && (
          <Navbar1
            brandName={brandName}
            brandSubtitle={brandSubtitle}
            navLinks={navLinks}
            phoneNumber={phoneNumber}
            ctaText="Schedule Viewing"
            onCtaClick={handleScheduleViewing}
          />
        )}

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-center lg:col-span-7">
              {badgeText && (
                <div className="self-start">
                  <Badge variant="default" size="md" dot dotColor="bg-emerald-500 dark:bg-emerald-400">
                    {badgeText}
                  </Badge>
                </div>
              )}

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-stone-950 sm:text-5xl lg:text-6xl dark:text-white">
                {headline}
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
                {description}
              </p>

              <HeroSearchBox
                tabs={searchTabs}
                propertyTypes={propertyTypes}
                priceRanges={priceRanges}
                availableCount={availableCount}
                onSearch={onSearch}
              />

              <HeroMetrics metrics={metrics} />
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <HeroPropertyCard
                properties={properties}
                onPropertyClick={onPropertyClick}
              />
            </div>
          </div>
        </div>

        <HeroTrustFooter />
      </section>

      {/* Showcase Bottom Section */}
      <Showcase1 />

      {/* Featured Properties Section */}
      <FeaturedProperties onPropertyClick={onPropertyClick} />

      {/* Developments Section */}
      <DevelopmentsSection />

      {/* Neighborhoods / Area Guide Section */}
      <NeighborhoodsSection />

      {/* Client Reviews & Testimonials Section */}
      <TestimonialsSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Schedule Viewing / Contact Inquiry Section */}
      <ScheduleViewingSection />

      {/* Main Website Footer */}
      <Footer1 />
    </div>
  );
}
