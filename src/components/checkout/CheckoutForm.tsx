import React from 'react';
import { useCheckout } from '../../context/CheckoutContext';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import OrderReview from './OrderReview';
import CheckoutSteps from './CheckoutSteps';

export default function CheckoutForm() {
  const { currentStep } = useCheckout();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <CheckoutSteps />
      
      <div className="mt-8">
        {currentStep === 1 && <ShippingForm />}
        {currentStep === 2 && <PaymentForm />}
        {currentStep === 3 && <OrderReview />}
      </div>
    </div>
  );
}