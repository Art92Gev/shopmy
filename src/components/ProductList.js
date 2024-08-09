import React from 'react';
import { useParams } from 'react-router-dom';
import products from './data/products';
import ProductItem from './ProductItem';

function ProductList() {
  const { categoryName } = useParams();
  const filteredProducts = products.filter(product => product.category === categoryName);

  return (
    <div className="product-list">
      <h2>Товары в категории: {categoryName}</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>В данной категории нет товаров.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
