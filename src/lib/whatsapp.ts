const ADMIN_WHATSAPP_NUMBER = '2290153947916'

export function getWhatsAppCheckoutUrl(productName: string, selectedSize?: string | null, selectedColor?: string) {
  const message = [
    `Bonjour, je souhaite commander ${productName}`,
    selectedSize ? `en taille ${selectedSize}` : '',
    selectedColor ? `en ${selectedColor}` : '',
  ]
    .filter(Boolean)
    .join(' ')

  return `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(`${message}.`)}`
}
