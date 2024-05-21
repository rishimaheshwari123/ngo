import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Gallery from './Gallery';
import About from './About';
import Programmes from './Programmes';
import Appeal from './Appeal';
import Vision from './Vision';
import Trustees from './Trustees';
import Contact from './Contact';
import Donate from './Donate';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About/>}/>
          <Route path='programmes' element={<Programmes/>}/>
          <Route path='gallery' element={<Gallery/>}/>
          <Route path='vision' element={<Vision/>}/>
          <Route path='donate' element={<Donate/>}/>
          <Route path='appeal' element={<Appeal/>}/>
          <Route path='trustees' element={<Trustees/>}/>
          <Route path='contact' element={<Contact/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;