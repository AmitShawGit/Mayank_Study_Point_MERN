import React from 'react'
import Header from './components/header/Header'
import Home from './pages/home/Home' 
import { BrowserRouter,Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />}/>
    </Routes>
    </BrowserRouter>

   </>
  )
}

export default App
