import React from 'react'
import './style.scss'
const Input = ({label,placeholder,type}) => {
  return (
  <>
  <label htmlFor="">{label}</label>
  <input type={type} name="" id="" className='form-control mb-3' placeholder={placeholder}/>
  </>
  )
}

export default Input
