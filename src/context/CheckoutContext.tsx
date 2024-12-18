import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutFormData, OrderSummary } from '../types/checkout';
import { useCart } from './CartContext';
import { products } from '../data/products';

interface CheckoutContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  formData: Partial<CheckoutFormData>;
  updateFormData: (data: Partial<CheckoutFormData>) => void;
  processOrder: () => Promise<void>;
  orderSummary: OrderSummary | null;
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(
  undefined
);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<CheckoutFormData>>({});
  const { items, getCartTotal, clearCart } = useCart();

  const orderSummary: OrderSummary = {
    subtotal: getCartTotal(),
    shipping: 5.99,
    total: getCartTotal() + 5.99,
    items: items.map((item) => {
      const product = products.find((p) => p.id === item.id)!;
      return {
        id: item.id,
        quantity: item.quantity,
        name: product.name,
        price: product.price,
      };
    }),
  };

  const updateFormData = (data: Partial<CheckoutFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const sendOrderConfirmationEmail = async () => {
    try {
      // Simulate an email-sending API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Order confirmation email sent successfully');
    } catch (error) {
      console.error('Failed to send order confirmation email:', error);
      throw new Error('Email sending failed');
    }
  };

  const processOrder = async () => {
    try {
      // Simulate API call to process order
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Prepare email data
      const emailData = {
        to: formData.email, // Assuming `email` is part of `formData`
        subject: 'Order Confirmation',
        text: `Thank you for your order! Here are your order details:\n\n${JSON.stringify(
          orderSummary,
          null,
          2
        )}`,
      };

      // Send confirmation email via backend
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error('Failed to send order confirmation email');
      }

      console.log('Order confirmation email sent successfully');

      // Clear cart after successful order
      clearCart();

      // Reset checkout form
      setFormData({});
      setCurrentStep(1);

      // Redirect to success page
      navigate('/order-success');
    } catch (error) {
      console.error('Error processing order:', error);
      throw error;
    }
  };

  return (
    <CheckoutContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        formData,
        updateFormData,
        processOrder,
        orderSummary,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckout must be used within CheckoutProvider');
  }
  return context;
}
