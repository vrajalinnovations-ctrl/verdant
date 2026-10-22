import { useEffect } from "react";

const DEFAULT_TITLE = "Verdant Estates — Ultra-Luxury Real Estate & Architectural Residences";
const DEFAULT_DESCRIPTION = "Discover premier architectural homes, trophy penthouses, coastal sanctuaries, and private global estates with Verdant Estates.";
const DEFAULT_IMAGE = "/logo/logo-dark.png";
const BASE_URL = typeof window !== "undefined" ? window.location.origin : "https://verdantestates.com";


export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = "luxury real estate, architectural homes, penthouses, villas, private estates, high-end property",
  canonical,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  noindex = false,
  structuredData
}) {
  const fullTitle = title ? `${title} | Verdant Estates` : DEFAULT_TITLE;
  const canonicalUrl = canonical
    ? (canonical.startsWith("http") ? canonical : `${BASE_URL}${canonical}`)
    : (typeof window !== "undefined" ? window.location.href : BASE_URL);
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;

  // Default Real Estate Agency Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Verdant Estates",
    "description": description,
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo/logo-dark.png`,
    "telephone": "+1-800-555-0199",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "742 Evergreen Promenade",
      "addressLocality": "Beverly Hills",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "US"
    }
  };

  const activeSchema = structuredData || defaultSchema;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (attribute, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Primary Meta Tags
    setMetaTag("name", "title", fullTitle);
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    // 3. OpenGraph / Facebook
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", imageUrl);

    // 4. Twitter Cards
    setMetaTag("property", "twitter:card", "summary_large_image");
    setMetaTag("property", "twitter:url", canonicalUrl);
    setMetaTag("property", "twitter:title", fullTitle);
    setMetaTag("property", "twitter:description", description);
    setMetaTag("property", "twitter:image", imageUrl);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 6. JSON-LD Structured Data
    const schemaId = "verdant-structured-data";
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = schemaId;
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(activeSchema);
  }, [fullTitle, description, keywords, canonicalUrl, imageUrl, ogType, noindex, activeSchema]);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* OpenGraph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />

      {/* Twitter */}
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
    </>
  );
}
