export interface ProductSpec {
  altura: string
  diametro: string
  capacidad: string
}

export interface ProductVariant {
  label: string
  value: number
  price: number
}

export interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  variants: ProductVariant[]
  specs: ProductSpec
  bestSeller: boolean
}

// Categorias

export interface Category {
  id: number
  name: string
  slug: string
  image: string
}