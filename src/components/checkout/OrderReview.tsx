import React, { useState } from 'react';
import { useCheckout } from '../../context/CheckoutContext';
import { useCart } from '../../context/CartContext';
import { Loader } from 'lucide-react';

export default function OrderReview() {
  const { formData, orderSummary, processOrder, setCurrentStep } = useCheckout();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      await processOrder();
    } catch (error) {
      console.error('Error processing order:', error);
      alert('There was an error processing your order. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Order Summary</h3>
        <div className="border rounded-md p-4 space-y-4">
          {orderSummary?.items.map(item => (
            <div key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${orderSummary?.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${orderSummary?.shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${orderSummary?.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Shipping Details</h3>
        <div className="border rounded-md p-4">
          <p>{formData.firstName} {formData.lastName}</p>
          <p>{formData.address}</p>
          <p>{formData.city}, {formData.postalCode}</p>
          <p>{formData.email}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(2)}
          className="text-gray-600 hover:text-gray-900"
          disabled={isProcessing}
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={isProcessing}
          className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 disabled:bg-gray-400 flex items-center space-x-2"
        >
          {isProcessing ? (
            <>
              <Loader className="animate-spin h-5 w-5" />
              <span>Processing...</span>
            </>
          ) : (
            <span>Place Order</span>
          )}
        </button>
      </div>
    </div>
  );
}