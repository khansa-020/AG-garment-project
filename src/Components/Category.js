import React from 'react';
import myimage from '../Images/051A5791.webp';

const Categories = () => {
  return (
    <div className="card">
      <img className="card-img-top" src={myimage} alt="" />
      <div className="card-body">
        <p className="card-text">
          Some quick example
        </p>
      </div>
    </div>
  );
};

export default Categories;
