import React, { useState } from 'react';
import './header.scss';
import ContentWrapper from '../wrapper/ContentWrapper';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header>
        <nav className='navbar space-around align-center'>
          <ContentWrapper>
            <div className="logo-section">
              <h4 className='mb-0'>
                <Link to="/">Mayank's Study Point</Link>
              </h4>
            </div>
            <div className="menu">
              <ul className={`nav-menu ${menu ? "show" : ""}`}>
                <li className='nav-items' onClick={()=>{setMenu(prev => !prev)}}>
                  <Link to="/home">Home</Link>
                </li>
                <li className='nav-items' onClick={()=>{setMenu(prev => !prev)}}>
                  <Link to="/service">Services</Link>
                </li>
                <li className='nav-items' onClick={()=>{setMenu(prev => !prev)}}>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className='nav-items' onClick={()=>{setMenu(prev => !prev)}}>
                  <Link to="/profile">My Profile</Link>
                </li>
              </ul>
              <i
                className="ri-menu-3-line bar-btn"
                onClick={() => {
                  setMenu((prev) => !prev);
                }}
              ></i>
            </div>
          </ContentWrapper>
        </nav>
      </header>
    </>
  );
};

export default Header;
