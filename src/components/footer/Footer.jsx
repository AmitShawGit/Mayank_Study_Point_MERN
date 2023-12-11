import React from 'react';
import './footer.scss';
import ContentWrapper from '../wrapper/ContentWrapper';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
const footer = () => {
  return (
    <>
      <div className="sub-footer mt-5">
        <ContentWrapper>
          <Row>
            <Col><h3>Subscribe to Our Newsletter</h3></Col>
            <Col>
              <div className="email-footer-form">
                <input type="text" className='form-control ' />
                <button type='button' className='btn btn-primary'>Send</button>
              </div>
            </Col>
          </Row>
        </ContentWrapper>
      </div>
      <footer>
        <div className="footer pt-5">
          <ContentWrapper>
            <Row>
              <Col md={4}>
                <ul className='footer-list'>
                  <li className='footer-head text-primary'>Quick Links</li>
                  <li><Link to="/home" className='footer-item'>Home</Link></li>
                  <li><Link to="/service" className='footer-item'>Service</Link></li>
                  <li><Link to="/contact" className='footer-item'>Contact</Link></li>
                  <li><Link to="/app" className='footer-item'>App</Link></li>
                </ul>
              </Col>
              <Col md={4}>
                <ul className='footer-list'>
                  <li className='footer-head text-primary'>Our Services</li>
                  <li><Link to="/home" className='footer-item'>Web Design</Link></li>
                  <li><Link to="/home" className='footer-item'>Web Development</Link></li>
                  <li><Link to="/home" className='footer-item'>Graphic Design</Link></li>
                  <li><Link to="/home" className='footer-item'>Assignment</Link></li>

                </ul>
              </Col>

              <Col md={4} className='text-center footer-logo'>
                <h4>Mayank's Study Point</h4>
                <p>Your Future is in your hand</p>
                <ul className='footer-list'>
                  <li><i className="ri-mail-line"></i> mayank@gmail.com</li>
                  <div className="d-flex justify-content-around mt-3">
                    <div><Link to="#" target='_blank'><i className="ri-facebook-circle-fill footer-icon-fb footer-icon"></i></Link></div>
                    <div><Link to="#" target='_blank'><i className="ri-youtube-fill footer-icon-yt footer-icon"></i></Link></div>
                    <div><Link to="#" target='_blank'><i className="ri-instagram-fill footer-icon-insta footer-icon"></i></Link></div>
                  </div>
                </ul>
              </Col>
            </Row>
            <hr style={{ color: "silver" }} />
            <div className="d-flex justify-content-between">
              <p className='footer-text'>All right reserved by <Link to="/home">Mayank Study Point</Link>  <i className="ri-copyright-line"></i> {new Date().getFullYear()}</p>
              <p>Designed & Developed by Amit Shaw</p>
            </div>
          </ContentWrapper>
        </div>
      </footer>
    </>
  )
}

export default footer;
