import { Link } from "react-router-dom"
import { products } from "../../data/products"
import ProductCard from "../ui/ProductCard"

export default function BestSellers() {

    const bestSellers = products.filter(product => product.bestSeller)

    return (
        <section className="w-full py-20 bg-dark-section">
            <div className="max-w-7xl mx-auto">
                {/* Titulo */}
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-white text-center font-lato tracking-[0.3em] text-lg mb-3">
                        PRODUCTOS MÁS VENDIDOS
                    </h2>
                    <div className="w-16 h-0.5 bg-gold-light"/>
                </div>

                {/* Grid de Productos */}
                <div className="grid grid-cols-4 gap-4 justify-items-center">
                    {bestSellers.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

                {/* Boton de ver más */}
                <div className='flex justify-center mt-12'>
                    <Link
                        to='/productos'
                        className='font-lato text-sm tracking-widest text-white border border-white/30 px-10 py-3 rounded-md hover:border-gold-light hover:text-gold-light transition-colors duration-300'
                    >
                        VER MÁS PRODUCTOS
                    </Link>
                </div>
            </div>
        </section>
    )
}
