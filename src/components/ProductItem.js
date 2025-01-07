import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductItem.css';
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsTelephoneOutbound } from "react-icons/bs";


function ProductItem({ product }) {
  const sendToTelegram = () => {
    const chatId = "Artur0192121";
    const productUrl = `https://${window.location.hostname}/product/${product.id}`;
    const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб.\n ||${product.images[0].thumbnail}|| \n ${productUrl}`;
    const telegramUrl = `tg://resolve?domain=${chatId}&text=${encodeURIComponent(message)}`;
    window.location.href = telegramUrl;
  };

  const sendToWhatsApp = () => {
    const phoneNumber = '37443996633'; // Замените на нужный номер телефона
    const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  const sendToMessenger = () => {
    const pageId = 'artur.gevorkyan.921'; // Замените на ID вашей страницы Facebook
    const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб.\n${product.images[0].thumbnail}`;
    const encodedMessage = encodeURIComponent(message);
    const messengerUrl = `https://m.me/${pageId}?text=${encodedMessage}`;
    
    console.log('Messenger URL:', messengerUrl); // Проверяем URL в консоли
    window.location.href = messengerUrl;
  };

  return (
    <div className="product-item">
      <Link className='lin' to={`/product/${product.id}`}>
        <img src={product.images[0].thumbnail} alt={product.name} />
        <h2>{product.name}</h2>
      </Link>
			<div className='product-infos'>
      <p>{product.description}</p>
      <p>Առկա ։ {product.qty}</p>
      <p className='gin'>{product.price} AMD</p>
			<div className='buy-button'>
      <a href="tel:+37443996633" className="call-button"><BsTelephoneOutbound /></a>
      <button onClick={sendToTelegram}><FaTelegram /></button>
      <button onClick={sendToWhatsApp}><FaWhatsapp /></button>
      <button onClick={sendToMessenger}><FaFacebookMessenger /></button>
			</div>
			</div>
    </div>
  );
}

export default ProductItem;
