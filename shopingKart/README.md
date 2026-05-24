# ShopMemo -> [Live](https://shopmemo.netlify.app/)

A React shopping cart app demonstrating performance optimization using `useMemo`, `React.memo`, and `useCallback`.

## Features
- Filter products by category and search
- Add / remove items from cart
- Real-time cart totals with 10% discount

## Performance Optimization

**`React.memo` on `ProductCard`** — each card skips re-render if its own props haven't changed. Typing in search won't re-render cards that aren't affected.

**`useCallback` on `toggleCart`** — keeps the function reference stable across renders. Without this, `React.memo` would be useless since every render would pass a new function as prop.

**`useMemo` for filtering** — product list only recomputes when category or search changes, not when cart changes.

**`useMemo` for cart totals** — subtotal, discount, and total only recalculate when cart changes, not on every filter or search update.