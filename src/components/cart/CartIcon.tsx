import React from 'react';
import { ShoppingCart } from 'lucide-react';
import CartBadge from './CartBadge';
import { useCart } from '../../context/CartContext';

export default function CartIcon() {
  const { openCart } = useCart();

  return (
    <button 
      onClick={openCart}
      className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
    >
      <ShoppingCart className="h-6 w-6 text-gray-600" />
      <CartBadge />
    </button>
  );
}