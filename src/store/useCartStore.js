import { create } from 'zustand'

const useCartStore = create((set) => ({
  items: [],
  isOpen: false,
}))

export default useCartStore