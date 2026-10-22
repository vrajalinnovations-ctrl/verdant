import { useState } from "react";
import {CalendarCheck,Video,Compass,Clock,MapPin,Phone,Mail,ShieldCheck,Check,ArrowRight} from "lucide-react";
import scheduleData from "../../data/scheduledata.json";

export default function ScheduleViewingSection({
  header = scheduleData.sectionHeader,
  tourTypes = scheduleData.tourTypes,
  timeSlots = scheduleData.timeSlots,
  properties = scheduleData.properties,
  offices = scheduleData.offices,
  onBookingSubmit = (data) => console.log("Booking confirmed:", data),
  className = ""
}) {
  const [selectedTourType, setSelectedTourType] = useState(tourTypes[0]?.id || "in-person");
  const [selectedProperty, setSelectedProperty] = useState(properties[0] || "");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(timeSlots[0] || "");
  const [date, setDate] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      tourType: selectedTourType,
      property: selectedProperty,
      date,
      timeSlot: selectedTimeSlot,
      ...formData
    };
    onBookingSubmit(payload);
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setDate("");
    setFormData({ name: "", email: "", phone: "", notes: "" });
  };

  return (
    <section
      id="contact"
      className={`relative w-full border-t border-stone-200 bg-white py-20 text-stone-900 transition-colors duration-200 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 sm:py-24 lg:py-28 ${className}`}
    >
      {/* Anchor for #schedule */}
      <div id="schedule" className="sr-only">Schedule Viewing</div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-stone-100 px-3.5 py-1 text-xs font-semibold text-stone-800 shadow-sm dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200">
              <CalendarCheck className="h-3.5 w-3.5 text-stone-700 dark:text-stone-300" />
              <span>{header.badge}</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl dark:text-white">
              {header.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-400">
              {header.description}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-xs font-semibold text-stone-700 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>Strict Client Confidentiality & NDA Compliant</span>
          </div>
        </div>

        {/* Main Grid: Booking Experience + Office Directory */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Booking Form Column */}
          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm transition-colors dark:border-stone-800 dark:bg-stone-950 sm:p-10 lg:col-span-8">
            {isBooked ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  <Check className="h-8 w-8 stroke-2" />
                </div>

                <span className="mt-6 rounded-full bg-stone-200 px-3.5 py-1 text-xs font-semibold text-stone-800 dark:bg-stone-800 dark:text-stone-200">
                  Reference: VRD-7049
                </span>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl dark:text-white">
                  Viewing Request Received
                </h3>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  Your appointment for <span className="font-semibold text-stone-900 dark:text-white">{selectedProperty}</span> has been scheduled with our Senior Architectural Advisor. A calendar invitation and security access protocol have been dispatched to your email.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
                  >
                    <span>Schedule Another Appointment</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. Select Tour Format */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    1. Select Experience Format
                  </label>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {tourTypes.map((tour) => {
                      const isSelected = selectedTourType === tour.id;
                      return (
                        <button
                          key={tour.id}
                          type="button"
                          onClick={() => setSelectedTourType(tour.id)}
                          className={`flex cursor-pointer flex-col justify-between rounded-2xl border p-4 text-left transition-all duration-200 ${
                            isSelected
                              ? "border-stone-950 bg-white shadow-sm dark:border-white dark:bg-stone-900"
                              : "border-stone-200 bg-white/60 hover:border-stone-300 hover:bg-white dark:border-stone-800 dark:bg-stone-900/40 dark:hover:border-stone-700 dark:hover:bg-stone-900"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            {tour.id === "in-person" && (
                              <Compass className="h-4 w-4 text-stone-700 dark:text-stone-300" />
                            )}
                            {tour.id === "virtual" && (
                              <Video className="h-4 w-4 text-stone-700 dark:text-stone-300" />
                            )}
                            {tour.id === "advisory" && (
                              <CalendarCheck className="h-4 w-4 text-stone-700 dark:text-stone-300" />
                            )}
                            <span
                              className={`h-2 w-2 rounded-full ${
                                isSelected
                                  ? "bg-stone-950 dark:bg-white"
                                  : "bg-transparent border border-stone-400"
                              }`}
                            />
                          </div>

                          <div className="mt-3">
                            <span className="block text-xs font-bold text-stone-950 dark:text-white">
                              {tour.label}
                            </span>
                            <span className="mt-1 block text-xs text-stone-500 dark:text-stone-400">
                              {tour.description}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Choose Property & Preferred Date */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                      2. Residence of Interest
                    </label>
                    <select
                      value={selectedProperty}
                      onChange={(e) => setSelectedProperty(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-3.5 py-3 text-xs font-medium text-stone-900 transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:focus:border-white dark:focus:ring-white sm:text-sm"
                    >
                      {properties.map((prop, idx) => (
                        <option key={idx} value={prop}>
                          {prop}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-xs font-medium text-stone-900 transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:focus:border-white dark:focus:ring-white sm:text-sm"
                    />
                  </div>
                </div>

                {/* 3. Time Slot Pills */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    3. Select Window of Convenience
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2.5">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-medium transition-all duration-200 ${
                            isSelected
                              ? "bg-stone-950 text-white shadow-sm dark:bg-white dark:text-stone-950"
                              : "border border-stone-300 bg-white text-stone-700 hover:border-stone-400 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-600 dark:hover:bg-stone-800 dark:hover:text-white"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Client Contact Details */}
                <div className="border-t border-stone-200 pt-6 dark:border-stone-800">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    4. Principal Contact Information
                  </label>

                  <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-xs font-medium text-stone-600 dark:text-stone-400">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="First and Last Name"
                        className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:placeholder-stone-500 dark:focus:border-white dark:focus:ring-white sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-600 dark:text-stone-400">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="advisor@office.com"
                        className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:placeholder-stone-500 dark:focus:border-white dark:focus:ring-white sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-600 dark:text-stone-400">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (800) 000-0000"
                        className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:placeholder-stone-500 dark:focus:border-white dark:focus:ring-white sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-medium text-stone-600 dark:text-stone-400">
                      Private Chauffeur, Helipad, or Security Specifications (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Specify gate clearance, companion names, or private airport pickup requirements..."
                      className="mt-1 w-full rounded-xl border border-stone-300 bg-white p-3.5 text-xs text-stone-900 placeholder-stone-400 transition-colors focus:border-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:placeholder-stone-500 dark:focus:border-white dark:focus:ring-white sm:text-sm"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-stone-900 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200"
                  >
                    <span>Confirm Private Viewing Appointment</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Directory & Offices Column */}
          <div className="space-y-6 lg:col-span-4">
            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 transition-colors dark:border-stone-800 dark:bg-stone-950 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Global Concierge
              </span>
              <h3 className="mt-1 text-xl font-bold text-stone-950 dark:text-white">
                Private Advisory Salons
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-stone-400">
                Our partners are stationed in premier financial and cultural centers worldwide.
              </p>

              <div className="mt-6 space-y-6">
                {offices.map((office, idx) => (
                  <div
                    key={idx}
                    className="border-t border-stone-200/80 pt-5 dark:border-stone-800"
                  >
                    <h4 className="text-sm font-bold text-stone-950 dark:text-white">
                      {office.city}
                    </h4>

                    <div className="mt-2.5 space-y-2 text-xs text-stone-600 dark:text-stone-400">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-stone-500" />
                        <span>{office.address}</span>
                      </div>

                      <a
                        href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                        className="flex items-center gap-2.5 transition-colors hover:text-stone-950 dark:hover:text-white"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0 text-stone-500" />
                        <span>{office.phone}</span>
                      </a>

                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-center gap-2.5 transition-colors hover:text-stone-950 dark:hover:text-white"
                      >
                        <Mail className="h-3.5 w-3.5 shrink-0 text-stone-500" />
                        <span>{office.email}</span>
                      </a>

                      <div className="flex items-center gap-2.5">
                        <Clock className="h-3.5 w-3.5 shrink-0 text-stone-500" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Escort / Security Notice */}
            <div className="rounded-2xl border border-stone-200 bg-stone-100 p-5 text-xs text-stone-600 transition-colors dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-stone-800 dark:text-stone-200" />
                <p className="leading-relaxed">
                  All in-person viewings are coordinated through our discreet security protocol. Non-disclosure agreements (NDAs) are executed prior to off-market access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
