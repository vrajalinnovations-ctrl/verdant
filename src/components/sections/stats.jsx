export default function Stats1({ stats = [], className = "" }) {
  if (!stats || stats.length === 0) return null;

  return (
    <div
      className={`grid grid-cols-2 gap-6 rounded-3xl border border-stone-200/60 bg-stone-100/50 p-8 backdrop-blur-sm sm:grid-cols-4 dark:border-stone-800/60 dark:bg-stone-900/40 ${className}`}
    >
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col">
          <span className="text-3xl font-extrabold tracking-tight text-stone-950 sm:text-4xl dark:text-white">
            {stat.value}
          </span>
          <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
