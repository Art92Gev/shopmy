import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
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
	const [showMap, setShowMap] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0); // Index for the slider
	const product = products.find(p => p.id === parseInt(id));
	const [isTransitioning, setIsTransitioning] = useState(false);

	const goBack = () => {
		navigate(-1);
	};

	const sendToTelegram = () => {
		const chatId = "Artur0192121";
		const productUrl = `https://${window.location.hostname}/product/${product.id}`;
		const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб.\n ||${product.images[0].thumbnail}|| \n ${productUrl}`;
		const telegramUrl = `https://t.me/${chatId}?text=${encodeURIComponent(message)}`;
		window.location.href = telegramUrl;
	};

	const sendToWhatsApp = () => {
		const phoneNumber = '37443996633'; // Replace with your number
		const productUrl = `https://${window.location.hostname}/product/${product.id}`;
		const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб. || \n ${productUrl}`;
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
		window.location.href = whatsappUrl;
	};

	const sendToMessenger = () => {
		const pageId = 'artur.gevorkyan.921';
		const productUrl = `https://${window.location.hostname}/product/${product.id}`;
		const message = `Название: ${product.name}\nОписание: ${product.description}\nЦена: ${product.price} руб.\n${product.images[0].thumbnail} || \n ${productUrl}`;
		const encodedMessage = encodeURIComponent(message);
		const messengerUrl = `https://m.me/${pageId}?ref=${encodedMessage}`;
		window.location.href = messengerUrl;
	};

	useEffect(() => {
		if (showMap) {
			window.ymaps.ready(() => {
				const map = new window.ymaps.Map("map", {
					center: [40.179730, 44.436154],
					zoom: 15,
				});

				const placemark = new window.ymaps.Placemark(
					[40.179730, 44.436154],
					{
						hintContent: "Магазин",
						balloonContent: "Наш магазин здесь!",
					}
				);

				map.geoObjects.add(placemark);
			});
		}
	}, [showMap]);

	const changeImage = (newIndex) => {
		if (isTransitioning) return; // Избежать смены во время анимации
		setIsTransitioning(true);
		setTimeout(() => {
			setCurrentImageIndex(newIndex);
			setIsTransitioning(false);
		}, 100); // Длительность совпадает с transition в CSS
	};

	const nextImage = () =>
		changeImage((currentImageIndex + 1) % product.images.length);

	const prevImage = () =>
		changeImage((currentImageIndex - 1 + product.images.length) % product.images.length);

	return (
		<div className="product-details">
			{product ? (
				<>
					<h2>{product.name}</h2>
					<div className="image-gallery">
    <div className="slider">
        {product.images.length > 1 && (
            <button className="prev-btn" onClick={prevImage}>
                &#8249;
            </button>
        )}
        <Zoom>
            <img
                src={product.images[currentImageIndex].original}
                alt={`${product.name} - ${currentImageIndex + 1}`}
                className="slider-image"
            />
        </Zoom>
        {product.images.length > 1 && (
            <button className="next-btn" onClick={nextImage}>
                &#8250;
            </button>
        )}
    </div>
</div>

					{/* Миниатюры */}
					{product.images.length > 1 && ( // Показываем миниатюры, если больше одной фотографии
						<div className="thumbnail-container">
							{product.images.map((image, index) => (
								<img
									key={index}
									src={image.thumbnail}
									alt={`Thumbnail ${index + 1}`}
									className={`thumbnail ${index === currentImageIndex ? 'active' : ''
										}`}
									onClick={() => changeImage(index)}
								/>
							))}
						</div>
					)}

					<button className="back" onClick={goBack}>
						<IoReturnUpBackOutline />
					</button>
					<div className='product-infos product-infos1'>
						<p>{product.description}</p>
						<p>Առկա ։ {product.qty}</p>
						<div className='gin-blok'>
							<div className='logogin'>
								<img
									style={{ width: "50px", borderRadius: "10px" }}
									src="https://yerefan.ucoz.net/teana/465461994_8572360499514966_4772259612379822421_n.jpg"
									alt=""
								/>
								<p className='gin'> {product.priceLogo} AMD</p>
							</div>
							<p className='gin'>{product.price} AMD</p>
						</div>
						<div className='buy-button'>
							<a href="tel:+37443996633" className="call-button"><BsTelephoneOutbound /></a>
							<button onClick={sendToTelegram}><FaTelegram /></button>
							<button onClick={sendToWhatsApp}><FaWhatsapp /></button>
							<button onClick={sendToMessenger}><FaFacebookMessenger /></button>
						</div>
					</div>
					<button
						className="show-map-button"
						onClick={() => setShowMap(!showMap)}
						style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
					>
						{showMap ? "Փակել քարտեզը" : "Բացել քարտեզը"}
					</button>
					{showMap && (
						<div id="map" style={{ width: "100%", height: "400px", marginTop: "20px" }}></div>
					)}
				</>
			) : (
				<p>Товар не найден</p>
			)}
		</div>
	);
}

export default ProductDetails;
