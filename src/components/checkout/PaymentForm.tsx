import React from 'react';
import { useCheckout } from '../../context/CheckoutContext';

export default function PaymentForm() {
  const { formData, updateFormData, setCurrentStep } = useCheckout();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            value={formData.cardNumber || ''}
            onChange={(e) => updateFormData({ cardNumber: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
            required
            pattern="[0-9]{16}"
            maxLength={16}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              value={formData.expiryDate || ''}
              onChange={(e) => updateFormData({ expiryDate: e.target.value })}
              placeholder="MM/YY"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
              required
              pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
            <input
              type="text"
              id="cvv"
              value={formData.cvv || ''}
              onChange={(e) => updateFormData({ cvv: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900"
              required
              pattern="[0-9]{3,4}"
              maxLength={4}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setCurrentStep(1)}
          className="text-gray-600 hover:text-gray-900"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800"
        >
          Review Order
        </button>
      </div>
    </form>
  );
}