import { Card, Container } from "react-bootstrap";
import secure from "../../assets/secure.png";
import assigment from "../../assets/ass_img.png"
import { SwiperSlide, Swiper } from 'swiper/react'
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import { useNavigate } from "react-router-dom";

let Assignmentcycle = () => {
    let navigate = useNavigate()

    let assignments = [
        {
            id: 1,
            Packagename: "Sample Assignment 1",
            head: "December Cycle",
            price: "3000",
            del: "5000",
            img: assigment,
            semester: 1
        },
        {
            id: 2,
            Packagename: "Sample Assignment1",
            head: "December Cycle",
            price: "3000",
            del: "5000",
            img: assigment,
            semester: 1
        },
        {
            id: 3,
            Packagename: "Sample Assignment1",
            head: "December Cycle",
            price: "3000",
            del: "5000",
            img: assigment,
            semester: 1
        },
        {
            id: 4,
            Packagename: "Sample Assignment1",
            head: "December Cycle",
            price: "3000",
            del: "5000",
            img: assigment,
            semester: 1
        },
        {
            id: 5,
            Packagename: "Sample Assignment1",
            head: "December Cycle",
            price: "3000",
            del: "5000",
            img: assigment,
            semester: 1
        },
        {
            id: 6,
            Packagename: "Sample Assignment1",
            head: "December Cycle",
            price: 3000,
            del: 5000,
            img: assigment,
            semester: 1
        },
    ]


    let sentToPayment = (id) => {
        let sentSpecificItem = assignments.filter((item) => item.id === id)
        sessionStorage.setItem("productInfo", JSON.stringify(sentSpecificItem[0]));
        navigate(`/Phonepay/${id}`)
    }

    return (
        <>
            <Container className="pt-5">

                <Swiper
                    modules={[Mousewheel]}
                    slidesPerView={"1"}
                    spaceBetween={30}
                    className="mySwiper"
                    breakpoints={{

                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },

                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },

                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >

                    {assignments.map((item, index) => {
                        return (

                            <SwiperSlide key={index}>
                                <Card className="cycle-assignment-cad" >
                                    <img src={item.img} alt="" className="img-fluid assigmentImg" />
                                    <ul className="pb-0 mb-0">
                                        <li><h2>{item.Packagename}</h2></li>
                                        <li>{item.head} </li>
                                        <li><span>Rs. {item.price}</span> <del>Rs {item.del}</del></li>
                                        <li>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                        </li>
                                        <li><img src={secure} alt="" className="img-fluid secure" /></li>
                                        <li><button className="btn-primary" onClick={() => sentToPayment(item.id)}>Buy Now</button></li>
                                    </ul>
                                </Card>
                            </SwiperSlide>

                        )
                    })}




                </Swiper>

            </Container>
        </>
    )
}
export default Assignmentcycle; 