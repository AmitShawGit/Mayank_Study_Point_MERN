import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.scss";
import ContentWrapper from '../../../components/wrapper/ContentWrapper';

const AgeCal = () => {
  let [dob, setDob] = useState();
  let [age, setAge] = useState();
  let [month,setMonth] = useState();
  let [day,setDay]=useState();

  let handleChange = (e) => {
    let dobDate = new Date(e.target.value)

    let month_diff = Date.now() - dobDate.getTime();

    let age_dt = new Date(month_diff);

    let year = age_dt.getUTCFullYear();
    let mnth = age_dt.getUTCMonth();
    let dy = age_dt.getUTCDay();

    let age = Math.abs(year - 1970);

    setAge(age);
    setMonth(mnth + 1);

    setDay(dy);
  }


  return (
    <div>
      <ContentWrapper >
        <Row>
          <Col className='offset-3' md={6}>
            <div className="card">
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
