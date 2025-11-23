import { useNavigate } from "react-router-dom";

let StickyBottom =()=>{

      const navigate = useNavigate();
    return(
        <>
        <div className="sticky_btn">
<button className="btn btn-primary" onClick={()=>navigate('/assignment')}>Buy Project Now</button>
        </div>
        </>
    )
}

export default StickyBottom;