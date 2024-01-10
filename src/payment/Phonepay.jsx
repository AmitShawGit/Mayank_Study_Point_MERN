import React from 'react'
import Input from '../components/formelement/Input.jsx'
import { useFormik } from 'formik';
import apiCall from '../services/index.ts';
import ContentWrapper from '../components/wrapper/ContentWrapper.jsx';
import  Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Barcode from '../assets/barcode.jpg'
let initialValues = {
    name: "",
    email: "",
    contact: "",
    amount: "",
}
const Phonepay = () => {
 
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {
            console.log(values);
            try {
                apiCall.post("/api/payment", values, {
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
        {
            id: 4,
            label: "Amount",
            placeholder: "Amount you paid",
            type: "number",
            name: "amount"
        },
    ]
    return (
        <>
        <ContentWrapper >
        <div className="payment-form">
            <Row>
                <Col sm={6}>
                   
                    <h3>Payment Terms</h3>
                    <ul>
                        <li>Payment form must be filled first to get the barcode</li>
                        <li>After Payment one need to take the screenshot of paid amount and share the screen shot on mail</li>
                        <li>The verification of payment takes time upto two days</li>
                        <li>Once you verified you will get the futher proceses</li>
                    </ul>
                    <img src={Barcode} alt="" />
                </Col>
                <Col sm={6}>
                <form action='/submit' onSubmit={handleSubmit}>
                <h3>Payment Form</h3>
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
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
                </Col>
            </Row>
            

            </div>
            
            </ContentWrapper>
        </>
    )

}

export default Phonepay