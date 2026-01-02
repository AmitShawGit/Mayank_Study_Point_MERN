import React, { useCallback, useEffect, useMemo, useState } from 'react'
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
import { Loader } from '../../../components/lazyloading/Loader.jsx';

let ReviewContent = React.memo(({ img, alt, comment, username, isFirst }) => {
    return (
        <Row className='d-flex align-items-center'>
            <Col md={4}>
                <Img src={img} className="img-fluid" alt={alt} loading={isFirst ? 'eager' : 'lazy'} />
            </Col>
            <Col md={8} className='review'>
                <p>{comment}</p>
                <p className='text-primary text-20'>- {username}</p>
            </Col>
        </Row>
    )
})

const Review = () => {
    let imgURL = useMemo(() => process.env.REACT_APP_BASE_URL + "upload/", [])
    let [reviews, setReviews] = useState([]);

    let [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false);
    let [assignment, setAssignment] = useState({ id: "", user_name: "", user_comment: "" })

    //fetch reviews
    let fetchServices = useCallback(() => {
        try {
            apiCall.get('/view-review')
                .then((response) => { setReviews(response.data); setLoading(false) })
                .catch((err) => err)
        } catch (err) {
        }

    }, [])

    let assignmentForm = [
        {
            key: 1,
            label: "Your Name",
            id: "user_name",
            type: "text",
            placeholder: "Enter User Name",
            name: "user_name",
        },
        {
            key: 2,
            label: "Your Review",
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
            alert(err.response)
        }
        setShow(false)

        setAssignment({ id: "", user_name: "", user_comment: "" })
    }

    const handleClose = () => setShow(false);
    if (loading) return <Loader />
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
                                <Col md={12}>
                                    <label>Upload Image</label>
                                    <input type="file" id="image" name="image" onChange={handleChange} className='form-control mt-1 mb-3' />

                                </Col>

                                {
                                    assignmentForm.map((item) => {
                                        return (
                                            <Col md={12} key={item.key}>
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
                    <h2 className='heading'>Review</h2>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        cssMode={true}
                        lazyPreloadPrevNext={true}
                        slidesPerView={"2"}
                        spaceBetween={30}
                        className="mySwiper"

                    >
                        {reviews.map((item, index) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <ReviewContent
                                        img={item.image !== "no_image" ? imgURL + item?.image : dummyuser}
                                        alt="alt name"
                                        comment={item.user_comment}
                                        username={item.user_name}
                                        isFirst={index == 0}
                                    />

                                </SwiperSlide>
                            )
                        })}


                    </Swiper>
                    <button className='btn btn-primary add-review' onClick={() => setShow(!show)}>Share Your Experience</button>
                </div>
            </ContentWrapper>
        </>
    )
}

export default Review
