import { useState } from "react";
import { ArrowRight, ArrowLeft, Play } from "lucide-react";
import Button from "../ui/button";
import Card from "../ui/card";
import Stats1 from "./stats";
import showcaseData from "../../data/showcasedata.json";
import { getHouseImage } from "../../data/houseimages";

export { Stats1 };

export default function Showcase1({
  header = showcaseData.header,
  featuredProperty = showcaseData.featuredProperty,
  infoCard = showcaseData.infoCard,
  previewCard = showcaseData.previewCard,
  subCaption = showcaseData.subCaption,
  stats = showcaseData.stats,
  showStats = true,
  onExplore = () => console.log("Explore properties clicked"),
  onDetails = () => console.log("Details clicked"),
  onVideoClick = () => console.log("Video tour clicked")
}) {
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <section className="relative w-full bg-stone-50 py-16 text-stone-900 transition-colors duration-200 dark:bg-stone-950 dark:text-stone-100 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl lg:text-5xl leading-tight dark:text-white">
            {header.titleLine1}
            <br />
            {header.titleLine2}
          </h2>

          <div className="flex items-center gap-4 self-start lg:self-end">
            <button
              type="button"
              onClick={onVideoClick}
              className="group relative h-14 w-24 shrink-0 overflow-hidden rounded-full border border-stone-200 bg-stone-100 shadow-sm transition-transform duration-300 hover:scale-105 dark:border-stone-800 dark:bg-stone-900 cursor-pointer"
              aria-label="Play property video tour"
            >
              <img
                src={getHouseImage(header.videoThumb)}
                alt="Video preview"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/10">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-stone-950 shadow-md">
                  <Play className="h-3 w-3 fill-stone-950 ms-0.5" />
                </div>
              </div>
            </button>
            <p className="max-w-xs text-xs leading-relaxed text-stone-500 dark:text-stone-400">
              {header.videoNote}
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          <Card
            variant="subtle"
            className="relative overflow-hidden p-0 lg:col-span-6 min-h-96 sm:min-h-112 lg:min-h-120"
          >
            <img
              src={getHouseImage(featuredProperty.image)}
              alt={featuredProperty.alt}
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            {featuredProperty.galleryThumbs?.length > 0 && (
              <Card
                variant="glass"
                className="absolute bottom-5 right-5 flex items-center gap-2 rounded-full p-2"
              >
                {featuredProperty.galleryThumbs.map((thumb, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveThumb(idx)}
                    className={`relative h-10 w-10 overflow-hidden rounded-full border-2 transition-all cursor-pointer ${
                      activeThumb === idx
                        ? "border-stone-950 scale-105 dark:border-white"
                        : "border-transparent opacity-80 hover:opacity-100"
                    }`}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img src={getHouseImage(thumb)} alt="Thumbnail" className="h-full w-full object-cover" />
                  </button>
                ))}
              </Card>
            )}
          </Card>

          <Card
            variant="subtle"
            className="flex flex-col justify-between p-8 lg:col-span-3"
          >
            <div>
              <h3 className="text-2xl font-semibold leading-snug text-stone-950 sm:text-3xl dark:text-white">
                {infoCard.title}
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {infoCard.description}
              </p>
            </div>

            <div className="mt-8">
              <Button
                variant="secondary"
                size="sm"
                onClick={onDetails}
                className="rounded-full bg-white px-6 py-2 font-medium text-stone-900 shadow-sm border border-stone-200 hover:bg-stone-50 dark:bg-stone-800 dark:text-white dark:border-stone-700 dark:hover:bg-stone-700"
              >
                {infoCard.buttonText}
              </Button>
            </div>
          </Card>

          <Card
            variant="subtle"
            className="flex flex-col justify-between p-5 lg:col-span-3"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-stone-200 dark:bg-stone-950 sm:h-52">
              <img
                src={getHouseImage(previewCard.image)}
                alt={previewCard.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="mt-6 flex flex-col items-center text-center">
              <span className="text-base font-semibold text-stone-900 dark:text-white sm:text-lg">
                {previewCard.priceLabel}
              </span>

              <Button
                variant="primary"
                size="md"
                onClick={onExplore}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="mt-4 w-full rounded-full bg-stone-950 text-white hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200 py-3"
              >
                {previewCard.buttonText}
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="max-w-xl text-xs leading-relaxed text-stone-500 dark:text-stone-400">
            {subCaption}
          </p>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:text-stone-950 cursor-pointer dark:border-stone-700 dark:text-stone-300 dark:hover:border-stone-500 dark:hover:bg-stone-800 dark:hover:text-white"
              aria-label="Previous"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-200 hover:text-stone-950 cursor-pointer dark:border-stone-700 dark:text-stone-300 dark:hover:border-stone-500 dark:hover:bg-stone-800 dark:hover:text-white"
              aria-label="Next"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {showStats && <Stats1 stats={stats} className="mt-16" />}
      </div>
    </section>
  );
}
