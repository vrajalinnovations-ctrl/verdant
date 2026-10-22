import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Shield, Calendar, Check, ChevronRight, Send, Building, Sparkles, Lock, Headphones, CheckCircle2, Compass } from "lucide-react";
import Navbar1 from "../components/layout/navbar1";
import Footer1 from "../components/layout/footer1";
import SEO from "../components/ui/seo";
import scheduleData from "../data/scheduledata.json";

// International private office hubs
const GLOBAL_OFFICES = [
  {
    city: "Beverly Hills Flagship",
    address: "742 Evergreen Promenade, Suite 400, Beverly Hills, CA 90210",
    phone: "+1 (800) 555-0199",
    email: "beverlyhills@verdantestates.com",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM PST",
    tag: "Global Headquarters"
  },
  {
    city: "New York Private Office",
    address: "450 Park Avenue, 28th Floor, New York, NY 10022",
    phone: "+1 (212) 555-0188",
    email: "newyork@verdantestates.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM EST",
    tag: "East Coast & Penthouse Desk"
  },
  {
    city: "London Mayfair Desk",
    address: "14 Berkeley Square, Mayfair, London W1J 6BQ",
    phone: "+44 (20) 7946 0920",
    email: "london@verdantestates.com",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM GMT",
    tag: "European Advisory"
  },
  {
    city: "Monaco & Riviera Desk",
    address: "Boulevard de Suisse, Carré d'Or, 98000 Monaco",
    phone: "+377 98 98 01 10",
    email: "monaco@verdantestates.com",
    hours: "Mon - Sat: 10:00 AM - 7:00 PM CET",
    tag: "Mediterranean Waterfronts"
  }
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("viewing"); // 'viewing' | 'acquisition' | 'general'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property: scheduleData.properties[0],
    tourType: "in-person",
    timeSlot: scheduleData.timeSlots[0],
    date: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      property: scheduleData.properties[0],
      tourType: "in-person",
      timeSlot: scheduleData.timeSlots[0],
      date: "",
      notes: ""
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 transition-colors duration-200 dark:bg-stone-950 dark:text-stone-100">
      <SEO
        title="Contact Private Client Advisory | Verdant Estates"
        description="Schedule a private viewing, arrange confidential off-market acquisitions, or connect with Verdant senior partners in Beverly Hills, New York, London, and Monaco."
        canonical="/contact"
      />

      <Navbar1 />

      {/* Hero Header & Breadcrumbs */}
      <section className="relative border-b border-stone-200 bg-white/70 py-12 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/50 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="mb-4 flex items-center gap-2 text-xs font-medium text-stone-500 dark:text-stone-400">
            <Link to="/" className="hover:text-stone-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-stone-900 dark:text-white font-semibold">Contact & Advisory</span>
          </nav>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-3.5 py-1 text-xs font-semibold text-stone-800 dark:border-stone-800 dark:bg-stone-800 dark:text-stone-200">
                <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
                <span>Private Client Advisory</span>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl dark:text-white">
                Connect With Our Private Brokerage
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-400">
                Direct access to senior partners for confidential acquisitions, bespoke property viewings, and discrete asset representation worldwide.
              </p>
            </div>

            {/* Quick Concierge Badges */}
            <div className="flex items-center gap-6 border-t border-stone-200 pt-4 md:border-t-0 md:pt-0 dark:border-stone-800">
              <div>
                <div className="text-2xl font-bold text-stone-950 dark:text-white">24/7</div>
                <div className="text-xs text-stone-500 dark:text-stone-400">Concierge Desk</div>
              </div>
              <div className="h-8 w-px bg-stone-200 dark:bg-stone-800" />
              <div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">&lt; 2h</div>
                <div className="text-xs text-stone-500 dark:text-stone-400">Advisory Response</div>
              </div>
              <div className="h-8 w-px bg-stone-200 dark:bg-stone-800" />
              <div>
                <div className="text-2xl font-bold text-stone-950 dark:text-white">NDA</div>
                <div className="text-xs text-stone-500 dark:text-stone-400">Confidentiality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Direct Channels Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Interactive Contact / Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-10 shadow-sm dark:border-stone-800 dark:bg-stone-900">
              {/* Inquiry Type Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-stone-100 pb-5 dark:border-stone-800">
                <button
                  type="button"
                  onClick={() => setInquiryType("viewing")}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    inquiryType === "viewing"
                      ? "bg-stone-950 text-white shadow-sm dark:bg-white dark:text-stone-950"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
                  }`}
                >
                  Schedule Private Viewing
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType("acquisition")}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    inquiryType === "acquisition"
                      ? "bg-stone-950 text-white shadow-sm dark:bg-white dark:text-stone-950"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
                  }`}
                >
                  Confidential Acquisition / Sale
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType("general")}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                    inquiryType === "general"
                      ? "bg-stone-950 text-white shadow-sm dark:bg-white dark:text-stone-950"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
                  }`}
                >
                  General Concierge
                </button>
              </div>

              {/* Form Body or Success State */}
              {isSubmitted ? (
                <div className="my-8 rounded-2xl bg-emerald-50 p-8 text-center border border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-stone-950 dark:text-white">
                    Private Inquiry Registered
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 dark:text-stone-300 max-w-md mx-auto">
                    Thank you, {formData.name || "Client"}. A dedicated Senior Client Director has received your dossier and will contact you via your preferred channel within two business hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 rounded-xl bg-stone-950 px-5 py-2.5 text-xs font-semibold text-white hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Lord Alexander Wright"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-2.5 text-xs text-stone-900 focus:border-stone-950 focus:bg-white focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                        Confidential Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexander@familyoffice.com"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-2.5 text-xs text-stone-900 focus:border-stone-950 focus:bg-white focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                      />
                    </div>
                  </div>

                  {/* Phone & Residence Selection */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (310) 555-0199"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-2.5 text-xs text-stone-900 focus:border-stone-950 focus:bg-white focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                      />
                    </div>

                    {inquiryType === "viewing" && (
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                          Select Residence of Interest
                        </label>
                        <select
                          value={formData.property}
                          onChange={(e) => setFormData({ ...formData, property: e.target.value })}
                          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-2.5 text-xs text-stone-900 focus:border-stone-950 focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                        >
                          {scheduleData.properties.map((prop, i) => (
                            <option key={i} value={prop}>
                              {prop}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Viewing Specific Options */}
                  {inquiryType === "viewing" && (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 border-t border-stone-100 pt-4 dark:border-stone-800">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                          Tour Format
                        </label>
                        <select
                          value={formData.tourType}
                          onChange={(e) => setFormData({ ...formData, tourType: e.target.value })}
                          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-2.5 text-xs text-stone-900 focus:border-stone-950 focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                        >
                          <option value="in-person">In-Person Private Tour</option>
                          <option value="virtual">Live 4K Virtual Walkthrough</option>
                          <option value="advisory">Advisory Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-2.5 text-xs text-stone-900 focus:border-stone-950 focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                          Time Window
                        </label>
                        <select
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-2.5 text-xs text-stone-900 focus:border-stone-950 focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                        >
                          {scheduleData.timeSlots.map((slot, i) => (
                            <option key={i} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1.5">
                      Confidential Requirements / Remarks
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Please note any specific architectural inquiries, security provisions, or private aviation arrivals..."
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 p-3.5 text-xs text-stone-900 focus:border-stone-950 focus:bg-white focus:outline-none dark:border-stone-700 dark:bg-stone-800 dark:text-stone-100"
                    />
                  </div>

                  {/* Security & Submission */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-stone-100 pt-4 dark:border-stone-800">
                    <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                      <Lock className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Encrypted SSL transmission. Governed by NDA.</span>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-stone-950 px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
                    >
                      <span>Transmit Request</span>
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Lines & Concierge Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* 24/7 Concierge Card */}
            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm dark:border-stone-800 dark:bg-stone-900">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                  <Headphones className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-950 dark:text-white">
                    Direct Client Concierge Desk
                  </h3>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">Available 24 Hours Worldwide</span>
                </div>
              </div>

              <div className="mt-6 space-y-3.5 text-xs text-stone-600 dark:text-stone-300">
                <a
                  href="tel:+18005550199"
                  className="flex items-center gap-3 rounded-xl border border-stone-100 bg-stone-50 p-3 hover:border-stone-300 hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-800/40 dark:hover:bg-stone-800 transition-colors"
                >
                  <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <span className="block font-bold text-stone-950 dark:text-white">+1 (800) 555-0199</span>
                    <span className="text-[11px] text-stone-500">Toll-Free North America & Global Relay</span>
                  </div>
                </a>

                <a
                  href="mailto:concierge@verdantestates.com"
                  className="flex items-center gap-3 rounded-xl border border-stone-100 bg-stone-50 p-3 hover:border-stone-300 hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-800/40 dark:hover:bg-stone-800 transition-colors"
                >
                  <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <div>
                    <span className="block font-bold text-stone-950 dark:text-white">concierge@verdantestates.com</span>
                    <span className="text-[11px] text-stone-500">Private Encrypted Client Channel</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Protocol Guarantees */}
            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm dark:border-stone-800 dark:bg-stone-900">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">
                Verdant Private Treaty Protocols
              </h4>

              <div className="mt-4 space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-stone-700 dark:text-stone-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span><strong>Non-Disclosure Compliance:</strong> Mutual NDAs signed prior to publishing property addresses or floorplans.</span>
                </div>
                <div className="flex items-start gap-2.5 text-stone-700 dark:text-stone-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span><strong>Private Aviation Logistics:</strong> FBO landing permissions and secure ground transfers coordinated upon request.</span>
                </div>
                <div className="flex items-start gap-2.5 text-stone-700 dark:text-stone-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span><strong>Architectural Dossiers:</strong> Full structural blueprints and materials provenance delivered to qualified parties.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Office Addresses Grid */}
        <div className="mt-16 border-t border-stone-200 pt-16 dark:border-stone-800">
          <div className="max-w-2xl">
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:bg-stone-800 dark:text-stone-300">
              Our Locations
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl dark:text-white">
              Global Private Offices
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GLOBAL_OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900"
              >
                <div>
                  <span className="inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 mb-3">
                    {office.tag}
                  </span>
                  <h3 className="text-base font-bold text-stone-950 dark:text-white">
                    {office.city}
                  </h3>
                  <div className="mt-3 space-y-2 text-xs text-stone-600 dark:text-stone-400">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-stone-400" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-stone-400" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-stone-100 pt-3 text-xs font-semibold dark:border-stone-800">
                  <a
                    href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-1.5 text-stone-900 hover:text-emerald-600 dark:text-stone-200 dark:hover:text-emerald-400"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>{office.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer1 />
    </div>
  );
}
