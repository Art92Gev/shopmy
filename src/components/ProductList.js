import React from 'react';
import { useParams } from 'react-router-dom';
import products from './data/products';
import ProductItem from './ProductItem';
import './styles/ProductList.css';
import BackButton from './BackButton';


function ProductList() {
	const { categoryName } = useParams();
	const filteredProducts = products.filter(product => product.category === categoryName);
	return (
		<div className="product-list">
			<div className='container'>
				<div className='category-block'>
					<BackButton />
					<h2>{categoryName}</h2>
				</div>
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
		</div>
	);
}

export default ProductList;
