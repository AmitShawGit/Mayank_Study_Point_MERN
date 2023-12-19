import React from "react";
import ContentWrapper from "../../../components/wrapper/ContentWrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";

let Freepdf = () => {

    let select = [
        {
            id: 1,
            name: "NMIMS",
        },
        {
            id: 2,
            name: "Amity University",
        },
        {
            id: 3,
            name: "Burdwan University",
        },
    ]

    let subject = [
        {
            id:1,
            subjectName:"Bussiness Studies",
            semester: "1",
            detail:" Some quick example text to build on the card title and make up the bulk of the card's content.",
            path:"/home",
            cart:"/cart"
        },
        {
            id:2,
            subjectName:"Accountancy",
            semester: "1",
            detail:" Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content",
            path:"/home",
            cart:"/cart"
        },
    ]
    return (
        <>

            <ContentWrapper>
                <div className="select-university">

                    <Row>
                        <Col md={3}>
                            <label htmlFor="select">Select University</label>
                        </Col>
                        <Col md={8}>
                            <select name="" id="select" className="form-control">
                                {select.map((value,index) => {
                                    return(
                                        <option key={index} value={value.name}>{value.name}</option>
                                    )
                                })}

                            </select>
                        </Col>
                    </Row>
                </div>

                <Row>
                    {subject.map((value,id)=>{
                        return(
                            <Col md={3} key={id}>
                            <Card className="subject-card">
                                <Card.Body>
                                    <Card.Title>{value.subjectName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Semester {value.semester}</Card.Subtitle>
                                    <Card.Text>
                                       {value.detail}
                                    </Card.Text>
                                    <Row>
                                        <Col>  <Link to={value.cart}>Add to Cart</Link></Col>
                                        <Col>
                                        <Link to={value.path}>Buy Now</Link></Col>
                                    </Row>
                                  
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
                
                </Row>
            </ContentWrapper>
        </>
    )
};

export default Freepdf;