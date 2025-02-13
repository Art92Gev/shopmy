// utils/messaging.js
export const sendToTelegram = (product, chatId = "Artur0192121") => {
	const productUrl = `https://${window.location.hostname}/product/${product.id}`;
	const message = `📦 *Название:* ${product.name}\n📝 *Описание:* ${product.description}\n💰 *Цена:* ${product.price} դրամ.\n🖼️ *Изображение:* ${product.images[0].thumbnail}\n🔗 *Ссылка:* ${productUrl}`;	const telegramUrl = `https://t.me/${chatId}?text=${encodeURIComponent(message)}`;
	window.location.href = telegramUrl;
};

export const sendToWhatsApp = (product, phoneNumber = '37443996633') => {
	const productUrl = `https://${window.location.hostname}/product/${product.id}`;
	const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} դրամ.\n${product.images[0].thumbnail} || \n ${productUrl}`;
	const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
	window.location.href = whatsappUrl;
};

export const sendToMessenger = (product, pageId = 'artur.gevorkyan.921') => {
  const productUrl = `https://${window.location.hostname}/product/${product.id}`;
  const message = `📦 *Название:* ${product.name}\n📝 *Описание:* ${product.description}\n💰 *Цена:* ${product.price} դրամ.\n🖼️ *Изображение:* ${product.images[0].thumbnail}\n🔗 *Ссылка:* ${productUrl}`;

  // Копирование в буфер обмена
  navigator.clipboard.writeText(message).then(() => {
    alert('Сообщение скопировано в буфер обмена! Через 1.5 секунды откроется Messenger...');
    
    // Ждём 1.5 секунды перед переходом
    setTimeout(() => {
      window.location.href = `https://m.me/${pageId}`;
    }, 1500);
  }).catch(() => {
    alert('Не удалось скопировать сообщение. Скопируйте его вручную:\n\n' + message);
    
    // Если копирование не удалось, всё равно переходим через 2 секунды
    setTimeout(() => {
      window.location.href = `https://m.me/${pageId}`;
    }, 2000);
  });
};

