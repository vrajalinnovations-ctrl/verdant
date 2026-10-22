import heroData from "../../data/herodata.json";

export default function HeroMetrics({ metrics = heroData.metrics }) {
  return (
    <div className="mt-8 flex items-center gap-8 border-t border-stone-200 pt-6 transition-colors duration-200 dark:border-stone-800/80">
      {metrics.map((item, index) => (
        <div key={index} className="flex items-center gap-8">
          <div>
            <div className="text-xl font-semibold text-stone-950 dark:text-white">{item.value}</div>
            <div className="text-xs text-stone-500 dark:text-stone-400">{item.label}</div>
          </div>
          {index < metrics.length - 1 && (
            <div className="h-8 w-px bg-stone-200 dark:bg-stone-800" />
          )}
        </div>
      ))}
    </div>
  );
}
