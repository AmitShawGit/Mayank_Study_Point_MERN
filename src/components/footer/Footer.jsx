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
        <div className="footer">
          <ContentWrapper>
            <Row>
              <Col md={4}>
                <ul className='footer-list'>
                  <li className='footer-head text-primary'>Quick Links</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>
                  <li className='footer-item'>Home</li>
                  
                </ul>
              </Col>
            </Row>
          </ContentWrapper>
        </div>
      </footer>
    </>
  )
}

export default footer
