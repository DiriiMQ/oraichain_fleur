import React from 'react';
import decorImportImage from '../../assets/putin.png';
import './model.css';

function Decor() {
  return (
    <div className = "decoration">
        <div className = "decoration-image">
            <img src ={decorImportImage} alt = "model" />
        </div>
        </div>
  );
}

export default Decor;

