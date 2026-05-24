// `onCategoryChange` and `onSearchChange` come from App via useCallback,
// so their references are stable — this component won't re-render needlessly.

import { CATEGORIES } from "../data/products"

export default function FilterBar({ category, search, onCategoryChange, onSearchChange }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">

      {/* Category pills */}
      <div className="flex gap-2 flex-wrap">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`
              text-xs font-mono px-3 py-1.5 rounded-full border transition-all duration-150
              ${category === cat
                ? "bg-zinc-100 text-zinc-900 border-zinc-100"
                : "bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-zinc-200"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm pointer-events-none">
          ⌕
        </span>
        <input
          type="text"
          value={search}
          onChange={e => onSearchChange(e.target.value)}
          placeholder="search..."
          className="
            pl-8 pr-4 py-1.5 text-xs font-mono rounded-full border border-zinc-700
            bg-zinc-900 text-zinc-100 placeholder-zinc-600
            focus:outline-none focus:border-zinc-500 transition-colors w-full sm:w-40
          "
        />
      </div>

    </div>
  )
}
