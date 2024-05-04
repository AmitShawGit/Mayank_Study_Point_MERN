import React from 'react'
import { Container } from 'react-bootstrap';
const ContentWrapper = ({ children }) => {
    return (
        <Container fluid>
            {children}
        </Container>
    )
}

export default ContentWrapper;

