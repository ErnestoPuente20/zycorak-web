import {Link} from 'react-router-dom'
import heroBg from '../../assets/images/hero-bg.png'

export default function Hero() {
  return (
    <section
        className='relative flex pt-16 items-center justify-center w-full min-h-screen bg-cover bg-center'
        style={{backgroundImage: `url(${heroBg})`}}
    >
        <div className='text-center flex flex-col items-center justify-center'>
            <h1 className='font-greatvibes text-8xl mb-4 text-gold-light'>
                Elegancia en cada sorbo
            </h1>
            <p className='font-lato text-white text-2xl mb-10 tracking-[0.2em]'>
                CRISTALERIA DE ALTA CALIDAD
            </p>

            <Link to='/productos' className='px-10 py-4 bg-linear-to-r from-gold-light to-gold rounded-full font-bold text-sm tracking-widest text-black hover:brightness-110 transition-all duration-300 shadow-lg'>
                EXPLORAR CATÁLOGO
            </Link>
        </div>
    </section>
  )
}
