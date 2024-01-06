import React from 'react'

const ProductView = () => {
  return (
    <div>
        <div className="row">
            <div className="col-md-6">
                <div className="view-product-img">

                <img src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/11/23171842/Business-Studies.png" alt="" className='img-fluid'/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="product-description">
                    <h2>Product Title</h2>
                    <span>Short Description Lorem ipsum dolor sit amet.</span>
                    <ul>
                        <li><i class="ri-star-s-fill"></i></li>
                        <li><i class="ri-star-s-fill"></i></li>
                        <li><i class="ri-star-s-fill"></i></li>
                        <li><i class="ri-star-s-fill"></i></li>
                        <li><i class="ri-star-s-fill"></i></li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium tenetur amet veniam maxime, odio unde rerum et voluptatem eius atque? Nesciunt, voluptates. Iste reiciendis doloremque nihil dolores sequi aspernatur dolore perspiciatis dolor. Minus sed voluptatem corrupti veniam impedit sunt eos quidem dignissimos delectus expedita, voluptates sapiente omnis odio assumenda nostrum!</p>
               <div>
                <button className='btn btn-warning'>Add to cart</button>
                <button className='btn btn-success'>Buy Now</button>
               </div>
                </div>
            </div>
        </div>
          </div>
 )
}

export default ProductView