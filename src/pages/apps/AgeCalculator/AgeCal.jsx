import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.scss";
import ContentWrapper from '../../../components/wrapper/ContentWrapper';

const AgeCal = () => {
  let [dob, setDob] = useState();
  let [age, setAge] = useState();
  let [month, setMonth] = useState();
  let [day, setDay] = useState();

  let handleChange = (e) => {
    let userDob = e.target.value;
    let dob = new Date(userDob);
    let currentDate = new Date();

    let userAge = currentDate.getFullYear() - dob.getFullYear();
    let userMonth = currentDate.getMonth() - dob.getMonth();
    let userDay = dob.getDate() - currentDate.getDate();




    setAge(userAge)
    setDay(userDay)
    setMonth(userMonth)
  }






  return (
    <div>
      <ContentWrapper >
        <Row>
          <Col className='offset-3' md={6}>
            <div className="card-calc card">
              <h2 className='heading'>Age Calculator</h2>
              <label htmlFor="date">Enter Your Date of Birth</label>
              <input type="date" id="date" className='form-control mt-2' value={dob} onChange={handleChange} />
              <p>You are <b>{age} year's , {month} month and {day} day's</b> old</p>

            </div>

          </Col>
        </Row>
      </ContentWrapper>
    </div>
  )
}


export default AgeCal
