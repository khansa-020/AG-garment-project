import React from 'react';
import Slider from 'react-slick';
import './ProductCard.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const ProductCard = () => {
  const products = [
    {
      id: 1,
      image: 'https://asimjofa.com/cdn/shop/products/Untitled-1-22.jpg?v=1681795391&width=360',
      name: 'Product Name 1',
      price: '$179.99',
    },
    {
      id: 2,
      image: 'https://asimjofa.com/cdn/shop/files/2nd_category_tile.jpg?v=1686822999&width=400',
      name: 'Product Name 2',
      price: '$457.99',
    },
    {
      id: 3,
      image: 'https://asimjofa.com/cdn/shop/files/Baad_e_Naubahar_591fb221-89f1-492a-a3c0-3be11ce1664c.jpg?v=1688814252&width=600',
      name: 'Product Name 3',
      price: '$289.99',
    },
    {
      id: 4,
      image: 'https://asimjofa.com/cdn/shop/files/Image1.jpg?v=1683615380&width=360',
      name: 'Product Name 4',
      price: '$678.99',
    },
    {
      id: 4,
      image: 'https://asimjofa.com/cdn/shop/products/2-21.jpg?v=1681797083&width=360',
      name: 'Product Name 4',
      price: '$678.99',
    },
    {
      id: 4,
      image: 'https://asimjofa.com/cdn/shop/products/2-03.jpg?v=1681797054&width=360',
      name: 'Product Name 4',
      price: '$678.99',
    },
    // Add more products as needed
  ];




  const SamplePrevArrow = ({ onClick }) => {
    return (
      <button className="custom-prev-arrow" onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
      </button>
    );
  };
  
  const SampleNextArrow = ({ onClick }) => {
    return (
      <button className="custom-next-arrow" onClick={onClick}>
        <i className="fas fa-chevron-right"></i>
      </button>
    );
  };



  const sliderSettings = {
    dots: true,
  infinite: true,
  speed: 500,
    slidesToShow: 4, // Number of cards to show at once
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };





  return (
  <div className="slider-container">
    <Slider {...sliderSettings}>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="image-container">
            <img src={product.image} alt={product.name} />
          </div>
          <h3 className="card-heading">{product.name}</h3>
          <div className="price">{product.price}</div>
          <button className="favorite-button">Favorite</button>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ProductCard;
