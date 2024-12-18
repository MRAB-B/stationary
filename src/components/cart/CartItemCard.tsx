import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { CartItem, Product } from '../../types';

interface CartItemCardProps {
  item: CartItem & { product: Product };
}

export default function CartItemCard({ item }: CartItemCardProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex items-center space-x-4 py-4 border-b">
      <img
        src={product.image}
        alt={product.name}
        className="h-20 w-20 rounded-md object-cover"
      />
      
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">${product.price}</p>
        
        <div className="mt-2 flex items-center space-x-2">
          <button
            onClick={() => updateQuantity(product.id, quantity - 1)}
            className="p-1 text-gray-400 hover:text-gray-500"
          >
            <Minus className="h-4 w-4" />
          </button>
          
          <span className="text-gray-600">{quantity}</span>
          
          <button
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="p-1 text-gray-400 hover:text-gray-500"
          >
            <Plus className="h-4 w-4" />
          </button>
          
          <button
            onClick={() => removeFromCart(product.id)}
            className="ml-4 p-1 text-red-400 hover:text-red-500"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">
          ${(product.price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}