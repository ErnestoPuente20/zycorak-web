import { Link } from "react-router-dom"
import facebookIcon from '../../assets/images/facebook.svg'
import logo from '../../assets/images/logo-blanco.svg'
import tiktokIcon from '../../assets/images/tiktok.svg'
import whatsappIcon from '../../assets/images/whatsapp.svg'
import { categories } from "../../data/categories"

export default function Footer() {
  return (
    <footer id='contacto' className="w-full bg-dark border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Columna 1 logo y redes */}
          <div className="flex flex-col gap-4">
            <img 
              src={logo}
              alt="Zycorak"
              className="h-14 w-auto self-start" 
            />
            <p className="text-white/50 font-lato text-md leading-relaxed italic">
              Elegancia y calidad en cada cristal
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/share/1E3QodwoKK/"
                target="_blank"
                rel="noreferrer"
                className="text-white/50 hover:text-gold-light transition-colors duration-300"
              >
                <img 
                  src={facebookIcon} 
                  alt="Facebook"
                  className="w-5 h-5 brightness-0 invert opacity-50 hover:opacity-100 transition-all" 
                />
              </a>
              <a 
                href="https://www.tiktok.com/@zycorak?_r=1&_t=ZS-94NqDrsAHPI"
                target="_blank"
                rel="noreferrer"
                className="text-white/50 hover:text-gold-light transition-colors duration-300"
              >
                <img 
                  src={tiktokIcon} 
                  alt="TikTok"
                  className="w-5 h-5 brightness-0 invert opacity-50 hover:opacity-100 transition-all" 
                />
              </a>
            </div>
          </div>

          {/* Columna 2 categorias */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-lato font-bold text-sm tracking-widest">
              CATEGORÍAS
            </h4>
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/productos?categoria=${cat.slug}`}
                  className="text-white/50 font-lato text-sm hover:text-gold-light transition-colors duration-300"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Columna 3 Necesitas ayuda */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white font-lato font-bold text-sm tracking-widest uppercase'>
              ¿Necesitas ayuda?
            </h4>
            <a 
              href=""
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 transition-colors duration-300 text-white font-lato font-bold text-xs tracking-widest px-4 py-3 rounded-lg w-fit"
            >
              <img src={whatsappIcon} alt='WhatsApp' className='w-4 h-4 brightness-0 invert' />
              CHATEA CON NOSOTROS
            </a>
            <div className='flex flex-col gap-1 mt-2'>
              <p className='text-white/50 font-lato text-sm'>Horario</p>
              <p className='text-white/70 font-lato text-sm'>Lunes a Sábado: 9:00 - 18:00</p>
            </div>
          </div>

          {/* Columna 4 Entregas */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white font-lato font-bold text-sm tracking-widest uppercase'>
              Entregas en La Paz
            </h4>
            <p className='text-white/50 font-lato text-sm leading-relaxed'>
              Realizamos entregas seguras en toda la ciudad de La Paz. Consulta el costo de envío a tu zona por WhatsApp.
            </p>
          </div>
        </div>

        {/* Línea divisora y copyright */}
        <div className='border-t border-white/10 mt-8 pt-4 flex flex-col md:flex-row items-center justify-between gap-2'>
          <p className='text-white/30 font-lato text-xs'>
            © 2026 ZYCORAK. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <p className='text-white/30 font-lato text-xs'>
            DISEÑADO POR ERNESTO PUENTE
          </p>
        </div>
      </div>
    </footer>
  )
}