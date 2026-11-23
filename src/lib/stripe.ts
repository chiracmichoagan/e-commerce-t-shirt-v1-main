import products from '@/data/products'

export async function getStripeEnabled() {
  return false
}

export async function createCheckoutSession({ data: productId }: { data: number }) {
  const product = products.find((p) => p.id === productId)
  if (!product) {
    throw new Error('Product not found')
  }

  return null
}
