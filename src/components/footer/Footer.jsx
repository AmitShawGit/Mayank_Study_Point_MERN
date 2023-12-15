import React, { useState } from 'react';
import './footer.scss';
import ContentWrapper from '../wrapper/ContentWrapper';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
  let [userEmail, setUserEmail] = useState({ email: "" });


  let handleformdata = (e) => {

    setUserEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  let handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/email", userEmail, {
        headers: {
          'Content-Type': 'application/json',
      }
      })
        .then((res) => { alert(res.data) })
    }
    catch (err) {
      console.log(err.message);
    }
    console.log(userEmail);
    setUserEmail("")
  };

  return (
    <>
      <div className="sub-footer mt-5">
        <ContentWrapper>
          <Row>
            <Col sm={12} md={6}><h3>Subscribe to Our Newsletter</h3></Col>
            <Col sm={12} md={6}>
              <form className="email-footer-form" onSubmit={handleEmailSubmit}>
                <input type="email" className='form-control ' name='email' placeholder='Type your email' value={userEmail.email || ""} onChange={handleformdata} required />
                <input type='submit' className='btn btn-primary' value="Send" />
              </form>
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
                  <li><Link to="/contact" className='footer-item'>Web Design</Link></li>
                  <li><Link to="/contact" className='footer-item'>Web Development</Link></li>
                  <li><Link to="/contact" className='footer-item'>Graphic Design</Link></li>
                  <li><Link to="/contact" className='footer-item'>Assignments</Link></li>
                  <li><Link to="/contact" className='footer-item'>Projects</Link></li>

                </ul>
              </Col>

              <Col md={4} className='text-center footer-logo'>
                <h4>Mayank's Study Point</h4>
                <p>Your Future is in your hand</p>
                <ul className='footer-list'>
                  <li><i className="ri-mail-line"></i> mayank@gmail.com</li>
                  <div className="d-flex justify-content-around mt-3">
                    <div><Link to="https://www.facebook.com/mayankstudypoint" target='_blank'><i className="ri-facebook-circle-fill footer-icon-fb footer-icon"></i></Link></div>
                    <div><Link to="https://www.youtube.com/@MayanksStudyPoint" target='_blank'><i className="ri-youtube-fill footer-icon-yt footer-icon"></i></Link></div>
                    <div><Link to="https://www.linkedin.com/in/mayankshaw" target='_blank'><i class="ri-linkedin-box-fill footer-icon-fb footer-icon"></i></Link></div>
                    <div><Link to="https://www.instagram.com/mayankstudypoint" target='_blank'><i className="ri-instagram-fill footer-icon-insta footer-icon"></i></Link></div>
                    <div><Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FMayankshaw99" target='_blank'><i class="ri-twitter-fill footer-icon-twitter footer-icon"></i></Link></div>
                  </div>
                </ul>
              </Col>
            </Row>
            <hr style={{ color: "silver" }} />
            <div className="d-flex justify-content-between">
              <p className='footer-text'>All right reserved by <Link to="/home">Mayank Study Point</Link>  <i className="ri-copyright-line"></i> {new Date().getFullYear()}</p>
              <p>Designed & Developed by <Link to="mailto:amitshaw1422@gmail.com"> Amit Shaw</Link> </p>
            </div>
          </ContentWrapper>
        </div>
      </footer>
    </>
  )
}

export default Footer;
