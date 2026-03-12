import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import { categories } from '../../data/categories'
import { ArrowRightCircle } from 'lucide-react'

export default function Collections() {
  return (
    <section className='w-full py-20 bg-dark'>
        <div className='max-w-7xl mx-auto'>

            {/* Titulo */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.7}} 
                className='flex flex-col items-center mb-16'
            >
                <h2 className='text-white text-center font-lato tracking-[0.3em] text-lg mb-3'>
                    EXPLORA NUESTRAS COLECCIONES
                </h2>
                <div className='w-16 h-0.5 bg-gold-light' />
            </motion.div>

            {/* Cards */}
            <div className='flex gap-6 justify-center'>
                {categories.map((cat, index) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className='relative overflow-hidden cursor-pointer w-98 h-125 rounded-2xl flex flex-col items-center justify-center'
                    >
                        <img 
                            src={cat.image} 
                            alt={cat.name} 
                            className='w-full h-full object-cover object-center'
                        />

                        <div 
                            className='absolute inset-0 bg-linear-to-t from-black/85 to-black/20'
                        />

                        {/* Contenido */}
                        <div className='absolute inset-0 flex flex-col items-center justify-center gap-4 p-8'>
                            <h3 className='text-white font-lato font-bold text-xl tracking-[0.2em]'>
                                {cat.name}
                            </h3>
                            <Link 
                                to={`/productos?categoria=${cat.slug}`}
                                className='flex items-center gap-2 font-lato text-sm tracking-widest text-gold-light hover:text-white hover:border-white hover:bg-white/10 transition-colors border border-gold-light px-8 py-3 rounded-md'
                            >
                                Explorar <ArrowRightCircle size={18}/>
                            </Link>
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}
