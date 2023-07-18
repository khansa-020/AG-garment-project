import React from 'react';
import './ProductCard.css';
import image1 from '../Images/image1.jpg';


const ProductCard = () => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image1.jpg} alt="Image1" />
        <img src={image1.jpg} alt="Image1" />
      </div>
      <h3 className="card-heading">Product Name</h3>
      <div className="price">$19.99</div>
      <button className="favorite-button">Favorite</button>
      <button className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
