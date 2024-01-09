import React from 'react'
import Input from '../components/formelement/Input.jsx'
import { useFormik } from 'formik';
import apiCall from '../services/index.ts';
import ContentWrapper from '../components/wrapper/ContentWrapper.jsx';

let initialValues = {
    name: "amitshaw",
    email: "amitshaw20@gmail.com",
    contact: "1234567890",
    amount: "1",
    MUID: "MUID" + Date.now(),
    transactionId: "TI" + Date.now(),
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
            placeholder: "Your Questions",
            type: "number",
            name: "amount"
        },
    ]
    return (
        <>
        <ContentWrapper>
            <form action='/submit' onSubmit={handleSubmit}>
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
            </ContentWrapper>
        </>
    )

}

export default Phonepay