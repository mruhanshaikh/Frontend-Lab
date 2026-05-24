import { useState, useMemo, useCallback } from "react"
import { PRODUCTS } from "./data/products"
import ProductCard from "./components/ProductCard"
import FilterBar from "./components/FilterBar"
import CartSummary from "./components/CartSummary"


export default function App() {

  const [cart, setCart]           = useState(new Set())
  const [category, setCategory]   = useState("all")
  const [search, setSearch]       = useState("")

  const toggleCart = useCallback((id) => {
   setCart((prev)=>{
   const newSet = new Set(prev)
   newSet.has(id)
    ?newSet.delete(id)
    :newSet.add(id)
   return newSet
   })

  }, [])


  const handleCategoryChange = useCallback((cat) => {
     setCategory(cat)
  }, [])

  const handleSearchChange = useCallback((val) => {
      setSearch(val)
  }, [])

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
    const matchCat = category === "all" || p.category === category
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })
  }, [category, search])
  
  const cartSummary = useMemo(() => {
  let subtotal = 0
  cart.forEach(id => {
    const p = PRODUCTS.find(x => x.id === id)
    if (p) subtotal += p.price
  })
  const discount = Math.round(subtotal * 0.1)
  return { count: cart.size, subtotal, discount, total: subtotal - discount }
  }, [cart])

  return (
    <div className="min-h-screen bg-zinc-950 font-sans">

      {/* Header */}
      <header className="border-b border-zinc-800 px-4 sm:px-6  py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl">🛒</span>
          <h1 className="font-medium text-zinc-100 tracking-tight">ShopMemo</h1>
        </div>
        <div className="hidden sm:flex gap-2">
          {["useMemo", "React.memo", "useCallback"].map((tag, i) => (
            <span
              key={tag}
              className={`text-xs font-mono px-2.5 py-1 rounded-full ring-1 ${
                i === 0 ? "text-sky-400 bg-sky-400/10 ring-sky-400/20"
                : i === 1 ? "text-emerald-400 bg-emerald-400/10 ring-emerald-400/20"
                :           "text-amber-400 bg-amber-400/10 ring-amber-400/20"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Left — products */}
          <div className="flex-1 min-w-0">

            <FilterBar
              category={category}
              search={search}
              onCategoryChange={handleCategoryChange}
              onSearchChange={handleSearchChange}
            />

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 text-zinc-600 font-mono text-sm">
                no products found
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    inCart={cart.has(product.id)}
                    onToggle={toggleCart}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right — cart */}
          <div className="w-full lg:w-64 lg:shrink-0">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
              Your Cart
            </p>
            <CartSummary summary={cartSummary} />

            {cart.size > 0 && (
              <button
                onClick={() => setCart(new Set())}
                className="w-full mt-3 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors py-2"
              >
                clear cart
              </button>
            )}
          </div>

        </div>
      </div>

    </div>
  )
}
