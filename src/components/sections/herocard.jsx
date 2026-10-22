import { useState } from "react";
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../ui/button";
import Badge from "../ui/badge";
import Card from "../ui/card";
import heroData from "../../data/herodata.json";
import { getHouseImage } from "../../data/houseimages";

export default function HeroPropertyCard({
  properties = heroData.properties,
  onPropertyClick
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!properties || properties.length === 0) return null;

  const currentProperty = properties[currentIndex] || properties[0];

  const nextProperty = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevProperty = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length);
  };

  return (
    <div className="w-full">
      <Card
        variant="interactive"
        className="group relative overflow-hidden p-0"
      >
        <div className="relative h-80 sm:h-96 lg:h-104 w-full overflow-hidden bg-stone-950">
          <img
            src={getHouseImage(currentProperty.image)}
            alt={currentProperty.title}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

          {currentProperty.tag && (
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <Badge variant="glass" size="md">
                {currentProperty.tag}
              </Badge>
            </div>
          )}

          {properties.length > 1 && (
            <div className="absolute top-4 right-4 flex items-center gap-1.5">
              <Button
                variant="dark"
                size="iconSm"
                onClick={prevProperty}
                aria-label="Previous property"
                className="bg-stone-950/80 backdrop-blur-md hover:bg-white hover:text-stone-950"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="dark"
                size="iconSm"
                onClick={nextProperty}
                aria-label="Next property"
                className="bg-stone-950/80 backdrop-blur-md hover:bg-white hover:text-stone-950"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-stone-900/80 px-2.5 py-0.5 text-xs font-medium text-stone-300 backdrop-blur-md border border-stone-800 mb-1.5">
                  <MapPin className="h-3 w-3 text-stone-400" />
                  {currentProperty.location}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {currentProperty.title}
                </h3>
              </div>

              <div className="sm:text-right">
                <span className="text-xs text-stone-400 block font-medium">Guide Price</span>
                <span className="text-xl sm:text-2xl font-bold text-white">
                  {currentProperty.price}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 bg-stone-50 px-5 py-3.5 backdrop-blur-md dark:border-stone-800/80 dark:bg-stone-900/90">
          <div className="flex items-center gap-4 text-xs font-medium text-stone-700 dark:text-stone-300">
            <span>{currentProperty.beds} Beds</span>
            <span className="text-stone-400 dark:text-stone-600">•</span>
            <span>{currentProperty.baths} Baths</span>
            <span className="text-stone-400 dark:text-stone-600">•</span>
            <span>{currentProperty.sqft}</span>
          </div>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onPropertyClick?.(currentProperty)}
            rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            Explore Residence
          </Button>
        </div>
      </Card>

      {properties.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {properties.map((_, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentIndex
                  ? "w-6 bg-stone-900 dark:bg-white"
                  : "w-1.5 bg-stone-300 hover:bg-stone-400 dark:bg-stone-700 dark:hover:bg-stone-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
