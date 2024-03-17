import React, { useState, useEffect, useRef } from 'react'
import Hero from './hero/Hero'
import Learning from './learning/Learning'
import Services from './services/Services'
import Pricing from './pricing/Pricing'
import Review from './reviews/Review'
import Input from '../../components/formelement/Input.jsx'


import Modal from 'react-bootstrap/Modal';

import { useFormik } from 'formik';

import apiCall from '../../services/index.ts'
let initialValues = {
  name: "",
  email: "",
  contact: "",
}
const Home = () => {
  const [show, setShow] = useState(false);

  const [eye, setEye] = useState(false)

  //formik
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      console.log("myval", values);
      try {
        apiCall.post("/send-info", values
        )
          .then((res) => alert(res.data.response))
      }
      catch (err) {
        console.log(err);
      }
      action.resetForm()
    }
  })
  //form elements
  const inputElement = [
    {
      id: 1,
      label: "Name",
      placeholder: "Your Name",
      type: "text",
      name: "name",
    },
    {
      id: 2,
      label: "Email",
      placeholder: "youremail@gmail.com",
      type: "email",
      name: "email"
    },
    {
      id: 3,
      label: "Contact No.",
      placeholder: "Your Contact Number",
      type: "number",
      name: "contact"
    }


  ]
  const handleClose = () => setShow(false);

  const passwordType = useRef();
  const eyeIcon = useRef();
  const showPassword = () => {
    if (eye) {
      setEye(false)
      passwordType.current.type = "text"
      eyeIcon.current.className = "ri-eye-off-line"
    } else {
      passwordType.current.type = "password"
      eyeIcon.current.className = "ri-eye-line"
      setEye(true)
    }

  }

  useEffect(() => {

    setShow(true)
  }, [])
  return (
    <>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <form action='/submit' onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            {inputElement.map((item, index) => {
              return <Input
                key={index}
                placeholder={item.placeholder}
                label={item.label}
                name={item.name}
                type={item.type}
                change={handleChange}
                blur={handleBlur}
                msg={errors[item.name]}
                value={values[item.name]} />
            })}
            <div className="password-input">
              <label htmlFor="password">Password</label>
              <input type='password' className='form-control' placeholder='Enter your password' onChange={handleChange}
                onBlur={handleBlur} name='password' id='password' ref={passwordType} />
              <i className="ri-eye-line" ref={eyeIcon} onClick={showPassword}></i>
            </div>
          </Modal.Body>


          <Modal.Footer>

            <input className='btn btn-success' type="submit" value="Submit" />
          </Modal.Footer>
        </form>
      </Modal>
      <Hero />
      <Services />
      <Learning />
      <Pricing />
      <Review />
    </>
  )
}

export default Home
