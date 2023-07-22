import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaBeer, FaEnvelope, FaBell, FaSearch } from 'react-icons/fa';
import logo from  '../Images/logo.png'

const Header = () => {
  return (
    <div>

      <div className="marquee-container">
      <div className="marquee-content">
        <h5>Free shipping on all orders above PKR 2000.</h5>
      </div>
    </div>
      
      <nav className='nav'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {/* <span><h3 id="brand">AG Garment</h3></span> */}

        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
             <li><Link to="/NewIn">New In</Link></li>
            <li><Link to="/Unstiched">UnStiched</Link></li>
            <li><Link to="/ReadyToWear">Ready To Wear</Link></li> 
            <li><Link to="/Embroidered"> Embroidered</Link></li> 
            <li><Link to="/Sale"> Clearance Sale</Link></li>

          </ul>
        </div>

        <div className="search">
          <input type="text" placeholder="Search for products" />
          <button type="submit"><FaSearch className="search-icon" />
        </button>
        </div>
       
        
       
        <div className="icons">
          <Link to="#"><FaBeer /></Link>
          <Link to="#"><FaEnvelope /></Link>
          <Link to="#"><FaBell /></Link>
        </div> 
      </nav>
    </div>
  );
};

export default Header;