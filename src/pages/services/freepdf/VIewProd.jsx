import React,{useEffect} from 'react'
import ProductView from '../../../components/product/ProductView';
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
import { useNavigate } from 'react-router-dom';
import apiCall from '../../../services/index.ts';
const VIewProd = () => {
    let navigate = useNavigate()

    //go direct to  payment page
    const goToPayment = (id) => {
        console.log(id);
        navigate(`/Phonepay/${id}`)
    }

    //get university list
    const getUniversityList = async () => {
        try {
            await apiCall.get("/view-assignment")
                .then((res) => {
                    setUniversity(res.data)
                })
                .catch((err) => err)
        }
        catch (err) {
            console.log(err);
        }
    }
    //api call
    useEffect(() => {
        getUniversityList()
    }, [])
    return (
        <ContentWrapper >
            <div className="product-view-page">

            <ProductView img="https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/11/23171842/Business-Studies.png" title="Product Title" short_description="Short Description Lorem ipsum dolor sit amet." description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tenetur amet veniam maxime, odio unde rerum et voluptatem eius atque? Nesciunt, voluptates. Iste reiciendis doloremque nihil dolores sequi aspernatur dolore perspiciatis dolor. Minus sed voluptatem corrupti veniam impedit sunt eos quidem dignissimos delectus expedita, voluptates sapiente omnis odio assumenda nostrum!" buyNow={()=>goToPayment(id)} />
            </div>
        </ContentWrapper>
    )
}

export default VIewProd