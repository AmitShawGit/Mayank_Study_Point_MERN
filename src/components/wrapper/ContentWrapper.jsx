import React from 'react'
import { Container } from 'react-bootstrap';
const ContentWrapper = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default ContentWrapper;

