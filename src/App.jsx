import Header from './components/header/Header'
import { HashRouter, Route, Routes } from 'react-router-dom'

// import './style.scss';
// import './style.css';
// import Profile from './pages/myprofile/MyProfile'
// import AgeCal from './pages/apps/AgeCalculator/AgeCal'
// import ViewProd from './pages/services/freepdf/VIewProd';
// import Home from './pages/home/Home'
// import Services from './pages/services/Services'
// import StickyNotes from './pages/apps/StickyApp/StickyNotes';
// import Contact from './pages/contact/Contact'
// import Study from './pages/services/studymat/Study';
// import Assignment from './pages/services/assignment/Assignment'
// import Phonepay from './payment/Phonepay';
// import ViewPdfs from './pages/services/freepdf/ViewPdfs';
// import ViewPdf from './pages/services/studymat/ViewPdf'
// import ErrorPage from './pages/error/ErrorPage'
// import SampleWorks from './pages/home/services/SampleWorks';
// import OnDevelopment from './pages/OnDevelopment';

import { AllRoute } from './Route.js';

import Footer from './components/footer/Footer'
import ScrollToTop from './components/ScrollToTop';
import Whatsapp from './components/chat/Whatsapp.jsx';
import { Suspense } from 'react';
import { Loader } from './components/lazyloading/Loader.jsx';





const App = () => {
  return (
    <>
      <HashRouter>
        <Header />
        <ScrollToTop />
       
        <Suspense fallback={<Loader />}>


          <Routes>
            {/* <Route exact path='/age-calculator' element={<AgeCal />} /> */}

            {AllRoute.map(navigation => <Route exact path={navigation.route} element={<navigation.element />} key={navigation.id} />)}


            {/*
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/service' element={<Services />} />
          <Route exact path='/profile' element={<OnDevelopment />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/notes' element={<StickyNotes />} />
          <Route exact path='/freepdf' element={<Study />} />
          <Route exact path='/assignment' element={<Assignment />} />
          <Route exact path='/view-free-pdf/:id' element={<ViewPdfs />} />
          <Route exact path='/view-pdf/:id' element={<ViewPdf />} />
          <Route exact path='/Phonepay/:id' element={<Phonepay />} />
          <Route exact path='/SampleWorks' element={<SampleWorks />} />
          <Route exact path='*' element={<ErrorPage />} />
*/}
          </Routes>
        </Suspense>
        <Whatsapp />
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
