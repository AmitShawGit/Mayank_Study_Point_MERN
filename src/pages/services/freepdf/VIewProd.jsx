import React,{useEffect, useState} from 'react'
import ProductView from '../../../components/product/ProductView';
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
import { useNavigate, useParams } from 'react-router-dom';
import apiCall from '../../../services/index.ts';
const VIewProd = () => {
    let navigate = useNavigate()
    let id =useParams()
let [product , setProduct] = useState({id:""})
    //go direct to  payment page
    const goToPayment = (id) => {
        console.log(id);
        navigate(`/Phonepay/${id}`)
    }

    //get university list
    const getUniversityList = async () => {
        let intId = parseInt(id.id);
        try {
            await apiCall.get(`/view-specific-assignment/${intId}`)
                .then((res) => {
                    let dataReturned = res.data
                    console.log(dataReturned[0].id);
                    setProduct({id:dataReturned[0].id})
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
        console.log(product);
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