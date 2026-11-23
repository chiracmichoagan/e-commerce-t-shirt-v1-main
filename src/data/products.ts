export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  category: string
  sizes: string[]
  colors: string[]
  badge?: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'T-shirt Essential',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    description:
      'Un t-shirt coupe droite en coton premium, doux et respirant. Sa matière dense conserve sa forme au quotidien et son col renforcé résiste aux lavages répétés.',
    shortDescription: 'Coton premium, coupe régulière et confort quotidien.',
    price: 14900,
    category: 'T-shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blanc', 'Noir', 'Sable'],
    badge: 'Nouveauté',
  },
  {
    id: 2,
    name: 'Jean Slim Indigo',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
    description:
      "Le jean slim idéal pour toutes les journées. Sa toile stretch légèrement délavée offre une belle tenue tout en permettant une liberté de mouvement naturelle.",
    shortDescription: 'Jean slim stretch à la teinte indigo profonde.',
    price: 28500,
    category: 'Jeans',
    sizes: ['38', '40', '42', '44', '46', '48'],
    colors: ['Indigo', 'Bleu brut', 'Noir'],
  },
  {
    id: 3,
    name: 'Chemise Oxford',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80',
    description:
      "Une chemise structurée en coton Oxford, pensée pour le bureau comme pour les sorties. Coupe moderne, col italien et finitions renforcées.",
    shortDescription: 'Chemise Oxford légère pour toutes les occasions.',
    price: 22500,
    category: 'Chemises',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Bleu ciel', 'Blanc', 'Rose pâle'],
    badge: 'Bestseller',
  },
  {
    id: 4,
    name: 'Veste Urban',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    description:
      "Une veste mi-saison polyvalente avec une coupe nette et des détails minimalistes. Doublure confortable et poches pratiques pour un style urbain assuré.",
    shortDescription: 'Veste mi-saison coupe moderne et polyvalente.',
    price: 39500,
    category: 'Vestes',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Marron', 'Kaki'],
    badge: 'Nouveau',
  },
  {
    id: 5,
    name: 'T-shirt Oversize',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
    description:
      'Un tee-shirt ample au tombé contemporain, fabriqué dans un jersey épais doux au toucher. Parfait seul ou superposé.',
    shortDescription: 'Coupe oversize et jersey épais pour un look actuel.',
    price: 16900,
    category: 'T-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gris chiné', 'Vert sauge', 'Noir'],
  },
  {
    id: 6,
    name: 'Jean Regular Vintage',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
    description:
      "Un jean regular inspiré des silhouettes vintage, avec une finition délavée naturelle. Confortable dès la première journée.",
    shortDescription: 'Coupe regular, denim robuste et fini vintage.',
    price: 31500,
    category: 'Jeans',
    sizes: ['38', '40', '42', '44', '46', '48', '50'],
    colors: ['Bleu vintage', 'Écru', 'Gris'],
    badge: 'Éco-responsable',
  },
]

export const categories = ['Tous', 'T-shirts', 'Jeans', 'Chemises', 'Vestes']

export default products
