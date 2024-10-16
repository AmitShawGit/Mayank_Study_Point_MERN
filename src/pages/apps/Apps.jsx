import React from 'react';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Cards from '../../components/cards/Cards'

import ContentWrapper from '../../components/wrapper/ContentWrapper';
import { Link } from 'react-router-dom';
import notesapp from '../../assets/notesapp.png'
// import agecalc from '../../assets/agecalc.png'
const Apps = () => {
  return (
    <>
    <ContentWrapper>
      <Row>
        <Col sm={12} md={4}>
        <Link to="/notes"><Cards cardText="Sticky Notes App" bgImg={notesapp}/></Link>
        </Col>
        <Col sm={12} md={4}>
        {/* <Link to="/age-calculator"><Cards cardText="Age Calulator App" bgImg={agecalc} /></Link> */}
        </Col>
        </Row>
      
    </ContentWrapper>
    </>
  )
}

export default Apps;
