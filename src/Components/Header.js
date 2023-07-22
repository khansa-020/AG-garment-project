import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaUser, FaSearch, FaHeart, FaWhatsapp, FaCartPlus } from 'react-icons/fa';
import logo from  '../Images/logo.png';
import 'typeface-montserrat';


const Header = () => {
  return (
    <div>

      <div className="marquee-container">
      <div className="marquee-content">
        <h6>Free shipping on all orders above PKR 2000.</h6>
      </div>
    </div>
      
      <nav className='nav'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {/* <span><h3 id="brand">AG Garment</h3></span> */}

        <div className="list">
          <ul>
            {/* <li><Link to="/">HOME</Link></li> */}
             <li><Link to="/NewIn">NEW IN</Link></li>
            <li><Link to="/Unstiched">UN STICHED</Link></li>
            <li><Link to="/ReadyToWear">READY TO WEAR</Link></li> 
            <li><Link to="/Embroidered"> EMBROIDERED</Link></li> 
            <li><Link to="/Sale"> CLEREANCE SALE</Link></li>

          </ul>
        </div>

        <div className="search">
          <input type="text" placeholder="Search for products" />
          <button type="submit"><FaSearch className="search-icon" />
        </button>
        </div>
       
        
       
        <div className="icons">
        <Link to="#"><FaWhatsapp /></Link>
          <Link to="#"><FaUser/></Link>
          <Link to="#"><FaHeart /></Link>
          <Link to="#"><FaCartPlus/></Link>
        </div> 
      </nav>
    </div>
  );
};

export default Header;