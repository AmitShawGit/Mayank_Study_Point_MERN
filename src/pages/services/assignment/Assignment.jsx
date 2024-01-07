import React, { useState, useRef, useEffect } from "react";
import ContentWrapper from "../../../components/wrapper/ContentWrapper";
import './style.scss'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from "../../../components/formelement/Input";
import { useFormik } from 'formik';
import axios from 'axios';

let initialValues = {
    name: "",
    email: "",
    contact: "",
    query: "",
}
let Assignment = () => {
    let [subject, setSubject] = useState([]);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const selectedRef = useRef();

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


    let select = [
        {
            id: 1,
            name: "NMIMS",
            subject: [
                {
                    id: 1,
                    subjectName: "NMIMS Studies",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.",
                    path: "/home",
                    cart: "/cart"
                },
                {
                    id: 2,
                    subjectName: "Accountancy",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content",
                    path: "/home",
                    cart: "/cart"
                },
                {
                    id: 2,
                    subjectName: "Accountancy",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content",
                    path: "/home",
                    cart: "/cart"
                },
                {
                    id: 2,
                    subjectName: "Accountancy",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content",
                    path: "/home",
                    cart: "/cart"
                },
                {
                    id: 2,
                    subjectName: "Accountancy",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content",
                    path: "/home",
                    cart: "/cart"
                },
                {
                    id: 2,
                    subjectName: "Accountancy",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content",
                    path: "/home",
                    cart: "/cart"
                },
                {
                    id: 2,
                    subjectName: "Accountancy",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content",
                    path: "/home",
                    cart: "/cart"
                },
                {
                    id: 2,
                    subjectName: "Accountancy",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content",
                    path: "/home",
                    cart: "/cart"
                },
                {
                    id: 2,
                    subjectName: "Accountancy",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content",
                    path: "/home",
                    cart: "/cart"
                },
            ]
        },
        {
            id: 2,
            name: "Amity University",
            subject: [
                {
                    id: 1,
                    subjectName: "Amity Studies",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.",
                    path: "/home",
                    cart: "/cart"
                },
                {
                    id: 2,
                    subjectName: "Accountancy",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content",
                    path: "/home",
                    cart: "/cart"
                },
            ]
        },
        {
            id: 3,
            name: "Burdwan University",
            subject: [
                {
                    id: 1,
                    subjectName: "Bussiness Studies",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.",
                    path: "/home",
                    cart: "/cart"
                },
                {
                    id: 2,
                    subjectName: "Accountancy",
                    semester: "1",
                    detail: " Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content",
                    path: "/home",
                    cart: "/cart"
                },
            ]
        },

    ]

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
    const getSelectedVal = (event) => {
        let selected = event.target.value;
        let find = select.find((item) => { return item.name === selected })
        setSubject(find ? find.subject : []);
    }
    const goToViewProduct = () => {
        navigate('/view')
    }

    const handleClose = () => setShow(false);
    
    useEffect(() => {
        selectedRef.current.focus();
        setShow(true)
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
                        <Col md={8}>
                            <select id="select" className="form-control" onChange={getSelectedVal} ref={selectedRef}>
                                <option value="select">Select University</option>
                                {select.map((value, index) => {
                                    return (
                                        <option key={index} value={value.name} >{value.name}</option>
                                    )
                                })}

                            </select>
                        </Col>
                    </Row>
                </div>
{/* univeristy-content */}
                <Row>
                    {subject.map((subject) => (
                        <Col md={3} key={subject.id}>
                            <Card className="subject-card" onClick={goToViewProduct}>
                                <Card.Body>
                                    <Card.Title>{subject.subjectName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Semester {subject.semester}</Card.Subtitle>
                                    <Card.Text>{subject.detail}</Card.Text>
                                    <Row>
                                        <Col>
                                            <Link to={subject.cart}>Add to Cart</Link>
                                        </Col>
                                        <Col>
                                            <Link to={subject.path}>Buy Now</Link>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                    }


                </Row>


{/* why choose us */}
                <div className="why-choose-us">

                    <h2 className="heading">Assignment</h2>
                    <h4 className="text-primary">Unlock Your Academic Success with Our Expert Assignment Services!</h4>
                    <p>Struggling to meet tight deadlines or looking to elevate your academic performance? Look no further! Our assignment creation service is your gateway to stress-free, top-notch assignments that stand out. We understand the demands of student life, and our team of seasoned professionals is here to lend you a helping hand</p>
                    <h5 className="text-primary">Why Choose Us?</h5>
                    <p>With a commitment to excellence, we pride ourselves on delivering authentic, plagiarism-free content tailored to your unique requirements. Our team consists of subject matter experts dedicated to ensuring your success. Every assignment is a product of thorough research, meticulous writing, and a guarantee of on-time delivery. </p>
                    <h5 className="text-primary">Our Genuine Promise</h5>
                    <p>Transparency, authenticity, and academic integrity are the cornerstones of our service. We prioritize your academic goals and strictly adhere to ethical standards. When you choose us, you're not just getting an assignment; you're investing in a partnership that prioritizes your success. </p>
                    <h5 className="text-primary">How It Works ?</h5>
                    <ul className="works-list">
                        <li><b>Submit Your Requirements:</b> Share your assignment details and specifications. </li>
                        <li><b>Get Matched with an Expert:</b>  Our team assigns a qualified expert to your task. </li>
                        <li><b>Quality Assurance:</b> Your assignment undergoes a stringent quality check. </li>
                        <li><b>On-Time Delivery:</b> Receive your completed assignment well before your deadline.
                        </li>
                    </ul>

                    <p>Empower your academic journey with our genuine commitment to excellence. Let's turn your assignments into opportunities for success.</p>

                    <p>Ready to experience the difference? Contact us today and witness the transformation in your academic endeavors!</p>
                    <Link to='/contact' className="btn btn-primary">Contact Us</Link>

                </div>
            </ContentWrapper>
        </>
    )
};

export default Assignment;