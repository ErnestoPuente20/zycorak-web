import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import heroBg from '../../assets/images/hero-bg.png'

export default function Hero() {
  return (
    <section
        className='relative flex pt-16 items-center justify-center w-full min-h-screen bg-cover bg-center'
        style={{backgroundImage: `url(${heroBg})`}}
    >
        {/* Overlay oscuro */}
        <div className='absolute inset-0 bg-black/10'/>

        <div className='relative text-center flex flex-col items-center justify-center px-6'>

            {/* Linea decorativa arriba */}
            <motion.div
                initial={{width: 0}}
                animate={{width: 64}}
                transition={{duration: 0.8, delay: 0.2}}
                className='h-px bg-gold-light mb-6'
            />

            {/* Titulo */}
            <motion.h1 
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.4}}
                className='font-greatvibes text-5xl md:text-7xl lg:text-8xl mb-4 text-gold-light'
            >
                Elegancia en cada sorbo
            </motion.h1>

            {/* Subtitulo */}
            <motion.p
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.7}}
                className='font-lato text-white text-sm md:text-xl lg:text-2xl mb-10 tracking-[0.2em]'
            >
                CRISTALERIA DE ALTA CALIDAD
            </motion.p>

            {/* Boton */}
            <motion.div
                initial={{opacity:0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 1}}
            >
                <Link 
                    to='/productos' 
                    className='px-8 md:px-10 py-3 md:py-4 bg-linear-to-r from-gold-light to-gold rounded-full font-bold text-xs md:text-sm tracking-widest text-black hover:brightness-110 transition-all duration-300 shadow-lg'
                >
                    EXPLORAR CATÁLOGO
                </Link>
            </motion.div>

            {/* Linea decorativa */}
            <motion.div
                initial={{width: 0}}
                animate={{width: 64}}
                transition={{duration: 0.8, delay: 1.2}}
                className='h-px bg-gold-light mt-6'
            />
        </div>
    </section>
  )
}