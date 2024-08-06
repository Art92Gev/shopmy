import React from 'react';
import ProductItem from './ProductItem';

const products = [
  {
    id: 1,
    name: "Товар 1",
    description: "Описание товара 1",
    price: "1000",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Товар 2",
    description: "Описание товара 2",
    price: "2000",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Товар 3",
    description: "Описание товара 3",
    price: "3000",
    imageUrl: "https://via.placeholder.com/150"
  }
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
