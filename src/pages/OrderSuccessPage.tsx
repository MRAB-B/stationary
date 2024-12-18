import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-4 text-2xl font-bold text-gray-900">Order Confirmed!</h1>
        <p className="mt-2 text-gray-600">
          Thank you for your purchase. We'll send you a confirmation email shortly.
        </p>
        
        <div className="mt-8 space-y-4">
          <Link
            to="/"
            className="block w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 flex items-center justify-center"
          >
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          
          <Link
            to="/orders"
            className="block w-full text-gray-600 hover:text-gray-900"
          >
            View Order Status
          </Link>
        </div>
      </div>
    </div>
  );
}