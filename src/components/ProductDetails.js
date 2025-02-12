import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable'; // Импортируем библиотеку
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import products from './data/products';
import './styles/ProductDetails.css';
import { FaTelegram, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { BsTelephoneOutbound } from "react-icons/bs";
import { sendToTelegram, sendToWhatsApp, sendToMessenger } from '../components/utils/messaging';
import BackButton from '../components/utils/BackButton';

function ProductDetails() {
	const { id } = useParams();
	const [showMap, setShowMap] = useState(false); // Управление видимостью карты
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const product = products.find(p => p.id === parseInt(id));


	const nextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) =>
			(prevIndex - 1 + product.images.length) % product.images.length
		);
	};

	const handlers = useSwipeable({
		onSwipedLeft: nextImage, // Свайп влево — следующий слайд
		onSwipedRight: prevImage, // Свайп вправо — предыдущий слайд
		preventDefaultTouchmoveEvent: true,
		trackMouse: true, // Для тестирования на ПК
	});

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

	return (
		<div className="product-details">
			{product ? (
				<>
					<h2>{product.name}</h2>
					<div className="image-gallery">
						<div className="slider" {...handlers}>
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

					{product.images.length > 1 && (
						<div className="thumbnail-container">
							{product.images.map((image, index) => (
								<img
									key={index}
									src={image.thumbnail}
									alt={`Thumbnail ${index + 1}`}
									className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
									onClick={() => setCurrentImageIndex(index)}
								/>
							))}
						</div>
					)}
					<BackButton />
					<div className="product-infos product-infos1">
						<p>{product.description}</p>
						<p>Առկա ։ {product.qty}</p>
						<div className="priceBlock">
							<div className="logoContainer">
								<img
									style={{ width: '50px', borderRadius: '10px' }}
									src="https://yerefan.ucoz.net/teana/465461994_8572360499514966_4772259612379822421_n.jpg"
									alt=""
								/>
								<p className="priceWithLogo"> {product.priceLogo} AMD</p>
							</div>
							<p className="priceWithLogo">{product.price} AMD</p>
						</div>
						<div className="buy-button">
							<a href="tel:+37443996633" className="call-button">
								<BsTelephoneOutbound />
							</a>
							<button onClick={() => sendToTelegram(product)}><FaTelegram /></button>
							<button onClick={() => sendToWhatsApp(product)}><FaWhatsapp /></button>
							<button onClick={() => sendToMessenger(product)}><FaFacebookMessenger /></button>
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
