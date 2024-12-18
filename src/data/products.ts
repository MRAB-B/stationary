export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'notebooks' | 'pens' | 'paper' | 'accessories';
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Leather Journal',
    description: 'Handcrafted leather-bound journal with premium paper',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80',
    category: 'notebooks'
  },
  {
    id: '2',
    name: 'Fountain Pen Set',
    description: 'Elegant fountain pen with replaceable ink cartridges',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80',
    category: 'pens'
  },
  {
    id: '3',
    name: 'Artisan Paper Pack',
    description: 'High-quality handmade paper, perfect for special occasions',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1598016677484-ad34c3d3e046?auto=format&fit=crop&q=80',
    category: 'paper'
  },
  {
    id: '4',
    name: 'Brass Pencil Case',
    description: 'Vintage-style brass pencil case with secure closure',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&q=80',
    category: 'accessories'
  }
];