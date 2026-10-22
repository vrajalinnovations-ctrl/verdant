import { useState } from "react";
import {
  Star,
  ShieldCheck,
  Sparkles,
  Check,
  Pause,
  Play
} from "lucide-react";
import testimonialsData from "../../data/testimonialsdata.json";
import avatar1 from "../../assets/user/avatar-1.jpg";
import avatar2 from "../../assets/user/avatar-2.jpg";
import avatar3 from "../../assets/user/avatar-3.jpg";
import avatar4 from "../../assets/user/avatar-4.jpg";
import avatar5 from "../../assets/user/avatar-5.jpg";
import avatar6 from "../../assets/user/avatar-6.jpg";
import avatar7 from "../../assets/user/avatar-7.jpg";
import avatar8 from "../../assets/user/avatar-8.jpg";

const AVATAR_MAP = {
  "avatar-1.jpg": avatar1,
  "avatar-2.jpg": avatar2,
  "avatar-3.jpg": avatar3,
  "avatar-4.jpg": avatar4,
  "avatar-5.jpg": avatar5,
  "avatar-6.jpg": avatar6,
  "avatar-7.jpg": avatar7,
  "avatar-8.jpg": avatar8
};

function TestimonialCard({ item }) {
  const avatarSrc = AVATAR_MAP[item.avatar] || item.avatar;

  return (
    <div className="relative flex w-80 sm:w-96 shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-stone-300 hover:shadow-md dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-600 dark:hover:shadow-stone-900">
      <div>
        {/* Rating Stars & Category */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(item.rating)].map((_, idx) => (
              <Star
                key={idx}
                className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>

          <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
            {item.category}
          </span>
        </div>

        {/* Quote */}
        <p className="mt-4 text-sm leading-relaxed text-stone-800 dark:text-stone-200">
          "{item.quote}"
        </p>

        {/* Property Badge */}
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300">
          <Check className="h-3 w-3 shrink-0 text-emerald-500" />
          <span className="truncate">{item.property}</span>
        </div>
      </div>

      {/* Client Profile */}
      <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4 dark:border-stone-800">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800">
            <img
              src={avatarSrc}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h4 className="text-xs font-bold text-stone-950 dark:text-white sm:text-sm">
              {item.name}
            </h4>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              {item.role}
            </p>
          </div>
        </div>

        <span className="text-xs text-stone-400 dark:text-stone-500">
          {item.date}
        </span>
      </div>
    </div>
  );
}

export default function TestimonialsSection({
  header = testimonialsData.sectionHeader,
  trustScore = testimonialsData.trustScore,
  testimonials = testimonialsData.testimonials,
  className = ""
}) {
  const [isPaused, setIsPaused] = useState(false);

  // Divide into two groups for dual row marquee
  const rowOne = testimonials.slice(0, 3);
  const rowTwo = testimonials.slice(3, 6);

  // Duplicate for smooth seamless loop
  const duplicatedRowOne = [...rowOne, ...rowOne, ...rowOne, ...rowOne];
  const duplicatedRowTwo = [...rowTwo, ...rowTwo, ...rowTwo, ...rowTwo];

  return (
    <section
      id="testimonials"
      className={`relative w-full overflow-hidden border-t border-stone-200 bg-stone-50 py-20 text-stone-900 transition-colors duration-200 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3.5 py-1 text-xs font-semibold text-stone-800 shadow-sm dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
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

          {/* Marquee Play / Pause Control */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-100 hover:text-stone-950 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-600 dark:hover:bg-stone-800 dark:hover:text-white"
            >
              {isPaused ? (
                <>
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Resume Marquee</span>
                </>
              ) : (
                <>
                  <Pause className="h-3.5 w-3.5 fill-current" />
                  <span>Pause Marquee</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Aggregate Trust Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-stone-950 dark:text-white">
              {trustScore.rating} / 5.0
            </span>
            <span className="hidden text-xs text-stone-400 sm:inline">•</span>
            <span className="hidden text-xs font-medium text-stone-600 sm:inline dark:text-stone-400">
              {trustScore.totalReviews}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <ShieldCheck className="h-4 w-4" />
            <span>{trustScore.discretionRate}</span>
          </div>
        </div>
      </div>

      {/* Marquee Track Container with Vignette Gradient Masks */}
      <div className="relative mt-12 w-full overflow-hidden">
        {/* Left & Right Edge Fade Gradients */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-stone-50 to-transparent sm:w-28 lg:w-40 dark:from-stone-950" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-stone-50 to-transparent sm:w-28 lg:w-40 dark:from-stone-950" />

        <div className="space-y-6">
          {/* Row 1 - Leftward Marquee */}
          <div
            className={`flex w-max gap-6 pause-hover ${
              isPaused ? "" : "animate-marquee"
            }`}
          >
            {duplicatedRowOne.map((item, idx) => (
              <TestimonialCard key={`row1-${idx}`} item={item} />
            ))}
          </div>

          {/* Row 2 - Rightward (Reverse) Marquee */}
          <div
            className={`flex w-max gap-6 pause-hover ${
              isPaused ? "" : "animate-marquee-reverse"
            }`}
          >
            {duplicatedRowTwo.map((item, idx) => (
              <TestimonialCard key={`row2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
