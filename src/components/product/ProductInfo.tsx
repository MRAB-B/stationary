import React from 'react';

interface ProductInfoProps {
  name: string;
  description: string;
  price: number;
}

export default function ProductInfo({ name, description, price }: ProductInfoProps) {
  return (
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">${price}</p>
    </div>
  );
}