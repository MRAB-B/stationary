import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart(productId)}
      className="mt-4 w-full bg-gray-900 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors"
    >
      <Plus className="h-4 w-4" />
      <span>Add to Cart</span>
    </button>
  );
}