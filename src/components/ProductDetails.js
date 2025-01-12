import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable'; // Импортируем библиотеку
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import products from './data/products';
import './styles/ProductDetails.css';
import { FaTelegram, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { BsTelephoneOutbound } from "react-icons/bs";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const product = products.find(p => p.id === parseInt(id));

    const goBack = () => {
        navigate(-1);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + product.images.length) % product.images.length
        );
    };

    // Настраиваем свайп-обработчики
    const handlers = useSwipeable({
        onSwipedLeft: nextImage, // Свайп влево — следующий слайд
        onSwipedRight: prevImage, // Свайп вправо — предыдущий слайд
        preventDefaultTouchmoveEvent: true,
        trackMouse: true, // Для тестирования на ПК
    });

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

                    {/* Миниатюры */}
                    {product.images.length > 1 && (
                        <div className="thumbnail-container">
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.thumbnail}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`thumbnail ${
                                        index === currentImageIndex ? 'active' : ''
                                    }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>
                    )}

                    <button className="back" onClick={goBack}>
                        <IoReturnUpBackOutline />
                    </button>
                    <div className="product-infos product-infos1">
                        <p>{product.description}</p>
                        <p>Առկա ։ {product.qty}</p>
                        <div className="gin-blok">
                            <div className="logogin">
                                <img
                                    style={{ width: '50px', borderRadius: '10px' }}
                                    src="https://yerefan.ucoz.net/teana/465461994_8572360499514966_4772259612379822421_n.jpg"
                                    alt=""
                                />
                                <p className="gin"> {product.priceLogo} AMD</p>
                            </div>
                            <p className="gin">{product.price} AMD</p>
                        </div>
                        <div className="buy-button">
                            <a href="tel:+37443996633" className="call-button">
                                <BsTelephoneOutbound />
                            </a>
                            <button>
                                <FaTelegram />
                            </button>
                            <button>
                                <FaWhatsapp />
                            </button>
                            <button>
                                <FaFacebookMessenger />
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <p>Товар не найден</p>
            )}
        </div>
    );
}

export default ProductDetails;
