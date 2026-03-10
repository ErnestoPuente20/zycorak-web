import { create } from 'zustand'
import type { Product, ProductVariant } from '../types'

interface CartItem extends Product {
  variant: ProductVariant
  quantity: number
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  toggleCart: () => void
  addItem: (product: Product, variant: ProductVariant) => void
}

const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  toggleCart: () => set((state) => ({isOpen: !state.isOpen})),

  addItem: (product, variant) => {
    const items = get().items
    const existing = items.find(
      (i) => i.id === product.id && i.variant.label === variant.label
    )

    if (existing) {
      set({
        items: items.map((i) =>
          i.id === product.id && i.variant.label === variant.label
          ? {...i, quantity: i.quantity + 1}
          : i
        )
      })
    } else {
      set({items: [...items, {...product, variant, quantity: 1}]})
    }
  }
}))

export default useCartStore