import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { saveCartToLocalStorage } from '../../utils/cartStorage'; // Import the saveCartToLocalStorage function

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart, items } = useCart();  // Access `items` directly
  const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    // Add the product to the cart via context
    addToCart(productId);

    // Save the updated cart to localStorage
    saveCartToLocalStorage(items);

    setShowMessage(true);

    // Hide the message after 3 seconds
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="relative">
      <button 
        onClick={handleAddToCart}
        className="mt-4 w-full bg-gray-900 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-800 transition-colors"
      >
        <Plus className="h-4 w-4" />
        <span>Add to Cart</span>
      </button>
      {showMessage && (
        <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-1 px-3 rounded-md shadow-md">
          Item added to cart
        </div>
      )}
    </div>
  );
}
