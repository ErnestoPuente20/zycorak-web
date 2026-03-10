import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import logo from '../../assets/images/logo.svg'
import useCartStore from '../../store/useCartStore'

const Navbar = () => {

  const {toggleCart, items} = useCartStore()
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className='fixed top-0 left-0 w-full bg-dark h-16 z-50 border-b border-dark-lighter'>
      <div className='flex h-full items-center max-w-7xl justify-between mx-auto'>
        <Link to='/'>
          <img 
            src={logo} 
            alt="Zycorak"
            className='h-14' 
          />
        </Link>

        <ul className='flex items-center gap-10'>
          <li>
            <Link to='/' className='text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'>
              INICIO
            </Link>
          </li>
          <li>
            <Link to='/productos' className='text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'>
              PRODUCTOS
            </Link>
          </li>
          <li>
            <Link to='/#nosotros' className='text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'>
              NOSOTROS
            </Link>
          </li>
          <li>
            <Link to='/#contacto' className='text-white text-sm tracking-[0.2em] hover:text-gold-light transition-colors duration-300'>
              CONTACTO
            </Link>
          </li>
        </ul>

        <button 
          onClick={toggleCart}
          className='relative text-white cursor-pointer hover:text-gold-light transition-colors duration-300'
        >
          <ShoppingCart size={24}/>
          {totalItems > 0 && (
            <span className='absolute -top-2 -right-2 bg-gold-light text-dark text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold'>
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar