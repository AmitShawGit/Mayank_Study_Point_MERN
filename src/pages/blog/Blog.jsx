import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import apiCall from '../../services/index.ts'
import RenderTags from '../../lib/RenderTags.js'
export default function Blog() {
        let imgURL = process.env.REACT_APP_BASE_URL + "upload/"
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

    console.log(blog);
    let tagString

    useEffect(() => {
        blogApi()
    }, [])
    return (
        <>
            <div className="container">
                <h3 className='heading'>Latest Blogs</h3>
                <div className="row">
                    {blog?.map((item, index) => {

                        const formatDate = Date('day','month','year')
                        return (
                            <div className="col-lg-3" key={index}>
                                <div className="blog_card">

                                    <div className="blog_img">

                                        <img src={item?.img} alt="blog-img" className="img-fluid" />
                                    </div>
                                    <p className="date">
                                        
                                        {item?.date}</p>
                                    <h2>{item?.blogTitle}</h2>
                                    <p>{item?.shortDesc}</p>
                                    <ul>
                                       {/* <li><RenderTags tags={item?.tags} /></li>  */}
                                        {/* {item.tags.map((tags) => (<li key={tags?.id}>{tags}</li>))} */}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}

                    <button className='btn btn-primary blog_more' onClick={() => { goToMoreBlogs() }}>View More</button>
                </div>
            </div>
        </>
    )
}