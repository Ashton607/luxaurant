import React from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Testimonials from './components/testimonials/Testimonials'

function App() {

  return (
   <>
    <Navbar/>
      <Hero/>
      <Menu/>
      <Testimonials/>
   </>
  )
}

export default App
