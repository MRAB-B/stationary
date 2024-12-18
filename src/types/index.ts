export interface CartItem {
  id: string;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartItemCount: () => number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  getCartTotal: () => number;
}

export * from '../data/products';
export * from './checkout';