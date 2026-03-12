import { useState } from "react"
import {motion, AnimatePresence} from "framer-motion"
import { ShoppingCart } from 'lucide-react'
import type { Product } from "../../types"
import whatsappIcon from '../../assets/images/whatsapp.svg'
import { categories } from "../../data/categories"
import useCartStore from "../../store/useCartStore"
import { sendProductWhatsApp } from "../../utils/whatsapp"

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
    const [isHovered, setIsHovered] = useState(false)
    const categoryName = categories.find(cat => cat.slug === product.category)?.name

    const {addItem} = useCartStore()

    return (
        <motion.div 
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className='bg-dark-card rounded-3xl overflow-hidden flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10 group'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            /* 3. Solución para Móvil: Al hacer tap, se activa el hover en la mayoría de navegadores */
            onClick={() => setIsHovered(!isHovered)} 
        >
            {/* Contenedor de Imagen */}
            <div className="relative h-80 overflow-hidden">
                <img 
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                />

                {/* Badge categoria */}
                <span className="absolute top-3 left-3 z-10 bg-dark/80 backdrop-blur-sm text-gold-light text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                    {categoryName}
                </span>

                {/* Overlay specs con AnimatePresence */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='absolute inset-0 bg-dark/90 backdrop-blur-lg flex flex-col items-center justify-center gap-6 px-8'
                        >
                            <p className="text-gold-light text-xs tracking-[0.4em] font-bold uppercase border-b border-gold-light/30 pb-2">
                                Especificaciones
                            </p>
                            <div className="w-full space-y-4">
                                {Object.entries(product.specs).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center w-full border-b border-white/5 pb-2">
                                        <span className="text-white/40 capitalize text-sm">{key}</span>
                                        <span className="text-white font-bold text-base">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Info del producto */}
            <div className="flex flex-col gap-5 p-6">
                <div>
                    <h3 className="text-white font-lato font-bold text-xl leading-tight mb-1">
                        {product.name}
                    </h3>
                </div>

                {/* 2. Botones de variantes (unidades) más grandes */}
                <div className="grid grid-cols-2 gap-3">
                    {product.variants.map((variant) => (
                        <button
                            key={variant.label}
                            onClick={(e) => {
                                e.stopPropagation(); // Evita activar el overlay al cambiar variante
                                setSelectedVariant(variant);
                            }}
                            className={` py-2.5 text-xs font-black tracking-widest rounded-xl border-2 transition-all duration-300
                                ${selectedVariant.label === variant.label
                                    ? 'bg-gold-light border-gold-light text-dark shadow-[0_0_15px_rgba(246,216,140,0.3)]'
                                    : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {variant.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-white font-lato font-black text-3xl">
                        ${selectedVariant.price.toFixed(2)}
                    </span>
                </div>

                <div className="flex flex-col gap-3 mt-2">
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            addItem(product, selectedVariant)
                        }} 
                        className='w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-linear-to-r from-gold-light to-gold text-dark font-lato font-black text-xs tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all'
                    >
                        <ShoppingCart size={18} strokeWidth={2.5} />
                        AÑADIR AL CARRITO
                    </button>

                    {/* 1. Botón WhatsApp Mejorado */}
                    <button 
                        onClick={(e) => {
                            e.stopPropagation()
                            sendProductWhatsApp(product.name, selectedVariant.label, selectedVariant.price)
                        }}
                        className='w-full flex items-center justify-center gap-3 py-4 rounded-2xl border-2 border-white/20 text-white/80 font-lato font-bold text-xs tracking-[0.15em] transition-all duration-300 hover:border-gold-light hover:text-gold-light hover:bg-gold-light/5 group/wa'
                    >
                        <img 
                            src={whatsappIcon} 
                            alt="Wpp" 
                            className="w-5 h-5 brightness-0 invert opacity-70 group-hover/wa:opacity-100 group-hover/wa:sepia-[1] group-hover/wa:saturate-[5] group-hover/wa:hue-rotate-10 transition-all" 
                        />
                        COMPRAR POR WHATSAPP
                    </button>
                </div>
            </div>
        </motion.div>
    )
}