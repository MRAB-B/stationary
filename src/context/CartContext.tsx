import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CartItem, CartContextType, Product } from '../types';
import { products } from '../data/products';
import { getCartFromLocalStorage, saveCartToLocalStorage } from '../utils/cartStorage'; // Import localStorage helper functions

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize the cart state from localStorage
  const [items, setItems] = useState<CartItem[]>(getCartFromLocalStorage());
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    saveCartToLocalStorage(items);
  }, [items]);

  const addToCart = useCallback((productId: string) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === productId);
      if (existingItem) {
        return currentItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentItems, { id: productId, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems(currentItems => 
      currentItems.filter(item => item.id !== productId)
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getCartItemCount = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const getCartTotal = useCallback(() => {
    return items.reduce((total, item) => {
      const product = products.find(p => p.id === item.id);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  }, [items]);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  return (
    <CartContext.Provider value={{
      items, // The cart items (this is the cart data)
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartItemCount,
      isCartOpen,
      openCart,
      closeCart,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
