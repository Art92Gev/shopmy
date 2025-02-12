import React from 'react';
import { Link } from 'react-router-dom';
import './styles/ProductItem.css';
import { FaTelegram, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { BsTelephoneOutbound } from "react-icons/bs";
import { sendToTelegram, sendToWhatsApp, sendToMessenger } from '../components/utils/messaging';

function ProductItem({ product }) {
    const isOutOfStock = product.qty === '0'; // Проверяем, есть ли товар в наличии

    return (
        <div className={`product-item ${isOutOfStock ? 'out-of-stock' : ''}`}>
            <Link className='lin' to={`/product/${product.id}`}>
                <img 
                    src={product.images[0].thumbnail} 
                    alt={product.name} 
                    loading='lazy' // Ленивая загрузка изображений
                />
            </Link>
            <h2>{product.name}</h2>
            <div className='product-infos'>
                <p>{product.description}</p>
                <p>Առկա ։ {product.qty}</p>
                {isOutOfStock && (
                    <p className="out-of-stock-message">Տվյալ պահին ապրանքը առկա չէ</p> // Сообщение, если товара нет в наличии
                )}
                <div className='priceBlock'>
                    <div className='logoContainer'>
                        <img 
                            style={{ width: "50px" }} 
                            src="https://yerefan.ucoz.net/teana/465461994_8572360499514966_4772259612379822421_n.jpg" 
                            alt="Logo" 
                        />
                        <p className='gin-logo'>{product.priceLogo} AMD</p>
                    </div>
                    <p className='priceWithLogo'>{product.price} AMD</p>
                </div>
                <div className='buy-button'>
                    <a href="tel:+37443996633" className="call-button">
                        <BsTelephoneOutbound />
                    </a>
                    <button onClick={() => sendToTelegram(product)}>
                        <FaTelegram />
                    </button>
                    <button onClick={() => sendToWhatsApp(product)}>
                        <FaWhatsapp />
                    </button>
                    <button onClick={() => sendToMessenger(product)}>
                        <FaFacebookMessenger />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;