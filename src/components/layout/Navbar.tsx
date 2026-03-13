import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, ShoppingCart, X } from 'lucide-react'
import logo from '../../assets/images/logo.svg'
import useCartStore from '../../store/useCartStore'
import { useState } from 'react'

const Navbar = () => {

  const {toggleCart, items} = useCartStore()
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection  = (id: string) => {
    //Si ya estamos en el home hacemos scroll directo
    if (location.pathname === '/') {
      setMenuOpen(false)
      const section = document.getElementById(id)
      section?.scrollIntoView({behavior: 'smooth'})
    } else {
      //Si estamos en otra pagina navegamos al home primero
      setMenuOpen(false)
      navigate('/')
      setTimeout(() => {
        const section = document.getElementById(id)
        section?.scrollIntoView({behavior: 'smooth'})
      }, 300)
    }
  }

  return (
     <nav className='fixed top-0 left-0 w-full bg-dark h-16 z-50 border-b border-dark-lighter'>
      <div className='flex h-full items-center max-w-7xl justify-between mx-auto px-6'>

        {/* Logo */}
        <Link to='/' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img src={logo} alt="Zycorak" className='h-14' />
        </Link>

        {/* Links desktop */}
        <ul className='hidden md:flex items-center gap-10'>
          <li>
            <Link to='/' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className='text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'>
              INICIO
            </Link>
          </li>
          <li>
            <Link to='/productos' className='text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'>
              PRODUCTOS
            </Link>
          </li>
          <li>
            <button onClick={() => scrollToSection('nosotros')} className='text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'>
              NOSOTROS
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contacto')} className='text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'>
              CONTACTO
            </button>
          </li>
        </ul>

        {/* Derecha — carrito y hamburguesa */}
        <div className='flex items-center gap-4'>

          {/* Carrito */}
          <button
            onClick={toggleCart}
            className='relative text-white cursor-pointer hover:text-gold-light transition-colors duration-300 hidden md:block'
          >
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className='absolute -top-2 -right-2 bg-gold-light text-dark text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold'>
                {totalItems}
              </span>
            )}
          </button>

          {/* Hamburguesa — solo móvil */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden text-white hover:text-gold-light transition-colors duration-300'
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className='md:hidden w-full bg-dark border-t border-dark-lighter px-6 py-6 flex flex-col gap-6'>
          <Link
            to='/'
            onClick={() => setMenuOpen(false)}
            className='text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'
          >
            INICIO
          </Link>
          <Link
            to='/productos'
            onClick={() => setMenuOpen(false)}
            className='text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'
          >
            PRODUCTOS
          </Link>
          <button
            onClick={() => scrollToSection('nosotros')}
            className='text-left text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'
          >
            NOSOTROS
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className='text-left text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'
          >
            CONTACTO
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar