// 🔵 React.memo wraps this component.
// It will SKIP re-rendering unless `product`,
// `inCart`, or `onToggle` actually changes.

import { memo } from "react"

const ProductCard = memo(function ProductCard({ product, inCart, onToggle }) {

  const catColor = {
    electronics: "text-sky-400 bg-sky-400/10 ring-sky-400/20",
    clothing:    "text-emerald-400 bg-emerald-400/10 ring-emerald-400/20",
    food:        "text-amber-400 bg-amber-400/10 ring-amber-400/20",
  }[product.category]

  return (
    <div
      onClick={() => onToggle(product.id)}
      className={`
        relative group cursor-pointer rounded-2xl border p-4 transition-all duration-200
        ${inCart
          ? "border-emerald-500/50 bg-emerald-950/40 shadow-lg shadow-emerald-900/20"
          : "border-zinc-800 bg-zinc-900 hover:border-zinc-600 hover:bg-zinc-800/80"
        }
      `}
    >
      {inCart && (
        <span className="absolute top-3 right-3 text-xs font-mono font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full ring-1 ring-emerald-400/20">
          ✓ added
        </span>
      )}

      <div className="text-3xl mb-3 leading-none">{product.emoji}</div>

      <p className="font-medium text-sm text-zinc-100 mb-1 leading-tight">
        {product.name}
      </p>

      <p className="font-mono text-base font-medium text-zinc-100 mb-3">
        ${product.price.toLocaleString()}
      </p>

      <div className="flex items-center justify-between">
        <span className={`text-xs font-mono px-2 py-0.5 rounded-full ring-1 ${catColor}`}>
          {product.category}
        </span>
        <span className="text-xs text-zinc-500 font-mono">★ {product.rating}</span>
      </div>
    </div>
  )
})

export default ProductCard
