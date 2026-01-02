import React, { useState } from 'react';
import './footer.scss';
import ContentWrapper from '../wrapper/ContentWrapper';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import apiCall from '../../services/index.ts'
import Modal from 'react-bootstrap/Modal';
const Footer = () => {
  let [userEmail, setUserEmail] = useState({ email: "" });
  let [show, setShow] = useState(false)

  let handleformdata = (e) => {

    setUserEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  let handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiCall.post("/email", userEmail)
        .then((res) => { alert(res.data) })
    }
    catch (err) {
      console.log(err.message);
    }
    console.log(userEmail);
    setUserEmail("")
  };


  let handleClose = () => setShow(false)

  return (
    <>


      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Mission & Vision</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p><b>Mission</b>: We are with students from starting to end.</p>
          <p><b>Vision</b>:
            Embark on a seamless journey to academic success with our dedicated platform. This space is crafted to empower students like you in conquering assignments with confidence. Discover a wealth of resources and references curated to guide you through your academic quests

          </p>
        </Modal.Body>



      </Modal>

      <div className="sub-footer mt-5">
        <ContentWrapper>
          <Row>
            <Col sm={12} md={6}><h3>Subscribe for newsletter</h3></Col>
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
                  <li className='footer-head text-primary'>Our Services</li>
                  <li><Link to="/assignment" className='footer-item'>Assignments</Link></li>
                  <li><Link to="/contact" className='footer-item'>Projects</Link></li>
                  {/* <li><Link to="/contact" className='footer-item'>Web Design</Link></li>
                  <li><Link to="/contact" className='footer-item'>Web Development</Link></li>
                  <li><Link to="/contact" className='footer-item'>Graphic Design</Link></li> */}


                </ul>
              </Col>
              <Col md={4}>
                <ul className='footer-list'>
                  <li className='footer-head text-primary'>Quick Links</li>
                  <li><Link to="/home" className='footer-item'>Home</Link></li>
                  <li><Link to="/service" className='footer-item'>Service</Link></li>
                  <li><Link to="/contact" className='footer-item'>Contact</Link></li>
                  {/* <li><Link to="/" className='footer-item'>Feedback</Link></li> */}
                  <li><Link onClick={() => setShow(true)} className='footer-item'>Mission & Vision</Link></li>
                  {/* <li><Link to="/" className='footer-item'>About us</Link></li> */}
                </ul>
              </Col>
              <Col md={4} className='text-center footer-logo'>
                <h4>Mayank's Study Point</h4>
                <q> Your future is in your hand </q>
                <ul className='footer-list'>
                  <li ><Link to="mailto:mayankshaw8928@gmail.com" className='footer-item'><i className="ri-mail-line"></i> mayankshaw8928@gmail.com</Link></li>
                  <div className="d-flex justify-content-around mt-3">
                    <div><Link to="https://www.facebook.com/mayankstudypoint" ><i className="ri-facebook-circle-fill footer-icon-fb footer-icon"></i></Link></div>
                    <div><Link to="https://www.youtube.com/@MayanksStudyPoint"><i className="ri-youtube-fill footer-icon-yt footer-icon"></i></Link></div>
                    <div><Link to="https://www.linkedin.com/in/mayankshaw" ><i className="ri-linkedin-box-fill footer-icon-fb footer-icon"></i></Link></div>
                    <div><Link to="https://www.instagram.com/mayankstudypoint" ><i className="ri-instagram-fill footer-icon-insta footer-icon"></i></Link></div>
                    <div><Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FMayankshaw99"><i className="ri-twitter-fill footer-icon-twitter footer-icon"></i></Link></div>
                  </div>
                </ul>
              </Col>
            </Row>
            <hr style={{ color: "silver" }} />
            <div className="d-flex justify-content-between flex-sm-row flex-column">
              <p className='footer-text'>All right reserved by <Link to="/home">Mayank's Study Point</Link>  <i className="ri-copyright-line"></i> {new Date().getFullYear()}</p>
              <p>Designed & Developed by <Link to="https://amitshawgit.github.io/porfolio/" target='_blank'> Amit Shaw</Link> </p>
            </div>
          </ContentWrapper>
        </div>
      </footer>
    </>
  )
}

export default Footer;
