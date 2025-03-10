'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = () => {
   // console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className='card'>
      <Link href={`/product/${product.slug}`}>
        <div className='imageContainer'>
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            className='image'
          />
        </div>
      </Link>
      <div className='content'>
        <h2 className='title'>{product.name}</h2>
        <p className='price'>${product.price.toFixed(2)}</p>
        <button
          className='button'
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
