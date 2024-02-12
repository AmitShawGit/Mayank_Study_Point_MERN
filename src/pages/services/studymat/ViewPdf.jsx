import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ProductView from '../../../components/product/ProductView';
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
import apiCall from '../../../services/index.ts';
const ViewPdf = () => {
    let navigate = useNavigate()
    let id = useParams()
    let [product, setProduct] = useState([])
    let imageURL = process.env.REACT_APP_BASE_URL + "upload/"

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
                        subject_name: dataReturned[0]?.subject_name,
                        sell_price: dataReturned[0]?.sell_price,
                        semester: dataReturned[0]?.semester
                    }
                    sessionStorage.setItem("productInfo", JSON.stringify(productInfo))
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
                <ProductView img={imageURL + product[0]?.image} actualPrice={product[0]?.sell_price} price={product[0]?.price} title={product[0]?.subject_name} short_description={product[0]?.short_description} description={product[0]?.description} buyNow={() => goToPayment(id)} />
            </div>
        </ContentWrapper>
    )
}

export default ViewPdf