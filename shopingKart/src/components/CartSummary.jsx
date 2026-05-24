// CartSummary receives the memoized `summary` object from App.
// It only re-renders when cart actually changes (because useMemo in App
// returns the same object reference when cart hasn't changed).

export default function CartSummary({ summary }) {
  const { count, subtotal, discount, total } = summary

  if (count === 0) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center">
        <p className="text-zinc-500 text-sm font-mono">cart is empty</p>
        <p className="text-zinc-600 text-xs mt-1">click any product to add</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-zinc-700 bg-zinc-900 p-5 space-y-3">
      <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
        Cart Summary
      </p>

      <Row label="Items" value={`${count}`} />
      <Row label="Subtotal" value={`$${subtotal.toLocaleString()}`} />
      <Row label="Discount (10%)" value={`-$${discount.toLocaleString()}`} valueClass="text-emerald-400" />

      <div className="border-t border-zinc-800 pt-3">
        <Row
          label="Total"
          value={`$${total.toLocaleString()}`}
          labelClass="text-zinc-100 font-medium"
          valueClass="text-zinc-100 font-medium font-mono text-lg"
        />
      </div>
    </div>
  )
}

function Row({ label, value, labelClass = "text-zinc-400", valueClass = "text-zinc-100 font-mono" }) {
  return (
    <div className="flex justify-between items-baseline">
      <span className={`text-sm ${labelClass}`}>{label}</span>
      <span className={`text-sm ${valueClass}`}>{value}</span>
    </div>
  )
}
