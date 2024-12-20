// src/pages/EditProductPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const EditProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      {/* Create a form pre-filled with `product` details */}
      <form>
        <input
          type="text"
          placeholder="Name"
          defaultValue={product.name}
          className="block w-full border p-2 mb-4"
        />
        {/* Add other fields here */}
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
