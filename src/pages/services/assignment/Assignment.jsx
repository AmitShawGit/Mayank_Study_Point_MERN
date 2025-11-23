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


//setDate 
let currDate = Date.now();
let dateObj = new Date(currDate);
const formatDate = {day:"numeric" , month:"long", year:"numeric"}
let formattedDate = dateObj.toLocaleDateString(formatDate);

let initialValues = {
    name: "",
    email: "",
    contact: "",
    date: formattedDate
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
        let find = university.find((item) =>{ return item.name === selected});
        if (find) {
            setSubject(find.subjects);
        } else {
            setSubject([]);
        }
    }
    //go to view course
    const goToViewProduct = (id) => {
        navigate(`/view-pdf/${id}`)
    }

    // //go direct to  payment page
    // const goToPayment = (id) => {
    //     console.log(id);
    //     navigate(`/Phonepay/${id}`)
    // }

    //get university list
    const getUniversityList = async () => {
        try {
            await apiCall.get("/view-assignment")
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
        getUniversityList();    
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
                <div className="select-university p-4">
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