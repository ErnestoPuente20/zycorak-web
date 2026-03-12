import { useState, useEffect } from "react"
import {motion} from 'framer-motion'
import { useSearchParams } from "react-router-dom"
import { products } from "../data/products"
import ProductCard from "../components/ui/ProductCard"
import CategoryFilter from "../components/ui/CategoryFilter"

export default function Products() {

  const [searchParams] = useSearchParams()
  const [selected, setSelected] = useState('todos')

  // Lee la categoria de la URL si viene desde Collections o footer
  useEffect(() => {
    const categoria = searchParams.get('categoria')
    if (categoria) {
      setSelected(categoria)
    }
  }, [searchParams])

  // Filtra productos segun categoria seleccionada
  const filtered = selected === 'todos'
    ? products
    : products.filter((p) => p.category === selected)

  return (
    <main className="min-h-screen bg-dark-section pt-16">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Titulo */}
        <motion.div 
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.7}}
          className="flex flex-col items-center mb-4"
        >
          <h1 className="font-greatvibes text-gold-light text-7xl mb-3">
            Nuestra Coleccion de Cristal
          </h1>
          <p className='text-white/50 font-lato text-md text-center max-w-md'>
            Piezas seleccionadas para elevar cada brindis. Desde el uso cotidiano hasta celebraciones especiales, encuentra el diseño que mejor se adapte a tu mesa.
          </p>
        </motion.div>

        {/* Linea Dorada */}
        <motion.div 
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          className="flex justify-center mb-12"
        >
          <div className="w-16 h-0.5 bg-gold-light"/>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}} 
          className="flex justify-center mb-12"
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
            className="grid grid-cols-4 gap-6"
          >
            {filtered.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: index * 0.1}}
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
