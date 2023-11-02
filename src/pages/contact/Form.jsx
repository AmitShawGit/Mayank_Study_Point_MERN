import React from 'react'
import Input from '../../components/formelement/Input'
import { useFormik } from 'formik';

let initialValues = {
    name: "",
    email: "",
    contact: "",
    query: "",
}
const Form = () => {
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        onSubmit: (values, action) => {
            console.log(values);
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
            label: "Your Queries",
            placeholder: "Your Questions",
            type: "text",
            name: "query"
        },
    ]
    return (
        <>
            <form action='/formSubmit' onSubmit={handleSubmit}>
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
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form
