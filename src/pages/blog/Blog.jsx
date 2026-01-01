import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import apiCall from '../../services/index.ts'
import RenderTags from '../../lib/RenderTags.js'
import { format } from 'date-fns'
import { Loader } from '../../components/lazyloading/Loader.jsx'
export default function Blog() {
    let imgURL = process.env.REACT_APP_BASE_URL + "uploadBlog/"
    let navigate = useNavigate()

    let [blog, setBlog] = useState([])

    let blogApi = () => {
        try {
            apiCall.get('/view-blog')
                .then(res => setBlog(res?.data?.response))

        }
        catch (err) {
            console.log(err);

        }
    }

    let goToMoreBlogs = () => {
        navigate('/')
    }



    useEffect(() => {
        blogApi()
    }, [])

    let showBlog = blog.slice(0, 4);




    return (
        <>
            <div className="container">
                <h3 className='heading'>Latest Blogs</h3>
                <div className="row">
                    {showBlog.length < 0 ? <Loader /> : showBlog.reverse().map((item, index) => (

                        <div className="col-lg-3" key={index}>
                            <div className="blog_card">

                                <div className="blog_img">
                                    <img
                                        src={imgURL + item?.img}
                                        alt="blog-img"
                                        className="img-fluid"
                                    />
                                </div>

                                <p className="date">
                                    {item?.date
                                        ? format((item.date), "d MMMM yyyy")
                                        : ""}
                                </p>

                                <h2>{item?.blogTitle}</h2>
                                <p>{item?.shortDesc}</p>


                                <RenderTags tags={item?.tags} />


                            </div>
                        </div>
                    ))}
                    {/* <button className='btn btn-primary blog_more' onClick={() => { goToMoreBlogs() }}>View More</button> */}
                </div>
            </div>
        </>
    )
}