import React from 'react'
import ContentWrapper from '../../components/wrapper/ContentWrapper'
import { useNavigate } from 'react-router-dom'
const ErrorPage = () => {
    let navigate = useNavigate()
    let goToHome = () =>{
navigate('/home')
    }
  return (
    <>
        <ContentWrapper>
        <div className='error-page'>
        <h3>404</h3>
        <p>Page Not Found</p>
        <button className='btn btn-primary' onClick={goToHome}>Go To Home</button>
        </div>
        </ContentWrapper>
        </>
  )
}

export default ErrorPage