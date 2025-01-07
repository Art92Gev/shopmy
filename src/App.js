import React from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const navigate = useNavigate(); // Инициализация useNavigate

  return (
    <div className="App">
      <div className="main-menu">
        {/* Исправлено onClick */}
        <img
          onClick={() => navigate("/")} 
          src="https://yerefan.ucoz.net/teana/dall-e_2025-01-07_16.20.28-a_modern_and_sleek_hori.webp"
          alt="Car Accessories Logo"
          className="logo"
        />
      </div>
      <h1 onClick={() => navigate('/')}></h1> {/* Передача функции в onClick */}
			<ScrollToTop />
      <Routes>
        <Route path="/" element={<CategoryList />} />
        <Route path="/category/:categoryName" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <div className="fill">---</div>
    </div>
  );
}

export default App;
