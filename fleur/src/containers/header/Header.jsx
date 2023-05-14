import React from 'react';
import './header.css';
import logo from '../../assets/home.svg';


const Header = () => {
  return (
    <div>
      <div className="fleur__header-links">
        <div className="fleur__header-links_home"> 
          <img src={logo} alt="home" class="center" />
        </div>
      </div>
    </div>
  )
}

export default Header
