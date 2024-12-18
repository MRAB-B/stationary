import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartSummary() {
  const { getCartTotal, closeCart } = useCart();
  const subtotal = getCartTotal();
  const shipping = 5.99;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    closeCart();
    window.location.href = '/checkout';
  };

  const handleContinueShopping = () => {
    closeCart();
    window.location.href = '#products';
  };

  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="space-y-4">
        <div className="flex justify-between text-base text-gray-900">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-base text-gray-900">
          <p>Shipping</p>
          <p>${shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>
        
        <button
          type="button"
          onClick={handleCheckout}
          className="w-full rounded-md border border-transparent bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800"
        >
          Checkout
        </button>
        
        <div className="flex justify-center text-center text-sm text-gray-500">
          <p>
            or{' '}
            <button
              type="button"
              className="font-medium text-gray-900 hover:text-gray-800"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}