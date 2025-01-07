import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import products from './data/products';
import './styles/ProductDetails.css';
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { BsTelephoneOutbound } from "react-icons/bs";


function ProductDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const product = products.find(p => p.id === parseInt(id));

	const goBack = () => {
		navigate(-1);
	};

	const sendToTelegram = () => {
		const chatId = "Artur0192121";
		const productUrl = `https://${window.location.hostname}/product/${product.id}`;
		const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб.\n ||${product.images[0].thumbnail}|| \n ${productUrl}`;
		const telegramUrl = `tg://resolve?domain=${chatId}&text=${encodeURIComponent(message)}`;
		window.location.href = telegramUrl;
	};

	const sendToWhatsApp = () => {
		const phoneNumber = '37443996633'; // Замените на нужный номер телефона
		const productUrl = `https://${window.location.hostname}/product/${product.id}`;
		const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб. || \n ${productUrl}`;
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
		window.location.href = whatsappUrl;
	};

	const sendToMessenger = () => {
		const pageId = 'artur.gevorkyan.921'; // Замените на ID вашей страницы Facebook
		const productUrl = `https://${window.location.hostname}/product/${product.id}`;
		const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб.\n${product.images[0].thumbnail} || \n ${productUrl}`;
		const encodedMessage = encodeURIComponent(message);
		const messengerUrl = `https://m.me/${pageId}?text=${encodedMessage}`;

		console.log('Messenger URL:', messengerUrl); // Проверяем URL в консоли
		window.location.href = messengerUrl;
	};

	return (
		<div className="product-details">
			{product ? (
				<>
					<h2>{product.name}</h2>
					<ImageGallery items={product.images} />
					<p>{product.description}</p>
					<p>Առկա ։ {product.qty}</p>
					<p>Արժեք: {product.price} AMD</p>
					<button className='back' onClick={goBack}><IoReturnUpBackOutline /></button>
					<div className='buy-button'>
						<a href="tel:+37443996633" className="call-button"><BsTelephoneOutbound /></a>
						<button onClick={sendToTelegram}><FaTelegram /></button>
						<button onClick={sendToWhatsApp}><FaWhatsapp /></button>
						<button onClick={sendToMessenger}><FaFacebookMessenger /></button>
					</div>
				</>
			) : (
				<p>Товар не найден</p>
			)}
		</div>
	);
}

export default ProductDetails;
