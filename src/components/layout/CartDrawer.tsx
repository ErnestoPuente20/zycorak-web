import { Trash2, X } from "lucide-react"
import useCartStore from "../../store/useCartStore"
import whatsappIcon from "../../assets/images/whatsapp.svg"

import { sendCartWhatsApp } from "../../utils/whatsapp"

export default function CartDrawer() {

  const {items, isOpen, toggleCart, removeItem, updateQuantity, getTotal, clearCart} = useCartStore()

  if(!isOpen) return null

  return (
    <>
      {/* Overlay oscuro de fondo */}
      <div
        className="fixed inset-0 bg-black/60 z-50"
        onClick={toggleCart}
      />

      {/* Panel del carrito */}
      <div className="fixed top-0 right-0 h-full w-96 bg-dark-card z-50 flex flex-col">
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-white/10'>
          <div>
            <h2 className='text-white font-lato font-bold text-xl'>
              Mi Carrito
            </h2>
            <p className='text-white/40 font-lato text-xs tracking-widest mt-1'>
              TIENES {items.length} PRODUCTOS SELECCIONADOS
            </p>
          </div>
          <div className='flex items-center gap-4'>
            {/* Botón vaciar */}
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className='text-white/30 hover:text-red-400 font-lato text-xs tracking-widest transition-colors duration-300'
              >
                VACIAR
              </button>
            )}

            {/* Botón cerrar */}
            <button 
              onClick={toggleCart}
              className='text-white/50 hover:text-white transition-colors duration-300'
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Lista de productos */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {items.length === 0 ? (
            <p className="text-white/30 font-lato text-sm text-center mt-10">
              Tu carrito esta vacio
            </p>
          ) : (
            items.map((item) => (
              <div 
                key={`${item.id}-${item.variant.label}`}
                className='flex gap-4 bg-dark rounded-xl p-3'
              >
                {/* Imagen */}
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-16 h-16 object-cover rounded-lg shrink-0'
                />

                {/* Info */}
                <div className='flex flex-col gap-1 flex-1'>
                  <div className='flex items-start justify-between'>
                    <h4 className='text-white font-lato font-bold text-sm'>
                      {item.name}
                    </h4>
                    {/* Botón eliminar */}
                    <button
                      onClick={() => removeItem(item.id, item.variant.label)}
                      className='text-white/30 hover:text-red-400 transition-colors duration-300'
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <p className='text-white/40 font-lato text-xs'>
                    {item.variant.label}
                  </p>

                  <div className='flex items-center justify-between mt-1'>
                    {/* Botones cantidad */}
                    <div className='flex items-center gap-3'>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant.label, item.quantity - 1)}
                        className='text-white/50 hover:text-white transition-colors duration-300 w-5 h-5 flex items-center justify-center border border-white/20 rounded'
                      >
                        -
                      </button>
                      <span className='text-white font-lato text-sm w-4 text-center'>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant.label, item.quantity + 1)}
                        className='text-white/50 hover:text-white transition-colors duration-300 w-5 h-5 flex items-center justify-center border border-white/20 rounded'
                      >
                        +
                      </button>
                    </div>

                    {/* Precio */}
                    <p className='text-gold-light font-lato font-bold text-sm'>
                      ${(item.variant.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>
        {/* Footer del carrito */}
        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 flex flex-col gap-4">
            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-white/60 font-lato tracking-widest text-sm">
                TOTAL
              </span>
              <span className="text-gold-light font-lato font-bold text-2xl">
                ${getTotal().toFixed(2)}
              </span>
            </div>

            {/* Boton Whatsapp */}
            <button 
              onClick={() => {
                sendCartWhatsApp(items, getTotal())
                clearCart()
                toggleCart()
              }}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-lato font-bold text-xs tracking-widest transition-colors duration-300"
            >
              <img 
                src={whatsappIcon} 
                alt="Whatsapp"
                className="w-5 h-5 brightness-0 invert" 
              />
              ENVIAR PEDIDO POR WHATSAPP
            </button>
          </div>
        )}

      </div>

      
    </>
  )
}
