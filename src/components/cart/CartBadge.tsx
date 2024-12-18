import React from 'react';
import { useCart } from '../../context/CartContext';

export default function CartBadge() {
  const { getCartItemCount } = useCart();
  const count = getCartItemCount();

  if (count === 0) return null;

  return (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {count}
    </span>
  );
}