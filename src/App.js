import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <>

      <BrowserRouter >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App