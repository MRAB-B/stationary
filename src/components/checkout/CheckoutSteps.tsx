import React from 'react';
import { useCheckout } from '../../context/CheckoutContext';
import { Check } from 'lucide-react';

const steps = [
  { id: 1, name: 'Shipping' },
  { id: 2, name: 'Payment' },
  { id: 3, name: 'Review' }
];

export default function CheckoutSteps() {
  const { currentStep } = useCheckout();

  return (
    <nav aria-label="Progress">
      <ol className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
            <div className="flex items-center">
              <div className={`relative flex h-8 w-8 items-center justify-center rounded-full
                ${currentStep > step.id ? 'bg-gray-900' : currentStep === step.id ? 'border-2 border-gray-900' : 'border-2 border-gray-300'}`}>
                {currentStep > step.id ? (
                  <Check className="h-5 w-5 text-white" />
                ) : (
                  <span className={currentStep === step.id ? 'text-gray-900' : 'text-gray-500'}>{step.id}</span>
                )}
              </div>
              {stepIdx !== steps.length - 1 && (
                <div className={`absolute top-4 w-full h-0.5 ${currentStep > step.id ? 'bg-gray-900' : 'bg-gray-300'}`} />
              )}
            </div>
            <span className="absolute -bottom-6 w-max text-sm font-medium text-gray-500">
              {step.name}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}