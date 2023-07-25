import React from 'react';
import Slider from 'react-slick';
import './Slider.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const SliderCard = () => {
  const product = [
    {
        id: 1,
        image: 'https://asimjofa.com/cdn/shop/products/Untitled-1-22.jpg?v=1681795391&width=360',
        name: 'Luxurious Lawn',
        price: '$179.99',
      },
      {
        id: 2,
        image: 'https://asimjofa.com/cdn/shop/products/3-18.jpg?v=1681796915&width=360',
        name: 'Summer season',
        price: '$457.99',
      },
      {
        id: 3,
        image: 'https://asimjofa.com/cdn/shop/products/1-26.jpg?v=1681797036&width=360',
        name: 'Embroidered',
        price: '$289.99',
      },
      {
        id: 4,
        image: 'https://asimjofa.com/cdn/shop/files/Image1.jpg?v=1683615380&width=360',
        name: 'Asim Jofa',
        price: '$678.99',
      },
      {
        id: 5,
        image: 'https://asimjofa.com/cdn/shop/products/2-21.jpg?v=1681797083&width=360',
        name: 'Designers',
        price: '$678.99',
      },
      {
        id: 4,
        image: 'https://asimjofa.com/cdn/shop/products/2-03.jpg?v=1681797054&width=360',
        name: 'Weddings',
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
      {product.map((product) => (
        <div key={product.id} className="product-card ">
          <div className="image-container">
            <img src={product.image} alt={product.name} />
          </div>
          <h3 className="card-heading"> <button className="cart-button">{product.name}</button></h3>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default SliderCard;
