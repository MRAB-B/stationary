import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/cart/CartDrawer';
import CheckoutForm from './components/checkout/CheckoutForm';
import OrderSuccessPage from './pages/OrderSuccessPage';
import FeaturedProductsPage from './pages/FeaturedProductsPage';
import Footer from './components/Footer';
import { products } from './data/products';
import { CartProvider } from './context/CartContext';
import { CheckoutProvider } from './context/CheckoutContext';
import ProductManagementPage from './pages/ProductManagementPage';
import AddProductsPage from './pages/AddProductsPage';
import EditProductPage from './pages/EditProductPage';

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <CheckoutProvider>
          <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <CartDrawer />
            <main className="flex-grow">
              <Routes>
                {/* Home Page */}
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                          Featured Products
                        </h2>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                          {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                          ))}
                        </div>
                      </section>
                    </>
                  }
                />

                {/* Existing Pages */}
                <Route path="/checkout" element={<CheckoutForm />} />
                <Route path="/order-success" element={<OrderSuccessPage />} />
                <Route path="/featured-products" element={<FeaturedProductsPage />} />

                {/* New Pages */}
                <Route path="/products" element={<ProductManagementPage />} />
                <Route path="/products/add-multiple" element={<AddProductsPage />} />
                <Route path="/products/edit/:id" element={<EditProductPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </CheckoutProvider>
      </CartProvider>
    </Router>
  );
};

export default App;
