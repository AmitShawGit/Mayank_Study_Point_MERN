import React, { useState, useRef, useEffect } from "react";
import ContentWrapper from "../../../components/wrapper/ContentWrapper";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from "../../../components/formelement/Input";
import { useFormik } from 'formik';

import apiCall from "../../../services/index.ts";

let initialValues = {
    name: "",
    email: "",
    contact: "",
}
let Assignment = () => {
    let [subject, setSubject] = useState([])
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const selectedRef = useRef();
    let [university, setUniversity] = useState([])
    //formik
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {

            try {
                apiCall.post("/send-info", values
                )
                    .then((res) => alert(res.data.response))
            }
            catch (err) {
                console.log(err);
            }
            action.resetForm();
            setShow(false)
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
    //Select University
    const getSelectedVal = async (event) => {
        let selected = event.target.value;
        let find = university.find((item) => { return item.name === selected });
        if (find) {
            setSubject(find.subjects);
        } else {
            setSubject([]);
        }
    }
    //go to view course
    const goToViewProduct = (id) => {
        navigate(`/view-free-pdf/${id}`)
    }

    //go direct to  payment page
    const goToPayment = (id) => {
        console.log(id);
        navigate(`/Phonepay/${id}`)
    }

    //get university list
    const getUniversityList = async () => {
        try {
            await apiCall.get("/view-free-pdf")
                .then((res) => {
                    setUniversity(res.data)
                })
                .catch((err) => err)
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleClose = () => setShow(false);

    useEffect(() => {
        selectedRef.current.focus();
        setShow(true)
        getUniversityList()
    }, [])

    return (
        <>

            <ContentWrapper>
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
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <input className='btn btn-primary' type="submit" value="Submit" />
                        </Modal.Footer>
                    </form>
                </Modal>

                {/* Select University */}
                <div className="select-university">
                    <Row>
                        <Col md={3}>
                            <label htmlFor="select">Select University</label>
                        </Col>
                        <Col md={9}>
                            <select id="select" className="form-control" onChange={getSelectedVal} ref={selectedRef}>
                                <option value="select">Select University</option>
                                {university.map((value) => {
                                    return (
                                        <option key={value?.id} value={value?.name} >{value?.name}</option>
                                    )
                                })}

                            </select>
                        </Col>

                    </Row>
                </div>

                {/* university-content */}
                <Row>
                    {subject.map((subject) => (
                        <Col md={3} key={subject?.id}>
                            <Card className="subject-card" >
                                <Card.Body onClick={() => goToViewProduct(subject?.id)}>
                                    <Card.Title>{subject?.subject_name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Semester {subject?.semester}</Card.Subtitle>
                                    <Card.Text>{subject?.short_description}</Card.Text>
                                </Card.Body>
                                <Row className="text-center">
                                    <Col>
                                        <p onClick={() => goToViewProduct(subject?.id)} >Add to Cart</p>
                                    </Col>
                                    <Col>
                                        <p onClick={() => goToViewProduct(subject?.id)}>Buy Now</p>
                                    </Col>
                                </Row>

                            </Card>
                        </Col>
                    ))
                    }


                </Row>


                {/* why choose us */}
                <div className="why-choose-us">

                    <h2 className="heading">Free Access to E-Book PDFs and Notes</h2>
                    <p>We would like to clarify that all Ebook PDFs and notes provided on our website are available for free download or viewing. We believe in making educational resources accessible to all learners, regardless of financial constraints. <br />

                        You are welcome to download or view these materials at your convenience, without any cost or obligation. Our aim is to support your learning journey and provide valuable resources to aid in your academic endeavors. <br />

                        Please feel free to explore and utilize the Ebook PDFs and notes to enhance your studies and broaden your knowledge base. <br />

                        If you have any questions or encounter any issues while accessing the materials,please don't hesitate to contact us. Your feedback is always appreciated as we strive to improve our services and offerings. <br />

                        Thank you for choosing us as your educational partner. Happy learning!</p>


                    <Link to='/contact' className="btn btn-primary">Contact Us</Link>

                </div>
            </ContentWrapper>
        </>
    )
};

export default Assignment;