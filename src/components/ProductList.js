import React from 'react';
import { useParams } from 'react-router-dom';
import products from './data/products';
import ProductItem from './ProductItem';
import './styles/ProductList.css';
import BackButton from '../components/utils/BackButton';

function ProductList() {  
    const { categoryName } = useParams();

    // Фильтрация товаров по категории
    const filteredProducts = products.filter(product => product.category === categoryName);

    // Разделяем товары на два массива: в наличии и нет в наличии
    const availableProducts = filteredProducts.filter(product => product.qty !== '0');
    const outOfStockProducts = filteredProducts.filter(product => product.qty === '0');

    // Перемешиваем товары в наличии
    const shuffledAvailableProducts = [...availableProducts].sort(() => Math.random() - 0.5);

    // Объединяем: сначала перемешанные товары, потом отсутствующие
    const sortedProducts = [...shuffledAvailableProducts, ...outOfStockProducts];

    return (
        <div className="product-list">
            <div className='container'>
                <div className='category-block'>
                    <BackButton />
                    <h2>{categoryName}</h2>
                </div>
                <div className="product-grid">
                    {sortedProducts.length > 0 ? (
                        sortedProducts.map(product => (
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
