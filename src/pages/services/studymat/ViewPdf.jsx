import React, { useEffect, useState } from 'react'
import ProductView from '../../../components/product/ProductView';
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
import { useNavigate, useParams } from 'react-router-dom';
import apiCall from '../../../services/index.ts';
const ViewPdf = () => {
    let navigate = useNavigate()
    let id = useParams()
    let [product, setProduct] = useState([])
    let imageURL = process.env.REACT_APP_BASE_URL
    //go direct to  payment page
    const goToPayment = (id) => {
        let intId = parseInt(id.id);
        navigate(`/Phonepay/${intId}`)
    }

    //get university list
    const getUniversityList = async () => {
        let intId = parseInt(id.id);
        try {
            await apiCall.get(`/view-specific-assignment/${intId}`)
                .then((res) => {
                    let dataReturned = res.data
                    setProduct(dataReturned)
                    let productInfo = {
                        subject_name : dataReturned.subject_name,
                        sell_price: dataReturned.sell_price,
                        semester: dataReturned.semester
                    }
                    sessionStorage.setItem("productInfo",JSON.stringify(productInfo))
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

                <ProductView img={imageURL + product.image} actualPrice={product.sell_price} price={product.price} title={product.subject_name} short_description={product.short_description} description={product.description} buyNow={() => goToPayment(id)} />
            </div>
        </ContentWrapper>
    )
}

export default ViewPdf