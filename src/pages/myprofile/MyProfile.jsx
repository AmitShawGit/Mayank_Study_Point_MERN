import React, { useState } from 'react'
import ContentWrapper from '../../components/wrapper/ContentWrapper'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

const MyProfile = () => {
    const [headingText, setHeadingText] = useState("My Orders");


    let goToOrders = (text) => {
        setHeadingText(text)
    }
    let goToCart = (text) => {
        setHeadingText(text)
    }
    let goToPaymentHistory = (text) => {
        setHeadingText(text)

    }
    let goToHome = () => {


    }
    return (
        <>
            <ContentWrapper>
                <Row className='myProfileContainer'>
                    <Col sm={12} md={3}>
                        <div className="myProfile">

                            <ul className="list-none">
                                <li><h5>Your Name</h5></li>
                                <li>yourmail@gmail.com</li>
                                <li>89927830</li>
                            </ul>
                            <div className="menu">
                                <ul className="list-none">
                                    <li onClick={() => { goToOrders("My Orders") }}><i class="ri-archive-fill menuIcon"></i> My Orders</li>
                                    <li onClick={() => { goToCart("My Cart") }}><i class="ri-shopping-cart-2-fill menuIcon"></i> My Cart</li>
                                    <li onClick={() => { goToPaymentHistory("Payment History") }}><i class="ri-refund-2-line menuIcon"></i> Payment History</li>
                                    <li onClick={goToHome}><i class="ri-shut-down-line menuIcon"></i> Log out</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={9}>
                        <div className="tableSide">
                            
                            <h5>{headingText}</h5>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <h2>You have no order history yet</h2>
                        </div>
                    </Col>

                </Row>


            </ContentWrapper>


        </>
    )
}

export default MyProfile