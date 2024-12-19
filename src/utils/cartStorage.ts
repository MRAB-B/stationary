// src/utils/cartStorage.ts

export function getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : []; // Return an empty array if no cart is found
  }
  
  export function saveCartToLocalStorage(cart: any[]) {
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the cart to localStorage
  }
  