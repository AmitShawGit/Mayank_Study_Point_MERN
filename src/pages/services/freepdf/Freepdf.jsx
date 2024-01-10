import React, { useState } from "react";
import ContentWrapper from "../../../components/wrapper/ContentWrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

let Freepdf = () => {
let [subject,setSubject]=useState([]);
const navigate = useNavigate()
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
    //Select University
    const getSelectedVal = (event) => {
        let selected = event.target.value;
       let find = select.find((item)=>{return item.name===selected})
       setSubject(find ? find.subject : []);
    }
    const goToViewProduct=(id)=>{
navigate(`/view/${id}`)
    }

    return (
        <>
            <ContentWrapper>
                <div className="select-university">

                    <Row>
                        <Col md={3}>
                            <label htmlFor="select">Select University</label>
                        </Col>
                        <Col md={8}>
                            <select id="select" className="form-control" onChange={getSelectedVal}>
                                <option value="Select">Select University</option>
                                {select.map((value, index) => {
                                    return (
                                        <option key={index} value={value.name}>{value.name}</option>
                                    )
                                })}

                            </select>
                        </Col>
                    </Row>
                </div>

                <Row>
                    {    subject.map((subject) => (
                            <Col md={3} key={subject.id}>
                                <Card className="subject-card" onClick={()=>goToViewProduct(subject.id)}>
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
            </ContentWrapper>
        </>
    )
};

export default Freepdf;