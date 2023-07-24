import React from 'react';
import Category from './Category';
import './Categories.css';

const GridsContainer = () => {
  return (
    
    <div className="grid-container">
      <div className="grid-item">
        <h3>New Arrivals</h3>
      </div>
      <div className="grid-item">
        <Category />
      </div>
      <div className="grid-item">
        <Category />
      </div>
      <div className="grid-item">
        <Category />
      </div>
      <div className="grid-item">
        <Category />
      </div>
    </div>
  );
};

export default GridsContainer;
