// src/components/AddProductsForm.tsx
import React, { useState } from 'react';
import { Product } from '../data/products';

interface AddProductsFormProps {
  onAdd: (products: Product[]) => void;
}

export const AddProductsForm: React.FC<AddProductsFormProps> = ({ onAdd }) => {
  const [productInputs, setProductInputs] = useState<Product[]>([
    { id: '', name: '', description: '', price: 0, image: '', category: 'notebooks' },
  ]);

  const handleChange = (index: number, field: keyof Product, value: any) => {
    const updatedInputs = [...productInputs];
    updatedInputs[index] = { ...updatedInputs[index], [field]: value };
    setProductInputs(updatedInputs);
  };

  const addNewRow = () => {
    setProductInputs([
      ...productInputs,
      { id: '', name: '', description: '', price: 0, image: '', category: 'notebooks' },
    ]);
  };

  const handleSubmit = () => {
    onAdd(productInputs);
    setProductInputs([{ id: '', name: '', description: '', price: 0, image: '', category: 'notebooks' }]);
  };

  return (
    <div>
      <h2>Add Multiple Products</h2>
      {productInputs.map((product, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="ID"
            value={product.id}
            onChange={(e) => handleChange(index, 'id', e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            value={product.name}
            onChange={(e) => handleChange(index, 'name', e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={product.description}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={(e) => handleChange(index, 'price', parseFloat(e.target.value))}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={product.image}
            onChange={(e) => handleChange(index, 'image', e.target.value)}
          />
          <select
            value={product.category}
            onChange={(e) => handleChange(index, 'category', e.target.value as Product['category'])}
          >
            <option value="notebooks">Notebooks</option>
            <option value="pens">Pens</option>
            <option value="paper">Paper</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
      ))}
      <button onClick={addNewRow}>Add Another Product</button>
      <button onClick={handleSubmit}>Submit Products</button>
    </div>
  );
};

export default AddProductsForm;
