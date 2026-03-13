import {motion} from 'framer-motion'
import { Link } from "react-router-dom"
import { products } from "../../data/products"
import ProductCard from "../ui/ProductCard"

export default function BestSellers() {

    const bestSellers = products.filter(product => product.bestSeller)

    return (
        <section className="w-full py-20 bg-dark-section">
            <div className="max-w-7xl mx-auto px-6">
                {/* Titulo */}
                <motion.div 
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.7}}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-white text-center font-lato tracking-[0.3em] text-lg mb-3">
                        PRODUCTOS MÁS VENDIDOS
                    </h2>
                    <div className="w-16 h-0.5 bg-gold-light"/>
                </motion.div>

                {/* Grid de Productos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {bestSellers.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.2}}
                            transition={{duration: 0.6, delay: index * 0.15}}
                            className='w-full'
                        >
                            <ProductCard product={product}/>
                        </motion.div>
                    ))}
                </div>

                {/* Boton de ver más */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.6, delay: 0.4}} 
                    className='flex justify-center mt-12'
                >
                    <Link
                        to='/productos'
                        className='font-lato text-sm tracking-widest text-white border border-white/30 px-10 py-3 rounded-md hover:border-gold-light hover:text-gold-light transition-colors duration-300'
                    >
                        VER MÁS PRODUCTOS
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
