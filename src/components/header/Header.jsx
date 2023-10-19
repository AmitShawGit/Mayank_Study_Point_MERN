import React,{useState} from 'react';
import './header.scss'
import ContentWrapper from '../wrapper/ContentWrapper';
let Header = ()=>{
let [menu,setMenu]=useState(false);
  return(
    <>
<header>
  <nav className='navbar space-around align-center'>
    <ContentWrapper>
    <div className="logo-section">
      <h4 className='mb-0'>Mayank's Study Point</h4>
    </div>
    <div className="menu">
      <ul className={`nav-menu ${menu ? "show" : ""}`}>
        <li className='nav-items'>Home</li>
        <li className='nav-items'>Home</li>
        <li className='nav-items'>Home</li>
        <li className='nav-items'>Home</li>
      </ul>
      <i class="ri-menu-3-line bar-btn" onClick={()=> {setMenu(prev => !prev)}}></i>
    </div>
    </ContentWrapper>
  </nav>
  </header>    
    </>
  )
}
export default Header;