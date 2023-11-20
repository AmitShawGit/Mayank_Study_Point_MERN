import React, {useState} from 'react'

const AgeCal = () => {
    let [dob,setDob] = useState("");
    let handleChange = (e)=>{
        let userDob = e.target.value;
        
    }
  return (
    <div>
      <label htmlFor="">DOB</label>
      <input type="date" name="" id="" className='form-control' value={dob} onChange={handleChange}/>
    </div>
  )
}

export default AgeCal
