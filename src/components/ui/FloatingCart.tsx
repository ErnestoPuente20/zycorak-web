import { ShoppingCart } from "lucide-react"
import useCartStore from "../../store/useCartStore"

export default function FloatingCart() {

    const {toggleCart, items} = useCartStore()
    const totalItems = items.reduce((total, item) => total + item.quantity, 0)

    return (
        <button
            onClick={toggleCart}
            className="md:hidden fixed bottom-8 right-6 z-40 w-14 h-14 bg-linear-to-r from-gold-light to-gold rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(181,134,60,0.4)] active:scale-95 transition-all duration-300"
        >
            <ShoppingCart size={22} strokeWidth={2.5} className="text-dark"/>
            {totalItems > 0 && (
                <span className='absolute -top-1 -right-1 bg-dark text-gold-light text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold border border-gold-light'>
                {totalItems}
                </span>
            )}
        </button>
    )
}
