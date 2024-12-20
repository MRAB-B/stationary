// src/pages/ProductManagementPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductManagementPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <Link
        to="/products/add-multiple"
        className="inline-block mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Multiple Products
      </Link>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-gray-800 font-semibold">${product.price}</p>
            <Link
              to={`/products/edit/${product.id}`}
              className="mt-2 inline-block px-4 py-2 bg-green-500 text-white rounded"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagementPage;
