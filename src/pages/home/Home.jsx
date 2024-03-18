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
  uname: "",
  email: "",
  contact: "",
  password: ""
}
const Home = () => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [logInCred, setLogInCred] = useState({ email: "", password: "" })

  const passwordType = useRef(null);
  const eyeIcon = useRef(null);

  const passwordTypeSign = useRef(null);
  const eyeIconSign = useRef(null);

  const [eye, setEye] = useState(true)

  const [eyes, setEyes] = useState(true)

  //formik
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {

      try {
        apiCall.post("/sign-up", values
        )
          .then((res) => alert(res.data))
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
      name: "uname",
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
  const handleCloseLogin = () => setShowLogin(false);

  const handleLoginChange = (e) => {
    setLogInCred((credentials) => ({ ...credentials, [e.target.name]: e.target.value }))
  }
  const logIn = (e) => {
    e.preventDefault()
    try {

      apiCall.post("/login", logInCred)
        .then((res) => {
          alert(res.data);

          setLogInCred({ email: "", password: "" })
          setShowLogin(false)
        })
        .catch((error) => {
          alert(error)
          setLogInCred({ email: "", password: "" })
          setShowLogin(false)
        })
    } catch (err) {
      console.log(err);
    }
  }
  const showPassword = () => {
    if (passwordType?.current) {
      if (eye) {
        passwordType.current.type = "text";
        eyeIcon.current.className = "ri-eye-off-line";
      } else {
        passwordType.current.type = "password";
        eyeIcon.current.className = "ri-eye-line";
      }
      setEye(prevEye => !prevEye);
    }
  }

  const showPasswordSign = () => {
    if (passwordTypeSign?.current) {
      if (eyes) {
        passwordTypeSign.current.type = "text";
        eyeIconSign.current.className = "ri-eye-off-line";
      } else {
        passwordTypeSign.current.type = "password";
        eyeIconSign.current.className = "ri-eye-line";
      }
      setEyes(prevEye => !prevEye);
    }
  }

  useEffect(() => {

    setShowLogin(true)
    setShow(false)
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
                onBlur={handleBlur} name='password' id='password' ref={passwordTypeSign} />
              <i className="ri-eye-line" ref={eyeIconSign} onClick={showPasswordSign}></i>
            </div>
            <p className='goToLogIn'>Already have account <span onClick={() => (setShowLogin(true), setShow(false))}>click here</span>  to login</p>
          </Modal.Body>


          <Modal.Footer>
            <input className='btn btn-success' type="submit" value="Sign up" />
          </Modal.Footer>
        </form>
      </Modal>

      <Modal show={showLogin} onHide={handleCloseLogin} size='sm'>
        <form action="" onSubmit={logIn}>
          <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <label htmlFor="email">Username (email)</label>
            <input type="email" placeholder='Enter your username' name="email" id="email" className='form-control' value={logInCred.email} onChange={handleLoginChange}
            />
            <div className="password-input">
              <label htmlFor="password">Password</label>
              <input type='password' className='form-control' placeholder='Enter your password' onChange={handleLoginChange}
                name='password' id='password' ref={passwordType} value={logInCred.password} />
              <i className="ri-eye-line" ref={eyeIcon} onClick={showPassword}></i>
            </div>
            <p className='goToSignUp'>Don't have account <span onClick={() => (setShow(true), setShowLogin(false))}>click here</span>  to Signup</p>
          </Modal.Body>


          <Modal.Footer>

            <input className='btn btn-success' type="submit" value="Login" />
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
