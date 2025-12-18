import { useState } from 'react'
import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from "react-router-dom";
import Gallery from './Gallery';
import Premium from './Premium';
import About from './About';
import { data } from './data';
import Footer from './Footer';


function App() {
  
 
  return (
    <>
  <Router>
    <nav>
      <Link to = "/Gallery" className='link'>Our Gallery</Link>
      <Link to = "/Premium" className='link'>Premium</Link>
      <Link to = "/About" className='link'>About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path= "Gallery" element={<Gallery/>}></Route>
      <Route path= "Premium" element={<Premium/>}></Route>
      <Route path= "About" element={<About/>}></Route>
    </Routes>

    <Footer/>
    

  </Router> 
    </>
      



  )

}

export default App;
