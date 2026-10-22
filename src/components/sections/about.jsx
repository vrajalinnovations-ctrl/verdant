import { Award, ShieldCheck } from "lucide-react";
import aboutData from "../../data/aboutdata.json";

export default function AboutSection({
  aboutHeader = aboutData.aboutHeader,
  stats = aboutData.stats,
  pillars = aboutData.pillars,
  className = ""
}) {
  return (
    <section
      id="about"
      className={`relative w-full border-t border-stone-200 bg-stone-50 py-20 text-stone-900 transition-colors duration-200 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-3.5 py-1 text-xs font-semibold text-stone-800 shadow-sm dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200">
              <Award className="h-3.5 w-3.5 text-stone-700 dark:text-stone-300" />
              <span>{aboutHeader.badge}</span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl dark:text-white">
              {aboutHeader.title}
            </h2>

            <p className="mt-4 text-base font-medium leading-relaxed text-stone-800 sm:text-lg dark:text-stone-200">
              {aboutHeader.lead}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base dark:text-stone-400">
              {aboutHeader.story}
            </p>

            {/* Metrics Grid */}
            <div className="mt-8 grid grid-cols-2 gap-6 border-y border-stone-200 py-6 dark:border-stone-800 sm:grid-cols-4">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <span className="block text-2xl font-bold tracking-tight text-stone-950 sm:text-3xl dark:text-white">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs font-medium text-stone-500 dark:text-stone-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars List Column */}
          <div className="space-y-4 lg:col-span-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-colors hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-stone-950 sm:text-lg dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600 sm:text-sm dark:text-stone-400">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
