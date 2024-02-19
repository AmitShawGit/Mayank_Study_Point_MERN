import React, { createRef, useEffect, useState } from 'react'
import Input from '../components/formelement/Input.jsx'
import apiCall from '../services/index.ts';
import ContentWrapper from '../components/wrapper/ContentWrapper.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Barcode from '../assets/barcode.jpeg'


const Phonepay = () => {
    const checked = createRef();
    let [disable, setDisable] = useState(true)
    let [submitBtn, setSubmitBtn] = useState(true)
    let [showBarcode, setShowBarcode] = useState(false)
    let [product, setProduct] = useState({})
    let [input, setInput] = useState({
        name: "",
        email: "",
        contact: "",
        amount: "",
        paymentScreenshot: null
    })
    // Form Elements
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
    //Form HandleChange
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        console.log(files);
        setInput((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value
        }));
    };
    //Form Submitted
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in input) {
            formData.append(key, input[key],);
        }
        formData.append('subject', product.subject_name ? product.subject_name : product.Packagename + " " + product.head,);
        formData.append('price', product.sell_price ? product.sell_price : product.price);

        try {
            await apiCall.post("/api/payment", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
                .then((res) => {
                    alert(res.data.response); setInput({
                        name: "",
                        email: "",
                        contact: "",
                        amount: "",
                        paymentScreenshot: null,
                        subject: product.subject_name ? product.subject_name : product.Packagename + product.head,
                        price: product.sell_price ? product.sell_price : product.price

                    })
                })
                .catch(err => alert(err.data.response));
        }
        catch (err) {
            alert(err)
        }
    }
    //Checkbox to view barcode
    const checkBox = () => {
        if (checked.current.checked) {
            setDisable(false)
        } else if (checked.current.checked !== true) {
            setDisable(true)
        }
    }
    //Show Barcode show hide
    let payBtnClicked = () => {
        setShowBarcode(!showBarcode)
        setSubmitBtn(!submitBtn)
    }

    let subjects = JSON.parse(sessionStorage.getItem("productInfo"))


    useEffect(() => {
        setProduct(subjects)
    }, [])
    return (
        <>
            <ContentWrapper >
                <div className="payment-form">
                    <Row>
                        <Col sm={6}>
                            <div className="payment-terms">
                                <h5>Product Summary</h5>
                                <ul className="list-none">
                                    <li><b>{product?.subject_name || product?.Packagename}, {product?.subject_name ? "Semester" : product?.head} {product?.semester}</b></li>
                                    <li>Rs. {product?.sell_price || product?.price} only</li>
                                </ul>
                                <h5 style={{ display: showBarcode ? "none" : "block" }}>Payment Terms</h5>
                                <ul className='list-none p-2' style={{ display: showBarcode ? "none" : "block" }}>
                                    <li>(a) Fill out the payment form to receive confirmation via email</li>
                                    <li>(b) Take a screenshot of the paid amount and email it along with the form</li>
                                    <li>(c) Payment verification may take up to two days</li>
                                    <li>(d) Upon verification, further processes will be provided</li>
                                    <li><input type="checkbox" ref={checked} onClick={checkBox} id="checkbox" style={{ cursor: "pointer" }} /> &nbsp;<label htmlFor="checkbox"> I accept the following terms and conditions</label></li>
                                </ul>
                                <button className='btn btn-success mb-2' disabled={disable} onClick={payBtnClicked} style={{ display: showBarcode ? "none" : "block" }} >Show Barcode</button>
                            </div>
                            <img src={Barcode} alt="" className='img-fluid barcode-img' style={{ display: showBarcode ? "block" : "none" }} />
                            <marquee direction="rtl" className="text-danger">
                                Please ensure to upload the payment screenshot as your payment will not be accepted without it, even if the money has been deducted from your account.</marquee>
                        </Col>
                        <Col sm={6}>
                            <form onSubmit={handleSubmit} encType="multipart/form-data" method="post">
                                <h5>Payment Form</h5>
                                {inputElement.map((item, index) => {
                                    return <Input
                                        key={index}
                                        placeholder={item.placeholder}
                                        label={item.label}
                                        name={item.name}
                                        type={item.type}
                                        change={handleChange}
                                        value={product[item.name]} />
                                })}
                                <label htmlFor="">Upload Payment Screenshot <span className='text-danger'>*</span></label>
                                <input type="file" id="image" label="Image" name="paymentScreenshot" onChange={handleChange} className='form-control' required />

                                <input className='btn btn-primary mt-2' type="submit" value="Submit" disabled={submitBtn} />
                            </form>
                        </Col>
                    </Row>


                </div>

            </ContentWrapper>
        </>
    )

}

export default Phonepay