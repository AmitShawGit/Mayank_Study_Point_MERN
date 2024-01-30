import React, { useEffect, useState } from 'react'
import ProductView from '../../../components/product/ProductView';
import ContentWrapper from '../../../components/wrapper/ContentWrapper';
import { useParams } from 'react-router-dom';
import apiCall from '../../../services/index.ts';
const ViewPdf = () => {
    let id = useParams()
    let [product, setProduct] = useState([])
    let imageURL = process.env.REACT_APP_BASE_URL

    //go direct to  payment page
    const goToPayment = (id) => {
        const url = `${product.pdf}`;
        window.open(url, "_blank"); 
}

    //get university list
    const getUniversityList = async () => {
        let intId = parseInt(id.id);
        try {
            await apiCall.get(`/view-specific-freepdf/${intId}`)
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

                <ProductView img={imageURL + product.image} actualPrice="0000.00" price="5000.00" title={product.subject_name} short_description={product.short_description} description={product.description} buyNow={() => goToPayment(id)} />
            </div>
        </ContentWrapper>
    )
}

export default ViewPdf