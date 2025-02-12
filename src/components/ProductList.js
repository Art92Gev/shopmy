// ProductList.js
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

    // Фильтрация товаров по категории
    const filteredProducts = products.filter(product => product.category === categoryName);

    // Сортировка: товары с qty === '0' перемещаются в конец
    const sortedProducts = filteredProducts.sort((a, b) => {
        if (a.qty === '0' && b.qty !== '0') return 1; // a нет в наличии, b есть — a идет после b
        if (a.qty !== '0' && b.qty === '0') return -1; // a есть в наличии, b нет — a идет перед b
        return 0; // иначе порядок не меняется
    });

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