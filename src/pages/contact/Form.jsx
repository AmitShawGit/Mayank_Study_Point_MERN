import React from 'react'
import Input from '../../components/formelement/Input'
const Form = () => {
    const inputElement = [
        {
            id: 1,
            label: "Name",
            placeholder: "Your Name",
            type: "text",
        },
        {
            id: 2,
            label: "Email",
            placeholder: "youremail@gmail.com",
            type: "email",
        },
        {
            id: 3,
            label: "Contact No.",
            placeholder: "Your Contact Number",
            type: "number",
        },
        {
            id: 4,
            label: "Your Queries",
            placeholder: "Your Questions",
            type: "text",
        },
    ]
    return (
        <>
            <form action='/formSubmit'>
                {inputElement.map((item, index) => {
                    return <Input key={index} placeholder={item.placeholder} label={item.label} {...item} />
                })}
                <button className='btn btn-primary'>Submit</button>
            </form>
        </>
    )
}

export default Form
