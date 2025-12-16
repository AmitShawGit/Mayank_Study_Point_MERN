import { useNavigate } from 'react-router-dom'
import barcode from '../../assets/barcode.jpeg'
export default function Blog() {
    let navigate=useNavigate()

    let blogs = [
        {
            id: 1,
            blogTitle: "Blog Title",
            shortDesc: "Short Description",
            tags: ["#tag", "#tag", "#tag"],
            date: "12/05/25",
            img: "img"
        },
        {
            id: 2,
            blogTitle: "Blog Title",
            shortDesc: "Short Description",
            tags: ["#tag", "#tag", "#tag"],
            date: "12/05/25",
            img: "img"
        },
        {
            id: 3,
            blogTitle: "Blog Title",
            shortDesc: "Short Description",
            tags: ["#tag", "#tag", "#tag"],
            date: "12/05/25",
            img: "img"
        },
        {
            id: 4,
            blogTitle: "Blog Title",
            shortDesc: "Short Description",
            tags: ["#tag", "#tag", "#tag"],
            date: "12/05/25",
            img: "img"
        },
        {
            id: 5,
            blogTitle: "Blog Title",
            shortDesc: "Short Description",
            tags: ["#tag", "#tag", "#tag"],
            date: "12/05/25",
            img: "img"
        },
    ]

    let goToMoreBlogs = ()=>{
navigate('/')
    }

    let blogLimit = blogs?.slice(0, 4)

    return (
        <>
            <div className="container">
                <h3 className='heading'>Latest Blogs</h3>
                <div className="row">
                    {blogLimit.map((item, index) => {
                        return (
                            <div className="col-lg-3" key={index}>
                                <div className="blog_card">

                                    <div className="blog_img">

                                        <img src={item?.img} alt="blog-img" className="img-fluid" />
                                    </div>
                                    <p className="date">{item?.date}</p>
                                    <h2>{item?.blogTitle}</h2>
                                    <p>{item?.shortDesc}</p>
                                    <ul>
                                        {item.tags.map((tags) => (<li key={tags?.id}>{tags}</li>))}
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