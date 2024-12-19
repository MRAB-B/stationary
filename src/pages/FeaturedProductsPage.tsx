import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products'; // Assuming this is your product data
import ProductCard from '../components/ProductCard';

export default function FeaturedProductPage() {
  const location = useLocation(); // Get the current location (URL)
  const [filteredProducts, setFilteredProducts] = useState(products); // Default to all products

  useEffect(() => {
    // Get the search query from the URL
    const searchParams = new URLSearchParams(location.search);
    const searchKeyword = searchParams.get('search') || ''; // Default to empty string if no search query

    // Filter products based on the name matching the search query (case-insensitive)
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    // Update the state with the filtered products
    setFilteredProducts(filtered);
  }, [location.search]); // Re-run when the search query changes

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Our Products
      </h2>
      
      {/* Display a message if no products match the search */}
      {filteredProducts.length === 0 ? (
        <p className="mt-4 text-gray-600">No products found for your search.</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
