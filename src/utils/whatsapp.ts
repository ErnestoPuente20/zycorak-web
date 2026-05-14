import type { CartItem } from "../store/useCartStore";

const WHATSAPP_NUMBER = '59167021196'

export const sendProductWhatsApp = (
    productName: string,
    variantLabel: string,
    price: number
) => {
    const message = `Hola! Me interesa el siguiente producto:%0A%0A🛍️ *${productName}*%0A📦 ${variantLabel}%0A💰 Bs ${price.toFixed(2)}%0A%0A¿Está disponible?`
     window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
}

export const sendCartWhatsApp = (items: CartItem[], total: number) => {
    const productList = items
        .map((item) => `▪️ ${item.name} — ${item.variant.label} x${item.quantity} = Bs ${(item.variant.price * item.quantity)}`)
        .join('%0A')

    const message = `Hola! Quisiera hacer el siguiente pedido:%0A%0A${productList}%0A%0A💰 *Total: Bs ${total}*%0A%0A¿Pueden confirmar disponibilidad?`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank')
}