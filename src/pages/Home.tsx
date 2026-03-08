import Collections from "../components/sections/Collections";
import Hero from "../components/sections/Hero";
import ProductCard from "../components/ui/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <main>
        <Hero/>
        <Collections/>
        <div className="p-8">
          <ProductCard product={products[0]}/>
        </div>
    </main>
  )
}
