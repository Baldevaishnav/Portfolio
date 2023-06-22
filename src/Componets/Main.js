import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Projects from './Projects'

const Main = () => {
  return (
    <div className=''>
      
              <BrowserRouter>
                <Navbar/>
                  <Routes>
                      <Route path='/' element={<Home/>}></Route>
                      <Route path='/home' element={<Home/>}></Route>
                      <Route path='/projects' element={<Projects/>}></Route>
                      <Route path='/aboutme' element={<AboutMe/>}></Route>
                      <Route path='/contactme' element={<Contact/>}></Route>
                  </Routes>
                  <Footer/>
              </BrowserRouter>
    </div>
  )
}

export default Main
