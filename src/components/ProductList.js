import React from 'react';
import { useParams } from 'react-router-dom';
import products from './data/products';
import ProductItem from './ProductItem';
import './styles/ProductList.css';
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function ProductList() {
	const { categoryName } = useParams();
	const navigate = useNavigate();
	const filteredProducts = products.filter(product => product.category === categoryName);
	const goBack = () => {
		navigate(-1);
	};
	return (
		<div className="product-list">
			<div className='container'>
				<div className='category-block'>
				<button className='back' onClick={goBack}><IoReturnUpBackOutline /></button>
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
