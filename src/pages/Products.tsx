import { Helmet } from "react-helmet-async"
import { useState, useEffect } from "react"
import {motion} from 'framer-motion'
import { useSearchParams } from "react-router-dom"
import { products } from "../data/products"
import ProductCard from "../components/ui/ProductCard"
import CategoryFilter from "../components/ui/CategoryFilter"

export default function Products() {

  const [searchParams] = useSearchParams()
  const [selected, setSelected] = useState('todos')

  useEffect(() => {
    const categoria = searchParams.get('categoria')
    if (categoria) {
      setSelected(categoria)
    }
  }, [searchParams])

  const filtered = selected === 'todos'
    ? products
    : products.filter((p) => p.category === selected)

  return (
    <main className="min-h-screen bg-dark-section pt-16">

      <Helmet>
        <title>Catálogo — Zycorak Cristalería Premium</title>
        <meta name="description" content="Explora nuestra colección completa de cristalería premium. Postreras, uso diario, shots y mixología. Pedidos por WhatsApp."/>
        <meta name="keywords" content="cristalería, catálogo, copas, vasos, shots, La Paz, Bolivia" />
        <meta property="og:title" content="Catálogo — Zycorak Cristalería Premium" />
        <meta property="og:description" content="Colección completa de cristalería premium. Pedidos por WhatsApp." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

        {/* Titulo */}
        <motion.div 
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
          className="flex flex-col items-center mb-4"
        >
          <h1 className="font-greatvibes text-gold-light text-4xl md:text-6xl lg:text-7xl mb-3 text-center">
            Nuestra Coleccion de Cristal
          </h1>
          <p className='text-white/50 font-lato text-sm md:text-md text-center max-w-md'>
            Piezas seleccionadas para elevar cada brindis. Desde el uso cotidiano hasta celebraciones especiales, encuentra el diseño que mejor se adapte a tu mesa.
          </p>
        </motion.div>

        {/* Linea Dorada */}
        <motion.div 
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          className="flex justify-center mb-10 md:mb-12"
        >
          <div className="w-16 h-0.5 bg-gold-light"/>
        </motion.div>

        {/* Filtros — sticky en móvil */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          className="sticky top-16 z-30 bg-dark-section py-4 flex justify-center mb-10 md:mb-12"
        >
          <CategoryFilter selected={selected} onSelect={setSelected}/>
        </motion.div>

        {/* Grid de productos */}
        {filtered.length === 0 ? (
          <p className="text-white/30 font-lato text-center mt-20">
            No hay productos en esta categoria
          </p>
        ) : (
          <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.5}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: index * 0.1}}
                className='w-full'
              >
                <ProductCard product={product}/>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </main>
  )
}