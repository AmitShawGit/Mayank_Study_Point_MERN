import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.scss'
import { useState } from 'react';

const Header = () => {
  let [menu, setMenu] = useState(false)
  let [scrollY, setScrollY] = useState(false)
  return (
    <>
      <Navbar className='navbar '>
        <Container>
          <Navbar.Brand href="#home">Mayank's Study Point</Navbar.Brand>
          <Nav className={`responsive ${menu ? "" : "hide"}`}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <div className="toggle-button">
            <i class="ri-menu-3-fill" onClick={() => setMenu(prev => !prev)}></i>
          </div>
        </Container>
      </Navbar>

    </>
  );
}

export default Header;