// src/pages/AddProductsPage.tsx
import React from 'react';
import { AddProductsForm } from '../pages/AddProductsForm';

const AddProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Add Multiple Products</h1>
      <AddProductsForm onAdd={(newProducts) => console.log('Products Added:', newProducts)} />
    </div>
  );
};

export default AddProductsPage;
