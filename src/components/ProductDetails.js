import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import products from './data/products';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  const goBack = () => {
    navigate('/');
  };

  const sendToTelegram = () => {
    const chatId = "ROADPOLICEbot";
    const productUrl = `https://${window.location.hostname}/product/${product.id}`;
		const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб.\n ||${product.images[0].thumbnail}|| \n ${productUrl}`;

    const telegramUrl = `tg://resolve?domain=${chatId}&text=${encodeURIComponent(message)}`;
    window.location.href = telegramUrl;
  };

  return (
    <div className="product-details">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <ImageGallery items={product.images} />
          <p>{product.description}</p>
          <p>Առկա ։ {product.qty}</p>
          <p>Արժեք: {product.price} руб.</p>
          <button onClick={goBack}>Back</button>
          <button onClick={sendToTelegram}>Отправить в Telegram</button>
        </>
      ) : (
        <p>Товар не найден</p>
      )}
    </div>
  );
}

export default ProductDetails;
