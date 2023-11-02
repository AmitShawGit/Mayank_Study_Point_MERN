import React from 'react'
import './style.scss'
const Input = (props) => {
  return (
    <>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.label}
        className='form-control mb-3'
        placeholder={props.placeholder}
        onChange={props.change}
        onBlur={props.blur}
        value={props.value} />
    </>
  )
}

export default Input
