import { useState } from "react";
import { Search, MapPin, Home, SlidersHorizontal } from "lucide-react";
import Button from "../ui/button";
import Card from "../ui/card";
import heroData from "../../data/herodata.json";

export default function HeroSearchBox({
  tabs = heroData.searchTabs,
  propertyTypes = heroData.propertyTypes,
  priceRanges = heroData.priceRanges,
  availableCount = heroData.heroContent.availableCount,
  onSearch
}) {
  const [activeTab, setActiveTab] = useState(tabs[0] || "Buy");
  const [location, setLocation] = useState("");
  const [selectedType, setSelectedType] = useState(propertyTypes[0] || "All Types");
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0] || "Any Price");

  const handleSubmit = (e) => {
    e?.preventDefault();
    onSearch?.({
      tab: activeTab,
      location,
      propertyType: selectedType,
      priceRange: selectedPrice
    });
  };

  return (
    <Card
      as="form"
      variant="default"
      onSubmit={handleSubmit}
      className="mt-8 p-5"
    >
      <div className="flex gap-2 border-b border-stone-200 pb-3 dark:border-stone-800">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${activeTab === tab
                ? "bg-stone-900 text-white dark:bg-white dark:text-stone-950"
                : "text-stone-500 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="flex flex-col gap-1 rounded-lg border border-stone-200 bg-stone-50 p-2.5 transition-colors hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700">
          <label className="flex items-center gap-1 text-xs font-medium text-stone-600 dark:text-stone-400">
            <MapPin className="h-3 w-3 text-stone-500 dark:text-stone-400" /> Location
          </label>
          <input
            type="text"
            placeholder="City, state, or area..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent text-xs font-medium text-stone-900 placeholder-stone-400 outline-none dark:text-white dark:placeholder-stone-500"
          />
        </div>

        <div className="flex flex-col gap-1 rounded-lg border border-stone-200 bg-stone-50 p-2.5 transition-colors hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700">
          <label className="flex items-center gap-1 text-xs font-medium text-stone-600 dark:text-stone-400">
            <Home className="h-3 w-3 text-stone-500 dark:text-stone-400" /> Property Type
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-transparent text-xs font-medium text-stone-900 outline-none cursor-pointer dark:text-white"
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type} className="bg-white text-stone-900 dark:bg-stone-900 dark:text-white">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1 rounded-lg border border-stone-200 bg-stone-50 p-2.5 transition-colors hover:border-stone-300 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-700">
          <label className="flex items-center gap-1 text-xs font-medium text-stone-600 dark:text-stone-400">
            <SlidersHorizontal className="h-3 w-3 text-stone-500 dark:text-stone-400" /> Price Range
          </label>
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="bg-transparent text-xs font-medium text-stone-900 outline-none cursor-pointer dark:text-white"
          >
            {priceRanges.map((price) => (
              <option key={price} value={price} className="bg-white text-stone-900 dark:bg-stone-900 dark:text-white">
                {price}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-stone-500 dark:text-stone-400">
          <span className="font-semibold text-stone-800 dark:text-stone-200">{availableCount}</span> homes currently available
        </div>

        <Button
          type="submit"
          variant="primary"
          size="sm"
          leftIcon={<Search className="h-3.5 w-3.5" />}
        >
          Search Properties
        </Button>
      </div>
    </Card>
  );
}
