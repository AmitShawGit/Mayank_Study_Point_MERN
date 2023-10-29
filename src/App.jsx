import React from 'react'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Apps from './pages/apps/Apps'
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/service' element={<Services />} />
          <Route exact path='/app' element={<Apps />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
