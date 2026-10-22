import heroData from "../../data/herodata.json";

export default function HeroTrustFooter({
  pressText = heroData.trustInfo.pressText,
  features = heroData.trustInfo.features
}) {
  return (
    <footer className="relative z-10 border-t border-stone-200/80 bg-stone-100/80 py-4 transition-colors duration-200 dark:border-stone-800/60 dark:bg-stone-950/80">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-stone-500 dark:text-stone-400 lg:px-8">
        <span>{pressText}</span>
        <div className="flex items-center gap-6">
          {features.map((feature, idx) => (
            <span key={idx}>{feature}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
