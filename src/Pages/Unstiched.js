//import image1 from '../Images/image1.jpg';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import './ProductCard.css'; // Optional: Import your CSS file for styling

const ProductCard = () => {
  return (
    <Carousel className="product-carousel">
      <Carousel.Item>
        <div className="card">
          <div className="image-container">
            <img src="https://www.limelight.pk/cdn/shop/files/Desktop-Banner-1920-X-600-eid-RTW_fae92639-bfbc-4bcc-9d7f-5f8475529487.jpg?v=1688363415"
            alt="Image1" />
          </div>
          <h3 className="card-heading">Product Name 1</h3>
          <div className="price">$19.99</div>
          <button className="favorite-button">Favorite</button>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="card">
          <div className="image-container">
            <img src="https://www.limelight.pk/cdn/shop/files/Desktop-Banner-1920-X-600-eid-RTW_fae92639-bfbc-4bcc-9d7f-5f8475529487.jpg?v=1688363415" alt="Image2" />
          </div>
          <h3 className="card-heading">Product Name 2</h3>
          <div className="price">$29.99</div>
          <button className="favorite-button">Favorite</button>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="card">
          <div className="image-container">
            <img src="https://www.limelight.pk/cdn/shop/files/Desktop-Banner-1920-X-600-eid-RTW_fae92639-bfbc-4bcc-9d7f-5f8475529487.jpg?v=1688363415"
            alt="Image1" />
          </div>
          <h3 className="card-heading">Product Name 3</h3>
          <div className="price">$19.99</div>
          <button className="favorite-button">Favorite</button>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </Carousel.Item><Carousel.Item>
        <div className="card">
          <div className="image-container">
            <img src="https://www.limelight.pk/cdn/shop/files/Desktop-Banner-1920-X-600-eid-RTW_fae92639-bfbc-4bcc-9d7f-5f8475529487.jpg?v=1688363415"
            alt="Image1" />
          </div>
          <h3 className="card-heading">Product Name 4</h3>
          <div className="price">$19.99</div>
          <button className="favorite-button">Favorite</button>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </Carousel.Item>
      {/* Add more Carousel.Items for additional products */}
    </Carousel>
  );
};

export default ProductCard;
