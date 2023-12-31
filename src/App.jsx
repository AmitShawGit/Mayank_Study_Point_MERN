import React from 'react';
import './style.scss'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Apps from './pages/apps/Apps'
import StickyNotes from './pages/apps/StickyApp/StickyNotes';
import Footer from './components/footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/contact/Contact'
import AgeCal from './pages/apps/AgeCalculator/AgeCal'
import Freepdf from './pages/services/freepdf/Freepdf'
import Assignment from './pages/services/assignment/Assignment'
import ViewProd from './pages/services/freepdf/VIewProd';

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
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/notes' element={<StickyNotes />} />
          <Route exact path='/age-calculator' element={<AgeCal />} />
          <Route exact path='/freepdf' element={<Freepdf />} />
          <Route exact path='/assignment' element={<Assignment />} />
          <Route exact path='/view' element={<ViewProd />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
