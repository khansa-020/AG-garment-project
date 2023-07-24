import React from 'react'
import Header from '../Components/Header'
import Carousal from '../Components/Carousal'
//import ProductCard from '../Components/ProductCard'
import Categories from '../Components/Categories'
import SliderCard from '../Components/SliderCard'
import Brands from '../Components/Brands'
import Footer from '../Components/Footer'

import './Home.css'

const Home = () => {
  return (
    <div>
        <Header/>
        <Carousal/>
       <div><h3>SHOP BY BRAND</h3>
        <Brands/></div> 

        <div><h3 id="shopByCategory">SHOP BY CATEGORY</h3>
        <SliderCard/></div>
        <br></br>
        <Categories/>
        <Footer/>
    </div>
  )
}

export default Home;