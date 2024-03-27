import React from 'react';
import './style.scss'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Profile from './pages/myprofile/MyProfile'
import StickyNotes from './pages/apps/StickyApp/StickyNotes';
import Footer from './components/footer/Footer'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/contact/Contact'
import AgeCal from './pages/apps/AgeCalculator/AgeCal'
import Study from './pages/services/studymat/Study';
import Assignment from './pages/services/assignment/Assignment'
// import ViewProd from './pages/services/freepdf/VIewProd';
import Phonepay from './payment/Phonepay';
import ViewPdfs from './pages/services/freepdf/ViewPdfs';
import ViewPdf from './pages/services/studymat/ViewPdf'
import ErrorPage from './pages/error/ErrorPage'
import SampleWorks from './pages/home/services/SampleWorks';
const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/service' element={<Services />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/notes' element={<StickyNotes />} />
          <Route exact path='/freepdf' element={<Study />} />
          <Route exact path='/age-calculator' element={<AgeCal />} />
          <Route exact path='/assignment' element={<Assignment />} />
          <Route exact path='/view-free-pdf/:id' element={<ViewPdfs />} />
          <Route exact path='/view-pdf/:id' element={<ViewPdf />} />
          <Route exact path='/Phonepay/:id' element={<Phonepay />} />
          <Route exact path='/SampleWorks' element={<SampleWorks />} />
          <Route exact path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
