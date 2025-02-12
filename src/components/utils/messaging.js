// utils/messaging.js
export const sendToTelegram = (product, chatId = "Artur0192121") => {
	const productUrl = `https://${window.location.hostname}/product/${product.id}`;
	const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} դրամ.\n ||${product.images[0].thumbnail}|| \n ${productUrl}`;
	const telegramUrl = `https://t.me/${chatId}?text=${encodeURIComponent(message)}`;
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
	const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} դրամ.\n${product.images[0].thumbnail} || \n ${productUrl}`;
	const encodedMessage = encodeURIComponent(message);
	const messengerUrl = `https://m.me/${pageId}?ref=${encodedMessage}`;
	window.location.href = messengerUrl;
};