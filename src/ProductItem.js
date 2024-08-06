import React from 'react';

function ProductItem({ product }) {
  const sendToTelegram = () => {
    const chatId = "YOUR_CHAT_ID"; // Замените на ID вашего чата или имя пользователя
    const message = `Фото: ${product.imageUrl}\nНазвание: ${product.name}\nОписание: ${product.description}`;
    const telegramUrl = `tg://msg_url?url=${product.imageUrl}&text=${encodeURIComponent(message)}`;
    window.location.href = telegramUrl;
  };

  return (
    <div className="product-item">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price} руб.</p>
      <button onClick={sendToTelegram}>Отправить в Telegram</button>
    </div>
  );
}

export default ProductItem;
