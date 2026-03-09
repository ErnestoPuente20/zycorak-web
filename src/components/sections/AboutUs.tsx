import { Globe, PlusCircle, Sparkles, type LucideIcon } from "lucide-react"

interface Feature {
    title: string
    desc: string
    icon: LucideIcon
}

export default function AboutUs() {

    const features: Feature[] = [
        {title: 'Selección curada', desc: 'Elegimos cada pieza bajo estrictos estándares de calidad.', icon: Sparkles},
        { title: 'Origen Garantizado', desc: 'Importación directa de las mejores fábricas del mundo.', icon: Globe },
        { title: 'Catálogo en Crecimiento', desc: 'Próximamente expandiremos nuestra colección para tu hogar.', icon: PlusCircle },
    ]

  return (
    <section id="nosotros" className="w-full py-20 bg-dark-about">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-16 items-center">
                {/* Imagen izquierda */}
                <img 
                    src="/src/assets/images/nosotros.png" 
                    alt="Zycorak"
                    className="w-full h-125 object-cover rounded-2xl" 
                />

                {/* Contenido derecha */}
                <div className="flex flex-col gap-6">
                    <span className="font-greatvibes text-gold-light text-3xl">
                        Conócenos
                    </span>
                    <h2 className="text-white font-lato font-bold text-4xl leading-tight">
                        Calidad que trasciende fronteras
                    </h2>
                    <p className="text-white/60 font-lato text-base leading-relaxed">
                        En Zycorak, seleccionamos cuidadosamente cada pieza alrededor del mundo para asegurar que solo lo mejor llegue a tu hogar. Lo que comenzó como una pasión por la cristalería fina se convirtió en el inicio de nuestra búsqueda por transformar tus espacios con elegancia y durabilidad.
                    </p>

                    {/* Features */}
                    <div className="flex flex-col gap-6 mt-2">
                        {features.map((item) => (
                            <div
                                key={item.title}
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
