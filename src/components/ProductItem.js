import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductItem.css';

function ProductItem({ product }) {
  const sendToTelegram = () => {
    const chatId = "ROADPOLICEbot";
    const productUrl = `https://${window.location.hostname}/product/${product.id}`;
    const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб.\n ||${product.images[0].thumbnail}|| \n ${productUrl}`;
    const telegramUrl = `tg://resolve?domain=${chatId}&text=${encodeURIComponent(message)}`;
    window.location.href = telegramUrl;
  };

  const sendToWhatsApp = () => {
    const productUrl = `https://${window.location.hostname}/product/${product.id}`;
    const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб.\n${productUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0].thumbnail} alt={product.name} />
        <h2>{product.name}</h2>
      </Link>
      <p>{product.description}</p>
      <p>Առկա ։ {product.qty}</p>
      <p>{product.price} руб.</p>
      <button onClick={sendToTelegram}>Отправить в Telegram</button>
      <button onClick={sendToWhatsApp}>Отправить в WhatsApp</button>
    </div>
  );
}

export default ProductItem;
