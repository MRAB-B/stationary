import React from 'react';
import { type Product } from '../types';
import ProductImage from './product/ProductImage';
import ProductInfo from './product/ProductInfo';
import AddToCartButton from './product/AddToCartButton';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative">
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo 
        name={product.name}
        description={product.description}
        price={product.price}
      />
      <AddToCartButton productId={product.id} />
    </div>
  );
}