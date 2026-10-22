import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  ShieldCheck,
  Globe2,
  ChevronRight,
  Check,
  Users,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import Navbar1 from "../components/layout/navbar1";
import Footer1 from "../components/layout/footer1";
import SEO from "../components/ui/seo";
import aboutData from "../data/aboutdata.json";

// Executive leadership and architectural advisors
const LEADERSHIP_TEAM = [
  {
    name: "Alisdair Vance",
    role: "Founder & Chief Executive",
    bio: "Over three decades orchestrating confidential acquisitions for private family offices and prominent architectural collectors worldwide.",
    location: "Beverly Hills"
  },
  {
    name: "Helena Rostova",
    role: "Director of Architectural Acquisitions",
    bio: "Former curator of contemporary architecture; specialist in mid-century masterworks, modernist pavilions, and historic restorations.",
    location: "New York & London"
  },
  {
    name: "Julian Moreau",
    role: "Head of European & Mediterranean Desk",
    bio: "Bespoke advisor overseeing trophy waterfront estates across Saint-Jean-Cap-Ferrat, Monaco, and Lake Como.",
    location: "Monaco & Paris"
  }
];

// Historical milestones
const MILESTONES = [
  {
    year: "1994",
    title: "Founding in Beverly Hills",
    description: "Established as an independent private brokerage dedicated exclusively to architecturally significant residential estates."
  },
  {
    year: "2005",
    title: "Confidential Off-Market Desk",
    description: "Pioneered proprietary NDA-governed acquisition protocols for high-profile clients in Aspen, Manhattan, and London."
  },
  {
    year: "2016",
    title: "Eco-Centric Architecture Standard",
    description: "Co-founded the Green Heritage Initiative, advocating for carbon-neutral engineering in ultra-luxury custom builds."
  },
  {
    year: "2026",
    title: "Global Custodianship",
    description: "Surpassed $4.2B in lifetime volume with active advisory presence across 12 prime international capitals."
  }
];

export default function AboutPage() {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const { aboutHeader, stats, pillars, contactDetails } = aboutData;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-200 dark:bg-stone-950 dark:text-stone-100">
      <SEO
        title="Our Heritage & Vision | Verdant Estates"
        description="Learn about Verdant Estates' 30-year legacy of curating trophy architectural residences, private family office advisory, and confidential off-market acquisitions."
        canonical="/about"
      />

      <Navbar1 />

      {/* Hero Header & Breadcrumbs */}
      <section className="relative border-b border-stone-200 bg-white/70 py-12 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/50 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-stone-500 dark:text-stone-400">
            <Link to="/" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-stone-900 dark:text-white font-semibold">About Us</span>
          </nav>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-3.5 py-1 text-xs font-semibold text-stone-800 dark:border-stone-800 dark:bg-stone-800 dark:text-stone-200">
                <Award className="h-3.5 w-3.5 text-amber-500" />
                <span>{aboutHeader.badge}</span>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl dark:text-white">
                {aboutHeader.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-stone-800 sm:text-lg dark:text-stone-200">
                {aboutHeader.lead}
              </p>
            </div>

            {/* Career Numbers */}
            <div className="flex items-center gap-6 border-t border-stone-200 pt-4 md:border-t-0 md:pt-0 dark:border-stone-800">
              <div>
                <div className="text-2xl font-bold text-stone-950 dark:text-white">$4.2B+</div>
                <div className="text-xs text-stone-500 dark:text-stone-400">Volume</div>
              </div>
              <div className="h-8 w-px bg-stone-200 dark:bg-stone-800" />
              <div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">30+ Years</div>
                <div className="text-xs text-stone-500 dark:text-stone-400">Heritage</div>
              </div>
              <div className="h-8 w-px bg-stone-200 dark:bg-stone-800" />
              <div>
                <div className="text-2xl font-bold text-stone-950 dark:text-white">99.4%</div>
                <div className="text-xs text-stone-500 dark:text-stone-400">Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Story Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              The Verdant Philosophy
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl dark:text-white">
              Where Rare Architecture Meets Uncompromised Custodianship
            </h2>
            <p className="text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-300">
              {aboutHeader.story}
            </p>
            <p className="text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-300">
              Unlike transactional brokerages, we operate as bespoke advisors. Each acquisition is handled with institutional diligence, complete discretion, and an intimate respect for the structural poetry of each residence.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4 border-t border-stone-200 dark:border-stone-800">
              {stats.map((stat, i) => (
                <div key={i}>
                  <span className="block text-xl font-bold text-stone-950 dark:text-white">{stat.value}</span>
                  <span className="text-xs text-stone-500 dark:text-stone-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:border-stone-300 hover:shadow-md dark:border-stone-800 dark:bg-stone-900"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-950 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heritage Timeline Section */}
        <div className="mt-24 border-t border-stone-200 pt-16 dark:border-stone-800">
          <div className="max-w-2xl">
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:bg-stone-800 dark:text-stone-300">
              Three Decades of Integrity
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl dark:text-white">
              Milestones in Architectural Representation
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              From our origin as an architectural salon to a premier transatlantic private advisory.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
              >
                <div>
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    {item.year}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-stone-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Senior Advisory Leadership */}
        <div className="mt-24 border-t border-stone-200 pt-16 dark:border-stone-800">
          <div className="max-w-2xl">
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:bg-stone-800 dark:text-stone-300">
              Senior Leadership
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl dark:text-white">
              Principals & Architectural Curators
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              Decades of combined expertise across law, architectural preservation, and discreet treaty transactions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {LEADERSHIP_TEAM.map((leader, i) => (
              <div
                key={i}
                className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm dark:border-stone-800 dark:bg-stone-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200 mb-5">
                  <Users className="h-6 w-6" />
                </div>
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {leader.location}
                </div>
                <h3 className="mt-1 text-lg font-bold text-stone-950 dark:text-white">
                  {leader.name}
                </h3>
                <p className="text-xs font-medium text-stone-500 dark:text-stone-400 mb-3">
                  {leader.role}
                </p>
                <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Hubs Grid */}
        <div className="mt-24 rounded-3xl border border-stone-200 bg-stone-100/80 p-8 dark:border-stone-800 dark:bg-stone-900/50 sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              International Representation
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl dark:text-white">
              Private Desks in Premier Capitals
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 text-center text-xs">
            {["Beverly Hills", "Manhattan", "Aspen", "London Mayfair", "Monaco", "Saint-Tropez"].map((city, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white p-4 font-semibold text-stone-800 shadow-sm transition-colors hover:border-stone-300 dark:border-stone-700/80 dark:bg-stone-800 dark:text-stone-100 dark:hover:border-stone-600"
              >
                <MapPin className="mx-auto h-4 w-4 text-emerald-600 dark:text-emerald-400 mb-1" />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Private Consultation Desk / CTA */}
        <div className="mt-20 rounded-3xl border border-stone-200 bg-gradient-to-r from-stone-900 to-stone-950 p-8 text-white shadow-xl dark:border-stone-800 sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-stone-700 bg-stone-800/80 px-3 py-1 text-xs font-medium text-emerald-400">
                <Globe2 className="h-3.5 w-3.5" />
                Direct Advisory Access
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {contactDetails.headline}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base">
                {contactDetails.subline}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>{contactDetails.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span>{contactDetails.email}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              {inquirySubmitted ? (
                <div className="flex items-center gap-2 rounded-2xl bg-emerald-950/80 p-5 text-sm font-medium text-emerald-300 border border-emerald-800">
                  <Check className="h-5 w-5 shrink-0 text-emerald-400" />
                  <span>Your consultation inquiry has been routed to our senior partners. We will reach out discreetly.</span>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setInquirySubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-stone-700 bg-stone-800/90 px-4 py-2.5 text-xs text-white placeholder:text-stone-400 focus:border-white focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Confidential Email Address"
                    className="w-full rounded-xl border border-stone-700 bg-stone-800/90 px-4 py-2.5 text-xs text-white placeholder:text-stone-400 focus:border-white focus:outline-none"
                  />
                  <select
                    className="w-full rounded-xl border border-stone-700 bg-stone-800/90 px-4 py-2.5 text-xs text-stone-300 focus:border-white focus:outline-none"
                  >
                    {contactDetails.inquiryTypes.map((type, i) => (
                      <option key={i} value={type} className="bg-stone-900 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-white py-3 text-xs font-bold text-stone-950 transition-colors hover:bg-stone-100"
                  >
                    Request Confidential Advisory
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
    </div>
  );
}
