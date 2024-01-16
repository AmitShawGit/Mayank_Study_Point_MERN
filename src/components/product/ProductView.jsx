import React from 'react'

const ProductView = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="view-product-img">

                        <img src={props.img} alt="" className='img-fluid' />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-description">
                        <h2>{props.title}</h2>
                        <span>{props.short_description}</span>
                        <ul>
                            <li><i class="ri-star-s-fill"></i></li>
                            <li><i class="ri-star-s-fill"></i></li>
                            <li><i class="ri-star-s-fill"></i></li>
                            <li><i class="ri-star-s-fill"></i></li>
                            <li><i class="ri-star-s-fill"></i></li>
                        </ul>
                        <p>{props.description}</p>

                        <span><del>Rs. {props.price}</del></span><h5> Rs. {props.actualPrice}</h5>

                        <div>
                            <button className='btn btn-warning'>Add to cart</button>
                            <button className='btn btn-success' onClick={props.buyNow}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView