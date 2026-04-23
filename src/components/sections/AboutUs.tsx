import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import { Globe, PlusCircle, Sparkles, type LucideIcon } from "lucide-react"
import nosotrosImg from '../../assets/images/nosotros.png'

interface Feature {
    title: string
    desc: string
    icon: LucideIcon
}

export default function AboutUs() {

    const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768)

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 768)
    }, [])

    const features: Feature[] = [
        {title: 'Selección curada', desc: 'Elegimos cada pieza bajo estrictos estándares de calidad.', icon: Sparkles},
        { title: 'Origen Garantizado', desc: 'Importación directa de las mejores fábricas del mundo.', icon: Globe },
        { title: 'Catálogo en Crecimiento', desc: 'Próximamente expandiremos nuestra colección para tu hogar.', icon: PlusCircle },
    ]

  return (
    <section id="nosotros" className="w-full py-20 bg-dark-about overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

                {/* Imagen */}
                <motion.div
                    initial={{opacity: 0, x: isDesktop ? -50 : 0}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true, amount: 0.2}}
                    transition={{duration: 0.8}}
                >
                    <img 
                        src={nosotrosImg}
                        alt="Nosotros"
                        className="w-full h-72 md:h-96 lg:h-125 object-cover rounded-2xl" 
                    />
                </motion.div>

                {/* Contenido */}
                <div className="flex flex-col gap-6">

                    <motion.div
                        initial={{opacity: 0, x: isDesktop ? 50 : 0}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, amount: 0.2}}
                        transition={{duration: 0.8}}
                    >
                        <span className="font-greatvibes text-gold-light text-3xl">
                            Conócenos
                        </span>
                        <h2 className="text-white font-lato font-bold text-2xl md:text-4xl leading-tight">
                            Calidad que trasciende fronteras
                        </h2>
                        <p className="text-white/60 font-lato text-sm md:text-base leading-relaxed mt-2">
                            En Zycorak, seleccionamos cuidadosamente cada pieza alrededor del mundo para asegurar que solo lo mejor llegue a tu hogar. Lo que comenzó como una pasión por la cristalería fina se convirtió en el inicio de nuestra búsqueda por transformar tus espacios con elegancia y durabilidad.
                        </p>
                    </motion.div>

                    {/* Features */}
                    <div className="flex flex-col gap-6 mt-2">
                        {features.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{opacity: 0, x: isDesktop ? 50 : 0}}
                                whileInView={{opacity: 1, x: 0}}
                                viewport={{once: true, amount: 0.2}}
                                transition={{duration: 0.6, delay: index * 0.15}}
                                className="flex items-start gap-4"
                            >
                                <div className="w-9 h-9 rounded-full bg-gold-light/20 flex items-center justify-center shrink-0 mt-1">
                                    <item.icon size={18} className="text-gold-light"/>
                                </div>
                                <div>
                                    <h4 className="text-white font-lato font-bold text-sm mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-white/50 font-lato text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}