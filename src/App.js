import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
			<div className='main-menu'>
			</div>
      <h1>Магазин</h1>
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/category/:categoryName" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
