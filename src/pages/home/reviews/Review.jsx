import React, { useEffect, useState } from 'react'
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from '../../../components/lazyloading/LazyLoading';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import apiCall from '../../../services/index.ts'
import Modal from 'react-bootstrap/Modal';
import Input from '../../../components/formelement/Input.jsx'
import dummyuser from '../../../assets/dummyuser.png'
const Review = () => {
    let imgURL = process.env.REACT_APP_BASE_URL + "upload/"
    let [reviews, setReviews] = useState([]);

    const [show, setShow] = useState(false);
    let [assignment, setAssignment] = useState({ id: "", user_name: "", user_comment: "" })

    //fetch reviews
    let fetchServices = async () => {
        try {
            await apiCall.get('/view-review')
                .then((response) => setReviews(response.data))
                .catch((err) => err)
        } catch (err) {
        }

    }

    let assignmentForm = [
        {
            key: 1,
            label: "User Name",
            id: "user_name",
            type: "text",
            placeholder: "Enter User Name",
            name: "user_name",
        },
        {
            key: 2,
            label: "User Comment",
            id: "user_comment",
            type: "text",
            placeholder: "Enter User Comment",
            name: "user_comment",
        },
    ]
    useEffect(() => { fetchServices() }, [])


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        console.log(files);
        setAssignment((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in assignment) {
            formData.append(key, assignment[key]);
        }
        try {
            await apiCall.post("/post-review", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
                .then((res) => alert(res.data.response))
                .catch(err => alert(err.data.response));

        }

        catch (err) {
            alert(err)
        }
        setShow(false)
    }

    const handleClose = () => setShow(false);
    return (
        <>
            <ContentWrapper>



                <Modal show={show} onHide={handleClose}>
                <form onSubmit={handleSubmit} encType="multipart/form-data" method="post">
                    <Modal.Header closeButton>
                        <Modal.Title>Add Review</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                 
                            <Row>
                                <Col md={6}>
                                    <label>Upload Image</label>
                                    <input type="file" id="image" name="image" onChange={handleChange} className='form-control mt-1' />

                                </Col>
                                {
                                    assignmentForm.map((item) => {
                                        return (
                                            <Col md={6} key={item.key}>
                                                <Input
                                                    name={item.name}
                                                    type={item.type}
                                                    label={item.label}
                                                    id={item.id}
                                                    placeholder={item.placeholder}
                                                    change={handleChange}
                                                    value={assignment[item.name]}
                                                />
                                            </Col>
                                        )
                                    })
                                }

                            </Row>
                        

                      


                    </Modal.Body>
                    <Modal.Footer>

                        <input className='btn btn-success' type="submit" value="Submit" />
                    </Modal.Footer>
                    </form>
                </Modal>



                <div className="review-container">
                    <h2 className='heading'>Student's Review</h2>
                    <i class="ri-add-line add-review" onClick={() => setShow(!show)}></i>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}

                        slidesPerView={"2"}
                        spaceBetween={30}
                        className="mySwiper"

                    >
                        {reviews.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Row className='d-flex align-items-center'>
                                        <Col md={4}>
                                            <Img src={item.image ? imgURL + item?.image : dummyuser} className="img-fluid" />
                                        </Col>
                                        <Col md={8} className='review'>
                                            <p>{item.user_comment}</p>
                                            <p className='text-primary text-20'>- {item.user_name}</p>
                                        </Col>
                                    </Row>
                                </SwiperSlide>
                            )
                        })}


                    </Swiper>
                </div>
            </ContentWrapper>
        </>
    )
}

export default Review
