import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartItemCard from './CartItemCard';
import CartSummary from './CartSummary';
import { products } from '../../data/products';

export default function CartDrawer() {
  const { isCartOpen, closeCart, items } = useCart();

  if (!isCartOpen) return null;

  const cartItems = items.map(item => ({
    ...item,
    product: products.find(p => p.id === item.id)!
  }));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeCart} />
      
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md">
          <div className="flex h-full flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-6">
              <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-500"
                onClick={closeCart}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <CartItemCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && <CartSummary />}
          </div>
        </div>
      </div>
    </div>
  );
}