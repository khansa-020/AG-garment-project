import React from 'react';
import ContactForm from './ContactForm';
import './Footer.css'

const Footer = () => {
  return (
    <div className="contain">
      <div className="grid contact-form-grid">
        <h4>Contact Form</h4>
        <ContactForm />
      </div>
      <div className="grid">
        <h4>Costumer Support</h4>
        <ul>
        <li>Contact us</li>
        <li>order us</li>
        <li>trace order</li>
        <li>easy payment</li>
        <li>Return available</li>
        </ul>
        
      </div>
      
      <div className="grid">
        <h4>Our Policies</h4>
        <ul>
        <li>Privacy Policy</li>
        <li>Shipping Policy</li>
        <li>Ordering & Tracking</li>
        <li>Return & Exchanges</li>
        <li>Terms & Conditions</li>

        </ul>
      </div>
     
      <div className="grid">
        <h4>News and Information</h4>
        <ul>
        <p>Sign Up for latest updates and collections</p>
        <br></br>
        <li>Subcribe us</li>
        <li>Email Us: sales@asimjofa.com</li>
        <li>Call Us: +92-21-111-11(5632)</li>
        <li>Whatsapp Us: +923211244440</li>
        </ul>      </div>
    </div>
  );
};

export default Footer;
