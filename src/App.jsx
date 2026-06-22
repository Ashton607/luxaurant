import { useState } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'

function App() {

  return (
   <>
    <Navbar/>
      <Hero/>
      <Menu/>
   </>
  )
}

export default App
