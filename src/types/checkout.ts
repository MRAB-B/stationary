export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  total: number;
  items: Array<{
    id: string;
    quantity: number;
    name: string;
    price: number;
  }>;
}