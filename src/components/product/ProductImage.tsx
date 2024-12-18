import React from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
}

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
      <img
        src={src}
        alt={alt}
        className="h-64 w-full object-cover object-center group-hover:opacity-75 transition-opacity"
      />
    </div>
  );
}