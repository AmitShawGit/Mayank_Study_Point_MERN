import React from 'react'
import ProductView from '../../../components/product/ProductView';
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
import { useNavigate } from 'react-router-dom';
const VIewProd = () => {
    let navigate = useNavigate()

    let handleClick = (id) =>{
        navigate(`/Phonepay/${id}`)
    }
    return (
        <ContentWrapper >
            <div className="product-view-page">

            <ProductView img="https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/11/23171842/Business-Studies.png" title="Product Title" short_description="Short Description Lorem ipsum dolor sit amet." description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tenetur amet veniam maxime, odio unde rerum et voluptatem eius atque? Nesciunt, voluptates. Iste reiciendis doloremque nihil dolores sequi aspernatur dolore perspiciatis dolor. Minus sed voluptatem corrupti veniam impedit sunt eos quidem dignissimos delectus expedita, voluptates sapiente omnis odio assumenda nostrum!" buyNow={()=>handleClick(1)} />
            </div>
        </ContentWrapper>
    )
}

export default VIewProd