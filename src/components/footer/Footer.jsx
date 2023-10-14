import React from 'react'
import './footer.scss'
import ContentWrapper from '../wrapper/ContentWrapper'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
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
              <Col md={3}>
                <ul className='footer-list'>
                  <li className='footer-head text-primary'>Quick Links</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>

                </ul>
              </Col>
              <Col md={3}>
                <ul className='footer-list'>
                  <li className='footer-head text-primary'>Our Services</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>

                </ul>
              </Col>
              <Col md={3}>
                <ul className='footer-list'>
                  <li className='footer-head text-primary'>Our Services</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>

                </ul>
              </Col>
              <Col md={3} className='text-center footer-logo'>
                <h4>Mayank's Study Point</h4>
                <p>Your Future is in your hand</p>
                <ul className='footer-list'>
                  <li><i class="ri-mail-line"></i> mayank@gmail.com</li>
                  <div className="d-flex justify-content-around mt-3">
                    <div><i class="ri-facebook-circle-fill footer-icon-fb footer-icon"></i></div>
                    <div><i class="ri-youtube-fill footer-icon-yt footer-icon"></i></div>
                    <div><i class="ri-instagram-fill footer-icon-insta footer-icon"></i></div>
                  </div>
                </ul>
              </Col>
            </Row>
            <div className="d-flex justify-content-between">
<p>All right reserved by Mayank Study Point <i class="ri-copyright-line"></i> {new Date().getFullYear()}</p>
<p>Designed & Developed by Amit Shaw</p>
            </div>
          </ContentWrapper>
        </div>
      </footer>
    </>
  )
}

export default footer
