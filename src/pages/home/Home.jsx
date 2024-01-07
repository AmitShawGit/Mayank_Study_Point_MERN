import React, { useState, useEffect } from 'react'
import Hero from './hero/Hero'
import Learning from './learning/Learning'
import Services from './services/Services'
import Pricing from './pricing/Pricing'
import Review from './reviews/Review'
import Input from '../../components/formelement/Input.jsx'


import Modal from 'react-bootstrap/Modal';

import { useFormik } from 'formik';
import axios from 'axios';
let initialValues = {
  name: "",
  email: "",
  contact: "",
  query: "",
}
const Home = () => {
  const [show, setShow] = useState(false);

  //formik
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: (values, action) => {
      console.log(values);
      try {
        axios.post("http://localhost:4000/", values, {
          headers: {
            'Content-Type': 'application/json',
          }
        }
        )
          .then((res) => alert(res.data))
      }
      catch (err) {
        console.log(err);
      }
      console.log("data submitted");
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
    },

  ]
  const handleClose = () => setShow(false);
  useEffect(() => {

    setShow(true)
  }, [])
  return (
    <>
      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <form action='/submit' onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Get Call Back</Modal.Title>
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
