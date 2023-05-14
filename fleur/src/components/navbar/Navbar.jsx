import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

// BEM -> Block Element Modifier 

const Navbar = () => {

  return (
    <div className="fleur__navbar">
      <div className="fleur__navbar-links">
        <div className="fleur__navbar-links_logo"> 
          <img src={logo} alt="logo" />
        </div>
        <div className="fleur__navbar-links_container">
          <p><a href="#home">Trang chủ</a></p>
          <p><a href="#wfleur">Về Fleur</a></p>
          <p><a href="#possibility">Products</a></p>
          <p><a href="#features">FleurAI</a></p>
          <p><a href="#community">Cộng đồng</a></p>
          <p><a href="#contact">Liên hệ</a></p>
        </div>
      </div>
      <div className="fleur__navbar-sign"> 
        <p>Đăng nhập</p>
        <button type="button">Đăng ký</button>
      </div>
    </div>
  )
}

export default Navbar
